import{s as $e,r as B,e as H,a as R,c as T,m as Z,g as F,b as G,f as v,o as V,v as me,i as q,h as E,w as Y,t as xe,x as _e,d as et,A as Ie,j as tt,C as nt,F as lt,n as pe}from"../chunks/scheduler.Bjr9RZaN.js";import{S as ot,i as st,b as U,c as le,d as oe,m as se,t as S,a as M,e as ie,f as ae,g as re}from"../chunks/index.NoFf4Nre.js";import{S as it,g as Ce,a as at,f as Ve,B as rt}from"../chunks/utils.J59slq9W.js";import{R as De,A as we}from"../chunks/Radio.D-A72FRT.js";function He(l){let e,t,c='<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Variable Selection</button>',s,i,o,r,a="Subdivision",k,u,n,_,h,b=l[14]?"on":"off",C,J,A,L,d,D,z,N,I=!l[14]&&Te(l),g=!l[20]&&(l[12]||l[13])&&Le(l);return{c(){e=H("div"),t=H("h2"),t.innerHTML=c,s=R(),i=H("div"),o=H("div"),r=H("h3"),r.textContent=a,k=R(),u=H("input"),_=R(),h=H("label"),C=xe(b),J=H("br"),A=R(),I&&I.c(),L=R(),g&&g.c(),d=_e(),this.h()},l(m){e=T(m,"DIV",{class:!0});var j=G(e);t=T(j,"H2",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-1b944yg"&&(t.innerHTML=c),s=F(j),i=T(j,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var Q=G(i);o=T(Q,"DIV",{class:!0});var K=G(o);r=T(K,"H3",{"data-svelte-h":!0}),Z(r)!=="svelte-ym6pj1"&&(r.textContent=a),k=F(K),u=T(K,"INPUT",{type:!0,class:!0,id:!0,autocomplete:!0}),_=F(K),h=T(K,"LABEL",{class:!0,for:!0});var W=G(h);C=et(W,b),W.forEach(v),J=T(K,"BR",{}),A=F(K),I&&I.l(K),K.forEach(v),Q.forEach(v),j.forEach(v),L=F(m),g&&g.l(m),d=_e(),this.h()},h(){V(t,"class","accordion-header"),V(u,"type","checkbox"),V(u,"class","btn-check"),V(u,"id","btn-check-outlined"),V(u,"autocomplete","off"),u.disabled=n=l[20]||l[19],V(h,"class","btn btn-outline-primary"),V(h,"for","btn-check-outlined"),V(o,"class","accordion-body"),V(i,"id","collapseTwo"),V(i,"class","accordion-collapse collapse"),V(i,"data-bs-parent","#accordionExample"),V(e,"class","accordion-item")},m(m,j){q(m,e,j),E(e,t),E(e,s),E(e,i),E(i,o),E(o,r),E(o,k),E(o,u),u.checked=l[14],E(o,_),E(o,h),E(h,C),E(o,J),E(o,A),I&&I.m(o,null),q(m,L,j),g&&g.m(m,j),q(m,d,j),D=!0,z||(N=[Ie(u,"change",l[32]),Ie(u,"change",l[33])],z=!0)},p(m,j){(!D||j[0]&1572864&&n!==(n=m[20]||m[19]))&&(u.disabled=n),j[0]&16384&&(u.checked=m[14]),(!D||j[0]&16384)&&b!==(b=m[14]?"on":"off")&&tt(C,b),m[14]?I&&(re(),M(I,1,1,()=>{I=null}),ie()):I?(I.p(m,j),j[0]&16384&&S(I,1)):(I=Te(m),I.c(),S(I,1),I.m(o,null)),!m[20]&&(m[12]||m[13])?g?(g.p(m,j),j[0]&1060864&&S(g,1)):(g=Le(m),g.c(),S(g,1),g.m(d.parentNode,d)):g&&(re(),M(g,1,1,()=>{g=null}),ie())},i(m){D||(S(I),S(g),D=!0)},o(m){M(I),M(g),D=!1},d(m){m&&(v(e),v(L),v(d)),I&&I.d(),g&&g.d(m),z=!1,nt(N)}}}function Te(l){let e,t,c="Cumulation",s,i,o,r,a;function k(_){l[34](_)}function u(_){l[35](_)}let n={enabled:!l[20]&&!l[19]};return l[4]!==void 0&&(n.options=l[4]),l[12]!==void 0&&(n.selected_option=l[12]),i=new De({props:n}),B.push(()=>U(i,"options",k)),B.push(()=>U(i,"selected_option",u)),i.$on("selection-changed",l[24]),{c(){e=H("div"),t=H("h3"),t.textContent=c,s=R(),le(i.$$.fragment),this.h()},l(_){e=T(_,"DIV",{class:!0});var h=G(e);t=T(h,"H3",{"data-svelte-h":!0}),Z(t)!=="svelte-zhefv7"&&(t.textContent=c),s=F(h),oe(i.$$.fragment,h),h.forEach(v),this.h()},h(){V(e,"class","row")},m(_,h){q(_,e,h),E(e,t),E(e,s),se(i,e,null),a=!0},p(_,h){const b={};h[0]&1572864&&(b.enabled=!_[20]&&!_[19]),!o&&h[0]&16&&(o=!0,b.options=_[4],Y(()=>o=!1)),!r&&h[0]&4096&&(r=!0,b.selected_option=_[12],Y(()=>r=!1)),i.$set(b)},i(_){a||(S(i.$$.fragment,_),a=!0)},o(_){M(i.$$.fragment,_),a=!1},d(_){_&&v(e),ae(i)}}}function Le(l){let e,t,c='<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Data Selection</button>',s,i,o,r,a,k="Year",u,n,_,h,b,C=l[14]&&Se(l);function J(d){l[51](d)}function A(d){l[52](d)}let L={};return l[6]!==void 0&&(L.selected_elements=l[6]),l[2]!==void 0&&(L.elements=l[2]),n=new we({props:L}),B.push(()=>U(n,"selected_elements",J)),B.push(()=>U(n,"elements",A)),n.$on("selection-changed",l[53]),{c(){e=H("div"),t=H("h2"),t.innerHTML=c,s=R(),i=H("div"),o=H("div"),C&&C.c(),r=R(),a=H("h3"),a.textContent=k,u=R(),le(n.$$.fragment),this.h()},l(d){e=T(d,"DIV",{class:!0});var D=G(e);t=T(D,"H2",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-6gj1vj"&&(t.innerHTML=c),s=F(D),i=T(D,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var z=G(i);o=T(z,"DIV",{class:!0});var N=G(o);C&&C.l(N),r=F(N),a=T(N,"H3",{"data-svelte-h":!0}),Z(a)!=="svelte-r9e7qt"&&(a.textContent=k),u=F(N),oe(n.$$.fragment,N),N.forEach(v),z.forEach(v),D.forEach(v),this.h()},h(){V(t,"class","accordion-header"),V(o,"class","accordion-body"),V(i,"id","collapseThree"),V(i,"class","accordion-collapse collapse"),V(i,"data-bs-parent","#accordionExample"),V(e,"class","accordion-item")},m(d,D){q(d,e,D),E(e,t),E(e,s),E(e,i),E(i,o),C&&C.m(o,null),E(o,r),E(o,a),E(o,u),se(n,o,null),b=!0},p(d,D){d[14]?C?(C.p(d,D),D[0]&16384&&S(C,1)):(C=Se(d),C.c(),S(C,1),C.m(o,r)):C&&(re(),M(C,1,1,()=>{C=null}),ie());const z={};!_&&D[0]&64&&(_=!0,z.selected_elements=d[6],Y(()=>_=!1)),!h&&D[0]&4&&(h=!0,z.elements=d[2],Y(()=>h=!1)),n.$set(z)},i(d){b||(S(C),S(n.$$.fragment,d),b=!0)},o(d){M(C),M(n.$$.fragment,d),b=!1},d(d){d&&v(e),C&&C.d(),ae(n)}}}function Se(l){let e,t,c,s="Aggregation",i,o,r,a,k,u,n,_="Normalisation",h,b,C,J,A,L,d,D,z;function N(y){l[36](y)}function I(y){l[37](y)}let g={};l[9]!==void 0&&(g.options=l[9]),l[17]!==void 0&&(g.selected_option=l[17]),o=new De({props:g}),B.push(()=>U(o,"options",N)),B.push(()=>U(o,"selected_option",I)),o.$on("selection-changed",l[38]);function m(y){l[39](y)}function j(y){l[40](y)}let Q={};l[7]!==void 0&&(Q.options=l[7]),l[8]!==void 0&&(Q.selected_option=l[8]),b=new De({props:Q}),B.push(()=>U(b,"options",m)),B.push(()=>U(b,"selected_option",j)),b.$on("selection-changed",l[41]);const K=[_t,ct],W=[];function fe(y,O){return y[17]!="location"?0:1}return L=fe(l),d=W[L]=K[L](l),{c(){e=H("div"),t=H("div"),c=H("h3"),c.textContent=s,i=R(),le(o.$$.fragment),k=R(),u=H("div"),n=H("h3"),n.textContent=_,h=R(),le(b.$$.fragment),A=R(),d.c(),D=_e(),this.h()},l(y){e=T(y,"DIV",{class:!0});var O=G(e);t=T(O,"DIV",{class:!0});var w=G(t);c=T(w,"H3",{"data-svelte-h":!0}),Z(c)!=="svelte-126hufg"&&(c.textContent=s),i=F(w),oe(o.$$.fragment,w),w.forEach(v),k=F(O),u=T(O,"DIV",{class:!0});var $=G(u);n=T($,"H3",{"data-svelte-h":!0}),Z(n)!=="svelte-1273uzu"&&(n.textContent=_),h=F($),oe(b.$$.fragment,$),$.forEach(v),O.forEach(v),A=F(y),d.l(y),D=_e(),this.h()},h(){V(t,"class","col-6"),V(u,"class","col-6"),V(e,"class","row")},m(y,O){q(y,e,O),E(e,t),E(t,c),E(t,i),se(o,t,null),E(e,k),E(e,u),E(u,n),E(u,h),se(b,u,null),q(y,A,O),W[L].m(y,O),q(y,D,O),z=!0},p(y,O){const w={};!r&&O[0]&512&&(r=!0,w.options=y[9],Y(()=>r=!1)),!a&&O[0]&131072&&(a=!0,w.selected_option=y[17],Y(()=>a=!1)),o.$set(w);const $={};!C&&O[0]&128&&(C=!0,$.options=y[7],Y(()=>C=!1)),!J&&O[0]&256&&(J=!0,$.selected_option=y[8],Y(()=>J=!1)),b.$set($);let X=L;L=fe(y),L===X?W[L].p(y,O):(re(),M(W[X],1,1,()=>{W[X]=null}),ie(),d=W[L],d?d.p(y,O):(d=W[L]=K[L](y),d.c()),S(d,1),d.m(D.parentNode,D))},i(y){z||(S(o.$$.fragment,y),S(b.$$.fragment,y),S(d),z=!0)},o(y){M(o.$$.fragment,y),M(b.$$.fragment,y),M(d),z=!1},d(y){y&&(v(e),v(A),v(D)),ae(o),ae(b),W[L].d(y)}}}function ct(l){let e,t="Location",c,s,i,o,r;function a(n){l[48](n)}function k(n){l[49](n)}let u={};return l[10]!==void 0&&(u.selected_elements=l[10]),l[3]!==void 0&&(u.elements=l[3]),s=new we({props:u}),B.push(()=>U(s,"selected_elements",a)),B.push(()=>U(s,"elements",k)),s.$on("selection-changed",l[50]),{c(){e=H("h3"),e.textContent=t,c=R(),le(s.$$.fragment)},l(n){e=T(n,"H3",{"data-svelte-h":!0}),Z(e)!=="svelte-15gguv3"&&(e.textContent=t),c=F(n),oe(s.$$.fragment,n)},m(n,_){q(n,e,_),q(n,c,_),se(s,n,_),r=!0},p(n,_){const h={};!i&&_[0]&1024&&(i=!0,h.selected_elements=n[10],Y(()=>i=!1)),!o&&_[0]&8&&(o=!0,h.elements=n[3],Y(()=>o=!1)),s.$set(h)},i(n){r||(S(s.$$.fragment,n),r=!0)},o(n){M(s.$$.fragment,n),r=!1},d(n){n&&(v(e),v(c)),ae(s,n)}}}function _t(l){let e,t,c,s=l[18].length>0&&je(l),i=l[0].length>0&&ze(l);return{c(){s&&s.c(),e=R(),i&&i.c(),t=_e()},l(o){s&&s.l(o),e=F(o),i&&i.l(o),t=_e()},m(o,r){s&&s.m(o,r),q(o,e,r),i&&i.m(o,r),q(o,t,r),c=!0},p(o,r){o[18].length>0?s?(s.p(o,r),r[0]&262144&&S(s,1)):(s=je(o),s.c(),S(s,1),s.m(e.parentNode,e)):s&&(re(),M(s,1,1,()=>{s=null}),ie()),o[0].length>0?i?(i.p(o,r),r[0]&1&&S(i,1)):(i=ze(o),i.c(),S(i,1),i.m(t.parentNode,t)):i&&(re(),M(i,1,1,()=>{i=null}),ie())},i(o){c||(S(s),S(i),c=!0)},o(o){M(s),M(i),c=!1},d(o){o&&(v(e),v(t)),s&&s.d(o),i&&i.d(o)}}}function je(l){let e,t="Technology",c,s,i,o,r;function a(n){l[42](n)}function k(n){l[43](n)}let u={};return l[16]!==void 0&&(u.selected_elements=l[16]),l[18]!==void 0&&(u.elements=l[18]),s=new we({props:u}),B.push(()=>U(s,"selected_elements",a)),B.push(()=>U(s,"elements",k)),s.$on("selection-changed",l[44]),{c(){e=H("h3"),e.textContent=t,c=R(),le(s.$$.fragment)},l(n){e=T(n,"H3",{"data-svelte-h":!0}),Z(e)!=="svelte-q7cxxi"&&(e.textContent=t),c=F(n),oe(s.$$.fragment,n)},m(n,_){q(n,e,_),q(n,c,_),se(s,n,_),r=!0},p(n,_){const h={};!i&&_[0]&65536&&(i=!0,h.selected_elements=n[16],Y(()=>i=!1)),!o&&_[0]&262144&&(o=!0,h.elements=n[18],Y(()=>o=!1)),s.$set(h)},i(n){r||(S(s.$$.fragment,n),r=!0)},o(n){M(s.$$.fragment,n),r=!1},d(n){n&&(v(e),v(c)),ae(s,n)}}}function ze(l){let e,t="Carrier",c,s,i,o,r;function a(n){l[45](n)}function k(n){l[46](n)}let u={};return l[15]!==void 0&&(u.selected_elements=l[15]),l[0]!==void 0&&(u.elements=l[0]),s=new we({props:u}),B.push(()=>U(s,"selected_elements",a)),B.push(()=>U(s,"elements",k)),s.$on("selection-changed",l[47]),{c(){e=H("h3"),e.textContent=t,c=R(),le(s.$$.fragment)},l(n){e=T(n,"H3",{"data-svelte-h":!0}),Z(e)!=="svelte-xc22hm"&&(e.textContent=t),c=F(n),oe(s.$$.fragment,n)},m(n,_){q(n,e,_),q(n,c,_),se(s,n,_),r=!0},p(n,_){const h={};!i&&_[0]&32768&&(i=!0,h.selected_elements=n[15],Y(()=>i=!1)),!o&&_[0]&1&&(o=!0,h.elements=n[0],Y(()=>o=!1)),s.$set(h)},i(n){r||(S(s.$$.fragment,n),r=!0)},o(n){M(s.$$.fragment,n),r=!1},d(n){n&&(v(e),v(c)),ae(s,n)}}}function ft(l){let e,t,c,s;const i=[pt,dt],o=[];function r(a,k){return a[11].length==0||a[11][0].data.length==0?0:1}return e=r(l),t=o[e]=i[e](l),{c(){t.c(),c=_e()},l(a){t.l(a),c=_e()},m(a,k){o[e].m(a,k),q(a,c,k),s=!0},p(a,k){let u=e;e=r(a),e===u?o[e].p(a,k):(re(),M(o[u],1,1,()=>{o[u]=null}),ie(),t=o[e],t?t.p(a,k):(t=o[e]=i[e](a),t.c()),S(t,1),t.m(c.parentNode,c))},i(a){s||(S(t),s=!0)},o(a){M(t),s=!1},d(a){a&&v(c),o[e].d(a)}}}function ut(l){let e,t='<div class="spinner-border center" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=H("div"),e.innerHTML=t,this.h()},l(c){e=T(c,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1a5ljpq"&&(e.innerHTML=t),this.h()},h(){V(e,"class","text-center")},m(c,s){q(c,e,s)},p:pe,i:pe,o:pe,d(c){c&&v(e)}}}function dt(l){let e,t,c,s;function i(a){l[54](a)}function o(a){l[55](a)}let r={};return l[21]!==void 0&&(r.config=l[21]),l[5].detail.system.reference_year!==void 0&&(r.year_offset=l[5].detail.system.reference_year),e=new rt({props:r}),B.push(()=>U(e,"config",i)),B.push(()=>U(e,"year_offset",o)),{c(){le(e.$$.fragment)},l(a){oe(e.$$.fragment,a)},m(a,k){se(e,a,k),s=!0},p(a,k){const u={};!t&&k[0]&2097152&&(t=!0,u.config=a[21],Y(()=>t=!1)),!c&&k[0]&32&&(c=!0,u.year_offset=a[5].detail.system.reference_year,Y(()=>c=!1)),e.$set(u)},i(a){s||(S(e.$$.fragment,a),s=!0)},o(a){M(e.$$.fragment,a),s=!1},d(a){ae(e,a)}}}function pt(l){let e,t="No data with this selection.";return{c(){e=H("div"),e.textContent=t,this.h()},l(c){e=T(c,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1doxial"&&(e.textContent=t),this.h()},h(){V(e,"class","text-center")},m(c,s){q(c,e,s)},p:pe,i:pe,o:pe,d(c){c&&v(e)}}}function ht(l){let e,t="Emissions",c,s,i,o,r,a,k,u='<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Solution Selection</button>',n,_,h,b,C,J,A,L,d,D,z,N,I,g,m,j;function Q(p){l[27](p)}function K(p){l[28](p)}function W(p){l[29](p)}function fe(p){l[30](p)}function y(p){l[31](p)}let O={enabled:!l[19]&&!l[20]};l[0]!==void 0&&(O.carriers=l[0]),l[1]!==void 0&&(O.nodes=l[1]),l[2]!==void 0&&(O.years=l[2]),l[5]!==void 0&&(O.selected_solution=l[5]),l[19]!==void 0&&(O.loading=l[19]),b=new it({props:O}),B.push(()=>U(b,"carriers",Q)),B.push(()=>U(b,"nodes",K)),B.push(()=>U(b,"years",W)),B.push(()=>U(b,"selected_solution",fe)),B.push(()=>U(b,"loading",y)),b.$on("solution_selected",l[26]);let w=!l[19]&&l[5]&&He(l);const $=[ut,ft],X=[];function be(p,P){return p[19]||p[20]?0:p[11]!=null&&p[5]!=null?1:-1}return~(g=be(l))&&(m=X[g]=$[g](l)),{c(){e=H("h2"),e.textContent=t,c=R(),s=H("div"),i=H("div"),o=H("div"),r=H("div"),a=H("div"),k=H("h2"),k.innerHTML=u,n=R(),_=H("div"),h=H("div"),le(b.$$.fragment),D=R(),w&&w.c(),z=R(),N=H("div"),I=H("div"),m&&m.c(),this.h()},l(p){e=T(p,"H2",{"data-svelte-h":!0}),Z(e)!=="svelte-1fjdwte"&&(e.textContent=t),c=F(p),s=T(p,"DIV",{class:!0});var P=G(s);i=T(P,"DIV",{class:!0,style:!0});var x=G(i);o=T(x,"DIV",{class:!0,style:!0});var ce=G(o);r=T(ce,"DIV",{class:!0,id:!0});var ue=G(r);a=T(ue,"DIV",{class:!0});var de=G(a);k=T(de,"H2",{class:!0,"data-svelte-h":!0}),Z(k)!=="svelte-64kjki"&&(k.innerHTML=u),n=F(de),_=T(de,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var ge=G(_);h=T(ge,"DIV",{class:!0});var ve=G(h);oe(b.$$.fragment,ve),ve.forEach(v),ge.forEach(v),de.forEach(v),D=F(ue),w&&w.l(ue),ue.forEach(v),ce.forEach(v),x.forEach(v),P.forEach(v),z=F(p),N=T(p,"DIV",{class:!0});var ke=G(N);I=T(ke,"DIV",{class:!0,style:!0});var ye=G(I);m&&m.l(ye),ye.forEach(v),ke.forEach(v),this.h()},h(){V(k,"class","accordion-header"),V(h,"class","accordion-body"),V(_,"id","collapseOne"),V(_,"class","accordion-collapse collapse show"),V(_,"data-bs-parent","#accordionExample"),V(a,"class","accordion-item solution-selection"),V(r,"class","accordion"),V(r,"id","accordionExample"),V(o,"class","filters"),me(o,"position","absolute"),me(o,"width","100%"),V(i,"class","col position-relative"),me(i,"z-index","1"),me(i,"position","relative"),V(s,"class","row"),V(I,"class","col"),me(I,"margin-top","400px"),V(N,"class","row")},m(p,P){q(p,e,P),q(p,c,P),q(p,s,P),E(s,i),E(i,o),E(o,r),E(r,a),E(a,k),E(a,n),E(a,_),E(_,h),se(b,h,null),E(r,D),w&&w.m(r,null),q(p,z,P),q(p,N,P),E(N,I),~g&&X[g].m(I,null),j=!0},p(p,P){const x={};P[0]&1572864&&(x.enabled=!p[19]&&!p[20]),!C&&P[0]&1&&(C=!0,x.carriers=p[0],Y(()=>C=!1)),!J&&P[0]&2&&(J=!0,x.nodes=p[1],Y(()=>J=!1)),!A&&P[0]&4&&(A=!0,x.years=p[2],Y(()=>A=!1)),!L&&P[0]&32&&(L=!0,x.selected_solution=p[5],Y(()=>L=!1)),!d&&P[0]&524288&&(d=!0,x.loading=p[19],Y(()=>d=!1)),b.$set(x),!p[19]&&p[5]?w?(w.p(p,P),P[0]&524320&&S(w,1)):(w=He(p),w.c(),S(w,1),w.m(r,null)):w&&(re(),M(w,1,1,()=>{w=null}),ie());let ce=g;g=be(p),g===ce?~g&&X[g].p(p,P):(m&&(re(),M(X[ce],1,1,()=>{X[ce]=null}),ie()),~g?(m=X[g],m?m.p(p,P):(m=X[g]=$[g](p),m.c()),S(m,1),m.m(I,null)):m=null)},i(p){j||(S(b.$$.fragment,p),S(w),S(m),j=!0)},o(p){M(b.$$.fragment,p),M(w),M(m),j=!1},d(p){p&&(v(e),v(c),v(s),v(z),v(N)),ae(b),w&&w.d(),~g&&X[g].d()}}}let Me="";function mt(l,e,t){let c,s,i=[],o=[],r=[],a=[],k=["Annual","Cumulative"],u=["technology","carrier"],n=null,_=[],h=["not_normalized","normalized"],b="not_normalized",C=[],J=[],A=null,L=null,d=null,D=!1,z=[],N=[],I="technology",g=[],m=!1,j=!1,Q={type:"bar",data:{datasets:[]},options:{responsive:!0,scales:{x:{stacked:!0,title:{display:!0,text:"Year"}},y:{stacked:!0,title:{display:!0,text:L+" ["+Me+"]"}}}}};function K(){t(12,L=null),t(13,d=null),t(11,A=null),t(14,D=!1),t(15,z=[]),t(16,N=[])}function W(){return D?d==u[0]?"carbon_emissions_technology":"carbon_emissions_carrier":L==k[0]?"carbon_emissions_annual":"carbon_emissions_cumulative"}async function fe(){t(20,j=!0);let f=await Ce(n.solution_name,"carbon_emissions_technology",n.scenario_name,n.detail.system.reference_year,n.detail.system.interval_between_years),ee=await Ce(n.solution_name,"carbon_emissions_carrier",n.scenario_name,n.detail.system.reference_year,n.detail.system.interval_between_years),he=new Set,te=new Set,Ee=new Set;for(let ne of f.data.data)te.add(ne.technology),Ee.add(ne.location);for(let ne of ee.data.data)he.add(ne.carrier),Ee.add(ne.node),Object.hasOwn(ne,"node")&&Object.defineProperty(ne,"location",Object.getOwnPropertyDescriptor(ne,"node")),delete ne.node;t(18,g=[...te]),t(0,i=[...he]),t(3,a=[...Ee]),c=at("technology_carrier",[["carrier",ee.data],["technology",f.data]]),f.unit,t(20,j=!1),O()}async function y(){t(20,j=!0),await lt();let f=W();f!==null&&(f=="carbon_emissions_annual"?s=(await Ce(n.solution_name,"carbon_emissions_annual_limit",n.scenario_name,n.detail.system.reference_year,n.detail.system.interval_between_years)).data:s=null,Ce(n.solution_name,f,n.scenario_name,n.detail.system.reference_year,n.detail.system.interval_between_years).then(ee=>{c=ee.data,ee.unit,t(20,j=!1)}))}function O(){t(9,C=["location"]),d&&t(9,C=["location",d]),t(15,z=i),t(16,N=g),t(10,J=a),t(17,I="location"),t(20,j=!1),w()}function w(){if(!c)return;let f={},ee={};D&&(I!="location"?(f.location=a,ee.technology_carrier=N.concat(z)):(f.technology_carrier=g.concat(i),ee.location=J));let he=r.filter(te=>!_.includes(te));if(t(11,A=Ve(c.data,f,ee,he,b=="normalized")),A.length!=0){if(A.length==1&&t(11,A[0].label=W(),A),s){let te=Ve(s.data,f,ee,he,b=="normalized");te.length>0&&(te[0].label="Annual Emissions Limit",te[0].type="line",t(11,A=A.concat(te)))}t(21,Q.data={datasets:A},Q),t(21,Q.options.scales.y.title.text=L+" ["+Me+"]",Q)}}function $(){K(),t(6,_=r)}function X(f){i=f,t(0,i)}function be(f){o=f,t(1,o)}function p(f){r=f,t(2,r)}function P(f){n=f,t(5,n)}function x(f){m=f,t(19,m)}function ce(){D=this.checked,t(14,D)}const ue=()=>{D?(t(13,d="technology_carrier"),fe()):K()};function de(f){k=f,t(4,k)}function ge(f){L=f,t(12,L)}function ve(f){C=f,t(9,C)}function ke(f){I=f,t(17,I)}const ye=f=>{w()};function Ne(f){h=f,t(7,h)}function Oe(f){b=f,t(8,b)}const Ae=f=>{w()};function qe(f){N=f,t(16,N)}function Pe(f){g=f,t(18,g)}const Be=()=>{w()};function Re(f){z=f,t(15,z)}function Fe(f){i=f,t(0,i)}const Ye=f=>{w()};function Ue(f){J=f,t(10,J)}function Ge(f){a=f,t(3,a)}const Je=f=>{w()};function Ke(f){_=f,t(6,_)}function Qe(f){r=f,t(2,r)}const We=f=>{w()};function Xe(f){Q=f,t(21,Q)}function Ze(f){l.$$.not_equal(n.detail.system.reference_year,f)&&(n.detail.system.reference_year=f,t(5,n))}return[i,o,r,a,k,n,_,h,b,C,J,A,L,d,D,z,N,I,g,m,j,Q,K,fe,y,w,$,X,be,p,P,x,ce,ue,de,ge,ve,ke,ye,Ne,Oe,Ae,qe,Pe,Be,Re,Fe,Ye,Ue,Ge,Je,Ke,Qe,We,Xe,Ze]}class yt extends ot{constructor(e){super(),st(this,e,mt,ht,$e,{},null,[-1,-1])}}export{yt as component};
