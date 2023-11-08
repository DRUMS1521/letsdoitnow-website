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
	<div class="px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8 bg-image-5">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mx-auto max-w-screen-xl">
			<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
				<img alt="" src="../../assets/img-services.png" />
			</div>

			<div class="lg:py-24">
				<h2 class="text-3xl font-bold sm:text-4xl text-[#263F28]">{{ language.title001 }}</h2>
				<p class="text-[#333333] text-2xl">{{ language.title002 }}</p>
				<p class="my-8 text-[#333333]">
					{{ language.text002 }}
				</p>
				<a @click="$router.push('/portfolio')">
					<button
						class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
						{{ language.text003 }}
					</button>
				</a>
			</div>
		</div>
	</div>

	<div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.text004 }}</h2>
<!-- 		<div class="flex flex-row items-center justify-center gap-10 lg:gap-32 overflow-auto"> -->	
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-14 overflow-hidden overflow-hidden">
			<div class="carrusel flex items-center gap-8">
				<img src="../../assets/brandLogos/sidoc.png" alt="" class="w-[211px] h-[86px] flex-shrink-0 ">
				<img src="../../assets/brandLogos/planium.png" alt="" class="w-[107px] h-[108px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/carrazo.png" alt="" class="w-[157px] h-[137px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/aliadago.png" alt="" class="w-[150px] h-[91px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/ajpenny.png" alt="" class="w-[174px] h-[130px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/managedproperty.png" alt="" class="w-[100px] h-[100px] flex-shrink-0 ml-4">
				<img src="../../assets/brandLogos/camelonair.png" alt="" class="w-[150px] h-[73px] flex-shrink-0 ml-4">
			</div>
		</div>		
	</div>

	<div class="bg-[#dff1dc] px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
			<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text005 }}</h2>
			<p>{{ language.text006 }}</p>
		</div>
	</div>

	<div class="bg-white px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text007 }}</h2>
		<p>{{ language.text009 }}</p></div>
	</div>

	<div class="bg-[#dff1dc] px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text010 }}</h2>
		<p>{{ language.text011 }}</p></div>
	</div>

	<div class="bg-white px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text012 }}</h2>
		<p>{{ language.text013 }}</p></div>
	</div>

	<div class="bg-[#dff1dc] px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text014 }}</h2>
		<p>{{ language.text015 }}</p></div>
	</div>

	<div class="bg-white px-32 py-20">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="font-bold text-2xl text-[#333] mb-4">{{ language.text016 }}</h2>
		<p>{{ language.text017 }}</p></div>
	</div>

	<div class="mt-10 mx-auto max-w-screen-xl">
		<h1 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center">{{ language.text018 }}</h1>
		<p class="my-4 text-gray-600 text-base text-center mx-10">{{ language.text019 }}</p>
		<div class="flex flex-row gap-8 items-center justify-center mt-20">
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/lang.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text020 }}</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/frameworks.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">Frameworks</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/mobile.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text021 }}</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
		</div>
		<div class="flex flex-row gap-8 items-center justify-center mt-10">
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/web.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">Web</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/database.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text022 }}</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
			<div class="w-[350px] h-[190px]">
				<img src="../../assets/cloud.svg" alt="">
				<h1 class="font-bold text-[#333333] mb-2">{{ language.text023 }}</h1>
				<p class="text-base">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor
					et.</p>
			</div>
		</div>
	</div>

	<div class="bg-[#263F28] px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 items-center justify-center">
		<div class="mx-auto max-w-screen-xl flex flex-row ">
		<div class="lg:py-24 w-[600px]">
			<p class="text-white text-lg font-bold">{{ language.text024 }}</p>
			<h2 class="text-3xl font-bold sm:text-4xl text-white">{{ language.text025 }}
			</h2>
			<p class="my-8 text-white">
				{{ language.text026 }}
			</p>
		<a @click="$router.push('/portfolio')">
			<button
				class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
				{{ language.text027 }}
			</button>
		</a>
	</div>
	<div>
		<img src="../../assets/img-scale-services.svg" alt="">
	</div></div>
</div></template>

 
