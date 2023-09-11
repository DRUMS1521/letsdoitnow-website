<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta';
import CardAbout from '../cards/cardAbout.vue';
import CardAboutGreens from '../cards/cardAboutGreens.vue';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title001: "", text002: "", text003: "", text004: "",text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", ext015: ""
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
	<div class="bg-image-3 md:h-[600px] flex flex-col animate-fade-in">
		<div class="mx-auto max-w-[950px] flex flex-col gap-20">
			<div class="flex flex-col text-left text-white w-[400px] ml-20 mt-[15%]">
				<h2 class="text-2xl font-bold text-white">{{ language.title001 }}</h2>
				<p class="font-medium pt-2">{{ language.text002 }}</p>
			</div>
			<div class="flex flex-col lg:flex-row justify-around items-center gap-3">
				<div class="flex flex-col justify-center  w-[300px] h-[200px] p-8 rounded-lg bg-white shadow-md transition hover:border-[#9CCE7C] hover:scale-105">
					<h1 class="font-bold text-xl text-[#263F28]">{{ language.text003 }}</h1>
					<p>{{ language.text004 }}</p>
				</div>
				<div class="flex flex-col justify-center  w-[300px] h-[200px] p-8 rounded-lg bg-white shadow-md transition hover:border-[#9CCE7C] hover:scale-105">
					<h1 class="font-bold text-xl text-[#263F28]">{{ language.text005 }}</h1>
					<p>{{ language.text006 }}</p>
				</div>
				<div class="flex flex-col justify-center  w-[300px] h-[200px] p-8 rounded-lg bg-white shadow-md transition hover:border-[#9CCE7C] hover:scale-105">
					<h1 class="font-bold text-xl text-[#263F28]">{{ language.text007 }}</h1>
					<p>{{ language.text008 }}</p>
				</div>
			</div>
			<a href="" class="flex justify-center">
			<button class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300" @click="freeConsulation">
				{{ language.text016 }}
			</button>
			</a>
			<div class="ml-20">
				<div class="my-8 w-[548px] h-[2px] bg-gray-600 sm:w-auto"></div>
				<p style="width: auto;">{{ language.text009 }}</p>
			</div>
		</div>
	</div>

	<div class="mt-[30%] mb-[10%] flex items-center justify-center mx-auto bg-image-4">
		<div class="h-[30rem] grid grid-cols-3 justify-items-center w-auto">
			<div class="flex items-start">
				<div class="flex flex-col justify-center w-[400px] h-[230px] p-8 bg-[#dff1dc]">
					<h2 class="font-bold text-xl text-[#333333]">{{ language.text010 }}</h2>
					<p>{{ language.text011 }}</p>
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex flex-col justify-center w-[400px] h-[230px] p-8 bg-[#c4e5bf]">
					<h2 class="font-bold text-xl text-[#333333]">{{ language.text012 }}</h2>
					<p>{{ language.text013 }}</p>
				</div>
			</div>
			<div class="flex items-end">
				<div class="flex flex-col justify-center w-[400px] h-[230px] p-8 bg-[#a4d79c]">
					<h2 class="font-bold text-xl text-[#333333]">{{ language.text014 }}</h2>
					<p>{{ language.text015 }}</p>
				</div>
			</div>
		</div>
	</div>

	<div class="">
		<h3 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center">{{ language?.text017 }} <span
				style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{
					language?.text018 }}</span> {{
		language?.text021 }}</h3>
		<p style="padding: 0 4rem;">{{ language.text019 }}</p>
		<div class="md:grid md:grid-cols-3 justify-items-center p-16">
			<div style="width: fit-content;">
				<img src="../../assets/team/juanpablo.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Juan Pablo Sierra</h2>
				<p>CEO/Co Founder</p>
			</div>
			<div>
				<img src="../../assets/team/cifu.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Andrés Cifuentes</h2>
				<p>CTO/Co Founder</p>
			</div>
			<div>
				<img src="../../assets/team/maline.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Maline García</h2>
				<p>RRHH/Co Founder</p>
			</div>
		</div>
		<div class="md:grid md:grid-cols-3 justify-items-center p-16">
			<div style="width: fit-content;">
				<img src="../../assets/team/joan.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Joan Ariza</h2>
				<p>CFO</p>
			</div>
			<div>
				<img src="../../assets/team/marysabel.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Marysabel Plata</h2>
				<p>Marketer</p>
			</div>
			<div>
				<img src="../../assets/team/daniela.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Daniela Gomez</h2>
				<p>UX/UI Designer</p>
			</div>
		</div>
		<div class="md:grid md:grid-cols-3 justify-items-center p-16">
			<div>
				<img src="../../assets/team/juanes.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Juan Esteban Paca</h2>
				<p>Sales</p>
			</div>
			<div style="width: fit-content;">
				<img src="../../assets/team/juandaniel.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Juan Daniel Velasquez</h2>
				<p>Scrum Master</p>
			</div>
			<div>
				<img src="../../assets/team/alejandra.png" alt="" style="width: 250px;">
				<h2 class="font-semibold" style="text-align: start; margin-block-end: 0;">Alejandra Martínez</h2>
				<p>Scrum Master</p>
			</div>
			
		</div>
		<div class="md:grid md:grid-cols-3 justify-items-center p-16">
			<div>
				<img src="../../assets/team/edinson.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Edinson Acevedo</h2>
				<p>Full Stack Dev</p>
			</div>
			<div style="width: fit-content;">
				<img src="../../assets/team/suyin.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Suyin Orihuen</h2>
				<p>Backend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/jahaziel.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Jahaziel Hernandez</h2>
				<p>Backend Dev</p>
			</div>
		</div>
		<div class="md:grid md:grid-cols-3 justify-items-center p-16">
			<div style="width: fit-content;">
				<img src="../../assets/team/jesus.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Jesús Bastidas</h2>
				<p>Frontend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/fernanda.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Olga Castaño</h2>
				<p>Frontend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/felipe.png" alt="" style="width: 250px;">
				<h2 class="font-medium" style="text-align: start; margin-block-end: 0;">Felipe Ladino</h2>
				<p>Frontend Dev</p>
			</div>
		</div>
		<a href="" class="flex justify-center mb-16">
			<button class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300" @click="chat">
				{{ language.text020 }}
			</button>
			</a>
	</div>
</template>