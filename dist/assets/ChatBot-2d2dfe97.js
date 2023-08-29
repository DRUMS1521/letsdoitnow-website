import{d as U,r,b as V,o,c as l,a as s,i as y,w as x,v as O,h as R,P as n,p as A,k as F,_ as H,t as T,s as j,F as M,x as L,y as q,m as D}from"./index-1c67d60f.js";import{_ as K,a as Y}from"./send-89db135c.js";import{a as $,s as i}from"./Toast-ba3a0cb7.js";import{s as G}from"./SpinerComponent-6d33e11d.js";import{l as Q}from"./SwitchLang-3e3dc634.js";const P=g=>(A("data-v-718c6c2f"),g=g(),F(),g),X={class:"modal"},J={class:"modal-content"},W={key:0},Z={key:0,class:"modal-title"},ee={key:1,class:"modal-title"},te={key:2,class:"text-center mb-1"},se={key:0,class:"form-group"},ae={class:"form-group"},oe={class:"form-group"},le={key:1,class:"form-group"},re={key:4,class:"w-100 text-center mt-1"},ne={key:5,class:"w-100 text-center mt-1"},ie={key:1},ue=P(()=>s("h2",null,"Limite alcanzado",-1)),ce=P(()=>s("p",{class:"text-center mb-1"},"Has alcanzado el límite de consultas diarias, ¿quieres seguir usando el chat, considera contratar uno de nuestros planes.",-1)),de=[ue,ce],b="https://api-chatbot.letsdoitnow.us/api",ve=U({__name:"LoginBot",props:{closeModal:Function},setup(g){const p=g,u=r(""),c=r(""),h=r(""),d=r(""),m=r(!1),_=r(!1),v=r(""),f=r(),k=r(!1),E=r(!1),C=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,I=()=>{u.value="",c.value="",h.value=""},S=async()=>{try{const t=await $.get(`${b}/user/temp`);t.status===200?(localStorage.setItem("session",t.data.token+"-"+t.data.user),p.closeModal&&p.closeModal(),window.location.reload()):i("Error al cargar","error",3e3,n.BOTTOM_CENTER)}catch{i("Error al cargar","error",3e3,n.BOTTOM_CENTER)}},w=async()=>{if(E.value=!0,!C.test(u.value))i("El email no es válido","error",3e3,n.BOTTOM_CENTER);else if(!d.value||!c.value||!h.value)i("Todos los campos son obligatorios","error",3e3,n.BOTTOM_CENTER);else if(c.value!==h.value)i("Las contraseñas no coinciden","error",3e3,n.BOTTOM_CENTER);else try{let t;v.value?t={userId:v.value,name:d.value,email:u.value,password:c.value}:t={name:d.value,email:u.value,password:c.value};let e=await $.post(`${b}/user`,t,{});localStorage.setItem("session",e.data.token+"-"+e.data.user),i("Registrado correctamente","success",2e3,n.BOTTOM_CENTER),p.closeModal&&p.closeModal(),setTimeout(()=>{window.location.reload()},1200),I()}catch(t){t.response.data.message=="A user with this email already exists."?i("Correo registrado","error",3e3,n.BOTTOM_CENTER):i(`Error al registrar ${t}`,"error",3e3,n.BOTTOM_CENTER)}E.value=!1},B=()=>{E.value=!0,C.test(u.value)?c.value?$.post(`${b}/login`,{email:u.value,password:c.value},{}).then(t=>{localStorage.setItem("session",t.data.token+"-"+t.data.user),i("Iniciado correctamente","success",2e3,n.BOTTOM_CENTER),p.closeModal&&p.closeModal(),setTimeout(()=>{window.location.reload()},1200),I()}).catch(t=>{t.response.data.message=="Invalid email or password."?i("Contraseña o correo incorrectos","error",3e3,n.BOTTOM_CENTER):i(`Error al iniciar ${t}`,"error",3e3,n.BOTTOM_CENTER)}):i("Todos los campos son obligatorios","error",3e3,n.BOTTOM_CENTER):i("El email no es válido","error",3e3,n.BOTTOM_CENTER),E.value=!1};return V(async()=>{if(localStorage.getItem("limit")&&(_.value=!0,localStorage.removeItem("limit")),localStorage.getItem("registerLimit")&&(k.value=!0,localStorage.removeItem("registerLimit")),localStorage.getItem("session")){const e=(localStorage.getItem("session")||"").split("-")||"";f.value=e.slice(0,e.length-1).toString(),v.value=e[e.length-1]}else f.value="",v.value=""}),(t,e)=>(o(),l("div",X,[s("div",J,[s("span",{class:"close",onClick:e[0]||(e[0]=a=>S())},"×"),k.value?(o(),l("div",ie,de)):(o(),l("div",W,[m.value?(o(),l("h2",Z,"Iniciar sesión")):(o(),l("h2",ee,"Registro")),_.value?(o(),l("p",te,"Has alcanzado el límite de consultas gratuitas, regístrate para continuar usando el chat y no perder el historial.")):y("",!0),s("form",null,[m.value?y("",!0):(o(),l("div",se,[x(s("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>d.value=a),type:"text",placeholder:"Nombre",required:""},null,512),[[O,d.value]])])),s("div",ae,[x(s("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>u.value=a),type:"email",placeholder:"Email",required:""},null,512),[[O,u.value]])]),s("div",oe,[x(s("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>c.value=a),type:"password",placeholder:"Password",required:""},null,512),[[O,c.value]])]),m.value?y("",!0):(o(),l("div",le,[x(s("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>h.value=a),type:"password",placeholder:"Confirmar password",required:""},null,512),[[O,h.value]])])),m.value?(o(),l("button",{key:2,class:"submit",onClick:e[5]||(e[5]=a=>B())},"Iniciar sesión")):(o(),l("button",{key:3,class:"submit",onClick:e[6]||(e[6]=a=>w())},"Registrarse")),m.value?(o(),l("p",ne,[R("¿No tienes cuenta? regístrate "),s("span",{class:"cursor-p text-primary",onClick:e[8]||(e[8]=a=>m.value=!1)},"aquí")])):(o(),l("p",re,[R("¿Ya tienes cuenta? inicia sesión "),s("span",{class:"cursor-p text-primary",onClick:e[7]||(e[7]=a=>m.value=!0)},"aquí")])),m.value?y("",!0):(o(),l("p",{key:6,class:"w-100 text-center mt-1 text-primary cursor-p",onClick:e[9]||(e[9]=a=>S())},"Continuar sin cuenta"))])]))])]))}});const pe=H(ve,[["__scopeId","data-v-718c6c2f"]]),z=g=>(A("data-v-3a56e548"),g=g(),F(),g),me={class:"max-w-550 px-1 mx-auto mb-1"},_e={class:"d-flex si-center py-1"},ge=z(()=>s("img",{src:Y,alt:""},null,-1)),he={class:"d-flex jc-fe flex-d-col"},fe={class:"m-0 text-left"},Te=["value"],ye={class:"d-ib va-t w-50 p-2 mt-1 bot"},Ee={class:"answerbot pr-1"},we={key:0},xe={class:"botanswer",style:{"white-space":"pre-line"}},$e={class:"send"},Ce={class:"botanswer",style:{"white-space":"pre-line"}},Ie=z(()=>s("div",{id:"endChat",class:"mt-2 w-100"},null,-1)),Oe={class:"d-flex ai-center inputUser mt-1",style:{position:"relative"}},ke={class:"text-center mt-2"},Se={href:"https://forms.gle/Nj27Lg1eXGhv6eeT6",target:"_blank"},N="https://api-chatbot.letsdoitnow.us/api",Be=U({__name:"ChatBot",setup(g){const p=r(),u=r(""),c=r(""),h=r(""),d=r([{question:"",answer:""}]),m=r([{career:""}]),_=r(),v=r(!1),f=r(!1),k=async()=>{f.value=!1},E=async()=>{v.value=!0;try{const t=await $.post(`${N}/experts`,{user:c.value},{headers:{token:h.value}});t.status===200?(m.value=t.data,_.value=t.data[t.data.length-1]):f.value=!0}catch{i("Error al cargar","error",3e3,n.BOTTOM_CENTER)}v.value=!1},C=async()=>{v.value=!0;try{const t=await $.post(`${N}/chats/expert`,{userId:c.value,expertId:_.value._id},{headers:{token:h.value}});d.value=t.data.slice().reverse()}catch(t){i(`Error al cargar: ${t}`,"error",3e3,n.BOTTOM_CENTER)}v.value=!1},I=async()=>{v.value=!0,u.value!=""&&(d.value.push({question:u.value,answer:""}),w(),await $.post(`${N}/chats`,{userId:c.value,expertId:_.value._id,userQuestion:u.value},{headers:{token:h.value}}).then(t=>{d.value[d.value.length-1].answer=t.data.answer,u.value="",w()}).catch(t=>{t.response.data.message=="You have exceeded the number of free queries."?(i("Has excedido el número de consultas gratuitas","error",3e3,n.BOTTOM_CENTER),localStorage.setItem("limit","true"),f.value=!0):t.response.data.message=="User, you have exceeded the number of free queries."?(localStorage.setItem("registerLimit","true"),f.value=!0):i(`Error al enviar: ${t}`,"error",3e3,n.BOTTOM_CENTER)})),v.value=!1,w()},S=async()=>{const t=localStorage.getItem("session");if(t){const e=t.split("-");h.value=e.slice(0,e.length-1).toString(),c.value=e[e.length-1],await E(),await C()}else f.value=!0},w=()=>{const t=document.getElementById("endChat");t&&t.scrollIntoView({behavior:"smooth",block:"end"})},B=t=>{const e=t.indexOf("</end>");return e!==-1?t.substring(0,e):t};return V(async()=>{p.value=Q(localStorage.getItem("Lang")==="Es").doitbot,localStorage.getItem("chat")&&(u.value=localStorage.getItem("chat")||"",localStorage.removeItem("chat")),localStorage.getItem("session")?await S():f.value=!0,w()}),(t,e)=>(o(),l(M,null,[s("div",null,[s("div",me,[s("div",_e,[ge,s("div",he,[s("h3",fe,T(_.value.name),1),s("p",null,T(_.value.career),1)])]),s("p",null,T(_.value.description),1)]),x(s("select",{name:"","onUpdate:modelValue":e[0]||(e[0]=a=>_.value=a),onChange:e[1]||(e[1]=a=>C())},[(o(!0),l(M,null,L(m.value,a=>(o(),l("option",{value:a},T(a.career),9,Te))),256))],544),[[j,_.value]])]),s("div",ye,[s("div",Ee,[d.value.length==0?(o(),l("div",we,[s("p",xe,T(p.value.text001),1)])):y("",!0),(o(!0),l(M,null,L(d.value,a=>(o(),l("div",null,[s("p",$e,T(a.question),1),s("p",Ce,T(B(a.answer)),1)]))),256)),Ie,v.value?(o(),q(G,{key:1})):y("",!0)]),s("div",Oe,[x(s("input",{class:"w-100",style:{"padding-right":"3rem"},type:"text",placeholder:"Escribe algo","onUpdate:modelValue":e[2]||(e[2]=a=>u.value=a),onKeypress:e[3]||(e[3]=D(a=>I(),["enter"]))},null,544),[[O,u.value]]),s("img",{style:{right:"10px",position:"absolute"},class:"cursor-p",src:K,alt:"",onClick:e[4]||(e[4]=a=>I())})])]),s("p",ke,[R(T(p.value.text002)+" ",1),s("a",Se,T(p.value.text003),1)]),f.value?(o(),q(pe,{key:0,closeModal:k})):y("",!0)],64))}});const qe=H(Be,[["__scopeId","data-v-3a56e548"]]);export{qe as default};
