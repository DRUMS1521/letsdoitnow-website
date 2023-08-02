<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '@/stores/SwitchLang'
import { seoMeta } from '@/stores/SeoMeta';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", 
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").portfolio
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
})
</script>

<template>
	<div class="wrapper-port">
		<h1 class="subtitle"><span class="rectangle">{{ language.portfolio }}</span></h1>
		<p>{{ language.text001 }}<br>{{ language.text002 }}</p>
		<div class="card-portfolio">
			<h3>{{ language.text003 }}</h3>
			<p style="margin-block-end: 1em;">{{ language.text004 }}</p>
			<div class="imgs-port">
				<img src="../../assets/carrazo-port.png" alt="" >
				<img src="../../assets/carrazo-port-2.png" alt="" >
			</div>
			<a @click="$router.push('/portfolio-details')"><button class="btn-underline" style="font-size: medium;">{{ language.text005 }}</button></a>
		</div>
		<div class="line-port"></div>

		<div class="card-portfolio">
			<h3>{{ language.text006 }}</h3>
			<p style="margin-block-end: 1em;">{{ language.text007 }}</p>
			<div class="imgs-port">
				<img src="../../assets/planium-port.png" alt="" >
			</div>
			<a @click="$router.push('/portfolio-details')"><button class="btn-underline" style="font-size: medium;">{{ language.text008 }}</button></a>
		</div>
		<div class="line-port"></div>

		<div class="card-portfolio">
			<h3>{{ language.text009 }}</h3>
			<p style="margin-block-end: 1em;">{{ language.text010 }}</p>
			<div class="imgs-port">
				<img src="../../assets/ajpenny-port.png" alt="" >
			</div>
			<a @click="$router.push('/portfolio-details')"><button class="btn-underline" style="font-size: medium;">{{ language.text011 }}</button></a>
		</div>
		<div class="line-port"></div>
	</div>
</template>