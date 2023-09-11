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

const whatsapp = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}

const instagram = (): void => {
	window.open("https://www.instagram.com/lets.doit.now/", '_blank')
}

const linkedin = (): void => {
	window.open("https://www.linkedin.com/company/letsdoitnowus/", '_blank')
}
</script>

<template>
	<div class="m-8 animation-fade-in">
		<h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">Contacto</h1>
		<p class="text-center">Estamos aquí para ayudarte.</p>
        <p class="text-center">Si tienes alguna pregunta, no dudes en enviar un mensaje.</p>
        <p class="text-center mb-8">¡Nos encantaría saber más de ti!</p>
    </div>

    <div>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7Asfml3Ok-UwKCCDTdRQ8cnXgVxrcjulOXPQhe0xaFNBgbA/viewform?embedded=true" width="100%" height="1500">Loading…</iframe>
    </div>

    <h2 class="text-lg font-semibold sm:text-3xl text-[#263F28] text-center mb-4">Encuéntranos en nuestras redes sociales</h2>

    <div class="flex flex-row justify-evenly min-[320px]:max-sm:flex-col items-center">
        <div class="layout-card m-4" @click="whatsapp">
            <img src="../../assets/message-icon.svg" alt="">
            <h3>Let's Do It Now</h3>
        </div>
        <div class="layout-card m-4" @click="linkedin">
            <img src="../../assets/linkedin-icon.svg" alt="">
            <h3>Let's Do It Now</h3>
        </div>
        <div class="layout-card m-4" @click="instagram">
            <img src="../../assets/instagram-icon.svg" alt="">
            <h3>lets.doit.now</h3>
        </div>
    </div>
</template>