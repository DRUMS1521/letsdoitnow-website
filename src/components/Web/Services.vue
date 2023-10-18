<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title001: "", title002: "", text002: "", text003: "", text004: "", text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: ""
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").services
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
});

const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}
</script>

<template>
	<div class="m-8">
		<h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.title001 }}<span style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{ language.title002 }}</span></h1>
		<p style="text-align: center;">{{ language.text002 }}<br>{{ language.text003 }}</p>
		<div class="grid grid-cols-2 items-center justify-items-center">
			<div class="bg-[#dff1dc] p-8 rounded-lg shadow-md animate-fade-left">
				<h2 class="font-bold text-xl text-[#333]">{{ language.text004 }}</h2>
				<p>{{ language.text005 }}</p>
			</div>
			<div class="animate-fade-right">
				<img src="../../assets/serv-img-1.svg" alt="" class="w-[350px] my-8">
			</div>
		</div>

		<div class="grid grid-cols-2 items-center justify-items-center">
			<div class="animate-fade-left">
				<img src="../../assets/serv-img-2.svg" alt="" class="w-[350px] my-8">
			</div>
			<div class="bg-[#dff1dc] p-8 rounded-lg shadow-md animate-fade-right">
				<h2 class="font-bold text-xl text-[#333]">{{ language.text006 }}</h2>
				<p>{{ language.text007 }}</p>
			</div>
		</div>

		<div class="grid grid-cols-2 items-center justify-items-center">
			<div class="bg-[#dff1dc] p-8 rounded-lg shadow-md animate-fade-left">
				<h2 class="font-bold text-xl text-[#333]">{{ language.text008 }}</h2>
				<p>{{ language.text009 }}</p>
			</div>
			<div class="animate-fade-right">
				<img src="../../assets/serv-img-3.svg" alt="" class="w-[350px] my-8">
			</div>
		</div>

		<div class="grid grid-cols-2 items-center justify-items-center">
			<div class="animate-fade-left">
				<img src="../../assets/serv-img-4.svg" alt="" class="w-[350px] my-8">
			</div>
			<div class="bg-[#dff1dc] p-8 rounded-lg shadow-md animate-fade-right">
				<h2 class="font-bold text-xl text-[#333]">{{ language.text010 }}</h2>
				<p>{{ language.text011 }}</p>
			</div>

		</div>
		<a href="" class="flex justify-center">
			<button class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300" @click="freeConsulation">
				{{ language.text012 }}
			</button>
		</a>

	</div>
</template>