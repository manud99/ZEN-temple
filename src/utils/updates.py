from ..models.solution import Solution
from ..config import config
from sqlmodel import select
from sqlmodel import Session
from ..dependencies.database import engine
import os
from typing import Any
import json
import h5py  # type: ignore
import numpy as np
from .numpy_utils import create_ndarray


def update_database() -> None:
    with Session(engine) as session:
        for folder in os.listdir(config.SOLUTION_FOLDER):
            print(f"Handling folder {folder}")
            statement = select(Solution).where(Solution.name == folder)
            results = session.exec(statement)
            solution: Solution | None = results.one_or_none()

            if solution is None:
                solution = Solution()

            with open(os.path.join(config.SOLUTION_FOLDER, folder, "system.json")) as f:
                system: dict[str, Any] = json.load(f)

            with open(
                os.path.join(config.SOLUTION_FOLDER, folder, "scenarios.json")
            ) as f:
                solution_json: dict[str, Any] = json.load(f)

            solution.carriers = system["set_carriers"]
            solution.technologies = system["set_technologies"]
            solution.folder_name = folder
            solution.scenarios = list(solution_json.keys())
            solution.nodes = system["set_nodes"]
            solution.name = folder
            session.add(solution)

        session.commit()


def create_components() -> None:
    files = ["var_dict.h5", "param_dict.h5"]
    components_folder: str = "components"
    default_keys = ["technology", "node", "time_step"]
    carrier_keys = ["carrier", "node", "time_step"]
    default_keys_carrier = ["technology", "carrier", "node", "time_step"]

    dataframe_keys = {
        "capacity": default_keys_carrier,
        "capacity_approximation": default_keys,
        "flow_conversion_input": default_keys_carrier,
        "flow_conversion_output": default_keys_carrier,
        "flow_import": default_keys,
        "flow_export": default_keys,
        "cost_carrier": carrier_keys,
        "capacity_addition": default_keys_carrier,
        "carbon_emissions_carrier": carrier_keys,
        "carbon_emissions_total": ["time_step"],
    }

    for folder in os.listdir(config.SOLUTION_FOLDER):
        folder_path = os.path.join(config.SOLUTION_FOLDER, folder)
        folder_content = os.listdir(folder_path)
        multiple_scenarios = False
        scenarios = [i for i in folder_content if i.startswith("scenario_")]

        if len(scenarios) == 0:
            scenarios = ["scenario_"]
        else:
            multiple_scenarios = True

        dataframes_path = os.path.join(folder_path, components_folder)
        if not os.path.exists(dataframes_path):
            os.mkdir(dataframes_path)

        print(f"Starting with solution {folder}")

        for scenario in scenarios:
            scenario_path = os.path.join(dataframes_path, scenario)

            if not os.path.exists(scenario_path):
                os.mkdir(scenario_path)

            for file_name in files:
                current_hdf5_file_path = (
                    os.path.join(folder_path, file_name)
                    if not multiple_scenarios
                    else os.path.join(folder_path, scenario, file_name)
                )

                try:
                    file = h5py.File(current_hdf5_file_path, "r")
                except FileNotFoundError:
                    print(f"Could not find file {current_hdf5_file_path}, skipping.")
                    continue

                file_ending = ".npy"
                for component in file.keys():
                    dataframe_file_path = os.path.join(
                        scenario_path, component + file_ending
                    )
                    if os.path.exists(dataframe_file_path):
                        print(
                            f"Skipping component {component}, dataframe already exists."
                        )
                        continue
                    if component in dataframe_keys:
                        numpy_array, indices = create_ndarray(
                            file, component, dataframe_keys[component]
                        )
                        np.save(dataframe_file_path, numpy_array)
                        with open(
                            dataframe_file_path.replace(file_ending, ".json"), "w"
                        ) as f:
                            json.dump(indices, f, indent=2)
