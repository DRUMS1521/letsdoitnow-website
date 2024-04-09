<script setup lang='ts'>
import { onMounted } from 'vue';
import Footer from '../components/General/Footer.vue';
import NavBarResponsive from "../components/General/navBarResponsive.vue";
import SwitchLang from '../components/General/SwitchLang.vue';
/* import BotSales from '../components/SalesBot/BotSales.vue'; */

onMounted(() => {
	/* const script1 = document.createElement('script');
	
	script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
	document.head.appendChild(script1);
	
	const script2 = document.createElement('script'); 
	script2.src = 'https://mediafiles.botpress.cloud/06815aef-df29-4d44-8aa4-0a2c911ff119/webchat/config.js';
	script2.defer = true;  
	document.head.appendChild(script2); */
});
</script>

<template>
	<div class="app">
	  <switch-lang />
	  <NavBarResponsive />
	  <router-view />
	  <Footer />
	  <div class="floating-whatsapp">
		<a href="https://api.whatsapp.com/send?phone=573045532990"> 
		  <img src="../../src/assets/icowhatssap.png" alt="whatsapp" class="whatsapp" />
		</a>
	  </div>
	</div>
  </template>
  
  <style>
  .floating-whatsapp {
	position: fixed;
	bottom: 20px; /* Ajusta la distancia desde el borde inferior */
	right: 20px; /* Ajusta la distancia desde el borde derecho */
	z-index: 1000; /* Ajusta si hay otros elementos con una z-index mayor */
  }
  
  .whatsapp {
	width: 60px; /* Ajusta el ancho según tu preferencia */
	height: 60px; /* Ajusta la altura según tu preferencia */
	border-radius: 50%; /* Hace que la imagen sea redonda */
	box-shadow: 0 2px 4px rgba(1,1,1, 0.1); /* Agrega una sombra para resaltar */
  }
  </style>
  