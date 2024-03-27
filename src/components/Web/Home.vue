<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta'
import Card from '../cards/card-1.vue'
import CardBlogCategory from '../cards/cardBlogCategory.vue';
import CardBlogResume from '../cards/cardBlogResume.vue';
import CardInformation from '../cards/cardInformation.vue'
import CardReview from '../cards/cardReview.vue';
import ZoomInAnimation from '../General/animations/ZoomInAnimation.vue';
import FadeLeftAnimation from '../General/animations/FadeLeftAnimation.vue';

/* function onBeforeMount(callback: () => void): void */

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title01: "", title02: "", title03: "", text001: "", text002: "", text003: "", text004: "", text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", text015: "", text016: "", text017: "", text018: "", text019: "", text020: "", text021: "", text022: "", text023: "", text024: "", text025: "", text026: "", text027: "", text028: "", text029: "", text030: ""
});

const viewProjects = ref<number>(1)

const viewAreas = ref<number>(1)

const quote = (): void => {
	window.open("https://7jywpogtw4m.typeform.com/to/RvV3yTQk", '_blank');
}
const bot = (): void => {
	window.open("https://chatbot.letsdoitnow.us/doitbot/chat", '_blank');
}
const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
} 

onBeforeMount(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").home;

	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);

});

</script>

<template>
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 animate-fade-right opacity-0 bg-image">
		<div class="lg:py-24">
			<h1 class="text-4xl font-bold sm:text-5xl text-[#263F28]">{{ language?.title01 }}<br><span class=""
					style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{
						language?.title02 }}</span><br>{{ language?.title03 }}</h1>
			<p class="mt-4 text-gray-600 text-lg">{{ language?.text001 }}</p>
			<div class="mt-4 flex flex-row items-center gap-7">

				<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer"
					@click="quote">
					<span class="absolute -end-full transition-all group-hover:end-4">
						<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</span>

					<span class="text-m font-bold transition-all group-hover:me-4">
						{{ language?.text002 }}
					</span>
				</a>

				<a @click="$router.push('/portfolio')">
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
						{{ language?.text003 }}
					</button>
				</a>

			</div>
			<div class="lg:w-[50%] mt-12 sm:w-[100%]">
				<p>{{ language.text037 }}</p>
			</div>
		</div>
	</div>

	<div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.text038 }}</h2>
<!-- 		<div class="flex flex-row items-center justify-center gap-10 lg:gap-32 overflow-auto"> -->	
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 overflow-hidden overflow-hidden">
			<div class="carrusel flex items-center gap-8">
				<img src="../../assets/brandLogos/sidoc.png" alt="" class="w-[211px] h-[86px] flex-shrink-0 ">
				<img src="../../assets/brandLogos/planium.png" alt="" class="w-[107px] h-[108px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/carrazo.png" alt="" class="w-[157px] h-[137px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/aliadago.png" alt="" class="w-[150px] h-[91px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/ajpenny.png" alt="" class="w-[174px] h-[130px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/managedproperty.png" alt="" class="w-[100px] h-[100px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/camelonair.png" alt="" class="w-[150px] h-[73px] flex-shrink-0 ml-4">
			</div>
		</div>		
	</div>

	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

		<div class="animate-fade-in opacity-0 text-center">
			<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28]">{{ language?.text008 }}</h2>
			<p class="my-4 text-gray-600 text-lg">{{ language?.text009 }}</p>
			<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer"
				@click="$router.push('/services')">
				<span class="absolute -end-full transition-all group-hover:end-4">
					<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</span>

				<span class="text-m font-bold transition-all group-hover:me-4">
					{{ language?.text010 }}
				</span>
			</a>
		</div>
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 justify-items-center lg:mx-auto max-w-screen-xl sm:mx-8">
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring
			shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[0.5px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>


				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img
						src="../../assets/icon-global.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text039 }}</h2>
					<p class="text-xl mt-4">{{ language.text040 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[1px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>
				
				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img src="../../assets/icon-pc.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text041 }}</h2>
					<p class="text-xl mt-4">{{ language.text042 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[1px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>
				
				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img src="../../assets/icon-web.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text044 }}</h2>
					<p class="text-xl mt-4">{{ language.text045 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[1px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>
				
				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img src="../../assets/icon-phone.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text046 }}</h2>
					<p class="text-xl mt-4">{{ language.text047 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden focus:outline-none focus:ring shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[1px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>
				
				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img src="../../assets/chart_data.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text048 }}</h2>
					<p class="text-xl mt-4">{{ language.text049 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring shadow-[0_4px_21px_3px_rgba(0,0,0,0.25)]"
				href="/services">
				<span
					class="absolute inset-y-0 left-0 w-[1px] bg-[#7ADC93] transition-all group-hover:w-full group-active:bg-[#7ADC93]"></span>
				
				<span class="relative text-sm font-medium text-[#333333] transition-colors group-hover:text-[#333333]">
					<img src="../../assets/cloud_done.svg" alt="" class="w-[60px]">
					<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{ language.text050 }}</h2>
					<p class="text-xl mt-4">{{ language.text051 }}</p>
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
						{{ language.text043 }}
					</button>
				</span>
			</a>
		</div>
	</div>

	<div class=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 overflow-hidden">
		<div class="carrusel flex flex-row gap-10">
		<div class="flex flex-row items-center gap-4">
			<div>
			<img src="../../assets/team/jesus.png" alt="" class="w-[100px] border rounded-full">
			</div>
			<div class="w-[300px]">
				<h1 class="font-semibold text-2xl text-[#263F28]">Jesus Bastidas</h1>
				<p class="font-medium text-xl text-[#475569]">Frontend Developer</p>
				<p class="font-medium">#javascript #vuejs</p>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<div>
			<img src="../../assets/team/felipe.png" alt="" class="w-[100px] border rounded-full">
			</div>
			<div class="w-[300px]">
				<h1 class="font-semibold text-2xl text-[#263F28]">felipe</h1>
				<p class="font-medium text-xl text-[#475569]">Fullstack Developer</p>
				<p class="font-medium">#javascript #vuejs #nodejs #backend</p>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<div>
			<img src="../../assets/team/brian.png" alt="" class="w-[100px] border rounded-full">
			</div>
			<div class="w-[300px]">
				<h1 class="font-semibold text-2xl text-[#263F28]">Brian Ochoa</h1>
				<p class="font-medium text-xl text-[#475569]">Product Owner</p>
				<p class="font-medium">#scrummaster</p>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<div>
			<img src="../../assets/team/jahaziel.png" alt="" class="w-[100px] border rounded-full">
			</div>
			<div class="w-[300px]">
				<h1 class="font-semibold text-2xl text-[#263F28]">Jahaziel Hernandez</h1>
				<p class="font-medium text-xl text-[#475569]">Backend Developer</p>
				<p class="font-medium">#javascript #python</p>
			</div>
		</div>
		<div class="flex flex-row items-center gap-4">
			<div>
			<img src="../../assets/team/viviana.png" alt="" class="w-[100px] border rounded-full">
			</div>
			<div class="w-[300px]">
				<h1 class="font-semibold text-2xl text-[#263F28]">Viviana Villabona</h1>
				<p class="font-medium text-xl text-[#475569]">UX/UI Designer</p>
				<p class="font-medium">#uxresearch #figma</p>
			</div>
		</div>
	</div>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.text052 }}</h2>
		<div class="flex lg:flex-row gap-10 items-center justify-between ml-[15%] mr-[15%] sm:flex-col min-[320px]:flex-col">
			<img src="../../assets/brandLogos/googlecloud.png" alt="" class="w-[360px] h-[84px]">
			<img src="../../assets/brandLogos/awsactivate.png" alt="" class="w-[365px] h-[57px]">
		</div>
	</div>

	<div class="bg-[#E1FFDC] p-4 lg:p-10 sm:p-20">
		<div class="mx-auto max-w-screen-xl grid grid-cols-1 gap-8 md:grid-cols-2">
			<div>
				<a class="block p-8">
					<img src="../../assets/icon-line.svg" alt="" class="jumping-element">

					<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text011 }}</h2>

					<p class="mt-1 text-m text-[#333333]">
						{{ language.text012 }}
					</p>
				</a>
			</div>
			<div>
				<a class="block p-8">
					<img src="../../assets/icon-draw.svg" alt="" class="jumping-element">

					<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text013 }}</h2>

					<p class="mt-1 text-m text-[#333333]">
						{{ language.text014 }}
					</p>
				</a>
			</div>
			<a class="block p-8">
				<img src="../../assets/icon-people.svg" alt="" class="jumping-element">

				<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text015 }}</h2>

				<p class="mt-1 text-m text-[#333333]">
					{{ language.text016 }}
				</p>
			</a>
			<div>
				<a class="block p-8">
					<img src="../../assets/icon-people-2.svg" alt="" class="jumping-element">

					<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text017 }}</h2>

					<p class="mt-1 text-m text-[#333333]">
						{{ language.text018 }}
					</p>
				</a>
			</div>
		</div>
	</div>

	<div class="bg-[#263F28] p-10">
		<div class="mx-auto max-w-screen-xl">
			<h2 class="text-2xl font-bold sm:text-3xl text-white text-center mb-4">{{ language.text053 }}</h2>
			<div class="flex lg:flex-row sm:flex-col min-[320px]:flex-col justify-between lg:p-20 items-center min-[320px]:p-4 sm:p-4">
				<h2 class="text-2xl font-bold sm:text-3xl text-white  mb-4">{{ language.text054 }}</h2>
				<img src="../../assets/Arrow-2.svg" alt="">
				<img src="../../assets/mvp-process.svg" alt="">
			</div>
			<div class="text-center">
				<p class="my-4 text-white text-lg">{{ language.text055 }}</p>
				<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer"
					@click="freeConsulation">
					<span class="absolute -end-full transition-all group-hover:end-4">
						<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</span>

					<span class="text-m font-bold transition-all group-hover:me-4">
						{{ language?.text056 }}
					</span>
				</a>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl flex lg:flex-row sm:flex-col min-[320px]:flex-col lg:p-20 min-[320px]:p-4 items-center mx-20">
		<div class="flex lg:flex-col sm:flex-row min-[320px]:flex-row">
			<a>
				<button @click="viewProjects = 1" 
					class="lg:w-[194px] lg:h-[150px] min-[320px]:w-[120px] rounded-t-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300" :class="{'border-l-[20px] border-l-[#79DB92]': viewProjects == 1}">
					<img src="../../assets/brandLogos/planium.svg" alt="">
				</button>
			</a>
			<a>
				<button @click="viewProjects = 2"
					class="lg:w-[194px] lg:h-[150px] min-[320px]:w-[120px] border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300" :class="{'border-l-[20px] border-l-[#79DB92]': viewProjects == 2}">
					<img src="../../assets/brandLogos/ajpenny.svg" alt="">
				</button>
			</a>
			<a>
				<button @click="viewProjects = 3"
					class="lg:w-[194px] lg:h-[150px] min-[320px]:w-[120px] rounded-b-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300" :class="{'border-l-[20px] border-l-[#79DB92]': viewProjects == 3}">
					<img src="../../assets/brandLogos/aliadago.svg" alt="">
				</button>
			</a>
		</div>
		<div class="grid lg:grid-cols-2 min-[320px]:grid-row-2 items-center lg:p-10 min-[320px]:p-4 gap-8 animate-fade-in" v-if="viewProjects == 1">
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

		<div class="grid lg:grid-cols-2 min-[320px]:grid-row-2 items-center lg:p-10 min-[320px]:p-4 gap-8 animate-fade-in" v-if="viewProjects == 2">
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

		<div class="grid lg:grid-cols-2 min-[320px]:grid-row-2 items-center lg:p-10 min-[320px]:p-4 gap-8 animate-fade-in" v-if="viewProjects == 3">
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

	<div class="px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8 pb-8 bg-[#263F28]">
		<div class="mx-auto max-w-screen-xl">
			<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
					<img alt="" src="../../assets/doit-banner.png" />
				</div>

				<div class="lg:py-24">
					<h2 class="text-3xl font-bold sm:text-4xl text-white">{{ language.text060 }}</h2>
					<p class="text-[#79DB92] text-2xl">{{ language.text061 }}</p>
					<p class="my-8 text-white">
						{{ language.text062 }}
					</p>
					<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer"
						@click="bot">
						<span class="absolute -end-full transition-all group-hover:end-4">
							<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none"
								viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</span>

						<span class="text-m font-bold transition-all group-hover:me-4">
							{{ language?.text063 }}
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl my-20 px-8">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-16">{{ language.text064 }}</h2>
		<div>
			<div class="sm:hidden">
				<label for="Tab" class="sr-only">Tab</label>

				<select id="Tab" class="w-full rounded-md border-gray-200">
					<option><a @click="viewAreas = 1">{{ language.text065 }}</a></option>
					<option><a @click="viewAreas = 2">{{ language.text066 }}</a></option>
					<option><a @click="viewAreas = 3">{{ language.text067 }}</a></option>
					<option><a @click="viewAreas = 4">{{ language.text068 }}</a></option>
					<option><a @click="viewAreas = 5">{{ language.text069 }}</a></option>
				</select>
			</div>

			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav class="-mb-px flex gap-6" aria-label="Tabs">
						<a @click="viewAreas = 1"
							class="shrink-0 border-b-2 px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700 cursor-pointer" :class="{'border-[#9CCE7C]': viewAreas == 1, 'border-transparent': viewAreas != 1}">
							{{ language.text065 }}
						</a>

						<a @click="viewAreas = 2"
							class="shrink-0 border-b-2 px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700 cursor-pointer" :class="{'border-[#9CCE7C]': viewAreas == 2, 'border-transparent': viewAreas != 2}">
							{{ language.text066 }}
						</a>

						<a @click="viewAreas = 3"
							class="shrink-0 border-b-2 px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700 cursor-pointer" :class="{'border-[#9CCE7C]': viewAreas == 3, 'border-transparent': viewAreas != 3}">
							{{ language.text067 }}
						</a>

						<a @click="viewAreas = 4"
							class="shrink-0 border-b-2 px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700 cursor-pointer" :class="{'border-[#9CCE7C]': viewAreas == 4, 'border-transparent': viewAreas != 4}">
							{{ language.text068 }}
						</a>
						<a @click="viewAreas = 5"
							class="shrink-0 border-b-2 px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700 cursor-pointer" :class="{'border-[#9CCE7C]': viewAreas == 5, 'border-transparent': viewAreas != 5}">
							{{ language.text069 }}
						</a>
					</nav>
				</div>
			</div>
		</div>
		<div v-if="viewAreas == 1">
			<p class="my-10">{{ language.text070 }}</p>
			<a @click="$router.push('/portfolio')">
				<button
					class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
					{{ language?.text075 }}
				</button>
			</a>
		</div>
		<div v-if="viewAreas == 2">
			<p class="my-10">{{ language.text071 }}</p>
			<a @click="$router.push('/portfolio')">
				<button
					class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
					{{ language?.text076 }}
				</button>
			</a>
		</div>
		<div v-if="viewAreas == 3">
			<p class="my-10">{{ language.text072 }}</p>
			<a @click="$router.push('/portfolio')">
				<button
					class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
					{{ language?.text077 }}
				</button>
			</a>
		</div>
		<div v-if="viewAreas == 4">
			<p class="my-10">{{ language.text073 }}</p>
			<a @click="$router.push('/portfolio')">
				<button
					class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
					{{ language?.text078 }}
				</button>
			</a>
		</div>
		<div v-if="viewAreas == 5">
			<p class="my-10">{{ language.text074 }}</p>
			<a @click="$router.push('/portfolio')">
				<button
					class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
					{{ language?.text079 }}
				</button>
			</a>
		</div>
	</div>

	<div class="p-20 bg-[#E1FFDC]">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.text019 }}</h2>
		<p class="text-[#333333] text-xl text-center">{{ language.text022 }}</p>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 grid lg:grid-cols-3 min-[320px]:grid-row items-center gap-4">
		<h2 class="mt-4 text-2xl font-bold text-[#263F28] text-center">{{ language.text029 }}</h2>

		<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 my-8">
			<div class="flex justify-start gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
			<div class="flex items-center gap-4">
				<div>
					<p class="mt-0.5 text-lg font-semibold text-gray-900">Juan José Alzate</p>
					<p class="mt-0.5 text-lg font-medium text-gray-900">AliadaGO</p>
				</div>
			</div>

			<p class="mt-4 text-gray-700">
				{{ language.text030 }}
			</p>
		</blockquote>

		<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 my-8">
			<div class="flex justify-start gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="grey"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
			<div class="flex items-center gap-4">
				<div>
					<p class="mt-0.5 text-lg font-semibold text-gray-900">Lorena Gómez</p>
					<p class="mt-0.5 text-lg font-medium text-gray-900">CEO Manufactruring</p>
				</div>
			</div>

			<p class="mt-4 text-gray-700">
				Our partnership with Let's Do It Now was transformative. They didn't just revamp our digital platform; they made it a dynamic user hub that truly stands out
			</p>
		</blockquote>

		<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 my-8">
			<div class="flex justify-start gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
			<div class="flex items-center gap-4">
				<div>
					<p class="mt-0.5 text-lg font-semibold text-gray-900">Nick Johnson</p>
					<p class="mt-0.5 text-lg font-medium text-gray-900">CTO FinTech Innovation</p>
				</div>
			</div>

			<p class="mt-4 text-gray-700">
				Let's Do It Now excelled in scaling our IT needs. Their team went beyond our expectations, delivering cutting-edge solutions essential for our growth.
			</p>
		</blockquote>

		<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 my-8">
			<div class="flex justify-start gap-0.5 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="grey"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
			<div class="flex items-center gap-4">
				<div>
					<p class="mt-0.5 text-lg font-semibold text-gray-900">Jesús Martínez</p>
					<p class="mt-0.5 text-lg font-medium text-gray-900">PM Healthcare Management</p>
				</div>
			</div>

			<p class="mt-4 text-gray-700">
				The team at Let's Do It Now is synonymous with timely and quality delivery. They enhanced our mobile app, elevating our customer satisfaction to new heights.
			</p>
		</blockquote>

		<div>
		<p class="mt-4 text-xl font-medium text-[#263F28] text-center">{{ language.text033 }}<br>{{ language.text034 }}
		</p>
		<div class="flex justify-center my-8">
			<a class="group relative inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-8 py-3 text-[#333333] focus:outline-none focus:ring active:bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] cursor-pointer"
				@click="freeConsulation">
				<span class="absolute -end-full transition-all group-hover:end-4">
					<svg class="h-5 w-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3" />
					</svg>
				</span>

				<span class="text-m font-bold transition-all group-hover:me-4">
					{{ language?.text035 }}
				</span>
			</a></div>
		</div>
	</div>
</template>

<style scoped>

</style>