<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import CardAbout from '../cards/cardAbout.vue';
import CardAboutGreens from '../cards/cardAboutGreens.vue';

const language = ref<any>({
	title001: "", text002: "", text003: "", text004: "",text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", ext015: ""
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").about
});
</script>

<template>
	<div class="wrapper-about">
		<div class="layout-about-2">
			<div class="layout-about">
				<h2 style="color: white;">{{ language.title001 }}</h2>
				<p style="color: white;">{{ language.text002 }}</p>
			</div>
			<div class="layout-about-3">
				<card-about :titleText="language.text003"
					:descriptionText="language.text004" />
				<card-about :titleText="language.text005"
					:descriptionText="language.text006" />
				<card-about :titleText="language.text007"
					:descriptionText="language.text008" />
			</div>
			<div class="text-line">
				<div class="line-about"></div>
				<p style="width: auto;">{{ language.text009 }}</p>
			</div>
		</div>
	</div>

	<div class="wrapper-about-2">
		<div class="layout-about-4">
			<div class="card-align">
				<card-about-greens style="background-color: #DFF1DC;" :titleText="language.text010"
					:descriptionText="language.text011" />
			</div>
			<div class="card-align-2">
				<card-about-greens style="background-color: #C4E5BF;" :titleText="language.text012"
					:descriptionText="language.text013" />
			</div>
			<div class="card-align-3">
				<card-about-greens style="background-color: #A4D79C;" :titleText="language.text014"
					:descriptionText="language.text015" />
			</div>
		</div>
	</div>

	<div class="wrapper-about-3">
	</div>
</template>