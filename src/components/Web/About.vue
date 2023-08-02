<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta';
import CardAbout from '../cards/cardAbout.vue';
import CardAboutGreens from '../cards/cardAboutGreens.vue';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", title001: "", text002: "", text003: "", text004: "",text005: "", text006: "", text007: "", text008: "", text009: "", text010: "", text011: "", text012: "", text013: "", text014: "", ext015: ""
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").about;
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
});

const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

const chat = (): void => {
	window.open("https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20", '_blank')
}
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
			<a href="">
			<button class="btn-style-deg" @click="freeConsulation">
				{{ language.text016 }}
			</button>
			</a>
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
		<h1 class="subtitle">{{ language.text017 }} <span class="rectangle">{{ language.text018 }}</span></h1>
		<p style="padding: 0 4rem;">{{ language.text019 }}</p>
		<div class="layout-about-team">
			<div style="width: fit-content;">
				<img src="../../assets/team/juanpablo.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Juan Pablo Sierra</h2>
				<p>CEO/Sales</p>
			</div>
			<div>
				<img src="../../assets/team/cifu.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Andrés Cifuentes</h2>
				<p>Backend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/edinson.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Edinson Acevedo</h2>
				<p>Full Stack Dev</p>
			</div>
		</div>
		<div class="layout-about-team">
			<div style="width: fit-content;">
				<img src="../../assets/team/jesus.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Jesús Bastidas</h2>
				<p>Frontend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/maline.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Maline García</h2>
				<p>RRHH</p>
			</div>
			<div>
				<img src="../../assets/team/joan.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Joan Ariza</h2>
				<p>CFO</p>
			</div>
		</div>
		<div class="layout-about-team">
			<div style="width: fit-content;">
				<img src="../../assets/team/juanes.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Juan Esteban Paca</h2>
				<p>Sales</p>
			</div>
			<div>
				<img src="../../assets/team/juandaniel.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Juan Daniel Velasquez</h2>
				<p>Scrum Master</p>
			</div>
			<div>
				<img src="../../assets/team/daniela.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Daniela Gomez</h2>
				<p>UX/UI Designer</p>
			</div>
		</div>
		<div class="layout-about-team">
			<div style="width: fit-content;">
				<img src="../../assets/team/fernanda.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Olga Castaño</h2>
				<p>Frontend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/suyin.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Suyin Orihuen</h2>
				<p>Backend Dev</p>
			</div>
			<div>
				<img src="../../assets/team/jahaziel.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Jahaziel Hernandez</h2>
				<p>Backend Dev</p>
			</div>
		</div>
		<div class="layout-about-team">
			<div style="width: fit-content;">
				<img src="../../assets/team/marysabel.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Marysabel Plata</h2>
				<p>Marketer</p>
			</div>
			<div>
				<img src="../../assets/team/alejandra.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Alejandra Martínez</h2>
				<p>Scrum Master</p>
			</div>
			<div>
				<img src="../../assets/team/felipe.png" alt="" style="width: 250px;">
				<h2 class="subtitle-3" style="text-align: start; margin-block-end: 0;">Felipe Ladino</h2>
				<p>Frontend Dev</p>
			</div>
		</div>
		<a href="">
			<button class="btn-style-deg" @click="chat">
				{{ language.text020 }}
			</button>
			</a>
	</div>
</template>