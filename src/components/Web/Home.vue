<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta'
import Card from '../cards/card-1.vue'
import CardBlogCategory from '../cards/cardBlogCategory.vue';
import CardBlogResume from '../cards/cardBlogResume.vue';
import CardInformation from '../cards/cardInformation.vue'
import CardReview from '../cards/cardReview.vue';
import ZoomInAnimation from '../General/animations/ZoomInAnimation.vue';
import FadeLeftAnimation from '../General/animations/FadeLeftAnimation.vue';

/* function onBeforeMount(callback: () => void): void */

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title01: "", title02: "", title03: "", text001: "", text002: "", text003: "", text004: "", text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", text015: "", text016: "", text017: "", text018: "", text019: "", text020: "", text021: "", text022: "", text023: "", text024: "", text025: "", text026: "", text027: "", text028: "", text029: "", text030: ""
});

const quote = (): void => {
	window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J", '_blank');
}
const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}
onBeforeMount(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").home;

	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);

});

</script>

<template>
	<div class=" px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 animate-fade-right opacity-0 bg-image">
		<div class="lg:py-24">
			<h1 class="text-4xl font-bold sm:text-5xl text-[#263F28]">{{ language?.title01 }}<br><span class=""
					style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{
						language?.title02 }}</span><br>{{
		language?.title03 }}</h1>
			<p class="mt-4 text-gray-600 text-lg">{{ language?.text001 }}</p>
			<div class="mt-4 flex flex-row items-center gap-7">
				<a>
					<button
						class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
						@click="quote">
						{{ language?.text002 }}
					</button>
				</a>
				<a @click="$router.push('/portfolio')">
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
						{{ language?.text003 }}
					</button>
				</a>
			</div>
		</div>
	</div>

	<div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 bg-image-2 z-0">

		<div class="animate-fade-in opacity-0 text-center">
			<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28]">{{ language?.text008 }}</h2>
			<p class="my-4 text-gray-600 text-lg">{{ language?.text009 }}</p>
			<a @click="$router.push('/services')">
				<button
					class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
					{{ language?.text010 }}
				</button>
			</a>
		</div>
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 justify-items-center">
			<a class="w-60 flex flex-col items-center rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-global.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-xl font-bold text-[#333333] text-center">{{ language.text004 }}</h2>
			</a>
			<a class="w-60 flex flex-col items-center rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-pc.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-xl font-bold text-[#333333] text-center">{{ language.text005 }}</h2>
			</a>
			<a class="w-60 flex flex-col items-center rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-phone.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-xl font-bold text-[#333333] text-center">{{ language.text006 }}</h2>
			</a>
			<a class="w-60 flex flex-col items-center rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-web.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-xl font-bold text-[#333333] text-center">{{ language.text007 }}</h2>
			</a>
		</div>


	</div>

	<div class="bg-[#E1FFDC] grid grid-cols-1 gap-8 md:grid-cols-2 p-8 lg:p-60 sm:p-20">
		<div>
			<a class="block p-8" href="">
				<img src="../../assets/icon-line.svg" alt="" class="jumping-element">

				<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text011 }}</h2>

				<p class="mt-1 text-m text-[#333333]">
					{{ language.text012 }}
				</p>
			</a>
		</div>
		<div>
			<a class="block p-8" href="">
				<img src="../../assets/icon-draw.svg" alt="" class="jumping-element">

				<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text013 }}</h2>

				<p class="mt-1 text-m text-[#333333]">
					{{ language.text014 }}
				</p>
			</a>
		</div>
		<a class="block p-8" href="">
			<img src="../../assets/icon-people.svg" alt="" class="jumping-element">

			<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text015 }}</h2>

			<p class="mt-1 text-m text-[#333333]">
				{{ language.text016 }}
			</p>
		</a>
		<div>
			<a class="block p-8" href="">
				<img src="../../assets/icon-people-2.svg" alt="" class="jumping-element">

				<h2 class="mt-4 text-xl font-semibold text-[#397A3E]">{{ language.text017 }}</h2>

				<p class="mt-1 text-m text-[#333333]">
					{{ language.text018 }}
				</p>
			</a>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 text-center">
		<h3 class="text-2xl font-bold sm:text-3xl text-[#263F28]">{{ language?.text019 }} <span
				style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{
					language?.text020 }}</span> {{
		language?.text021 }}</h3>
		<p class="my-4 text-gray-600 text-lg">{{ language?.text022 }}</p>
		<div class="">
			<a @click="$router.push('/blog')">
				<button
					class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
					{{ language?.text023 }}
				</button>
			</a>
		</div>
	</div>


	<div class="bg-[#79DB92] p-5">
		<h1 class="text-[#333] font-semibold text-lg text-center mb-4">{{ language.text036 }}</h1>
		<div
			class="mx-auto max-w-screen-xl px-4 8 sm:px-6 lg:px-8 flex flex-col justify-between items-center lg:flex lg:flex-row">
			<a href=""
				class="text-black hover:text-gray-600 transition-colors duration-300 hover:after:bg-black hover:after:w-full">{{
					language.text024 }}</a>
			<a href=""
				class="text-black hover:text-gray-600 transition-colors duration-300 hover:after:bg-black hover:after:w-full">{{
					language.text025 }}</a>
			<a href=""
				class="text-black hover:text-gray-600 transition-colors duration-300 hover:after:bg-black hover:after:w-full">{{
					language.text026 }}</a>
			<a href=""
				class="text-black hover:text-gray-600 transition-colors duration-300 hover:after:bg-black hover:after:w-full">{{
					language.text027 }}</a>
			<a href=""
				class="text-black hover:text-gray-600 transition-colors duration-300 hover:after:bg-black hover:after:w-full">{{
					language.text028 }}</a>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="mt-4 text-2xl font-bold text-[#263F28] text-center">{{ language.text029 }}</h2>

			<blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8 my-8">
				<div class="flex items-center gap-4">
					<img alt="Man" src="../../assets/clients/aliaga_go.png" class="h-14 w-14 rounded-full object-cover" />

					<div>
						<p class="mt-0.5 text-lg font-semibold text-gray-900">Juan José Alzate</p>
						<p class="mt-0.5 text-lg font-medium text-gray-900">AliadaGO</p>
					</div>
				</div>

				<p class="mt-4 text-gray-700">
					{{language.text030}}
				</p>
			</blockquote>
		<p class="mt-4 text-xl font-medium text-[#263F28] text-center">{{ language.text033 }}<br>{{ language.text034 }}</p>
		<div class="flex justify-center my-8">
			<button class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300" @click="freeConsulation">
				{{ language.text035 }}
			</button>
		</div>
	</div>
</template>

<style scoped>

</style>