<script setup lang="ts">
import { ref, onBeforeMount  } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { seoMeta } from '@/stores/SeoMeta'
import Card from '../cards/card-1.vue'
import CardBlogCategory from '../cards/cardBlogCategory.vue';
import CardBlogResume from '../cards/cardBlogResume.vue';
import CardInformation from '../cards/cardInformation.vue'
import CardReview from '../cards/cardReview.vue';

/* function onBeforeMount(callback: () => void): void */

const language = ref<any>({
		"langweb": "", "titleweb": "", "desciptionweb": "", "keywords": "", "imgweb": "", "title01": "", "title02": "", "title03": "", "text001": "", "text002": "", "text003": "", "text004": "", "text005": "", "text006": "", "text007": "", "text008": "", "text009": "", "text010": "", "text011": "", "text012": "", "text013": "", "text014": "", "text015": "", "text016": "", "text017": "", "text018": "", "text019": "", "text020": "", "text021": "", "text022": "", "text023": "", "text024": "", "text025": "", "text026": "", "text027": "", "text028": "", "text029": "", "text030": ""
});

const quote = (): void => {
	window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J", '_blank');
}
const freeConsulation = (): void => {
	window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07", '_blank')
}

onBeforeMount(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").home;

	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);

});
</script>

<template>
	<div class="wrapper">
		<div class="layout">
			<h1 class="title">{{ language.title01 }}<br><span class="rectangle">{{ language.title02 }}</span><br>{{ language.title03 }}</h1>
			<p class="pf">{{ language.text001 }}</p>
			<div class="layout-btn">
				<a href="">
					<button class="btn-style-deg" @click="quote">
						{{ language.text002 }}
					</button>
				</a>
				<a href="">
					<button class="btn-underline">
						{{ language.text003 }}
					</button>
				</a>
			</div>
		</div>
	</div>

	<div class="wrapper-2">
		<div class="grid-card">
			<card :imgIcon="1" :text="language.text004" />
			<card :imgIcon="2" :text="language.text005" />
			<card :imgIcon="3" :text="language.text006" />
			<card :imgIcon="4" :text="language.text007" />
		</div>
		<div class="layout-2">
			<h2 class="subtitle">{{ language.text008 }}</h2>
			<p class="pf">{{ language.text009 }}</p>
			<a href="">
				<button class="btn-style-deg">
					{{ language.text010 }}
				</button>
			</a>
		</div>
	</div>

	<div class="wrapper-3">
		<div>
			<card-information :imgIcon="1" :text="language.text011"
				:longText="language.text012" />
		</div>
		<div>
			<card-information :imgIcon="2" :text="language.text013"
				:longText="language.text014" />
		</div>
		<div>
			<card-information :imgIcon="3" :text="language.text015"
				:longText="language.text016" />
		</div>
		<div>
			<card-information :imgIcon="4" :text="language.text017"
				:longText="language.text018" />
		</div>
	</div>

	<div class="wrapper-6">
		<div class="layout-3">
			<h3 class="subtitle">{{ language.text019 }}<br><span class="rectangle">{{ language.text020 }}</span><br>{{ language.text021 }}</h3>
			<p class="pf">{{ language.text022 }}</p>
			<div class="layout-btn">
				<a href="">
					<button class="btn-style-deg">
						{{ language.text023 }}
					</button>
				</a>
			</div>
		</div>
		<div class="layout-4">
			<card-blog-resume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'"
				:nameCreator="'Marysabel'" :timeRead="'8min'" />
			<card-blog-resume :title="'Desencadenando el Poder de la Inteligencia Artificial'"
				:category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'" />
		</div>
	</div>

	<div class="wrapper-4">
		<card-blog-category :text="language.text024" :text2="language.text025" :text3="language.text026" :text4="language.text027" :text5="language.text028" />
	</div>

	<div class="wrapper-5">
		<h2>{{ language.text029 }}</h2>
		<div class="layout-5">
			<card-review
				:review="language.text030"
				:company="'AJPenny'" :namePerson="'Penélope'" />
			<card-review
				:review="language.text031"
				:company="'Manager Real/State Agency'" :namePerson="'Ian'" />
			<card-review
				:review="language.text032"
				:company="'CEO, AliadaGO'" :namePerson="'Brandon'" />
		</div>
		<p>{{ language.text033 }}<br>{{ language.text034 }}</p>
		<a href="">
			<button class="btn-style-deg" @click="freeConsulation">
				{{ language.text035 }}
			</button>
		</a>
	</div>
</template>

<style scoped>
.wrapper {
	width: auto;
	height: 600px;
	display: flex;
	display: grid;
	grid-template-columns: 1fr 1fr;
	flex-direction: column;
	justify-items: center;
	justify-content: center;
	background-image: url("../../assets/recurso-1.svg");
	background-repeat: no-repeat;
	background-size: cover;
}

.layout {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 500px;
	text-align: left;
	margin-left: 32px;
	margin-bottom: 10%;
}

.layout-btn {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.layout-img {
	width: 0%;
	display: flex;
	justify-items: flex-end;
}

.rectangle {
	background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);
}

.wrapper-2 {
	max-height: fit-content;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-image: url("../../assets/background-1.svg");
	background-repeat: no-repeat;
	background-size: cover;
}

.grid-card {
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-columns: 1fr 1fr;
	margin-top: 250px;
	height: 500px;
	justify-content: space-between;
}

.layout-2 {
	margin-top: 40px;
	width: 600px;
	text-align: right;
	margin-left: 32px;
}

.wrapper-3 {
	max-height: fit-content;
	display: grid;
	grid-template-columns: 1fr 1fr;
	background-color: #E1FFDC;
	justify-items: center;
	padding: 15% 0;
}

.layout-3 {
	width: 420px;
	text-align: left;
	margin-right: 15%;
}

.layout-4 {
	padding: 10% 0;
}

.wrapper-4 {
	padding: 25px;
	background-color: #79DB92;
	;
}

.wrapper-5 {
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.wrapper-5 h2 {
	width: 650px;
	color: #263F28;
	letter-spacing: 0.8px;
	font-weight: 700;
}

.layout-5 {
	width: 100%;
	margin-bottom: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}

.wrapper-5 button {
	margin-top: 32px;
}

.wrapper-6 {
	max-height: fit-content;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: center;
	align-items: center;
}

@media screen and (max-width: 768px) {
	.wrapper {
		height: 500px;
		display: flex;
		background-image: none;
	}

	.wrapper-2 {
		max-height: fit-content;
		display: flex;
		flex-direction: column-reverse;
		background-image: url("../../assets/background-1.svg");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 60%;
	}

	.layout {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: fit-content;
		text-align: left;
		margin-left: 32px;
		margin-bottom: 10%;
	}

	.grid-card {
		display: flex;
		align-items: center;
		justify-items: center;
		flex-direction: column;
		grid-template-columns: 1fr;
		margin-top: 0px;
		margin-bottom: 1rem;
		height: 660px;
		justify-content: space-between;
	}

	.layout-2 {
		margin-top: 40px;
		margin-bottom: 40px;
		width: fit-content;
		text-align: center;
		margin: 40px 32px;
	}

	.layout-btn {
		align-items: flex-start;
		flex-direction: column;
	}

	.wrapper-3 {
		max-height: fit-content;
		background-color: #E1FFDC;
		justify-items: center;
		padding: 15% 10%;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: fit-content;
	}

	.wrapper-6 {
		max-height: fit-content;
		display: flex;
		flex-direction: column;
		justify-items: center;
	}

	.layout-3 {
		width: fit-content;
		margin-right: 0;
		padding: 1rem;
	}

	.wrapper-5 h2 {
		display: flex;
		width: fit-content;
	}

	.layout-5 {
		flex-direction: column;
	}
}
</style>