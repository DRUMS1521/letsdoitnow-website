<script setup lang="ts">
	import { ref, onMounted, computed } from 'vue';
	import axios from 'axios';
	import { useRoute } from 'vue-router';
	import { showToast, POSITION } from '../../stores/Toast';
	import spiner from '../General/SpinerComponent.vue';
	import router from '@/router';

	const route = useRoute();
	const routeParam = ref<string>('');
	const langSelect = ref(localStorage.getItem("Lang"));

    const spinner = ref<Boolean>(true);
	const idPage = ref<string | undefined>(undefined);
	const article = ref<any>([]);
	const page = ref<any>([]);

    const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */

    const getPage = async () => {
        spinner.value = true;
        try {
            const response = await axios.post(`${URL}/notiondoitpage`, {pageId: idPage.value});
            if (response.status === 200) {
                page.value = response.data;
            }else{
                showToast(`Error al cargar los datos`, 'error', 3000, POSITION.BOTTOM_CENTER)
            }
        } catch (err: any) {
            showToast(`Error al cargar los datos: ${err}`, 'error', 3000, POSITION.BOTTOM_CENTER)
        }
        spinner.value = false;
    };

    const getArticles = async () => {
        spinner.value = true;
        try {
            const response = await axios.post(`${URL}/notiondoitpagecontent`, {pageId: idPage.value});
            if (response.status === 200) {
                article.value = response.data;
            }else{
                showToast(`Error al cargar los datos`, 'error', 3000, POSITION.BOTTOM_CENTER)
            }
        } catch (err: any) {
            showToast(`Error al cargar los datos: ${err}`, 'error', 3000, POSITION.BOTTOM_CENTER)
        }
        spinner.value = false;
    };

	const urlVideo = (url: string) => {
		if (url) {
			const urlSplit = url.split('/');
			return urlSplit[urlSplit.length - 1];
		}
	};

    onMounted(async () => {
		if (typeof route.params.id === 'string') {
			idPage.value = route.params.id;
		}
		await getPage();
        await getArticles();

		if (langSelect.value != page.value.properties.Lang.select.name) {
			idPage.value = page.value.properties.changeLang.url;
			await getPage();
			await getArticles();
			router.replace(`${route.matched[1].path}/${page.value.properties.changeLang.url}`)
		}
    });
</script>

<template>
	<!-- Titulo del articulo -->
	<div v-if="page?.cover?.external && page?.properties?.Titulo?.title[0].plain_text" :style="`background-image: url(${page?.cover?.external?.url})`" class="h-64 mt-8 p-8 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-zinc-900 grayscale">
		<h1 class="text-white text-4xl font-bold drop-shadow-lg max-w-2xl">{{ page?.properties?.Titulo?.title[0].plain_text }}</h1>
	</div>
	<div v-else-if="page?.properties?.Titulo?.title[0].plain_text" :style="`background-image: url(${page?.cover?.file?.url})`" class="h-64 mt-8 p-8 flex justify-center items-center bg-no-repeat bg-cover bg-center bg-zinc-900 grayscale">
		<h1 class="text-white text-4xl font-bold drop-shadow-lg max-w-2xl">{{ page?.properties?.Titulo?.title[0].plain_text }}</h1>
	</div>
	<!-- Fin Titulo del articulo -->
	
	<!-- Contenido -->
	<div v-for="block in article.results" class="px-6 pt-4 sm:px-8 xl:px-12 md:pt-12 text-left">

		<!-- Titulos 1 -->
		<div v-if="block?.type == 'heading_1'" class="max-w-screen-md mx-auto prose lg:prose-lg text-5xl">
			<h2>{{ block?.heading_1?.rich_text[0]?.plain_text }}</h2>
		</div>
		<!-- Fin Titulos 1 -->

		<!-- Titulos 2 -->
		<div v-if="block?.type == 'heading_2'" class="max-w-screen-md mx-auto prose lg:prose-lg text-4xl">
			<h3>{{ block?.heading_2?.rich_text[0]?.plain_text }}</h3>
		</div>
		<!-- Fin Titulos 2 -->

		<!-- Titulos 3 -->
		<div v-if="block?.type == 'heading_3'" class="max-w-screen-md mx-auto prose lg:prose-lg text-3xl">
			<h4>{{ block?.heading_3?.rich_text[0]?.plain_text }}</h4>
		</div>
		<!-- Fin Titulos 3 -->

		<!-- Parrafos -->
		<div v-if="block?.type == 'paragraph' && block?.paragraph?.rich_text[0]?.plain_text != ''" class="max-w-screen-md mx-auto prose lg:prose-lg">
			<p>
				<span v-for="text in block?.paragraph?.rich_text">
					<a class="text-lime-600" v-if="text.href" :href="text.href">{{ text.plain_text }}</a>
					<span v-else>{{ text.plain_text }}</span>
				</span>
			</p>
			<!-- <p>{{ block?.paragraph?.rich_text[0]?.plain_text }}</p> -->
		</div>
		<!-- Fin Parrafos -->

		<!-- Imagenes -->
		<div v-if="block?.type == 'image'" class="max-w-screen-md mx-auto prose lg:prose-lg">
			<img :src="block?.image?.file?.url" alt="">
		</div>
		<!-- Fin Imagenes -->

		<!-- Video -->
		<div v-if="block?.type == 'video'" class="max-w-screen-md mx-auto prose lg:prose-lg">
			<div class="aspect-w-16 aspect-h-9">
				<iframe :src="`https://www.youtube.com/embed/${urlVideo(block?.video?.external?.url)}`" frameborder="0" allowfullscreen></iframe>
			</div>
		</div>
		<!-- Fin Video -->

		<!-- Codigo -->
		<div v-if="block?.type == 'code'" class="max-w-screen-md mx-auto prose lg:prose-lg">
			<pre class="bg-slate-800 text-white text-left p-2 overflow-auto"><code>{{ block?.code?.rich_text[0]?.plain_text }}</code></pre>
		</div>
		<!-- Fin Codigo -->

	</div>
	<!-- Fin Contenido -->
	
	<spiner v-if="spinner"/>
</template>