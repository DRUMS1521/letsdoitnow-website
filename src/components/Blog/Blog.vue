<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import CardBlogCategory from '../cards/cardBlogCategory.vue';
	import CardBlogResume from '../cards/cardBlogResume.vue';


	const spinner = ref<Boolean>(false);
	const documentos = ref<any>([]);

	const getAllArticles = async () => {
		spinner.value = true;
		const NOTION_API_URL = 'https://api.notion.com/v1/';
		const NOTION_TOKEN = 'secret_sBX7qRpF7TFkuHuCvgPisR9tmXRpWEaZJE6334QtE9k';
		const databaseId = 'd5fe6caffd084bff9e6710bc2750f0c7';

		const res = await axios.post(`${NOTION_API_URL}databases/${databaseId}/query`, {}, {
			headers: {
				'Authorization': `Bearer ${NOTION_TOKEN}`,
				'Notion-Version': '2021-05-13'
			}
		});
		console.log(res.data);
		
		spinner.value = false;
	};
	/* const documentos = ref<any>([]);
	const URL = 'https://api-chatbot.letsdoitnow.us/api';

	const getAllArticles = async () => {
		spinner.value = true;
		let token = JSON.parse(localStorage.getItem('user')) | '';
		try {
			const res = await axios.post(`${URL}/chats/expert`, {"userId": "64d5d5d3877039bb218d3702", "expertId": "64d5d76f24206155ff312cc6"}, {});
			dataHistory.value = res.data.slice().reverse();
		} catch (error) {
			console.log(error);
		}
		spinner.value = false;
	}; */

	onMounted(async () => {
		await getAllArticles();
	});
</script>

<template>
	<div class="wrapper-blog">
		<div class="last-entry">
			<h1 class="subtitle">Norem ipsum dolor sit amet, consectetur adipiscing elit. <span class="rectangle">Etiam eu turpis</span> molestie, dictum est a</h1>
			<p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum  est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
			<button class="btn-underline" style="margin-top: 2rem;">Lee la entrada aquí</button>
		</div>
		<div>
			<img src="../../assets/img-blog-background.png" alt="">
		</div>
	</div>

	<div class="line-port"></div>

	<div class="wrapper-blog-2">
		<CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'" />
		<CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'" />
		<CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'" />
	</div>

</template>

<style>
	.wrapper-blog {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		padding: 0 4rem;
	}

	.last-entry {
		margin: 3rem;
	}

	.wrapper-blog-2 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;
	}
</style>