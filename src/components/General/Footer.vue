<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import CardFooter from './../cards/cardFooter.vue';
import axios from 'axios';
import { showToast, POSITION } from '../../stores/Toast';

const language = ref<any>({
	allRights: "",
	newsletter: "",
	email: "",
	inforrmation: "",
	social: "",
	careers: "",
	resources: "",
	about: "",
	privacy: ""
});
const emailToSend = ref<string>("");

const sendEmail = async () => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailToSend.value)) {
		return showToast(`Ingrese un correo electrónico válido`, 'error', 3000, POSITION.BOTTOM_CENTER)
	}
	try {
		const response = await axios.post(`https://api-chatbot.letsdoitnow.us/api/mailchimp`, {
			email_address: emailToSend.value,
			status: 'subscribed',
		});
		if (response.status === 200) {
			showToast(`El Correo ${response.data.msg} guardado exitosamente`, 'success', 3000, POSITION.BOTTOM_CENTER)
			emailToSend.value = "";
		} else {
			showToast(`Error al guardar el correo`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
	} catch (err: any) {
		console.log(err)
		showToast(`Error al guardar el correo: ${err.response.data.title}`, 'error', 3000, POSITION.BOTTOM_CENTER)
	}
}

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").footer
});
</script>

<template>
	<footer class="bg-white">
		<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<div class="lg:grid lg:grid-cols-2">
				<div class="border-b border-gray-100 py-8 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16">
					<div class="block text-teal-600 lg:hidden">
						<img src="../../assets/LOGO.svg" alt="" class="w-24">
					</div>

					<div class="mt-8 space-y-4 lg:mt-0">
						<span class="hidden h-1 w-10 rounded bg-[#9cce7c] lg:block"></span>

						<div>
							<h2 class="text-2xl font-medium text-[#397a3e]">{{ language.newsletter }}</h2>
						</div>

						<form class="mt-6 w-full">
							<div
								class="rounded-md border border-gray-100 p-2 focus-within:ring sm:flex sm:items-center sm:gap-4">
								<input type="text" :placeholder="language.email" v-model="emailToSend" class="w-full border-none sm:text-sm" />

								<button value="" @click="sendEmail()"
									class="mt-1 w-full rounded bg-gradient-to-r from-[#79DB92] to-[#9CCE7C] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#333333] transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
									OK
								</button>
							</div>
						</form>
					</div>
				</div>

				<div class="py-8 lg:py-16 lg:pe-16">
					<div class="hidden text-teal-600 lg:block">
						<img src="../../assets/LOGO.svg" alt="" class="w-24">
					</div>

					<div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
						<div>
							<p class="font-medium text-gray-900">{{ language.inforrmation }}</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a href="/about" class="text-gray-700 transition hover:opacity-75">
										{{language.about}}
									</a>
								</li>

								<li>
									<a href="/careers" class="text-gray-700 transition hover:opacity-75">
										{{language.careers}}
									</a>
								</li>

								<li>
									<a href="/blog" class="text-gray-700 transition hover:opacity-75">
										Blog
									</a>
								</li>
							</ul>
						</div>

						<div>
							<p class="font-medium text-gray-900">{{ language.social }}</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a href="https://www.instagram.com/lets.doit.now/" class="text-gray-700 transition hover:opacity-75">
										Instagram
									</a>
								</li>

								<li>
									<a href="https://www.linkedin.com/company/letsdoitnowus/" class="text-gray-700 transition hover:opacity-75">
										Linkedin
									</a>
								</li>

								<li>
									<a href="https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20" class="text-gray-700 transition hover:opacity-75">
										Chat
									</a>
								</li>
							</ul>
						</div>

						<div>
							<p class="font-medium text-gray-900">{{ language.resources }}</p>

							<ul class="mt-6 space-y-4 text-sm">
								<li>
									<a href="#" class="text-gray-700 transition hover:opacity-75">
										{{language.privacy}}
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="mt-8 border-t border-gray-100 pt-8">
						<p class="mt-8 text-xs text-gray-500">
							{{ language.allRights }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>../../stores/Toast