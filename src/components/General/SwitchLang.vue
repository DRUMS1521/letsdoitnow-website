<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { lang } from '../../stores/SwitchLang';

const router = useRouter();
const language = ref();
const check = ref();

const changeLanguage = (e: Event) => {
	language.value = lang((e.target as HTMLInputElement).checked);
	router.go(0);
};

onMounted(() => {
	check.value.checked = (localStorage.getItem("Lang") === "Es");
	language.value = lang(localStorage.getItem("Lang") === "Es");
});
</script>

<template>
	<div class="languaje">
		<h5>English</h5>
		<label class="switch">
			<input type="checkbox" ref="check" @click="changeLanguage($event)">
			<span class="slider round"></span>
		</label>
		<h5>Español</h5>
	</div>
</template>