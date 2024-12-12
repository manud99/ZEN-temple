import{s as dt,r as A,e as D,a as B,c as I,m as te,g as R,b as M,f as v,o as y,v as me,i as G,h as w,w as Y,y as Ye,z as Ve,A as Te,B as Fe,C as Ge,t as Je,d as Ke,D as He,j as Qe,E as Me,n as Z}from"../chunks/scheduler.BVk0_e6s.js";import{S as pt,i as ht,b as F,c as ae,d as ce,m as _e,t as j,a as P,e as he,f as fe,g as ge}from"../chunks/index.B3JOrRZV.js";import{e as ye}from"../chunks/each.D6YF6ztN.js";import{S as gt,g as mt,f as bt,B as vt}from"../chunks/utils.D41c0cUq.js";import{R as Le,A as Se}from"../chunks/Radio.DlU7Yl5D.js";import{g as Ie}from"../chunks/variables.DuLSJ-pC.js";function Oe(t,e,n){const a=t.slice();return a[65]=e[n],a}function ze(t,e,n){const a=t.slice();return a[68]=e[n][0],a[69]=e[n][1],a}function je(t){let e,n,a='<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Variable Selection</button>',r,d,i,s,_,m,C,o,c,l,f=ye(Object.entries(t[5])),k=[];for(let g=0;g<f.length;g+=1)k[g]=qe(ze(t,f,g));let b=t[5]&&t[9]&&t[5][t[9]]!=null&&Ne(t),E=t[9]!=null&&Pe(t);return{c(){e=D("div"),n=D("h2"),n.innerHTML=a,r=B(),d=D("div"),i=D("div"),s=D("select");for(let g=0;g<k.length;g+=1)k[g].c();m=B(),b&&b.c(),C=B(),E&&E.c(),this.h()},l(g){e=I(g,"DIV",{class:!0});var T=M(e);n=I(T,"H2",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-1b944yg"&&(n.innerHTML=a),r=R(T),d=I(T,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var V=M(d);i=I(V,"DIV",{class:!0});var N=M(i);s=I(N,"SELECT",{});var W=M(s);for(let z=0;z<k.length;z+=1)k[z].l(W);W.forEach(v),m=R(N),b&&b.l(N),C=R(N),E&&E.l(N),N.forEach(v),V.forEach(v),T.forEach(v),this.h()},h(){y(n,"class","accordion-header"),s.disabled=_=t[18]||t[19],t[9]===void 0&&Ye(()=>t[34].call(s)),y(i,"class","accordion-body"),y(d,"id","collapseTwo"),y(d,"class","accordion-collapse collapse"),y(d,"data-bs-parent","#accordionExample"),y(e,"class","accordion-item")},m(g,T){G(g,e,T),w(e,n),w(e,r),w(e,d),w(d,i),w(i,s);for(let V=0;V<k.length;V+=1)k[V]&&k[V].m(s,null);Ve(s,t[9],!0),w(i,m),b&&b.m(i,null),w(i,C),E&&E.m(i,null),o=!0,c||(l=[Te(s,"change",t[34]),Te(s,"change",t[35])],c=!0)},p(g,T){if(T[0]&32){f=ye(Object.entries(g[5]));let V;for(V=0;V<f.length;V+=1){const N=ze(g,f,V);k[V]?k[V].p(N,T):(k[V]=qe(N),k[V].c(),k[V].m(s,null))}for(;V<k.length;V+=1)k[V].d(1);k.length=f.length}(!o||T[0]&786432&&_!==(_=g[18]||g[19]))&&(s.disabled=_),T[0]&544&&Ve(s,g[9]),g[5]&&g[9]&&g[5][g[9]]!=null?b?(b.p(g,T),T[0]&544&&j(b,1)):(b=Ne(g),b.c(),j(b,1),b.m(i,C)):b&&(ge(),P(b,1,1,()=>{b=null}),he()),g[9]!=null?E?E.p(g,T):(E=Pe(g),E.c(),E.m(i,null)):E&&(E.d(1),E=null)},i(g){o||(j(b),o=!0)},o(g){P(b),o=!1},d(g){g&&v(e),Fe(k,g),b&&b.d(),E&&E.d(),c=!1,Ge(l)}}}function qe(t){let e,n=t[68]+"",a,r,d;return{c(){e=D("option"),a=Je(n),r=B(),this.h()},l(i){e=I(i,"OPTION",{});var s=M(e);a=Ke(s,n),r=R(s),s.forEach(v),this.h()},h(){e.__value=d=t[68],He(e,e.__value)},m(i,s){G(i,e,s),w(e,a),w(e,r)},p(i,s){s[0]&32&&n!==(n=i[68]+"")&&Qe(a,n),s[0]&32&&d!==(d=i[68])&&(e.__value=d,He(e,e.__value))},d(i){i&&v(e)}}}function Ne(t){let e,n,a,r;function d(_){t[36](_)}function i(_){t[37](_)}let s={enabled:!t[18]&&!t[19]};return t[5][t[9]]!==void 0&&(s.options=t[5][t[9]]),t[14]!==void 0&&(s.selected_option=t[14]),e=new Le({props:s}),A.push(()=>F(e,"options",d)),A.push(()=>F(e,"selected_option",i)),e.$on("selection-changed",t[38]),{c(){ae(e.$$.fragment)},l(_){ce(e.$$.fragment,_)},m(_,m){_e(e,_,m),r=!0},p(_,m){const C={};m[0]&786432&&(C.enabled=!_[18]&&!_[19]),!n&&m[0]&544&&(n=!0,C.options=_[5][_[9]],Y(()=>n=!1)),!a&&m[0]&16384&&(a=!0,C.selected_option=_[14],Y(()=>a=!1)),e.$set(C)},i(_){r||(j(e.$$.fragment,_),r=!0)},o(_){P(e.$$.fragment,_),r=!1},d(_){fe(e,_)}}}function Pe(t){let e,n,a,r="Carrier",d,i,s,_,m,C=ye(t[0]),o=[];for(let c=0;c<C.length;c+=1)o[c]=Ae(Oe(t,C,c));return{c(){e=D("div"),n=D("div"),a=D("h3"),a.textContent=r,d=B(),i=D("select");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=I(c,"DIV",{class:!0});var l=M(e);n=I(l,"DIV",{class:!0});var f=M(n);a=I(f,"H3",{"data-svelte-h":!0}),te(a)!=="svelte-xc22hm"&&(a.textContent=r),d=R(f),i=I(f,"SELECT",{});var k=M(i);for(let b=0;b<o.length;b+=1)o[b].l(k);k.forEach(v),f.forEach(v),l.forEach(v),this.h()},h(){i.disabled=s=t[18]||t[19],t[10]===void 0&&Ye(()=>t[39].call(i)),y(n,"class","col"),y(e,"class","row")},m(c,l){G(c,e,l),w(e,n),w(n,a),w(n,d),w(n,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(i,null);Ve(i,t[10],!0),_||(m=[Te(i,"change",t[39]),Te(i,"change",t[40])],_=!0)},p(c,l){if(l[0]&1){C=ye(c[0]);let f;for(f=0;f<C.length;f+=1){const k=Oe(c,C,f);o[f]?o[f].p(k,l):(o[f]=Ae(k),o[f].c(),o[f].m(i,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=C.length}l[0]&786432&&s!==(s=c[18]||c[19])&&(i.disabled=s),l[0]&1025&&Ve(i,c[10])},d(c){c&&v(e),Fe(o,c),_=!1,Ge(m)}}}function Ae(t){let e,n=t[65]+"",a,r,d;return{c(){e=D("option"),a=Je(n),r=B(),this.h()},l(i){e=I(i,"OPTION",{});var s=M(e);a=Ke(s,n),r=R(s),s.forEach(v),this.h()},h(){e.__value=d=t[65],He(e,e.__value)},m(i,s){G(i,e,s),w(e,a),w(e,r)},p(i,s){s[0]&1&&n!==(n=i[65]+"")&&Qe(a,n),s[0]&1&&d!==(d=i[65])&&(e.__value=d,He(e,e.__value))},d(i){i&&v(e)}}}function Be(t){let e,n,a='<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Data Selection</button>',r,d,i,s,_,m,C,o="Normalisation",c,l,f,k,b,E,g,T,V,N="Year",W,z,X,K,O,H=t[9]!="import_export"&&Re(t);function $(p){t[44](p)}function de(p){t[45](p)}let le={enabled:!t[18]&&!t[19]};t[16]!==void 0&&(le.options=t[16]),t[17]!==void 0&&(le.selected_option=t[17]),l=new Le({props:le}),A.push(()=>F(l,"options",$)),A.push(()=>F(l,"selected_option",de)),l.$on("selection-changed",t[46]);const ue=[Ct,kt],x=[];function oe(p,q){return p[21]=="technology"?0:1}E=oe(t),g=x[E]=ue[E](t);function ie(p){t[53](p)}function ne(p){t[54](p)}let S={enabled:!t[18]&&!t[19]};return t[15]!==void 0&&(S.selected_elements=t[15]),t[4]!==void 0&&(S.elements=t[4]),z=new Se({props:S}),A.push(()=>F(z,"selected_elements",ie)),A.push(()=>F(z,"elements",ne)),z.$on("selection-changed",t[55]),{c(){e=D("div"),n=D("h2"),n.innerHTML=a,r=B(),d=D("div"),i=D("div"),s=D("div"),H&&H.c(),_=B(),m=D("div"),C=D("h3"),C.textContent=o,c=B(),ae(l.$$.fragment),b=B(),g.c(),T=B(),V=D("h3"),V.textContent=N,W=B(),ae(z.$$.fragment),this.h()},l(p){e=I(p,"DIV",{class:!0});var q=M(e);n=I(q,"H2",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-hz94lo"&&(n.innerHTML=a),r=R(q),d=I(q,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var J=M(d);i=I(J,"DIV",{class:!0});var Q=M(i);s=I(Q,"DIV",{class:!0});var u=M(s);H&&H.l(u),_=R(u),m=I(u,"DIV",{class:!0});var L=M(m);C=I(L,"H3",{"data-svelte-h":!0}),te(C)!=="svelte-1273uzu"&&(C.textContent=o),c=R(L),ce(l.$$.fragment,L),L.forEach(v),u.forEach(v),b=R(Q),g.l(Q),T=R(Q),V=I(Q,"H3",{"data-svelte-h":!0}),te(V)!=="svelte-r9e7qt"&&(V.textContent=N),W=R(Q),ce(z.$$.fragment,Q),Q.forEach(v),J.forEach(v),q.forEach(v),this.h()},h(){y(n,"class","accordion-header"),y(m,"class","col-6"),y(s,"class","row"),y(i,"class","accordion-body"),y(d,"id","collapseThree"),y(d,"class","accordion-collapse collapse"),y(d,"data-bs-parent","#accordionExample"),y(e,"class","accordion-item")},m(p,q){G(p,e,q),w(e,n),w(e,r),w(e,d),w(d,i),w(i,s),H&&H.m(s,null),w(s,_),w(s,m),w(m,C),w(m,c),_e(l,m,null),w(i,b),x[E].m(i,null),w(i,T),w(i,V),w(i,W),_e(z,i,null),O=!0},p(p,q){p[9]!="import_export"?H?(H.p(p,q),q[0]&512&&j(H,1)):(H=Re(p),H.c(),j(H,1),H.m(s,_)):H&&(ge(),P(H,1,1,()=>{H=null}),he());const J={};q[0]&786432&&(J.enabled=!p[18]&&!p[19]),!f&&q[0]&65536&&(f=!0,J.options=p[16],Y(()=>f=!1)),!k&&q[0]&131072&&(k=!0,J.selected_option=p[17],Y(()=>k=!1)),l.$set(J);let Q=E;E=oe(p),E===Q?x[E].p(p,q):(ge(),P(x[Q],1,1,()=>{x[Q]=null}),he(),g=x[E],g?g.p(p,q):(g=x[E]=ue[E](p),g.c()),j(g,1),g.m(i,T));const u={};q[0]&786432&&(u.enabled=!p[18]&&!p[19]),!X&&q[0]&32768&&(X=!0,u.selected_elements=p[15],Y(()=>X=!1)),!K&&q[0]&16&&(K=!0,u.elements=p[4],Y(()=>K=!1)),z.$set(u)},i(p){O||(j(H),j(l.$$.fragment,p),j(g),j(z.$$.fragment,p),O=!0)},o(p){P(H),P(l.$$.fragment,p),P(g),P(z.$$.fragment,p),O=!1},d(p){p&&v(e),H&&H.d(),fe(l),x[E].d(),fe(z)}}}function Re(t){let e,n,a="Aggregation",r,d,i,s,_;function m(c){t[41](c)}function C(c){t[42](c)}let o={enabled:!t[18]&&!t[19]};return t[6]!==void 0&&(o.options=t[6]),t[21]!==void 0&&(o.selected_option=t[21]),d=new Le({props:o}),A.push(()=>F(d,"options",m)),A.push(()=>F(d,"selected_option",C)),d.$on("selection-changed",t[43]),{c(){e=D("div"),n=D("h3"),n.textContent=a,r=B(),ae(d.$$.fragment),this.h()},l(c){e=I(c,"DIV",{class:!0});var l=M(e);n=I(l,"H3",{"data-svelte-h":!0}),te(n)!=="svelte-126hufg"&&(n.textContent=a),r=R(l),ce(d.$$.fragment,l),l.forEach(v),this.h()},h(){y(e,"class","col-6")},m(c,l){G(c,e,l),w(e,n),w(e,r),_e(d,e,null),_=!0},p(c,l){const f={};l[0]&786432&&(f.enabled=!c[18]&&!c[19]),!i&&l[0]&64&&(i=!0,f.options=c[6],Y(()=>i=!1)),!s&&l[0]&2097152&&(s=!0,f.selected_option=c[21],Y(()=>s=!1)),d.$set(f)},i(c){_||(j(d.$$.fragment,c),_=!0)},o(c){P(d.$$.fragment,c),_=!1},d(c){c&&v(e),fe(d)}}}function kt(t){let e,n="Node",a,r,d,i,s;function _(o){t[50](o)}function m(o){t[51](o)}let C={enabled:!t[18]&&!t[19]};return t[13]!==void 0&&(C.selected_elements=t[13]),t[3]!==void 0&&(C.elements=t[3]),r=new Se({props:C}),A.push(()=>F(r,"selected_elements",_)),A.push(()=>F(r,"elements",m)),r.$on("selection-changed",t[52]),{c(){e=D("h3"),e.textContent=n,a=B(),ae(r.$$.fragment)},l(o){e=I(o,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-ocjo5w"&&(e.textContent=n),a=R(o),ce(r.$$.fragment,o)},m(o,c){G(o,e,c),G(o,a,c),_e(r,o,c),s=!0},p(o,c){const l={};c[0]&786432&&(l.enabled=!o[18]&&!o[19]),!d&&c[0]&8192&&(d=!0,l.selected_elements=o[13],Y(()=>d=!1)),!i&&c[0]&8&&(i=!0,l.elements=o[3],Y(()=>i=!1)),r.$set(l)},i(o){s||(j(r.$$.fragment,o),s=!0)},o(o){P(r.$$.fragment,o),s=!1},d(o){o&&(v(e),v(a)),fe(r,o)}}}function Ct(t){let e,n="Technology",a,r,d,i,s;function _(o){t[47](o)}function m(o){t[48](o)}let C={enabled:!t[18]&&!t[19]};return t[12]!==void 0&&(C.selected_elements=t[12]),t[11]!==void 0&&(C.elements=t[11]),r=new Se({props:C}),A.push(()=>F(r,"selected_elements",_)),A.push(()=>F(r,"elements",m)),r.$on("selection-changed",t[49]),{c(){e=D("h3"),e.textContent=n,a=B(),ae(r.$$.fragment)},l(o){e=I(o,"H3",{"data-svelte-h":!0}),te(e)!=="svelte-q7cxxi"&&(e.textContent=n),a=R(o),ce(r.$$.fragment,o)},m(o,c){G(o,e,c),G(o,a,c),_e(r,o,c),s=!0},p(o,c){const l={};c[0]&786432&&(l.enabled=!o[18]&&!o[19]),!d&&c[0]&4096&&(d=!0,l.selected_elements=o[12],Y(()=>d=!1)),!i&&c[0]&2048&&(i=!0,l.elements=o[11],Y(()=>i=!1)),r.$set(l)},i(o){s||(j(r.$$.fragment,o),s=!0)},o(o){P(r.$$.fragment,o),s=!1},d(o){o&&(v(e),v(a)),fe(r,o)}}}function Et(t){let e,n,a,r;function d(_){t[56](_)}function i(_){t[57](_)}let s={};return t[22]!==void 0&&(s.config=t[22]),t[20]!==void 0&&(s.plot_name=t[20]),e=new vt({props:s}),A.push(()=>F(e,"config",d)),A.push(()=>F(e,"plot_name",i)),{c(){ae(e.$$.fragment)},l(_){ce(e.$$.fragment,_)},m(_,m){_e(e,_,m),r=!0},p(_,m){const C={};!n&&m[0]&4194304&&(n=!0,C.config=_[22],Y(()=>n=!1)),!a&&m[0]&1048576&&(a=!0,C.plot_name=_[20],Y(()=>a=!1)),e.$set(C)},i(_){r||(j(e.$$.fragment,_),r=!0)},o(_){P(e.$$.fragment,_),r=!1},d(_){fe(e,_)}}}function wt(t){let e,n="No data with this selection.";return{c(){e=D("div"),e.textContent=n,this.h()},l(a){e=I(a,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1doxial"&&(e.textContent=n),this.h()},h(){y(e,"class","text-center")},m(a,r){G(a,e,r)},p:Z,i:Z,o:Z,d(a){a&&v(e)}}}function Dt(t){let e,n="No technologies with this selection.";return{c(){e=D("div"),e.textContent=n,this.h()},l(a){e=I(a,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1ontq7"&&(e.textContent=n),this.h()},h(){y(e,"class","text-center")},m(a,r){G(a,e,r)},p:Z,i:Z,o:Z,d(a){a&&v(e)}}}function It(t){let e;return{c(){e=D("div")},l(n){e=I(n,"DIV",{}),M(e).forEach(v)},m(n,a){G(n,e,a)},p:Z,i:Z,o:Z,d(n){n&&v(e)}}}function Vt(t){let e;return{c(){e=D("div")},l(n){e=I(n,"DIV",{}),M(e).forEach(v)},m(n,a){G(n,e,a)},p:Z,i:Z,o:Z,d(n){n&&v(e)}}}function Tt(t){let e,n='<div class="spinner-border center" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=D("div"),e.innerHTML=n,this.h()},l(a){e=I(a,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1a5ljpq"&&(e.innerHTML=n),this.h()},h(){y(e,"class","text-center")},m(a,r){G(a,e,r)},p:Z,i:Z,o:Z,d(a){a&&v(e)}}}function Ht(t){let e,n='<div class="col"><h2>Production</h2></div>',a,r,d,i,s,_,m,C='<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Solution Selection</button>',o,c,l,f,k,b,E,g,T,V,N,W,z,X,K,O,H,$;function de(u){t[28](u)}function le(u){t[29](u)}function ue(u){t[30](u)}function x(u){t[31](u)}function oe(u){t[32](u)}function ie(u){t[33](u)}let ne={enabled:!t[18]&&!t[19]};t[0]!==void 0&&(ne.carriers=t[0]),t[1]!==void 0&&(ne.nodes=t[1]),t[4]!==void 0&&(ne.years=t[4]),t[8]!==void 0&&(ne.selected_solution=t[8]),t[2]!==void 0&&(ne.edges=t[2]),t[18]!==void 0&&(ne.loading=t[18]),f=new gt({props:ne}),A.push(()=>F(f,"carriers",de)),A.push(()=>F(f,"nodes",le)),A.push(()=>F(f,"years",ue)),A.push(()=>F(f,"selected_solution",x)),A.push(()=>F(f,"edges",oe)),A.push(()=>F(f,"loading",ie)),f.$on("solution_selected",t[24]);let S=!t[18]&&t[8]&&je(t),p=!t[19]&&t[10]&&(t[11].length>0||t[9]=="import_export")&&Be(t);const q=[Tt,Vt,It,Dt,wt,Et],J=[];function Q(u,L){return u[18]||u[19]?0:u[8]==null?1:u[7]==null?2:u[11].length==0&&u[9]!="import_export"?3:u[7].length==0?4:5}return O=Q(t),H=J[O]=q[O](t),{c(){e=D("div"),e.innerHTML=n,a=B(),r=D("div"),d=D("div"),i=D("div"),s=D("div"),_=D("div"),m=D("h2"),m.innerHTML=C,o=B(),c=D("div"),l=D("div"),ae(f.$$.fragment),N=B(),S&&S.c(),W=B(),p&&p.c(),z=B(),X=D("div"),K=D("div"),H.c(),this.h()},l(u){e=I(u,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-1ow2g6f"&&(e.innerHTML=n),a=R(u),r=I(u,"DIV",{class:!0});var L=M(r);d=I(L,"DIV",{class:!0,style:!0});var ee=M(d);i=I(ee,"DIV",{class:!0,style:!0});var se=M(i);s=I(se,"DIV",{class:!0,id:!0});var re=M(s);_=I(re,"DIV",{class:!0});var pe=M(_);m=I(pe,"H2",{class:!0,"data-svelte-h":!0}),te(m)!=="svelte-64kjki"&&(m.innerHTML=C),o=R(pe),c=I(pe,"DIV",{id:!0,class:!0,"data-bs-parent":!0});var be=M(c);l=I(be,"DIV",{class:!0});var ve=M(l);ce(f.$$.fragment,ve),ve.forEach(v),be.forEach(v),pe.forEach(v),N=R(re),S&&S.l(re),W=R(re),p&&p.l(re),re.forEach(v),se.forEach(v),ee.forEach(v),L.forEach(v),z=R(u),X=I(u,"DIV",{class:!0});var ke=M(X);K=I(ke,"DIV",{class:!0,style:!0});var Ce=M(K);H.l(Ce),Ce.forEach(v),ke.forEach(v),this.h()},h(){y(e,"class","row"),y(m,"class","accordion-header"),y(l,"class","accordion-body"),y(c,"id","collapseOne"),y(c,"class","accordion-collapse collapse show"),y(c,"data-bs-parent","#accordionExample"),y(_,"class","accordion-item solution-selection"),y(s,"class","accordion"),y(s,"id","accordionExample"),y(i,"class","filters"),me(i,"position","absolute"),me(i,"width","100%"),y(d,"class","col position-relative"),me(d,"z-index","1"),me(d,"position","relative"),y(r,"class","row"),y(K,"class","col"),me(K,"margin-top","400px"),y(X,"class","row")},m(u,L){G(u,e,L),G(u,a,L),G(u,r,L),w(r,d),w(d,i),w(i,s),w(s,_),w(_,m),w(_,o),w(_,c),w(c,l),_e(f,l,null),w(s,N),S&&S.m(s,null),w(s,W),p&&p.m(s,null),G(u,z,L),G(u,X,L),w(X,K),J[O].m(K,null),$=!0},p(u,L){const ee={};L[0]&786432&&(ee.enabled=!u[18]&&!u[19]),!k&&L[0]&1&&(k=!0,ee.carriers=u[0],Y(()=>k=!1)),!b&&L[0]&2&&(b=!0,ee.nodes=u[1],Y(()=>b=!1)),!E&&L[0]&16&&(E=!0,ee.years=u[4],Y(()=>E=!1)),!g&&L[0]&256&&(g=!0,ee.selected_solution=u[8],Y(()=>g=!1)),!T&&L[0]&4&&(T=!0,ee.edges=u[2],Y(()=>T=!1)),!V&&L[0]&262144&&(V=!0,ee.loading=u[18],Y(()=>V=!1)),f.$set(ee),!u[18]&&u[8]?S?(S.p(u,L),L[0]&262400&&j(S,1)):(S=je(u),S.c(),j(S,1),S.m(s,W)):S&&(ge(),P(S,1,1,()=>{S=null}),he()),!u[19]&&u[10]&&(u[11].length>0||u[9]=="import_export")?p?(p.p(u,L),L[0]&527872&&j(p,1)):(p=Be(u),p.c(),j(p,1),p.m(s,null)):p&&(ge(),P(p,1,1,()=>{p=null}),he());let se=O;O=Q(u),O===se?J[O].p(u,L):(ge(),P(J[se],1,1,()=>{J[se]=null}),he(),H=J[O],H?H.p(u,L):(H=J[O]=q[O](u),H.c()),j(H,1),H.m(K,null))},i(u){$||(j(f.$$.fragment,u),j(S),j(p),j(H),$=!0)},o(u){P(f.$$.fragment,u),P(S),P(p),P(H),$=!1},d(u){u&&(v(e),v(a),v(r),v(z),v(X)),fe(f),S&&S.d(),p&&p.d(),J[O].d()}}}function yt(t,e,n){let a,r=[],d=[],i=[],s=[],_=[],m={conversion:["input","output"],storage:["charge","discharge"],transport:null,import_export:["import","export"]},C=["technology","node"],o=null,c=null,l=null,f=null,k=null,b=[],E=[],g=[],T=null,V=[],N=["not_normalized","normalized"],W="not_normalized",z=!1,X=!1,K="plot",O="node",$={type:"bar",data:{datasets:[]},options:{responsive:!0,scales:{x:{stacked:!0,title:{display:!0,text:"Year"}},y:{stacked:!0,title:{display:!0,text:f+" ["+ue()+"]"}}}}};function de(){n(15,V=_),n(13,g=d),n(12,E=b)}function le(){switch(f){case"conversion":return"flow_conversion_"+T;case"storage":return"flow_storage_"+T;case"transport":return"flow_transport";case"import_export":return"flow_"+T;default:return null}}function ue(){if(c===null)return"";for(const h of c.data)if(b[0]==h.technology&&(h.carrier==k||h.carrier===void 0))return h[0];return""}async function x(){n(19,X=!0);let h=le();h!==null&&(h=Ie(h,l==null?void 0:l.version),await mt(l.solution_name,h,l.scenario_name,l.detail.system.reference_year,l.detail.system.interval_between_years).then(U=>{U.data!==null&&(a=U.data,c=U.unit,n(19,X=!1))}))}function oe(){if(n(7,o=null),n(10,k=""),l==null){n(0,r=[]);return}switch(f){case Ie("import_export",l==null?void 0:l.version):T=="import"?n(0,r=l.detail.carriers_import):n(0,r=l.detail.carriers_export);break;case Ie("conversion",l==null?void 0:l.version):let h=l.detail.carriers_output;T=="input"&&(h=l.detail.carriers_input),n(0,r=[]);for(const U in h)n(0,r=[...new Set([...r,...h[U]])]);break;default:n(0,r=l.detail.system.set_carriers)}r.length==1&&n(10,k=r[0]),de()}function ie(){if(n(7,o=[]),f!=null&&k!=null){switch(n(11,b=(l==null?void 0:l.detail.system.set_technologies)??[]),f){case"conversion":n(11,b=[]);let h=l.detail.carriers_input;T=="output"&&(h=l.detail.carriers_output);for(const U in h)h[U].includes(k)&&b.push(U);break;case"storage":n(11,b=(l==null?void 0:l.detail.system.set_storage_technologies.filter(U=>(l==null?void 0:l.detail.reference_carrier[U])==k))??[]);break;case"transport":n(11,b=(l==null?void 0:l.detail.system.set_transport_technologies.filter(U=>(l==null?void 0:l.detail.reference_carrier[U])==k))??[]);break;case"import_export":n(11,b=[]);break}b.length==1&&n(12,E=[b[0]]),de()}}function ne(){n(3,s=d),f=="transport"&&n(3,s=i)}function S(){n(7,o=[]),f!=null&&(m[f]!=null&&n(14,T=m[f][0]),f=="import_export"&&n(21,O="technology"),x().then(()=>{oe(),ie(),ne(),p()}))}function p(){if(f=="import_export"&&n(21,O="node"),O=="technology"?n(13,g=d):n(12,E=b),g.length==0||V.length==0||E.length==0&&f!="import_export"||!a){n(7,o=[]);return}let h={},U={},Ee="node";f=="transport"&&(Ee="edge"),f=="import_export"?(h[Ee]=g,U.carrier=[k]):O=="technology"?(h[Ee]=g,U.technology=E):(h.technology=E,U[Ee]=g);let ft=_.filter(De=>!V.includes(De)),ut=a.data.filter(De=>De.carrier===void 0||De.carrier==k);n(7,o=bt(ut,h,U,ft,W=="normalized")),n(22,$.data={datasets:o},$),n(22,$.options.scales.y.title.text=f+" ["+ue()+"]",$);let we=l.solution_name.split(".");n(20,K=[we[(we==null?void 0:we.length)-1],l==null?void 0:l.scenario_name,Ie(le(),l==null?void 0:l.version),k].join("_"))}function q(h){r=h,n(0,r)}function J(h){d=h,n(1,d)}function Q(h){_=h,n(4,_)}function u(h){l=h,n(8,l)}function L(h){i=h,n(2,i)}function ee(h){z=h,n(18,z)}function se(){f=Me(this),n(9,f),n(5,m)}const re=()=>{S()};function pe(h){t.$$.not_equal(m[f],h)&&(m[f]=h,n(5,m))}function be(h){T=h,n(14,T)}const ve=h=>{x(),oe(),ie(),p()};function ke(){k=Me(this),n(10,k),n(0,r)}const Ce=()=>{ie(),p()};function Ue(h){C=h,n(6,C)}function We(h){O=h,n(21,O)}const Xe=h=>{p()};function Ze(h){N=h,n(16,N)}function $e(h){W=h,n(17,W)}const xe=h=>{p()};function et(h){E=h,n(12,E)}function tt(h){b=h,n(11,b)}const nt=()=>{p()};function lt(h){g=h,n(13,g)}function ot(h){s=h,n(3,s)}const it=h=>{p()};function st(h){V=h,n(15,V)}function rt(h){_=h,n(4,_)}const at=h=>{p()};function ct(h){$=h,n(22,$)}function _t(h){K=h,n(20,K)}return[r,d,i,s,_,m,C,o,l,f,k,b,E,g,T,V,N,W,z,X,K,O,$,x,oe,ie,S,p,q,J,Q,u,L,ee,se,re,pe,be,ve,ke,Ce,Ue,We,Xe,Ze,$e,xe,et,tt,nt,lt,ot,it,st,rt,at,ct,_t]}class qt extends pt{constructor(e){super(),ht(this,e,yt,Ht,dt,{},null,[-1,-1,-1])}}export{qt as component};
