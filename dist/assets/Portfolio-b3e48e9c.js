import{a as q,s as R}from"./Toast-df2c737c.js";import{l as U}from"./SwitchLang-810e06bc.js";import{s as z}from"./SeoMeta-6a2a6b5a.js";import{s as G}from"./SpinerComponent-76c37030.js";import{d as H,r as c,o as J,c as s,b as r,t as n,i as V,F as K,k as Q,l as W,m as l,P as A,a as t,q as p,s as m}from"./index-d8d3cf8e.js";const X={class:"wrapper-port pt-16"},Y={class:"text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4 animation-fade-in"},Z={style:{background:"linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%)"}},ee={class:"text-center mb-8"},te=r("br",null,null,-1),se={key:0,class:"grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center items-center px-16 text-left mt-2"},oe=["onClick"],re=["src"],ae=["src"],ne=["onClick"],le={class:"subtitle"},ie={class:"mb-1"},ce=["href"],ue=["onClick"],de=["src"],pe=["src"],me={key:1,class:"h-[1px]",style:{"box-shadow":"1px 5px 5px",width:"90%",margin:"2rem auto"}},xe="https://api-chatbot.letsdoitnow.us/api",ke=H({__name:"Portfolio",setup(_e){const u=c(!0),d=c([]),x=c(localStorage.getItem("Lang")),o=c({langweb:"",titleweb:"",desciptionweb:"",keywords:"",imgweb:""}),j=async()=>{u.value=!0;try{const a=await q.post(`${xe}/notiondoit`,{pageId:"27696e940dd042e1b07650b93900bf6e"});a.status===200?d.value=a.data:R("Error al cargar los datos","error",3e3,A.BOTTOM_CENTER)}catch(a){console.log(a),R(`Error al cargar los datos: ${a}`,"error",3e3,A.BOTTOM_CENTER)}u.value=!1};return J(async()=>{o.value=U(localStorage.getItem("Lang")==="Es").portfolio,z(o.value.langweb,o.value.titleweb,o.value.desciptionweb,o.value.imgweb,o.value.keywords),await j()}),(a,he)=>(t(),s("div",X,[r("h1",Y,[r("span",Z,n(o.value.portfolio),1)]),r("p",ee,[V(n(o.value.text001),1),te,V(n(o.value.text002),1)]),(t(!0),s(K,null,Q(d.value.results,(e,i)=>{var _,h,g,v,f,y,b,k,w,C,T,E,$,B,L,N,O,I,S,M,D,F;return t(),s("div",{key:i,class:"max-w-screen-xl mx-auto"},[((g=(h=(_=e.properties)==null?void 0:_.Lang)==null?void 0:h.select)==null?void 0:g.name)==x.value?(t(),s("div",se,[(i+1)%2==0?(t(),s("div",{key:0,class:"text-center",onClick:P=>p(m).push(`/portfolio/${e.id}`)},[(v=e==null?void 0:e.cover)!=null&&v.external?(t(),s("img",{key:0,src:(y=(f=e.cover)==null?void 0:f.external)==null?void 0:y.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,re)):(t(),s("img",{key:1,src:(k=(b=e.cover)==null?void 0:b.file)==null?void 0:k.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,ae))],8,oe)):l("",!0),r("div",{class:"my-12 mx-4 cursor-pointer",onClick:P=>p(m).push(`/portfolio/${e.id}`)},[r("h2",le,n((T=(C=(w=e.properties)==null?void 0:w.Titulo)==null?void 0:C.title[0])==null?void 0:T.plain_text),1),r("p",ie,n((B=($=(E=e.properties)==null?void 0:E.Descripcion)==null?void 0:$.rich_text[0])==null?void 0:B.plain_text),1),r("a",{class:"btn-underline text-lime-700",href:"/portfolio/"+e.id},n(o.value.text003),9,ce)],8,ne),(i+1)%2!=0?(t(),s("div",{key:1,class:"text-center",onClick:P=>p(m).push(`/portfolio/${e.id}`)},[(L=e==null?void 0:e.cover)!=null&&L.external?(t(),s("img",{key:0,src:(O=(N=e.cover)==null?void 0:N.external)==null?void 0:O.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,de)):(t(),s("img",{key:1,src:(S=(I=e.cover)==null?void 0:I.file)==null?void 0:S.url,class:"cursor-pointer",alt:"",style:{"max-width":"100%","max-height":"350px"}},null,8,pe))],8,ue)):l("",!0)])):l("",!0),d.value.results.length-1!=i&&((F=(D=(M=e.properties)==null?void 0:M.Lang)==null?void 0:D.select)==null?void 0:F.name)==x.value?(t(),s("div",me)):l("",!0)])}),128)),u.value?(t(),W(G,{key:0})):l("",!0)]))}});export{ke as default};
