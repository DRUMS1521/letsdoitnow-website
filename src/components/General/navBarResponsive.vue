<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { useRouter } from 'vue-router';

import menuIco from '../icons/menu-ico.vue'

interface LangInter {
	menu: {
		home: string;
		about: string;
		services: string;
		portfolio: string;
		blog: string;
		contact: string;
		doit: string;
		pricing: string;
	}
}

const language = ref<LangInter>({
	"menu": {
		"home": "",
		"about": "",
		"services": "",
		"portfolio": "",
		"blog": "",
		"contact": "",
		"doit": "",
		"pricing": ""
	}
});

const router = useRouter();
const showMobileMenu = ref<Boolean>(false);
const showMenu = () => {
	console.log("click");
	showMobileMenu.value = !showMobileMenu.value;
}

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es")
});


const isActive = (route: string) => {
	return router.currentRoute.value.path === route;
};
</script>

<template>
	<header class="bg-[#4d4d4d] m-4 rounded-lg sticky top-0 z-10">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="md:flex md:items-center md:gap-12">
					<a class="block text-teal-600" href="/">
						<span class="sr-only">{{ language.menu.home }}</span>
						<img src="../../assets/logo-header.svg" alt="">
					</a>
				</div>
				<div :class="showMobileMenu ? 'view' : 'noview'">
					<nav aria-label="Global" class="md:relative">
						<ul
							class="p-4 pb-2 drop-shadow-xl drop-shadow-xl md:flex items-center md:gap-6 text-sm absolute md:relative bg-white md:transparent right-0 md:right-auto top-16 md:top-auto md:static md:bg-transparent z-10">
							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/">
									{{ language.menu.home }}
								</a>
							</li>

							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/about">
									{{ language.menu.about }}
								</a>
							</li>

							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/services">
									{{ language.menu.services }}
								</a>
							</li>

							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/portfolio">
									{{ language.menu.portfolio }}
								</a>
							</li>

							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/blog">
									{{ language.menu.blog }}
								</a>
							</li>

							<li class="mb-4 md:mb-0">
								<a class="md:text-white text-black text-lg font-bold transition-all hover:bg-white hover:text-green-900 hover:pb-4 hover:pt-6 hover:px-6 hover:rounded-b-2xl"
									href="/pricing">
									{{ language.menu.pricing }}
								</a>
							</li>
						</ul>
					</nav>
				</div>

				<div class="flex items-center gap-4">
					<div class="sm:flex sm:gap-4">
						<a class="rounded-md bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-5 py-2.5 text-m font-bold text-[#333333] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
							href="/contact">
							{{ language.menu.contact }}
						</a>

						<div class="hidden sm:flex">
							<a class="rounded-md bg-none px-5 py-2.5 text-m font-bold text-white border border-[#79DB92] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:duration-300"
								href="https://chatbot.letsdoitnow.us/doitbot/chat">
								{{ language.menu.doit }}
							</a>
						</div>
					</div>

					<div class="block md:hidden">
						<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
							@click="showMenu()">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
								stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
@media screen and (max-width: 768px) {
	.view {
		display: block;
	}

	.noview {
		display: none;
	}
}</style>