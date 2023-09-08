<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { lang } from '../../stores/SwitchLang';

const router = useRouter();
const language = ref();
const check = ref({checked:true});

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
	<div class="flex items-center justify-end mt-4">
		<h5 class="px-4 text-[#4d4d4d] m-0">English</h5>
		<label class="relative inline-block w-[55px] h-[24px]">
			<input type="checkbox" ref="check" @click="changeLanguage($event)" class="opacity-0 w-0 h-0">
			<span class="bg-[#79db92] rounded-full absolute cursor-pointer inset-0 transition duration-400">
				<div class="absolute content-[''] h-[18px] w-[18px] bottom-[4px] bg-white rounded-full transition-transform duration-400" :class="{'left-[4px]': !check.checked, 'right-[4px]': check.checked}"></div>
			</span>
		</label>
		<h5 class="px-4 text-[#4d4d4d] m-0">Español</h5>
	</div>
</template>