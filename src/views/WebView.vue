<script setup lang='ts'>
import { onMounted } from 'vue';
import Footer from '../components/General/Footer.vue';
import NavBarResponsive from "../components/General/navBarResponsive.vue";
import SwitchLang from '../components/General/SwitchLang.vue';
/* import BotSales from '../components/SalesBot/BotSales.vue'; */

onMounted(() => {
	const script1 = document.createElement('script');
	script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
	document.head.appendChild(script1);
	
	const script2 = document.createElement('script'); 
	script2.src = 'https://mediafiles.botpress.cloud/06815aef-df29-4d44-8aa4-0a2c911ff119/webchat/config.js';
	script2.defer = true;  
	document.head.appendChild(script2);
});
</script>

<template>
	<div class="app">
		<switch-lang />
		<NavBarResponsive />
		<router-view />
		<Footer />
		<!-- <BotSales /> -->
	</div>
</template>