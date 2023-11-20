<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta';
import axios from 'axios';
import { showToast, POSITION } from '../../stores/Toast';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title001: "", text002: "", text003: "", text004: "", text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", ext015: ""
});

const myData = ref({
	name: "", company: "", cargo: "", tel: "", funding: ""
});

const viewProjects = ref<number>(1)

const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

const chat = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}

/* Cuenta regreciba */
const deadline = new Date('2023-11-23T15:00:00-05:00');

const timeLeft = ref(calculateTimeLeft());

function calculateTimeLeft() {
	const now = new Date().getTime();
	const difference = deadline.getTime() - now;

	let days: number | string = Math.floor(difference / (1000 * 60 * 60 * 24));
	let hours: number | string = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes: number | string = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
	let seconds: number | string = Math.floor((difference % (1000 * 60)) / 1000);

	days = days < 10 ? `0${days}` : days.toString();
	hours = hours < 10 ? `0${hours}` : hours.toString();
	minutes = minutes < 10 ? `0${minutes}` : minutes.toString();
	seconds = seconds < 10 ? `0${seconds}` : seconds.toString();

	return `${days}-${hours}:${minutes}:${seconds}`;
}

function updateTime() {
	timeLeft.value = calculateTimeLeft();
}

let interval: number | null = null;
/* Cuenta regreciba */

// Función para enviar el formulario
const enviarFormulario = async (e: any) => {
    e.preventDefault();
    const googleFormsURL = 'https://api-chatbot.letsdoitnow.us/api/googleForm';

  // Crea un objeto con los datos del formulario
    const formData = myData.value;

    try {
        const response = await axios.post(googleFormsURL, formData);
        if (response.status === 200) {
        showToast(`Formulario enviado con éxito`, 'success', 3000, POSITION.BOTTOM_CENTER)
        // Restablece los campos del formulario
        myData.value = {name: "", company: "", cargo: "", tel: "", funding: ""}
        } else {
        showToast(`Error al enviar el formulario. Por favor, inténtalo de nuevo.`, 'error', 3000, POSITION.BOTTOM_CENTER)
        }
    } catch (error) {
        console.error('Error:', error);
        showToast(`Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo más tarde.`, 'error', 3000, POSITION.BOTTOM_CENTER)
    }
};

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").home;
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
	updateTime(); // Actualizar inmediatamente al cargar la página
	interval = setInterval(updateTime, 1000);
});

onUnmounted(() => {
	if (interval) {
		clearInterval(interval);
	}
});
const timeDisplay = timeLeft;
</script>

<template>
	<div class="bg-image-6 py-20 px-8">
		<div class="flex flex-col items-center gap-8 pb-20">
			<p class="text-white text-3xl font-medium">Taller Gratuito Presencial</p>
			<h1 class="text-white text-5xl font-bold">Testea tu idea y saca tu MVP en 3 horas con ChatGPT</h1>
			<img src="../../assets/eventResources/googlechatGPT.svg" alt="">
		</div>
		<div class="bg-white p-4 mx-auto max-w-screen-xl">
			<p class="text-[#333333] font-bold text-2xl text-center">Un espacio práctico para los empresarios y emprendedores</p>
		</div>
		<div class="flex flex-col items-center gap-8 py-20">
			<div class="max-w-2xl text-center text-green-500 mx-auto">
				<p class="text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] font-sans leading-[0.6] md:leading-[0.4] lg:leading-[0.3] ">{{ timeDisplay }}<br><span class="text-[1rem] font-thin">Dias Horas Minutos Segundos</span>
				</p>
			</div>
			<p class="text-white text-4xl font-medium text-center">Bogotá, 23 de Noviembre del 2023<br>3:00pm - 6:00pm<br>
			<span class="text-white text-4xl font-bold">Calle 70 #8-19 Kapital House</span><br>
			<span class="text-white text-2xl font-bold">Organiza: Let's Do It Now, Casa de Software</span></p>
		</div>
		<div class="mx-auto max-w-screen-xl md:flex flex-row justify-center gap-8">
			<p class="text-white text-4xl font-bold">Cupos limitados</p>
			<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer mt-4 md:mt-0" href="#contac">
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
			<p class="text-[#333333] font-bold text-2xl text-center">Aprende a transformar tus ideas en productos</p>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl flex flex-col items-center my-20 px-8 gap-4">
		<img src="../../assets/eventResources/title-2.svg" alt="" class="">
		<div class="md:flex flex-row items-center gap-4">
			<img src="../../assets/eventResources/jp.png" alt="" class="mx-auto mb-4 md:mb-0">
			<div class="flex flex-col gap-4">
				<p>En <span class="text-bold"><b>MVP FLASH</b></span>, te enseñamos a convertir tus ideas en <b>proyectos reales en solo 3 horas.</b> Este taller está creado para <b>empresarios y líderes</b> que buscan <b>innovar.</b> Aquí combinamos métodos de planificación efectivos, usados por los profesionales de <b>Google,</b> con las últimas herramientas de <b>inteligencia artificial.</b><br><br>Durante el taller, aprenderás técnicas para <b>desarrollar rápidamente tus proyectos,</b> encontrar soluciones prácticas a desafíos comunes y adaptarte a un enfoque de trabajo más <b>ágil y actual.</b> Es una oportunidad directa y concreta para mejorar tus habilidades de <b>gestión de proyectos y estrategia empresarial.</b></p>
				<p class="font-bold text-[#79D48B] text-2xl">Es tu entrada a una nueva forma de pensar y trabajar.</p>
			</div>
		</div>
	</div>

	<div class="px-8 md:px-20 py-10 bg-[#DAFFD5]">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">Aliados</h2>
		<div class="flex flex-row items-center justify-between overflow-auto">
			<img src="../../assets/eventResources/kapital.png" alt="" class="h-[45px] bd:h-[50px] mr-2 ">
			<img src="../../assets/eventResources/milton.png" alt="" class="h-[45px] bd:h-[50px] mr-2">
			<img src="../../assets/eventResources/celes.png" alt="" class="h-[45px] bd:h-[50px] mr-2">
			<img src="../../assets/eventResources/tml.png" alt="" class="h-[50px] bd:h-[100px mr-2]">
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl flex flex-col gap-8 items-center my-10 px-8">
		<p class="text-[#79D48B] text-4xl md:text-5xl font-bold pb-20 text-center">Metodología Design Sprint de Google</p>
		<img src="../../assets/eventResources/designSprint.svg" alt="">
		<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer" href="#contac">
			<span class="absolute -end-full transition-all group-hover:end-4">
				<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</span>

			<span class="text-m font-bold transition-all group-hover:me-4">Inscríbete Ya</span>
		</a>
	</div>

	<div class="flex flex-col items-center bg-[#333333] py-20 px-8">
		<p class="text-[#79D48B] text-5xl text-center font-bold pb-4">5 días en 3 horas</p>
		<p class="text-white text-2xl font-medium pb-10">20min - Presentación del Evento + Metodología + Mentores</p>
		<p class="text-white text-2xl font-bold pb-4">Cronograma del taller</p>
		<img src="../../assets/eventResources/cronograma.png" alt="">
	</div>

	<div class="flex flex-col items-center bg-[#79D48B] py-10 px-8">
		<img src="../../assets/eventResources/mvpflash.svg" alt="">
		<a class="mt-10 group relative inline-flex items-center overflow-hidden rounded-lg bg-white px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer" href="#contac">
			<span class="absolute -end-full transition-all group-hover:end-4">
				<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
					stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</span>

			<span class="text-m font-bold transition-all group-hover:me-4">Inscríbete Ya</span>
		</a>
	</div>

	<div class="px-6">
		<div class="flex flex-col items-center pt-10">
			<p class="text-[#333333] text-5xl text-center font-bold pb-4">Casos de Éxito</p>
			<p class="text-[#333333] text-2xl font-bold pb-10">Productos que hemos desarrollado con esta tecnología</p>
		</div>
		<div class="mx-auto max-w-screen-xl md:flex flex-row md:p-20 items-center mx-20">
			<div class="md:flex flex-col">
					<button @click="viewProjects = 1"
						class="w-[100px] md:w-[194px] h-[100px] md:h-[150px] rounded-t-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
						:class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 1 }">
						<img src="../../assets/brandLogos/planium.svg" alt="">
					</button>
					<button @click="viewProjects = 2"
						class="w-[100px] md:w-[194px] h-[100px] md:h-[150px] border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
						:class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 2 }">
						<img src="../../assets/brandLogos/ajpenny.svg" alt="">
					</button>
					<button @click="viewProjects = 3"
						class="w-[100px] md:w-[194px] h-[100px] md:h-[150px] rounded-b-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300"
						:class="{ 'border-l-[20px] border-l-[#79DB92]': viewProjects == 3 }">
						<img src="../../assets/brandLogos/aliadago.svg" alt="">
					</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 items-center px-5 py-10 gap-8 animate-fade-in" v-if="viewProjects == 1">
				<div>
					<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text057 }}</h2>
					<p class="my-4 text-[#333333] text-lg">{{ language.text058 }}</p>
				</div>
				<div>
					<img src="../../assets/planium-home.png" alt="">
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 items-center px-5 py-10 gap-8 animate-fade-in" v-if="viewProjects == 2">
				<div>
					<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text080 }}</h2>
					<p class="my-4 text-[#333333] text-lg">{{ language.text031 }}</p>
				</div>
				<div>
					<img src="../../assets/ajpenny-home.png" alt="">
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 items-center px-5 py-10 gap-8 animate-fade-in" v-if="viewProjects == 3">
				<div>
					<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text082 }}</h2>
					<p class="my-4 text-[#333333] text-lg">{{ language.text083 }}</p>
				</div>
				<div>
					<img src="../../assets/aliadago-home.png" alt="">
				</div>
			</div>
		</div>
	</div>

	<div class="bg-[#79D48B] py-10 px-8">
		<p class="text-[#333333] text-5xl font-bold pb-4 text-center">Mentores</p>
		<div class="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
			<div class="flex flex-col items-center">
				<img src="../../assets/eventResources/miltonp.png" alt="" class="max-h-[200px]">
				<p class="font-bold text-[#333333] text-2xl">Milton Suárez</p>
				<p class="font-medium text-[#333333] text-lg">Fullstack Marketer</p>
			</div>
			<div class="flex flex-col items-center">
				<img src="../../assets/eventResources/juanes.png" alt="" class="max-h-[200px]">
				<p class="font-bold text-[#333333] text-2xl">Juan Esteban Paca</p>
				<p class="font-medium text-[#333333] text-lg">CGO en Let's Do It Now</p>
			</div>
			<div class="flex flex-col items-center">
				<img src="../../assets/eventResources/joan.png" alt="" class="max-h-[200px]">
				<p class="font-bold text-[#333333] text-2xl">Joan Ariza</p>
				<p class="font-medium text-[#333333] text-lg">CEO en TLM</p>
			</div>
		<!-- </div>
		<div class="grid grid-cols-2 gap-8 max-w-[700px] mx-auto mt-8"> -->
			<div class="flex flex-col items-center">
				<img src="../../assets/eventResources/victor.png" alt="" class="max-h-[200px]">
				<p class="font-bold text-[#333333] text-2xl">Víctor Carreño</p>
				<p class="font-medium text-[#333333] text-lg">Fullstack Dev en Let's Do It Now</p>
			</div>
			<div class="flex flex-col items-center">
				<img src="../../assets/eventResources/diana.png" alt="" class="max-h-[200px]">
				<p class="font-bold text-[#333333] text-2xl">Diana Sánchez</p>
				<p class="font-medium text-[#333333] text-lg">CSO en Celes</p>
			</div>
			<div class="flex flex-col items-center">
                <img src="../../assets/eventResources/jp2.png" alt="" class="max-h-[200px]">
                <p class="font-bold text-[#333333] text-2xl">Juan P. Sierra</p>
                <p class="font-medium text-[#333333] text-lg">CEO de Let's Do It Now</p>
            </div>
		</div>
	</div>

	<div class="bg-[#333333] py-20 px-8">
		<div class="max-w-[800px] mx-0 md:mx-auto">
			<p class="text-white text-4xl text-center font-bold pb-4">En este evento se beneficiarán empresarios que quieran:</p>
			<div class="pb-4">
				<p class="text-[#79D48B] text-2xl font-bold">1: Desarrollar Rápido de Proyectos</p>
				<p class="text-white text-lg font-medium">Aprende a transformar tus ideas en prototipos funcionales en pocas
					horas, utilizando metodologías ágiles y efectivas.</p>
			</div>
			<div class="pb-4">
				<p class="text-[#79D48B] text-2xl font-bold">2: Tener Herramientas Innovadoras</p>
				<p class="text-white text-lg font-medium">Gana habilidades prácticas en el uso de inteligencia artificial para
					optimizar la planificación y ejecución de tus proyectos.</p>
			</div>
			<div class="pb-4">
				<p class="text-[#79D48B] text-2xl font-bold">3: Encontrar Soluciones Efectivas</p>
				<p class="text-white text-lg font-medium">Mejora tu capacidad para identificar problemas y encontrar soluciones
					creativas y eficientes, esenciales en el mundo empresarial actual.</p>
			</div>
			<div class="pb-4">
				<p class="text-[#79D48B] text-2xl font-bold">4: Aumentar su Red de Contactos</p>
				<p class="text-white text-lg font-medium">Conecta con otros empresarios y líderes innovadores, ampliando tu
					red profesional y abriendo nuevas oportunidades de colaboración.</p>
			</div>
			<div class="pb-10">
				<p class="text-[#79D48B] text-2xl font-bold">5: Tener una mentalidad de Innovación</p>
				<p class="text-white text-lg font-medium">Adopta un enfoque fresco y dinámico en tus proyectos, manteniéndote
					a la vanguardia en un mercado en constante cambio.</p>
			</div>
			<p class="text-white text-3xl md:text-5xl font-bold text-center">Es hora de poner en marcha tu idea</p>
		</div>
	</div>

	<div id="contac" class="bg-[#79D48B] py-10 px-8">
		<div class="max-w-[600px] mx-auto">
			<p class="text-4xl font-bold pb-4 text-center mt-16">INSCRÍBETE YA<br><span class="text-[25px]">Cupos limitados</span></p>
			<form @submit="enviarFormulario"  class="mt-8 mb-16">
				<label for="name">Nombre completo</label>
				<input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="name" id="name" placeholder="Name" v-model="myData.name">

				<label for="company">Nombre de tu empresa</label>
				<input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="company" id="company" placeholder="Company" v-model="myData.company">

				<label for="">Cargo:</label>
				<input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="text" name="cargo" id="cargo" placeholder="Cargo" v-model="myData.cargo">

				<label for="tel">Número de celular</label>
				<input class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" type="tel" name="tel" id="tel" placeholder="Número de celular" v-model="myData.tel">

				<label for="funding">¿Estás buscando financiación en tecnología?</label>
				<select class="w-full pr-12 border border-[0.5px] border-gray-400 rounded-[10px] p-[0.7rem] [1.2rem] outline-none mb-6" name="funding" id="funding" v-model="myData.funding">
					<option value="">Seleccione una opción</option>
					<option value="si">Si</option>
					<option value="no">No</option>
				</select>

				<div class="w-100 text-right">
					<input type="submit" value="Enviar mensaje" class="bg-[#263F28] text-white p-[0.7rem] [1.2rem] rounded-[10px]">
				</div>
			</form>
		</div>
	</div>

	<div class="py-20 px-8 max-w-[900px] mx-auto">
		<p class="text-[#333333] text-4xl font-bold pb-4 text-center">Preguntas Frecuentes</p>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Qué es MVP FLASH?</p>
			<p class="text-[#333333] text-base font-medium">MVP FLASH es un taller práctico donde aprendes a convertir tus ideas en prototipos funcionales en pocas horas, combinando metodologías ágiles y la última tecnología en inteligencia artificial.</p>
		</div>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Para quién es este evento?</p>
			<p class="text-[#333333] text-base font-regular">Este evento está diseñado para empresarios, líderes
				empresariales y cualquier persona interesada en innovar en sus proyectos o negocios, independientemente de su experiencia previa en tecnología.</p>
		</div>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Cuánto dura el taller?</p>
			<p class="text-[#333333] text-base font-regular">El taller tiene una duración de aproximadamente 3 horas, incluyendo sesiones interactivas y tiempo para networking.</p>
		</div>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Necesito tener conocimientos previos en inteligencia artificial o
				tecnología?</p>
			<p class="text-[#333333] text-base font-regular">No, no es necesario. MVP FLASH está diseñado para ser accesible y valioso tanto para principiantes como para aquellos con más experiencia en tecnología.</p>
		</div>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Hay algún costo para asistir al evento?</p>
			<p class="text-[#333333] text-base font-regular">No, el evento es gratuito. Bajo el patrocinio y objetivo de creación de comunidad de Let’s do it Now.</p>
		</div>
		<div class="pb-10">
			<p class="text-[#333333] text-2xl font-bold">¿Qué beneficios obtendré al asistir a este taller?</p>
			<p class="text-[#333333] text-base font-regular">Obtendrás habilidades prácticas en desarrollo rápido de proyectos, soluciones eficientes a desafíos empresariales, y acceso a una red de profesionales y líderes innovadores.</p>
		</div>
		<div>
			<p class="text-[#333333] text-2xl font-bold">¿Quién puede responder a mis preguntas adicionales sobre el evento?</p>
			<p class="text-[#333333] text-base font-regular">Para más información, puedes contactarnos haciendo click AQUÍ.
			</p>
		</div>
	</div>
</template>