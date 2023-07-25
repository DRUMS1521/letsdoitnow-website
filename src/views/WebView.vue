<script setup lang='ts'>
import Footer from '../components/General/Footer.vue';
import NavBarResponsive from "../components/General/navBarResponsive.vue";
import SwitchLang from '../components/General/SwitchLang.vue'
</script>

<template>
	<div class="app">
		<switch-lang />
		<NavBarResponsive />
		<router-view />
		
		<Footer />
	</div>
</template>