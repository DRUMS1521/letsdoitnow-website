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
	language.value = lang(localStorage.getItem("Lang") === "Es").about;
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
});

const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

const chat = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}
</script>

<template>
	<div class="mx-auto max-w-screen-xl px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
				<img alt="" src="../../assets/about-banner.png" />
			</div>

			<div class="lg:py-24">
				<p class="text-[#263F28] text-lg font-bold">{{ language.text002 }}</p>
				<h2 class="text-3xl font-bold sm:text-4xl text-[#263F28]">{{ language.text003 }}
				</h2>
				<p class="text-[#333333] text-2xl">{{ language.text004 }}</p>
				<p class="my-8 text-[#333333]">
					{{ language.text005 }}
				</p>

			</div>
		</div>
	</div>

	<div class="">
		<div
			class="flex lg:flex-row sm:flex-col min-[320px]:flex-col mb-1 items-center bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] sm:p-4 min-[320px]:p-4 lg:p-0">
			<div class="rounded-lg">
				<img alt="" src="../../assets/team1.png" />
			</div>

			<div class="lg:p-20 mx-auto max-w-screen-xl">
				<p class="text-[#263F28] text-lg font-bold">TEAM WORK</p>
				<h2 class="text-3xl font-bold sm:text-4xl text-[#263F28]">{{ language.text019 }}</h2>
				<p class="my-8 text-[#333333]">
					{{ language.text020 }} </p>
			</div>
		</div>
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 overflow-hidden overflow-hidden">
			<div class="carrusel flex items-center gap-4">
				<img src="../../assets/team2.png" alt="" class="h-[200px]">
				<img src="../../assets/team3.png" alt="" class="h-[200px]">
				<img src="../../assets/team4.png" alt="" class="h-[200px]">
				<img src="../../assets/team5.png" alt="" class="h-[200px]">
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl my-36">
		<h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center">{{ language.text006 }}</h1>
		<p class="my-4 text-gray-600 text-base text-center mx-10">{{ language.text007 }}</p>
		<div class="grid grid-cols-2 m-10 items-center gap-8">
			<div>
				<img src="../../assets/team/team1.png" alt="" class="">
			</div>
			<div>
				<h2 class="text-xl font-bold sm:text-2xl text-[#263F28] text-left">{{ language.text017 }}</h2>
				<p class="my-4 text-gray-600 text-base text-left">{{ language.text008 }}</p>
				<button
					class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
					@click="$router.push('/about/team')">
					{{ language.text017 }}
				</button>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl my-24">
		<p class="my-4 text-gray-600 text-lg text-center mx-10">{{ language.text009 }}</p>
		<div class="flex flex-row gap-8 items-center justify-center mt-20">
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/escalator.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text010 }}</h1>
				<p class="text-base">{{ language.text011 }}</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/person_check.png" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text012 }}</h1>
				<p class="text-base">{{ language.text013 }}</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/globe_asia.png" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text014 }}</h1>
				<p class="text-base">{{ language.text015 }}</p>
			</div>
		</div>
	</div>
</template>