<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta';
import CardAbout from '../cards/cardAbout.vue';
import CardAboutGreens from '../cards/cardAboutGreens.vue';

const language = ref<any>({
    langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title001: "", text002: "", text003: "", text004: "", text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", ext015: ""
});

onMounted(() => {
    language.value = lang(localStorage.getItem("Lang") === "Es").home;
    seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
});

const viewProjects = ref<number>(1)

const freeConsulation = (): void => {
    window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

const chat = (): void => {
    window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}
</script>

<template>
    <div class="bg-image-6 py-20">
        <div class="flex flex-col items-center gap-8 py-20">
            <h1 class="text-white text-3xl font-medium">Taller Gratuito Presencial</h1>
            <h1 class="text-white text-5xl font-bold">Testea tu idea y saca tu MVP en 2 horas con ChatGPT</h1>
            <img src="../../assets/eventResources/googlechatGPT.svg" alt="">
        </div>
        <div class="bg-white p-4 mx-auto max-w-screen-xl">
            <h1 class="text-[#333333] font-bold text-2xl text-center">Un espacio práctico para los empresarios y
                emprendedores</h1>
        </div>
        <div>
            <h1 class="text-white">CONTADOR</h1>
        </div>
        <div class="flex flex-col items-center gap-8 py-20">
            <h1 class="text-white text-4xl font-medium">Bogotá, 23 de Noviembre dek 2023</h1>
            <h1 class="text-white text-4xl font-bold">Calle 70 #8-19 Kapital House</h1>
            <h1 class="text-white text-2xl font-bold">Organiza: Let's Do It Now, Casa de Software</h1>
        </div>
        <div class="mx-auto max-w-screen-xl flex flex-row justify-center gap-8">
            <h1 class="text-white text-4xl font-bold">Cupos limitados</h1>
            <a
                class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer">
                <span class="absolute -end-full transition-all group-hover:end-4">
                    <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>

                <span class="text-m font-bold transition-all group-hover:me-4">
                    Inscríbete Ya
                </span>
            </a>
        </div>
        <div class="bg-white p-4 mx-auto max-w-screen-xl mt-20">
            <h1 class="text-[#333333] font-bold text-2xl text-center">Aprende a transformar tus ideas en productos</h1>
        </div>
    </div>

    <div class="mx-auto max-w-screen-xl flex flex-col items-center mt-20">
        <img src="../../assets/eventResources/title-2.svg" alt="" class="">
        <div class="flex flex-row items-center">
            <img src="../../assets/eventResources/jp.png" alt="">
            <div class="flex flex-col gap-4">
                <p>En <span class="text-bold">MVP FLASH</span>, te enseñamos a convertir tus ideas en proyectos reales en
                    solo 2 horas. Este taller está
                    creado para empresarios y líderes que buscan
                    innovar. Aquí combinamos métodos de planificación
                    efectivos, usados por los profesionales de Google, con
                    las últimas herramientas de inteligencia artificial.</p>
                <p>Durante el taller, aprenderás técnicas para desarrollar
                    rápidamente tus proyectos, encontrar soluciones
                    prácticas a desafíos comunes y adaptarte a un enfoque
                    de trabajo más ágil y actual. Es una oportunidad directa
                    y concreta para mejorar tus habilidades de gestión de
                    proyectos y estrategia empresarial.</p>
                <h1 class="font-bold text-[#79D48B] text-2xl">Es tu entrada a una nueva forma
                    de pensar y trabajar.</h1>
            </div>
        </div>
    </div>

    <div class="px-20 py-10 bg-[#DAFFD5]">
        <h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">Aliados</h2>
        <div class="flex flex-row items-center justify-between">
            <img src="../../assets/eventResources/kapital.png" alt="" class="h-[50px] ">
            <img src="../../assets/eventResources/milton.png" alt="" class="h-[50px]">
            <img src="../../assets/eventResources/celes.png" alt="" class="h-[50px]">
            <img src="../../assets/eventResources/tml.png" alt="" class="h-[100px]">
        </div>
    </div>

    <div class="mx-auto max-w-screen-xl flex flex-col gap-8 items-center my-10">
        <h1 class="text-[#79D48B] text-5xl font-bold pb-20">Metodología Design Sprint de Google</h1>
        <img src="../../assets/eventResources/designSprint.svg" alt="">
        <a
            class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer">
            <span class="absolute -end-full transition-all group-hover:end-4">
                <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>

            <span class="text-m font-bold transition-all group-hover:me-4">
                Inscríbete Ya
            </span>
        </a>
    </div>

    <div class="flex flex-col items-center bg-[#333333] py-20">
        <h1 class="text-[#79D48B] text-5xl font-bold pb-4">5 días en 2 horas</h1>
        <h1 class="text-white text-2xl font-bold pb-10">Cronograma del taller</h1>
        <img src="../../assets/eventResources/cronograma.png" alt="">
    </div>

    <div class="flex flex-col items-center bg-[#79D48B] py-10">
        <img src="../../assets/eventResources/mvpflash.svg" alt="">
        <a
            class="mt-10 group relative inline-flex items-center overflow-hidden rounded-lg bg-white px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer">
            <span class="absolute -end-full transition-all group-hover:end-4">
                <svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </span>

            <span class="text-m font-bold transition-all group-hover:me-4">
                Llámanos
            </span>
        </a>
    </div>

    <div>
        <div class="flex flex-col items-center pt-10">
            <h1 class="text-[#333333] text-5xl font-bold pb-4">Casos de Éxito</h1>
            <h1 class="text-[#333333] text-2xl font-bold pb-10">Productos que hemos desarrollado con esta tecnología</h1>
        </div>
        <div class="mx-auto max-w-screen-xl flex flex-row p-20 items-center mx-20">
            <div class="flex flex-col">
                <a>
                    <button @click="viewProjects = 1"
                        class="w-[194px] h-[150px] rounded-t-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
                        :class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 1 }">
                        <img src="../../assets/brandLogos/planium.svg" alt="">
                    </button>
                </a>
                <a>
                    <button @click="viewProjects = 2"
                        class="w-[194px] h-[150px] border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
                        :class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 2 }">
                        <img src="../../assets/brandLogos/ajpenny.svg" alt="">
                    </button>
                </a>
                <a>
                    <button @click="viewProjects = 3"
                        class="w-[194px] h-[150px] rounded-b-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
                        :class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 3 }">
                        <img src="../../assets/brandLogos/aliadago.svg" alt="">
                    </button>
                </a>
            </div>
            <div class="grid grid-cols-2 items-center p-10 gap-8 animate-fade-in" v-if="viewProjects == 1">
                <div>
                    <h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text057 }}</h2>
                    <p class="my-4 text-[#333333] text-lg">{{ language.text058 }}</p>
                    <a @click="$router.push('/portfolio')">
                        <button
                            class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
                            {{ language.text059 }}
                        </button>
                    </a>
                </div>
                <div>
                    <img src="../../assets/planium-home.png" alt="">
                </div>
            </div>

            <div class="grid grid-cols-2 items-center p-10 gap-8 animate-fade-in" v-if="viewProjects == 2">
                <div>
                    <h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text080 }}</h2>
                    <p class="my-4 text-[#333333] text-lg">{{ language.text031 }}</p>
                    <a @click="$router.push('/portfolio')">
                        <button
                            class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
                            {{ language.text059 }}
                        </button>
                    </a>
                </div>
                <div>
                    <img src="../../assets/ajpenny-home.png" alt="">
                </div>
            </div>

            <div class="grid grid-cols-2 items-center p-10 gap-8 animate-fade-in" v-if="viewProjects == 3">
                <div>
                    <h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text082 }}</h2>
                    <p class="my-4 text-[#333333] text-lg">{{ language.text083 }}</p>
                    <a @click="$router.push('/portfolio')">
                        <button
                            class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
                            {{ language.text059 }}
                        </button>
                    </a>
                </div>
                <div>
                    <img src="../../assets/aliadago-home.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="bg-[#79D48B] py-10">
        <h1 class="text-[#333333] text-5xl font-bold pb-4 text-center">Mentores</h1>
        <div class="grid grid-cols-3 gap-8">
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/miltonp.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Milton Suárez</h1>
                <p class="font-medium text-[#333333] text-lg">Fullstack Marketer</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/juanes.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Juan Esteban Paca</h1>
                <p class="font-medium text-[#333333] text-lg">CGO en Let's Do It Now</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/joan.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Joan Ariza</h1>
                <p class="font-medium text-[#333333] text-lg">CEO en TLM</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/victor.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Víctor Carreño</h1>
                <p class="font-medium text-[#333333] text-lg">Fullstack Dev en Let's Do It Now</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/diana.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Diana Sánchez</h1>
                <p class="font-medium text-[#333333] text-lg">CSO en Celes</p>
            </div>
            <div class="flex flex-col items-center">
                <img src="../../assets/eventResources/edi.png" alt="" class="h-[200px]">
                <h1 class="font-bold text-[#333333] text-2xl">Edinson Acevedo</h1>
                <p class="font-medium text-[#333333] text-lg">Backend Dev en Let's Do It Now</p>
            </div>
        </div>
    </div>

    <div class="bg-[#333333] py-10 px-20">
        <h1 class="text-white text-4xl font-bold pb-4">En este evento se beneficiarán empresarios que quieran:</h1>
        <div class="pb-4">
            <h1 class="text-[#79D48B] text-2xl font-bold">1: Desarrollar Rápido de Proyectos</h1>
            <p class="text-white text-lg font-medium">Aprende a transformar tus ideas en prototipos funcionales en pocas
                horas, utilizando metodologías ágiles y efectivas.</p>
        </div>
        <div class="pb-4">
            <h1 class="text-[#79D48B] text-2xl font-bold">2: Tener Herramientas Innovadoras</h1>
            <p class="text-white text-lg font-medium">Gana habilidades prácticas en el uso de inteligencia artificial para
                optimizar la planificación y ejecución de tus proyectos.</p>
        </div>
        <div class="pb-4">
            <h1 class="text-[#79D48B] text-2xl font-bold">3: Encontrar Soluciones Efectivas</h1>
            <p class="text-white text-lg font-medium">Mejora tu capacidad para identificar problemas y encontrar soluciones
                creativas y eficientes, esenciales en el mundo empresarial actual.</p>
        </div>
        <div class="pb-4">
            <h1 class="text-[#79D48B] text-2xl font-bold">4: Aumentar su Red de Contactos</h1>
            <p class="text-white text-lg font-medium">Conecta con otros empresarios y líderes innovadores, ampliando tu
                red profesional y abriendo nuevas oportunidades de colaboración.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#79D48B] text-2xl font-bold">5: Tener una mentalidad de Innovación</h1>
            <p class="text-white text-lg font-medium">Adopta un enfoque fresco y dinámico en tus proyectos, manteniéndote
                a la vanguardia en un mercado en constante cambio.</p>
        </div>
        <h1 class="text-white text-5xl font-bold text-center">Es hora de poner en marcha tu idea</h1>
    </div>

    <div class="py-10 px-20">
        <h1 class="text-[#333333] text-4xl font-bold pb-4 text-center">Preguntas Frecuentes</h1>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Qué es MVP FLASH?</h1>
            <p class="text-[#333333] text-base font-medium">MVP FLASH es un taller práctico donde aprendes a convertir tus
                ideas en prototipos funcionales en
                pocas horas, combinando metodologías ágiles y la última tecnología en inteligencia artificial.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Para quién es este evento?</h1>
            <p class="text-[#333333] text-base font-regular">Este evento está diseñado para empresarios, líderes
                empresariales y cualquier persona interesada
                en innovar en sus proyectos o negocios, independientemente de su experiencia previa en
                tecnología.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Cuánto dura el taller?</h1>
            <p class="text-[#333333] text-base font-regular">El taller tiene una duración de aproximadamente 3 horas,
                incluyendo sesiones interactivas y tiempo
                para networking.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Necesito tener conocimientos previos en inteligencia artificial o
                tecnología?</h1>
            <p class="text-[#333333] text-base font-regular">No, no es necesario. MVP FLASH está diseñado para ser accesible
                y valioso tanto para principiantes
                como para aquellos con más experiencia en tecnología.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Hay algún costo para asistir al evento?</h1>
            <p class="text-[#333333] text-base font-regular">No, el evento es gratuito. Bajo el patrocinio y objetivo de
                creación de comunidad de Let’s do it Now.</p>
        </div>
        <div class="pb-10">
            <h1 class="text-[#333333] text-2xl font-bold">¿Qué beneficios obtendré al asistir a este taller?</h1>
            <p class="text-[#333333] text-base font-regular">Obtendrás habilidades prácticas en desarrollo rápido de
                proyectos, soluciones eficientes a desafíos
                empresariales, y acceso a una red de profesionales y líderes innovadores.</p>
        </div>
    <div class="pb-10">
        <h1 class="text-[#333333] text-2xl font-bold">¿Quién puede responder a mis preguntas adicionales sobre el
            evento?</h1>
        <p class="text-[#333333] text-base font-regular">Para más información, puedes contactarnos haciendo click AQUÍ.
        </p>
    </div>
</div></template>