from ..config import config
from zen_garden.postprocess.results import Results  # type: ignore
from ..models.solution import (
    Solution,
    ResultsRequest,
    CompleteDataRequest,
    SolutionDetail,
    DataResult,
)
import os
import pandas as pd
from time import perf_counter
from ..utils.component_container import ComponentContainer, ComponentInfo
from fastapi import HTTPException, UploadFile
import aiofiles
from zipfile import ZipFile
from typing import Optional


class SolutionRepository:
    def get_list(self) -> list[Solution]:
        ans = []
        for folder in os.listdir(config.SOLUTION_FOLDER):
            try:
                ans.append(Solution.from_name(folder))
            except (FileNotFoundError, NotADirectoryError):
                continue
        return ans

    def get_detail(self, solution_name: str) -> SolutionDetail:
        return SolutionDetail.from_name(solution_name)

    def get_total(
        self, solution: str, component: str, scenario: Optional[str] = None
    ) -> DataResult:
        solution_folder = os.path.join(config.SOLUTION_FOLDER, solution)
        results = Results(solution_folder)
        unit: str = results.get_unit(component, scenario_name=scenario)
        total: pd.DataFrame = results.get_total(component, scenario_name=scenario)
        return DataResult(data_csv=str(total.to_csv()), unit=unit)

    def get_energy_balance(
        self,
        solution: str,
        node: str,
        carrier: str,
        scenario: Optional[str] = None,
        year: Optional[int] = None,
    ) -> str:
        solution_folder = os.path.join(config.SOLUTION_FOLDER, solution)
        results = Results(solution_folder)
        time_steps = results.results["system"]["unaggregated_time_steps_per_year"]

        if year is None:
            year = 0

        energy_balance: pd.DataFrame = results.get_energy_balance_df(
            node,
            carrier,
            scenario,
            start_time_step=year * time_steps,
            end_time_step=(year + 1) * time_steps,
        )

        energy_balance = energy_balance.loc[
            :, (energy_balance != 0).any(axis=0)
        ].transpose()

        energy_balance.index = energy_balance.index.rename(["variable", "technology"])

        if year is None:
            year = 0

        return str(energy_balance.to_csv())

    def get_data(self, request: CompleteDataRequest) -> str:
        solution_folder = os.path.join(config.SOLUTION_FOLDER, request.solution_name)
        base_path = os.path.join(
            solution_folder,
            config.COMPONENTS_FOLDER_NAME,
            request.scenario,
        )
        try:
            component_container = ComponentContainer.load(request.component, base_path)
        except ValueError:
            raise HTTPException(404, "Scenario or Component not found.")

        try:
            summarized_container = component_container.summarize_np_array(
                request.data_request
            )
        except (ValueError, AssertionError) as e:
            raise HTTPException(500, str(e))

        if request.aggregate_years and not summarized_container.info.yearly:
            summarized_container = summarized_container.aggregate_time_steps()

        if summarized_container.data.size > config.MAXIMUM_RESULT_SIZE:
            raise HTTPException(
                status_code=413,
                detail="""
                Too many datapoints.
                Consider selecting a subset of indices or aggregate over years.
                """,
            )
        res = summarized_container.create_deep_csv()

        return res

    def get_dataframe_new(self, solution_name: str, df_request: ResultsRequest) -> str:
        request = df_request.to_data_request(solution_name)
        return self.get_data(request)

    def get_dataframe(self, solution_name: str, df_request: ResultsRequest) -> str:
        path = os.path.join(config.SOLUTION_FOLDER, solution_name)
        argument_dictionary = {
            key: val for key, val in df_request.dict().items() if val is not None
        }

        start = perf_counter()
        results = Results(path)
        print(f"Loading results took {perf_counter() - start}")

        if "scenario" in argument_dictionary:
            request_scenario = "scenario_" + argument_dictionary["scenario"]
            if request_scenario not in results.results:
                argument_dictionary["scenario"] = None
            else:
                argument_dictionary["scenario"] = request_scenario

        start = perf_counter()
        res: pd.DataFrame = results.get_summary_df(**argument_dictionary)
        res = res.reset_index()
        years = [i for i in res.columns if isinstance(i, int)]
        others = [i for i in res.columns if not isinstance(i, int)]
        res = pd.melt(res, id_vars=others, var_name="year", value_vars=years)

        return res.to_csv()

    def get_components(self, solution_name: str) -> list[ComponentInfo]:
        ans: list[ComponentInfo] = []
        components_folder = os.path.join(
            config.SOLUTION_FOLDER, solution_name, config.COMPONENTS_FOLDER_NAME
        )
        scenario = os.listdir(components_folder)[0]

        solution_folder = os.path.join(
            components_folder,
            scenario,
        )

        ans = [
            ComponentInfo.from_path(os.path.join(solution_folder, i))
            for i in os.listdir(solution_folder)
            if i.endswith(".json")
        ]

        return ans

    async def upload_file(self, in_file: UploadFile) -> str:
        file_path = os.path.join(config.UPLOAD_FOLDER, str(in_file.filename))

        async def upload() -> None:
            async with aiofiles.open(file_path, "wb") as out_file:
                while content := await in_file.read():  # async read chunk
                    await out_file.write(content)  # async write chunk

        await upload()

        with ZipFile(file_path, "r") as zip:
            contents: list[str] = zip.namelist()
            print(contents)

        return "Success"


solution_repository = SolutionRepository()
