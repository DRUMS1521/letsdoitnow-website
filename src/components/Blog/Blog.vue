<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import CardBlogCategory from '../cards/cardBlogCategory.vue';
	import CardBlogResume from '../cards/cardBlogResume.vue';
	import { showToast, POSITION } from '../../stores/Toast';
	import spiner from '../General/SpinerComponent.vue';


	const spinner = ref<Boolean>(false);
	const documentos = ref<any>([]);

	
	/* const URL = 'https://api-chatbot.letsdoitnow.us/api'; */

	const getAllArticles = async () => {
		spiner.value = true;
		try {
			const response = await axios.get(`http://localhost:3000/api/notiondoit`);
			/* const response = await axios.get(`https://api-chatbot.letsdoitnow.us/api/notiondoit`); */
			if (response.status === 200) {
				documentos.value = response;
			}else{
				showToast(`Error al cargar los datos`, 'error', 3000, POSITION.BOTTOM_CENTER)
			}
			console.log(response)
		} catch (err: any) {
			console.log(err)
			showToast(`Error al cargar los datos: ${err}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spiner.value = false;
	};

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

	<spiner v-if="spinner"/>

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