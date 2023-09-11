<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { lang } from '../../stores/SwitchLang';
import { showToast, POSITION } from '../../stores/Toast';
import Spinner from '@/components/General/SpinerComponent.vue';
import LoginBot from '@/components/Web/GeneralWeb/LoginBot.vue';

const language = ref<Doitbotlanguage>();
const URL = 'https://api-chatbot.letsdoitnow.us/api';
const activeDiv = ref<number>(0);
const menuExpert = ref<boolean>(true);
const msg = ref<string>('');
const idUser = ref('');
const token = ref('');
const listExpert = ref([{career: '', name: '', description: ''}]);
const spinner = ref(false);
const vewLogin = ref(false);

interface Doitbotlanguage {
	title: string;
	text001: string;
	text002: string;
	text003: string;
	text004: string;
	text005: string;
	text006: string;
	text007: string;
}

const closeModal = async () => {
	vewLogin.value = false;
};

const sedChat = (n: number, msgSend: string) => {
	if (n == 0 && msg.value != '') {
		localStorage.setItem('chat', msg.value);
	} else if (n == 1) {
		localStorage.setItem('chat', msgSend);
	} else if (n == 2) {
		localStorage.setItem('chat', msgSend);
	} else if (n == 3) {
		localStorage.setItem('chat', msgSend);
	}
	router.push('/doitbot/chat');
};

const toggleDiv = (n: number) => {
	if (activeDiv.value === n) {
		activeDiv.value = 0;
	} else {
		activeDiv.value = n;
	}
};

const getExpert = async () => {
	spinner.value = true;
	try {
		const res = await axios.post(`${URL}/experts`, {user: idUser.value}, {
			headers: {
				'token': token.value
			}
		});
		if (res.status === 200) {
			listExpert.value = res.data;
		} else {
			vewLogin.value = true;
		}
	} catch (error) {
		showToast('Error al cargar', 'error', 3000, POSITION.BOTTOM_CENTER)
	}
	spinner.value = false;
}

onMounted(async () => {
	/* window.location.href = 'https://chatbot.letsdoitnow.us/doitbot' */
	language.value = lang(localStorage.getItem("Lang") === "Es").doitbot;

	window.addEventListener('resize', () => {
		const currentWidth = window.innerWidth;
		if (currentWidth < 768) {
			menuExpert.value = false;
		} else {
			menuExpert.value = true;
		}
	});

	const session = localStorage.getItem('session');
	if (session) {
		const sessionSplit = session.split('-');
		token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
		idUser.value = sessionSplit[sessionSplit.length - 1];
		await getExpert();
	} else {
		vewLogin.value = true;
	}
});
</script>

<template>
	<h1 class="mt-8"><span class="rectangle text-4xl">Do it bot</span></h1>
	<div class="boxBot">
		<div class="menu cursor-p" @click="menuExpert = !menuExpert">
			<img src="../../assets/menu.svg" alt="">
		</div>
		<div class="d-ib va-t w-50 expert z-950" :class="menuExpert ? 'open-menu' : 'closed-menu'">
			<h2>{{ language?.title }}</h2>
			<p>{{ language?.text001 }}</p>
			<spinner v-if="spinner" />
			<div v-for="(expert, i) in listExpert" :key="i">
				<div @click="toggleDiv(i + 1)" class="w-100 divExpert cursor-p">
					<p class="d-ib va-t expertName">{{ i + 1 }} / <span class="uppercase">{{ expert?.career }}</span></p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>

				<transition name="fade" mode="out-in">
					<div v-if="activeDiv === i + 1" :key="'div1'" class="fade-div animar cursor-p" @click="$router.push('/doitbot/chat')">
						<div class="d-flex si-center py-1">
							<img src="../../assets/expert.svg" alt="">
							<div class="d-flex jc-fe flex-d-col">
								<h3 class="m-0 capitalize text-left">{{ expert?.name }}</h3>
								<p class="capitalize text-left">{{ expert?.career }}</p>
							</div>
						</div>
						<p>{{ expert?.description }}</p>
					</div>
				</transition>
			</div>
		</div>
		<div class="d-ib va-t w-50 bot">
			<div class="d-flex ai-center jc-sb">
				<div class="d-flex ai-center jc-sb">
					<img class="backArrow" src="../../assets/Arrow-1.svg" alt="">
					<img class="ml-1" src="../../assets/botico.svg" alt="">
				</div>
				<div>
					<h2 class="m-0" style="font-size: 2rem;">Do it Bot</h2>
					<ul>
						<li class="text-left text-primary" style="margin-left: 25px; font-weight: 200; font-size: 1.5rem;">Online</li>
					</ul>
				</div>
				<div>
					<img class="max-w-40" src="../../assets/icon-pc.svg" alt="">
				</div>
			</div>
			<div class="mt-2 mb-2">
				<img class="max-w-40" src="../../assets/textImg.svg" alt="">
				<p class="w-100 text-center"><b>{{ language?.text002 }}</b></p>
				<div class="btnRecom cursor-p" @click="sedChat(0, '')">
					<p>Ventas</p>
				</div>
				<div class="btnRecom cursor-p" @click="sedChat(0, '')">
					<p>Operaciones</p>
				</div>
				<div class="btnRecom cursor-p" @click="sedChat(0, '')">
					<p>Tecnología</p>
				</div>
				<div class="w-100 mt-1">
					<p class="text-primary w-100 text-center">{{ language?.text003 }}</p>
				</div>
			</div>
			<div class="mt-2">
				<img src="../../assets/edit.svg" alt="">
				<p class="w-100 text-center"><b>{{ language?.text004 }}</b></p>

				<div class="btnRecom cursor-p" v-if="language?.text005" @click="sedChat(1, language?.text005)">
					<p>{{ language?.text005 }}</p>
				</div>
				<div class="btnRecom cursor-p" v-if="language?.text006" @click="sedChat(2, language?.text006)">
					<p>{{ language?.text006 }}</p>
				</div>
				<div class="btnRecom cursor-p" v-if="language?.text007" @click="sedChat(3, language?.text007)">
					<p>{{ language?.text007 }}</p>
				</div>
			</div>
			<div class="d-flex ai-center inputUser mt-1" style="position: relative;">
				<input class="w-100" type="text" style="padding-right: 3rem;" placeholder="Escribe algo para empezar o selecciona" v-model="msg" @keypress.enter="sedChat(0, '')">
				<img style="right: 10px; position: absolute;" class="cursor-p" src="../../assets/send.svg" alt="" @click="sedChat(0, '')">
			</div>
		</div>
		<login-bot v-if="vewLogin" :closeModal="closeModal" />
	</div>
</template>

<style scoped>
	.boxBot {
		max-width: 950px;
		margin: 0 auto;
		padding: 1rem;
	}

	h2 {
		margin-top: 0;
		text-align: left;
	}

	.divExpert {
		margin-top: 2rem;
	}

	.z-950 {
		z-index: 950;
	}

	.expert,
	.bot {
		padding: 2rem;
	}

	.expert {
		background-color: white;
	}

	.expertArrow,
	.backArrow {
		width: 20px;
		margin-left: 1rem;
		transform: rotate(135deg);
	}

	.backArrow {
		transform: rotate(225deg);
	}

	.expertName {
		width: calc(100% - 45px);
	}

	.btnRecom {
		background-color: #e4e3e3;
		border-radius: 25px;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
		width: 100%;
	}

	.btnRecom p {
		text-align: center;
		font-size: .85rem;
	}

	.inputUser input {
		border: solid 0.5px rgb(116, 116, 116);
		border-radius: 25px;
		padding: 0.7rem 1.2rem;
		outline: none;
	}

	/* cambiar el border al seleccionar el input */
	.inputUser input:focus {
		border: solid 0.5px #397a3e;
		border-radius: 25px;
	}
	.menu {
		width: 30px;
		display: none;
	}



	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-div {
		animation: miAnimacion 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		margin-left: 0;
		z-index: 1400;
	}

	.fade-div.hidden {
		transform: translateX(100%);
		transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		opacity: 0;
		animation: close 0.6s;
		z-index: -1;
	}

	@keyframes close {
		from {
			transform: translateX(0);
		}

		50% {
			transform: translateX(10px);
		}

		to {
			transform: translateX(100%);
		}
	}

	@keyframes miAnimacion {
		from {
			transform: translateX(10px);
			display: none;
			opacity: 0;
		}

		to {
			transform: translateX(0);
			display: initial;
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.bot, .expert {
			max-width: 500px;
			width: 100%;
		}
		.menu {
			display: block;
		}
		.expert {
			border: solid 0.5px rgb(0, 0, 0);
			border-radius: 25px;
			position: absolute;
			width: 90%;
			margin-top: 5px;
			margin-left: 5px;
		}

		.open-menu {
			opacity: 1;
			transform: translateX(0);
			transition: .5s;
			transition: opacity transform ease-in-out .5s;
		}

		.closed-menu {
			opacity: 0;
			transform: translateX(-120%);
			transition: opacity transform ease .5s;
		}
	}
</style>