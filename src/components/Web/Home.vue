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
	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 animate-fade-right opacity-0 bg-image">
		<div class="lg:py-24">
			<h1 class="text-4xl font-bold sm:text-5xl text-[#263F28]">{{ language?.title01 }}<br><span class=""
					style="background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);">{{
						language?.title02 }}</span><br>{{ language?.title03 }}</h1>
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
			<div class="w-[50%] mt-12">
				<p>{{language.text037}}</p>
			</div>
		</div>
	</div>

	<div class="px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{language.text038}}</h2>
		<div class="flex flex-row items-center justify-center gap-10 lg:gap-32">
			<img src="../../assets/brandLogos/sidoc.png" alt="" class="w-[211px] h-[86px]">
			<img src="../../assets/brandLogos/planium.png" alt="" class="w-[107px] h-[108px]">
			<img src="../../assets/brandLogos/carrazo.png" alt="" class="w-[157px] h-[137px]">
			<img src="../../assets/brandLogos/aliadago.png" alt="" class="w-[150px] h-[91px]">
			<img src="../../assets/brandLogos/ajpenny.png" alt="" class="w-[174px] h-[130px]">
			<img src="../../assets/brandLogos/managedproperty.png" alt="" class="w-[100px] h-[100px]">
			<img src="../../assets/brandLogos/camelonair.png" alt="" class="w-[150px] h-[73px]">
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

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
		<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 justify-items-center">
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-global.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text039}}</h2>
				<p class="text-xl mt-4">{{language.text040}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-pc.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text041}}</h2>
				<p class="text-xl mt-4">{{language.text042}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-web.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text044}}</h2>
				<p class="text-xl mt-4">{{language.text045}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/icon-phone.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text046}}</h2>
				<p class="text-xl mt-4">{{language.text047}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/chart_data.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text048}}</h2>
				<p class="text-xl mt-4">{{language.text049}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
			<a class="w-[380px] h-[366px] lg:w-[380px] lg:h-[366px] grid grid-rows-3 items-right rounded-xl p-8 shadow-xl transition hover:border-[#9CCE7C] hover:shadow-[#9CCE7C]/60 hover:scale-105"
				href="">
				<img src="../../assets/cloud_done.svg" alt="" class="w-[60px]">

				<h2 class="mt-4 text-3xl font-bold text-[#333333]">{{language.text050}}</h2>
				<p class="text-xl mt-4">{{language.text051}}</p>
				<button
					class="text-m font-bold text-[#333333] underline relative text-gray-600 hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full mt-10">
					{{language.text043}}
				</button>
			</a>
		</div>
	</div>

	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8 ">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{language.text052}}</h2>
		<div class="flex flex-row gap-10 items-center justify-between ml-[15%] mr-[15%]">
			<img src="../../assets/brandLogos/googlecloud.png" alt="" class="w-[360px] h-[84px]">
			<img src="../../assets/brandLogos/awsactivate.png" alt="" class="w-[365px] h-[57px]">
		</div>
	</div>

	<div class="bg-[#E1FFDC] p-4 lg:p-10 sm:p-20">
		<div class="mx-auto max-w-screen-xl grid grid-cols-1 gap-8 md:grid-cols-2">
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
		</div></div>
	</div>

	<div class="bg-[#263F28] p-10">
		<div class="mx-auto max-w-screen-xl">
		<h2 class="text-2xl font-bold sm:text-3xl text-white text-center mb-4">{{ language.text053 }}</h2>
		<div class="flex flex-row justify-between p-20 items-center">
			<h2 class="text-2xl font-bold sm:text-3xl text-white  mb-4">{{ language.text054 }}</h2>
			<img src="../../assets/Arrow-2.svg" alt="">
			<img src="../../assets/mvp-process.svg" alt="">
		</div>
		<div class="text-center">
			<p class="my-4 text-white text-lg">{{ language.text055 }}</p>
			<a @click="$router.push('/services')">
				<button
					class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
					{{ language.text056 }}
				</button>
			</a>
		</div></div>
	</div>

	<div class="mx-auto max-w-screen-xl flex flex-row p-20 items-center mx-20">
		<div class="flex flex-col">
			<a>
				<button
					class="w-[194px] h-[150px] rounded-t-md border-2 border-l-[20px] border-l-[#79DB92]  border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300">
					<img src="../../assets/brandLogos/planium.png" alt="">
				</button>
			</a>
			<a>
				<button
					class="w-[194px] h-[150px] border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300">
					<img src="../../assets/brandLogos/ajpenny.png" alt="">
				</button>
			</a>
			<a>
				<button
					class="w-[194px] h-[150px] rounded-b-md border-2 border-[#CDCDCD] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-100 hover:duration-300">
					<img src="../../assets/brandLogos/aliadago.png" alt="">
				</button>
			</a>
		</div>
		<div class="flex flex-row items-center p-10">
			<div>
				<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-4">{{ language.text057 }}</h2>
				<p class="my-4 text-[#333333] text-lg">{{ language.text058 }}</p>
				<a @click="$router.push('/portfolio')">
					<button
						class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
						{{ language.text059 }}
					</button>
				</a>
			</div>
			<div>
				<img src="../../assets/planium-port.png" alt="">
			</div>
		</div>
	</div>

	<div class="px-4 pt-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8 bg-[#263F28]">
		<div class="mx-auto max-w-screen-xl">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
				<img alt="" src="../../assets/doit-banner.png" />
			</div>

			<div class="lg:py-24">
				<h2 class="text-3xl font-bold sm:text-4xl text-white">{{ language.text060 }}</h2>
				<p class="text-[#79DB92] text-2xl">{{ language.text061 }}</p>
				<p class="my-8 text-white">
					{{ language.text062 }}
				</p>

				<a @click="$router.push('/portfolio')">
					<button
						class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300">
						{{ language.text063 }}
					</button>
				</a>
			</div>
		</div></div>
	</div>

	<div class="mx-auto max-w-screen-xl my-20">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-left mb-16">{{ language.text064 }}</h2>
		<div>
			<div class="sm:hidden">
				<label for="Tab" class="sr-only">Tab</label>

				<select id="Tab" class="w-full rounded-md border-gray-200">
					<option>{{ language.text065 }}</option>
					<option>{{ language.text066 }}</option>
					<option>{{ language.text067 }}</option>
					<option>{{ language.text068 }}</option>
					<option>{{ language.text069 }}</option>
				</select>
			</div>

			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav class="-mb-px flex gap-6" aria-label="Tabs">
						<a href="#"
							class="shrink-0 border-b-2 border-[#9CCE7C] px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700">
							{{ language.text065 }}
						</a>

						<a href="#"
							class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700">
							{{ language.text066 }}
						</a>

						<a href="#"
							class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700">
							{{ language.text067 }}
						</a>

						<a href="#"
							class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700">
							{{ language.text068 }}
						</a>
						<a href="#"
							class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-xl font-bold text-[#333333] hover:border-gray-300 hover:text-gray-700">
							{{ language.text069 }}
						</a>
					</nav>
				</div>
			</div>
		</div>
		<p class="my-10">{{ language.text070 }}</p>
			<a @click="$router.push('/portfolio')">
					<button
						class="text-m font-bold text-[#333333] underline relative text-[#333333] hover:text-black transition-colors duration-300 hover:after:bg-black hover:after:w-full">
						{{ language?.text075 }}
					</button>
				</a>
	</div>

	<div class="p-20 bg-[#E1FFDC]">
		<h2 class="text-2xl font-bold sm:text-3xl text-[#263F28] text-center mb-4">{{ language.text019 }}</h2>
			<p class="text-[#333333] text-xl text-center">{{ language.text022 }}</p>
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
				{{ language.text030 }}
			</p>
		</blockquote>
		<p class="mt-4 text-xl font-medium text-[#263F28] text-center">{{ language.text033 }}<br>{{ language.text034 }}
		</p>
		<div class="flex justify-center my-8">
			<button
				class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
				@click="freeConsulation">
				{{ language.text035 }}
			</button>
		</div>
	</div>
</template>

<style scoped></style>