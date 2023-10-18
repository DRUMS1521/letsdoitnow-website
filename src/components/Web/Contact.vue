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

    <!-- <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7Asfml3Ok-UwKCCDTdRQ8cnXgVxrcjulOXPQhe0xaFNBgbA/viewform?embedded=true" width="100%" height="1500">Loading…</iframe>
    </div> -->

    <div class="w-[600px] mx-auto">
        <form action="">
            <input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="name" id="name" placeholder="Nombre completo">

            <input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="email" id="email" placeholder="Correo electrónico">

            <input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="company" id="company" placeholder="Nombre de tu empresa">

            <input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="industry" id="industry" placeholder="Industria de tu empresa">

            <input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="phone" id="phone" placeholder="Teléfono">

            <label for="">¿Podrías describirnos brevemente tu proyecto? Queremos entender tus necesidades y cómo nuestra tecnología puede ayudarte</label>
            <textarea class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="description" id="description" cols="1" rows="1" placeholder="Mensaje"></textarea>

            <label for="">¿Tienes un levantamiento de requerimientos que puedas compartir con nosotros para entender mejor lo que quieres hacer?<br>Escríbenos cuál es o adjunta un link donde podamos ver el documento.</label>
            <textarea class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="message" id="message" cols="1" rows="1" placeholder="Mensaje"></textarea>

            <label for="">¿Es este un proyecto completamente nuevo o ya existe un MVP o una app en funcionamiento?</label>
            <select class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="" id="">
                <option value="">Idea nueva</option>
                <option value="">MVP o una app en funcionamiento</option>
                <option value="">Aplicación en funcionamiento</option>
            </select>

            <label for="">¿Cuentas con un equipo de ingeniería y buscas que complementemos su trabajo, o buscas que seamos tu equipo de ingeniería?</label>
            <select class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="" id="">
                <option value="">Tengo un equipo y necesito apoyo</option>
                <option value="">Necesito un equipo de ingeniería</option>
            </select>

            <label for="">Por favor, selecciona el rango de inversión que consideras para tu proyecto. Esto nos ayudará a entender tus expectativas y a proporcionarte una cotización más precisa<br>Estos rangos se encuentras en dólar</label>
            <select class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="" id="">
                <option value="$6,000 - $12,000">$6,000 - $12,000</option>
                <option value="$12,000 - $20,000">$12,000 - $20,000</option>
                <option value="$20,000 - $25,000">$20,000 - $25,000</option>
                <option value="$25,000 - $30,000">$25,000 - $30,000</option>
                <option value="$30,000 - $40,000">$30,000 - $40,000</option>
                <option value="$40,000 - $50,000">$40,000 - $50,000</option>
                <option value="$50,000 - $70,000">$50,000 - $70,000</option>
                <option value="$70,000 - $90,000">$70,000 - $90,000</option>
            </select>

            <label for="">¿Algún comentario adicional?<br>Si tienes alguna otra información que creas que debamos saber, por favor indícala aquí</label>
            <textarea class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="message" id="message" cols="1" rows="1" placeholder="Mensaje"></textarea>

            <input type="submit" value="Enviar mensaje" class="bg-[#263F28] text-white p-[0.7rem] [1.2rem] rounded-[10px]">
        </form>
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