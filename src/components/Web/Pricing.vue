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

const jobs = (): void => {
    window.open("https://www.linkedin.com/company/letsdoitnowus/jobs/", '_blank')
}
const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}
const quote = (): void => {
	window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J", '_blank');
}
</script>

<template>
    <div class="lpx-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 mx-auto max-w-screen-xl">
        <h2 class="text-3xl font-bold sm:text-4xl text-[#263F28] text-center">Forjando el Éxito Juntos</h2>
        <p class="text-[#333333] text-2xl text-center">Inicia tu transformación con planes flexibles y centrados en el
            valor, diseñados para cada nivel de ambición.</p>
        <p class="my-8 text-[#333333] text-center">
            Desde startups innovadoras hasta gigantes tecnológicos, fortalecemos tu misión con equipos experimentados que
            entregan resultados.
        </p>
    </div>

    <div class="mx-auto max-w-screen-xl flex flex-row justify-between">
        <div class="rounded-[20px] bg-[#F5F5F5] w-[350px] p-10 grid grid-rows-3">
            <h1 class="text-xl font-bold sm:text-2xl text-[#4D4D4D] text-center mb-4">Emprendedor</h1>
            <p class="text-[#333333] text-lg text-center mb-4">$3,750 USD <span class="text-sm">/mes</span> </p>
            <div class="bg-[#D4D4D4] h-[2px] my-4"></div>
            <div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">1 Ingeniero Fullstack*</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Gerente de Proyecto**</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Diseñador UX/UI**</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Especialista DevOps**</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Arquitecto de Software**</h1>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[#333333]">Especificaciones:</p>
                <p class="text-[#868686] text-sm">*Totalmente dedicado a tu empresa</p>
                <p class="text-[#868686] text-sm">**Disponible a demanda, hasta 15 horas/mes</p>
            </div>
            <a>
                <button
                    class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
                    @click="freeConsulation">
                    Contrata nuestro equipo
                </button>
            </a>
        </div>

        <div class="rounded-[20px] bg-[#F5F5F5] w-[350px] p-10 grid grid-rows-3">
            <h1 class="text-xl font-bold sm:text-2xl text-[#4D4D4D] text-center mb-4">Empresarial</h1>
            <p class="text-[#333333] text-lg text-center mb-4">$5,650 USD <span class="text-sm">/mes</span> </p>
            <div class="bg-[#D4D4D4] h-[2px] my-4"></div>
            <div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">2 Ingeniero Fullstack*</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Gerente de Proyecto*</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Diseñador UX/UI*</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Especialista DevOps*</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Arquitecto de Software*</h1>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[#333333]">Especificaciones:</p>
                <p class="text-[#868686] text-sm">*Totalmente dedicado a tu empresa</p>
                <p class="text-[#868686] text-sm">**Disponible a demanda, hasta 15 horas/mes</p>
            </div>
            <a>
                <button
                    class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
                    @click="freeConsulation">
                    Contrata nuestro equipo
                </button>
            </a>
        </div>

        <div class="rounded-[20px] bg-[#F5F5F5] w-[350px] p-10 h-[550px]">
            <h1 class="text-xl font-bold sm:text-2xl text-[#4D4D4D] text-center mb-4">Titán</h1>
            <p class="text-[#333333] text-lg text-center mb-4">Consulta los precios</p>
            <div class="bg-[#D4D4D4] h-[2px] my-4"></div>
            <div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Equipos Personalizados</h1>
                </div>
                <div class="flex flex-rows py-4 px-2">
                    <img src="../../assets/check.svg" alt="">
                    <h1 class="text-[#868686] pl-2">Configurados según los requisitos detallados del proyecto.</h1>
                </div>
            </div>
            <div class="py-4">
                <p class="text-[#333333]">Especificaciones:</p>
                <p class="text-[#868686] text-sm">*Totalmente dedicado a tu empresa</p>
                <p class="text-[#868686] text-sm">**Disponible a demanda, hasta 15 horas/mes</p>
            </div>
            <a>
                <button
                    class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
                    @click="freeConsulation">
                    Contrata nuestro equipo
                </button>
            </a>
        </div>
    </div>

    <div class=" bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-10 pt-10 mt-20">
        <div class="mx-auto max-w-screen-xl grid grid-cols-2">
            <div>
                <img src="../../assets/Ellipses.svg" alt="">
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-[#263F28] text-lg font-bold text-right">MODELO DE COLABORACIÓN</p>
                <p class="my-8 text-[#263F28] text-right">
                    Nuestro modelo único de equipo dedicado garantiza que cada empresa obtenga un grupo experimentado, listo
                    para proporcionar un valor inmediato desde el primer compromiso. Con un rico historial en el desarrollo
                    de
                    productos digitales y contratos adaptables, te permitimos escalar con la máxima fluidez.
                </p>
            </div>
        </div>
    </div>

    <div class="animate-fade-in opacity-0 text-center my-20">
        <h2 class="text-2xl font-bold sm:text-3xl text-[#263F28]">¿Tienes una visión? Estamos aquí para escucharte.</h2>
        <p class="my-4 text-gray-600 text-lg">Estamos aquí para escucharte. Comparte las aspiraciones de tu proyecto y
            trabajemos juntos para hacerlas realidad.</p>
        <a @click="quote">
            <button
                class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
                Solicitar un presupuesto
            </button>
        </a>
</div></template>