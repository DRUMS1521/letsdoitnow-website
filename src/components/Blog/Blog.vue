<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import CardBlogCategory from '../cards/cardBlogCategory.vue';
	import CardBlogResume from '../cards/cardBlogResume.vue';
	import { showToast, POSITION } from '../../stores/Toast';
	import spiner from '../General/SpinerComponent.vue';
	import router from '@/router';


	const spinner = ref<Boolean>(true);
	const documentos = ref<any>([]);

	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */

	const getAllArticles = async () => {
		spinner.value = true;
		try {
			/* const response = await axios.post(`${URL}/notiondoitpage`); */
			const response = await axios.post(`${URL}/notiondoit`, {pageId: '41d9c321a8ab4d62a2877a6a90c2d836'});
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

	onMounted(async () => {
		await getAllArticles();
	});
</script>

<template>

	<div v-for="(article, i) in documentos.results" :key="i">
		<div class="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center items-center px-16 text-left mt-2">
			<div class="text-center" v-if="(i + 1) % 2 == 0" @click="router.push(`/blog/${article.id}`)">
				<img :src="article.cover?.external?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
			</div>
			<div class="my-12 cursor-pointer" @click="router.push(`/blog/${article.id}`)">
				<h2 class="subtitle">{{ article.properties?.Titulo?.title[0]?.plain_text }}</h2>
				<p class="mb-1">{{ article.properties?.Descripcion?.rich_text[0]?.plain_text }}</p>
				<a class="btn-underline" :href="'/blog/' + article.id">Lee la entrada aquí</a>
			</div>
			<div class="text-center" v-if="(i + 1) % 2 != 0" @click="router.push(`/blog/${article.id}`)">
				<img :src="article.cover?.external?.url" class="cursor-pointer" alt="" style="max-width: 100%; max-height: 350px;">
			</div>
		</div>
		<div style="box-shadow: 1px 5px 5px; height: 1px; width: 90%; margin: 2rem auto;" v-if="documentos.results.length - 1 != i"></div>
	</div>
	<spiner v-if="spinner"/>

</template>