<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import { lang } from '@/stores/SwitchLang'
	import { seoMeta } from '@/stores/SeoMeta';
	import { showToast, POSITION } from '../../stores/Toast';
	import spiner from '../General/SpinerComponent.vue';
	import router from '@/router';


	const spinner = ref<Boolean>(true);
	const documentos = ref<any>([]);

	const language = ref<any>({
		langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", 
	});
	
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */

	const getAllArticles = async () => {
		spinner.value = true;
		try {
			/* const response = await axios.post(`${URL}/notiondoitpage`); */
			const response = await axios.post(`${URL}/notiondoit`, {pageId: '27696e940dd042e1b07650b93900bf6e'});
			if (response.status === 200) {
				documentos.value = response.data;
			}else{
				showToast(`Error al cargar los datos`, 'error', 3000, POSITION.BOTTOM_CENTER)
			}
		} catch (err: any) {
			console.log(err)
			showToast(`Error al cargar los datos: ${err}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spinner.value = false;
	};

	onMounted(async() => {
		language.value = lang(localStorage.getItem("Lang") === "Es").portfolio
		seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
		await getAllArticles();
	})
</script>

<template>
	<div class="wrapper-port pt-16">
		<h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4 animation-fade-in"><span style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{ language.portfolio }}</span></h1>
		<p class="text-center">{{ language.text001 }}<br>{{ language.text002 }}</p>

		<div v-for="(article, i) in documentos.results" :key="i">
			<div class="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center items-center px-16 text-left mt-2">
				<div class="text-center" v-if="(i + 1) % 2 == 0" @click="router.push(`/portfolio/${article.id}`)">
					<img v-if="article?.cover?.external" :src="article.cover?.external?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
					<img v-else :src="article.cover?.file?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
				</div>
				<div class="my-12 cursor-pointer" @click="router.push(`/portfolio/${article.id}`)">
					<h2 class="subtitle">{{ article.properties?.Titulo?.title[0]?.plain_text }}</h2>
					<p class="mb-1">{{ article.properties?.Descripcion?.rich_text[0]?.plain_text }}</p>
					<a class="btn-underline" :href="'/portfolio/' + article.id">Lee la entrada aquí</a>
				</div>
				<div class="text-center" v-if="(i + 1) % 2 != 0" @click="router.push(`/portfolio/${article.id}`)">
					<img v-if="article?.cover?.external" :src="article.cover?.external?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
					<img v-else :src="article.cover?.file?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
				</div>
			</div>
			<div style="box-shadow: 1px 5px 5px; height: 1px; width: 90%; margin: 2rem auto;" v-if="documentos.results.length - 1 != i"></div>
		</div>
		<spiner v-if="spinner"/>
	</div>
</template>