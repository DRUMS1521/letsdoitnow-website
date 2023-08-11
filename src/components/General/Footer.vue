<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import CardFooter from './../cards/cardFooter.vue';

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

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").footer
});
</script>

<template>
	<div class="line-f"></div>
	<div class="wrapper-f1 mb-2">
		<div class="layout-f1">
			<img src="../../assets/LOGO.svg" alt="">
			<p>{{ language.allRights }}</p>
			<h2 class="subtitle-2">{{ language.newsletter }}</h2>
			<div class="input">
				<input class="input-content" type="text" :placeholder="language.email">
				<input class="input-button" type="button" value="">
			</div>
		</div>
		<div class="layout-f2">
			<h3>{{ language.inforrmation }}</h3>
			<card-footer :textFooter="language.about" :link1="'/about'" :textFooter2="language.careers"
			 :link2="'/careers'" :textFooter3="'Blog'" :link3="'blog'" />
		</div>
		<div class="layout-f2">
			<h3>{{ language.social }}</h3>
			<card-footer :textFooter="'Instagram'" :link1="'https://www.instagram.com/lets.doit.now/'"
				:textFooter2="'Linkedin'" :link2="'https://www.linkedin.com/company/letsdoitnowus/'" :textFooter3="'Chat'"
				:link3="'https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20'" />
		</div>
		<div class="layout-f2">
			<h3>{{ language.resources }}</h3>
			<card-footer :textFooter="language.privacy" />
		</div>
	</div>
</template>