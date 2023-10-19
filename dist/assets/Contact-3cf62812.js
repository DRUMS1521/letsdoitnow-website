import{d as T,r as t,c as V,b as e,z as N,w as a,v as s,A as x,F,j as h,i as r,a as C,P as f}from"./index-4f628ee9.js";import{a as k,s as y}from"./Toast-de4d981b.js";const U="/assets/message-icon-b9e93976.svg",M="/assets/linkedin-icon-833b8bbf.svg",S="/assets/instagram-icon-52bce9f4.svg",P=h('<div class="m-8 animation-fade-in"><h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">Contacto</h1><p class="text-center">Estamos aquí para ayudarte.</p><p class="text-center">Si tienes alguna pregunta, no dudes en enviar un mensaje.</p><p class="text-center mb-8">¡Nos encantaría saber más de ti!</p></div>',1),j={class:"w-[600px] mx-auto"},B=["onSubmit"],I=e("label",{for:"name"},"Nombre completo",-1),O=e("label",{for:"email"},"Correo electrónico",-1),R=e("label",{for:"company"},"Nombre de tu empresa",-1),D=e("label",{for:""},"Industria de tu empresa",-1),A=e("label",{for:"description"},"¿Podrías describirnos brevemente tu proyecto? Queremos entender tus necesidades y cómo nuestra tecnología puede ayudarte",-1),L=e("label",{for:"Requirements"},[r("¿Tienes un levantamiento de requerimientos que puedas compartir con nosotros para entender mejor lo que quieres hacer?"),e("br"),r("Escríbenos cuál es o adjunta un link donde podamos ver el documento.")],-1),z=e("label",{for:"mvp"},"¿Es este un proyecto completamente nuevo o ya existe un MVP o una app en funcionamiento?",-1),H=e("option",{value:""},"Seleccione una opción",-1),Q=e("option",{value:"Idea nueva"},"Idea nueva",-1),G=e("option",{value:"MVP"},"MVP o una app en funcionamiento",-1),J=e("option",{value:"Aplicación en funcionamiento"},"Aplicación en funcionamiento",-1),K=[H,Q,G,J],W=e("label",{for:"team"},"¿Cuentas con un equipo de ingeniería y buscas que complementemos su trabajo, o buscas que seamos tu equipo de ingeniería?",-1),X=e("option",{value:""},"Seleccione una opción",-1),Y=e("option",{value:"Tengo un equipo"},"Tengo un equipo y necesito apoyo",-1),Z=e("option",{value:"Necesito un equipo"},"Necesito un equipo de ingeniería",-1),ee=[X,Y,Z],oe=e("label",{for:"investment"},[r("Por favor, selecciona el rango de inversión que consideras para tu proyecto. Esto nos ayudará a entender tus expectativas y a proporcionarte una cotización más precisa"),e("br"),r("Estos rangos se encuentras en dólar")],-1),ne=h('<option value="">Seleccione una opción</option><option value="$6,000 - $12,000">$6,000 - $12,000</option><option value="$12,000 - $20,000">$12,000 - $20,000</option><option value="$20,000 - $25,000">$20,000 - $25,000</option><option value="$25,000 - $30,000">$25,000 - $30,000</option><option value="$30,000 - $40,000">$30,000 - $40,000</option><option value="$40,000 - $50,000">$40,000 - $50,000</option><option value="$50,000 - $70,000">$50,000 - $70,000</option><option value="$70,000 - $90,000">$70,000 - $90,000</option>',9),te=[ne],ae=e("label",{for:"message"},[r("¿Algún comentario adicional?"),e("br"),r("Si tienes alguna otra información que creas que debamos saber, por favor indícala aquí")],-1),se=e("div",{class:"w-100 text-right"},[e("input",{type:"submit",value:"Enviar mensaje",class:"bg-[#263F28] text-white p-[0.7rem] [1.2rem] rounded-[10px]"})],-1),re=e("h2",{class:"text-lg font-semibold sm:text-3xl text-[#263F28] text-center mb-4"},"Encuéntranos en nuestras redes sociales",-1),le=e("img",{src:U,alt:""},null,-1),ie=e("h3",null,"Let's Do It Now",-1),ue=[le,ie],de=e("img",{src:M,alt:""},null,-1),pe=e("h3",null,"Let's Do It Now",-1),me=[de,pe],ce=e("img",{src:S,alt:""},null,-1),ve=e("h3",null,"lets.doit.now",-1),be=[ce,ve],ye=T({__name:"Contact",setup(_e){const l=t(""),i=t(""),u=t(""),d=t(""),p=t(""),m=t(""),c=t(""),v=t(""),b=t(""),_=t(""),w=async()=>{const g="http://localhost:3000/api/googleForm",o={name:l.value,email:i.value,company:u.value,industry:d.value,description:p.value,requirements:m.value,mvp:c.value,team:v.value,investment:b.value,message:_.value};try{(await k.post(g,o)).status===200?(y("Formulario enviado con éxito","success",3e3,f.BOTTOM_CENTER),l.value="",i.value="",u.value="",d.value="",p.value="",m.value="",c.value="",v.value="",b.value="",_.value=""):y("Error al enviar el formulario. Por favor, inténtalo de nuevo.","error",3e3,f.BOTTOM_CENTER)}catch(n){console.error("Error:",n),y("Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.","error",3e3,f.BOTTOM_CENTER)}},$=()=>{window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20","_blank")},q=()=>{window.open("https://www.instagram.com/lets.doit.now/","_blank")},E=()=>{window.open("https://www.linkedin.com/company/letsdoitnowus/","_blank")};return(g,o)=>(C(),V(F,null,[P,e("div",j,[e("form",{onSubmit:N(w,["prevent"]),class:"mt-8 mb-16"},[I,a(e("input",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",type:"text",name:"name",id:"name",placeholder:"Name","onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n)},null,512),[[s,l.value]]),O,a(e("input",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",type:"text",name:"email",id:"email",placeholder:"Email","onUpdate:modelValue":o[1]||(o[1]=n=>i.value=n)},null,512),[[s,i.value]]),R,a(e("input",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",type:"text",name:"company",id:"company",placeholder:"Company","onUpdate:modelValue":o[2]||(o[2]=n=>u.value=n)},null,512),[[s,u.value]]),D,a(e("input",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",type:"text",name:"industry",id:"industry",placeholder:"Industry","onUpdate:modelValue":o[3]||(o[3]=n=>d.value=n)},null,512),[[s,d.value]]),A,a(e("textarea",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"description",id:"description",cols:"1",rows:"1",placeholder:"Description","onUpdate:modelValue":o[4]||(o[4]=n=>p.value=n)},null,512),[[s,p.value]]),L,a(e("textarea",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"Requirements",id:"Requirements",cols:"1",rows:"1",placeholder:"Requirements","onUpdate:modelValue":o[5]||(o[5]=n=>m.value=n)},null,512),[[s,m.value]]),z,a(e("select",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"mvp",id:"mvp","onUpdate:modelValue":o[6]||(o[6]=n=>c.value=n)},K,512),[[x,c.value]]),W,a(e("select",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"team",id:"team","onUpdate:modelValue":o[7]||(o[7]=n=>v.value=n)},ee,512),[[x,v.value]]),oe,a(e("select",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"investment",id:"investment","onUpdate:modelValue":o[8]||(o[8]=n=>b.value=n)},te,512),[[x,b.value]]),ae,a(e("textarea",{class:"w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6",name:"message",id:"message",cols:"1",rows:"1",placeholder:"Mensaje","onUpdate:modelValue":o[9]||(o[9]=n=>_.value=n)},null,512),[[s,_.value]]),se],40,B)]),re,e("div",{class:"flex flex-row justify-evenly min-[320px]:max-sm:flex-col items-center"},[e("div",{class:"layout-card m-4",onClick:$},ue),e("div",{class:"layout-card m-4",onClick:E},me),e("div",{class:"layout-card m-4",onClick:q},be)])],64))}});export{ye as default};
