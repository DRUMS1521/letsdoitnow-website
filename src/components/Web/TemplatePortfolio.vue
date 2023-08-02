<script setup lang="ts">
/* import { ref, onMounted } from 'vue';
import { lang } from '@/stores/SwitchLang'
import { seoMeta } from '@/stores/SeoMeta';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", 
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").porfolio
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
}) */

const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

const chat = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}
</script>

<template>
   <div class="wrapper-port-details">
    
    <div class="layout-port-details">
        <div class="text-1-port-details">
            <h1 class="subtitle">Tít<span class="rectangle">ulo</span></h1>
            <h3 class="subtitle-3" style="text-align: start;">Slogan del titulo</h3>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor mincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        <div class="img-1-port-details">
            <img src="../../assets/port-img-1.png" alt="" style="width: 300px;">
        </div>
    </div>
    
    <p style="padding: 2rem 0 1rem 0;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    <p style="padding: 1rem 0 2rem 0;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
    
    <div class="layout-port-details">
        <div class="img-1-port-details">
            <img src="../../assets/port-img-1.png" alt="" style="width: 300px;">
        </div>
        <div class="text-1-port-details">
            <button class="btn-style-deg" @click="freeConsulation">Recibe una consultoría gratis</button>
            <p style="margin-block-start: 1.67em;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <p style="margin-block-start: 1.67em;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>       
    </div>

    <h2 class="subtitle-2" style="text-align: start;">Si tu empresa necesita una transformación digital, no dudes en contactarnos. Juntos, haremos que suceda ahora.</h2>
    <div class="line-port"></div>
    <h3 class="subtitle-3" style="text-align: start;">Algunas imágenes</h3>
    <img class="img-details" src="../../assets/carrazo-port.png">
    <img class="img-details" src="../../assets/carrazo-port-2.png" alt="" style="margin-top: 2rem;">
    <h1 class="subtitle-3" style="font-size: 24px;">¡Contáctanos para conocer más sobre nuestros proyectos y cómo podemos ayudarte a alcanzar el éxito en tu industria!</h1>
    
    <div style="display: flex; flex-direction: column; align-items: center;">
        <button class="btn-style-deg" @click="freeConsulation">Recibe una consultoría gratis</button>
        <button class="btn-underline" style="margin-top: 2rem;" @click="chat">O escríbenos a nuestro chat</button>
    </div>
   </div>
</template>