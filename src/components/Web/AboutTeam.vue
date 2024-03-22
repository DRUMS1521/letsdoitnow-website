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
	window.open("https://calendly.com/letsdoitnow/webinar", '_blank')
}

const chat = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}
</script>

<template>
	<div class="mx-auto max-w-screen-xl my-36">
		<div class="grid grid-cols-2 m-10 items-center gap-8">
			<div>
				<img src="../../assets/team/team-founders.png" alt="" class="">
			</div>
			<div>
				<h2 class="text-xl font-bold sm:text-2xl text-[#263F28] text-left">{{ language.text021 }}</h2>
				<p class="my-4 text-gray-600 text-base text-left">{{ language.text022 }}</p>
			</div>
		</div>
	</div>

    <div class="mx-auto max-w-screen-xl my-36">
		<div class="grid grid-cols-2 m-10 items-center gap-8">
			<div>
				<h2 class="text-xl font-bold sm:text-2xl text-[#263F28] text-left">{{ language.text023 }}</h2>
				<p class="my-4 text-gray-600 text-base text-left">{{ language.text024 }}</p>
			</div>
            <div>
				<img src="../../assets/team/team-sales.png" alt="" class="">
			</div>
		</div>
	</div>

    <div class="mx-auto max-w-screen-xl my-36">
		<div class="grid grid-cols-2 m-10 items-center gap-8">
			<div>
				<img src="../../assets/team/team-dev.png" alt="" class="">
			</div>
			<div>
				<h2 class="text-xl font-bold sm:text-2xl text-[#263F28] text-left">{{ language.text025 }}</h2>
				<p class="my-4 text-gray-600 text-base text-left">{{ language.text026 }}</p>
			</div>
		</div>
	</div>
	</template>