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
		<h1 class="subtitle">{{ language.title001 }}<span class="rectangle">{{ language.title002 }}</span></h1>
		<p style="text-align: center;">{{ language.text002 }}<br>{{ language.text003 }}</p>
		<div class="layout-serv">
			<div class="description">
				<h2>{{ language.text004 }}</h2>
				<p>{{ language.text005 }}</p>
			</div>
			<div>
				<img src="../../assets/serv-img-1.svg" alt="" class="ref-img">
			</div>
		</div>

		<div class="layout-serv layout-serv-2">
			<div>
				<img src="../../assets/serv-img-2.svg" alt="" class="ref-img">
			</div>
			<div class="description-2">
				<h2>{{ language.text006 }}</h2>
				<p>{{ language.text007 }}</p>
			</div>
		</div>

		<div class="layout-serv">
			<div class="description">
				<h2>{{ language.text008 }}</h2>
				<p>{{ language.text009 }}</p>
			</div>
			<div>
				<img src="../../assets/serv-img-3.svg" alt="" class="ref-img">
			</div>
		</div>

		<div class="layout-serv layout-serv-2">
			<div>
				<img src="../../assets/serv-img-4.svg" alt="" class="ref-img">
			</div>
			<div class="description-2">
				<h2>{{ language.text010 }}</h2>
				<p>{{ language.text011 }}</p>
			</div>

		</div>
		<a href="">
			<button class="btn-style-deg" @click="freeConsulation">
				{{ language.text012 }}
			</button>
			</a>

</div></template>

 