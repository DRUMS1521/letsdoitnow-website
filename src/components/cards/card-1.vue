<script setup lang="ts">

const props = defineProps({
	imgIcon: {
		type: Number
	},
	text: {
		type: String
	}
})
</script>

<template>
	<div class="layout-card">
		<img v-if="imgIcon == 1" src="../../assets/icon-global.svg" alt="">
		<img v-if="imgIcon == 2" src="../../assets/icon-pc.svg" alt="">
		<img v-if="imgIcon == 3" src="../../assets/icon-phone.svg" alt="">
		<img v-if="imgIcon == 4" src="../../assets/icon-web.svg" alt="">
		<h4>{{ props.text }}</h4>
	</div>
</template>