<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import { lang } from '../../stores/SwitchLang';
	import CardFooter from './../cards/cardFooter.vue';
	import axios from 'axios';
	import  { showToast, POSITION } from '../../stores/Toast';

	const language = ref < any > ({
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
	const emailToSend = ref < string > ("");

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
			}else{
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
	<div class="line-f mt-1"></div>
	<div class="wrapper-f1 mb-2">
		<div class="layout-f1">
			<img src="../../assets/LOGO.svg" alt="">
			<p>{{ language.allRights }}</p>
			<h2 class="subtitle-2">{{ language.newsletter }}</h2>
			<div class="input">
				<input class="input-content" type="text" :placeholder="language.email" v-model="emailToSend">
				<input class="input-button cursor-p" type="button" value="" @click="sendEmail()">
			</div>
		</div>
		<div class="layout-f2">
			<h3>{{ language.inforrmation }}</h3>
			<card-footer :textFooter="language.about" :link1="'/about'" :textFooter2="language.careers" :link2="'/careers'" :textFooter3="'Blog'" :link3="'blog'" />
		</div>
		<div class="layout-f2">
			<h3>{{ language.social }}</h3>
			<card-footer :textFooter="'Instagram'" :link1="'https://www.instagram.com/lets.doit.now/'" :textFooter2="'Linkedin'" :link2="'https://www.linkedin.com/company/letsdoitnowus/'" :textFooter3="'Chat'" :link3="'https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20'" />
		</div>
		<div class="layout-f2">
			<h3>{{ language.resources }}</h3>
			<card-footer :textFooter="language.privacy" />
		</div>
	</div>
</template>../../stores/Toast