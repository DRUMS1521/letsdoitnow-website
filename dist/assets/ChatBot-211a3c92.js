import{_ as g,o as d,c as l,p as x,k as w,a as t,d as I,r as u,b as C,F as v,s as S,x as $,i as k,w as B,v as E,m as q,t as h,h as V}from"./index-49358ae2.js";import{_ as N}from"./send-b4cecd4b.js";import{a as m}from"./axios-4a70c6fc.js";const T={},j=s=>(x("data-v-537dd02a"),s=s(),w(),s),A={class:"w-100 vh-100 d-flex ai-center jc-center spinnerCont"},D=j(()=>t("div",{class:"spinner"},[t("div"),t("div"),t("div")],-1)),L=[D];function U(s,o){return d(),l("div",A,L)}const z=g(T,[["render",U],["__scopeId","data-v-537dd02a"]]),_=s=>(x("data-v-a52bc8e8"),s=s(),w(),s),F=_(()=>t("p",{class:"text-center px-1",style:{color:"brown",margin:"2rem auto 0","font-size":"12px","max-width":"450px"}},'"Esta versión es una beta, el historial de las conversaciones puede ser visualizado por otras personas y será eliminado de manera periódica. En un futuro próximo, tendrás la opción de guardarlo para consultarlo siempre que lo necesites.',-1)),K={class:"d-ib va-t w-50 p-2 mt-1 bot"},M={class:"answerbot pr-1"},G={class:"send"},H={class:"botanswer",style:{"white-space":"pre-line"}},O=_(()=>t("div",{id:"endChat",class:"mt-2 w-100"},null,-1)),Q={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},R=_(()=>t("p",{class:"text-center mt-2"},[V("Dejanos saber que opinas "),t("a",{href:"https://forms.gle/Nj27Lg1eXGhv6eeT6",target:"_blank"},"Aquí")],-1)),f="https://api-chatbot.letsdoitnow.us/api",X=I({__name:"ChatBot",setup(s){const o=u(""),r=u([]),c=u(!1),b=async()=>{c.value=!0;try{const e=await m.post(`${f}/chats/expert`,{userId:"64d5d5d3877039bb218d3702",expertId:"64d5d76f24206155ff312cc6"},{});r.value=e.data.slice().reverse()}catch(e){console.log(e)}c.value=!1},p=async()=>{c.value=!0,o.value!=""&&(r.value.push({question:o.value,answer:""}),i(),await m.post(`${f}/chats`,{userId:"64d5d5d3877039bb218d3702",expertId:"64d5d76f24206155ff312cc6",userQuestion:o.value},{}).then(e=>{r.value[r.value.length-1].answer=e.data.answer,o.value="",i()}).catch(e=>{console.log(e)})),c.value=!1,i()},i=()=>{const e=document.getElementById("endChat");e&&e.scrollIntoView({behavior:"smooth",block:"end"})},y=e=>{const a=e.indexOf("</end>");return a!==-1?e.substring(0,a):e};return C(async()=>{await b(),localStorage.getItem("chat")!=null&&(o.value=localStorage.getItem("chat"),localStorage.removeItem("chat"),p()),i()}),(e,a)=>(d(),l(v,null,[F,t("div",K,[t("div",M,[(d(!0),l(v,null,S(r.value,n=>(d(),l("div",null,[t("p",G,h(n.question),1),t("p",H,h(y(n.answer)),1)]))),256)),O,c.value?(d(),$(z,{key:0})):k("",!0)]),t("div",Q,[B(t("input",{class:"w-100",style:{"padding-right":"3rem"},type:"text",placeholder:"Escribe algo","onUpdate:modelValue":a[0]||(a[0]=n=>o.value=n),onKeypress:a[1]||(a[1]=q(n=>p(),["enter"]))},null,544),[[E,o.value]]),t("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:N,alt:"",onClick:a[2]||(a[2]=n=>p())})])]),R],64))}});const Y=g(X,[["__scopeId","data-v-a52bc8e8"]]);export{Y as default};
