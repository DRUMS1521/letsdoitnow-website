<script setup lang="ts">
	import axios from 'axios';
	import { ref, onMounted } from 'vue'
	import Spinner from '@/components/General/SpinerComponent.vue';
	import LoginBot from '@/components/Web/GeneralWeb/LoginBot.vue';
	import { showToast, POSITION } from '../../stores/Toast';
	import { lang } from '../../stores/SwitchLang';

	const language = ref({});
	const msg = ref('');
	const idUser = ref('');
	const token = ref('');
	/* const URL = 'http://localhost:3000/api'; */
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	const dataHistory = ref<HistoryItem[]>([{ question: '', answer: '' }]);
	const listExpert = ref([{career: ''}]);
	const myExpert = ref({});
	const spinner = ref(false);
	const vewLogin = ref(false);

	interface HistoryItem {
		question: string;
		answer: string;
	}

	const closeModal = async () => {
		vewLogin.value = false;
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
				myExpert.value = res.data[res.data.length - 1];
			} else {
				vewLogin.value = true;
			}
		} catch (error) {
			showToast('Error al cargar', 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spinner.value = false;
	}

	const history = async () => {
		spinner.value = true;
		try {
			const res = await axios.post(`${URL}/chats/expert`, { "userId": idUser.value, "expertId": myExpert.value._id }, { headers: { 'token': token.value } });
			dataHistory.value = res.data.slice().reverse();
		} catch (error) {
			showToast(`Error al cargar: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spinner.value = false;
	}

	const sendChat = async () => {
		spinner.value = true;
		if (msg.value != '') {
			dataHistory.value.push({ question: msg.value, answer: '' });
			viewEndAnswer()
			await axios.post(`${URL}/chats`, { "userId": idUser.value, "expertId": myExpert.value._id, "userQuestion": msg.value }, { headers: { 'token': token.value } })
				.then((res) => {
					dataHistory.value[dataHistory.value.length - 1].answer = res.data.answer;
					msg.value = '';
					viewEndAnswer()
				})
				.catch((error) => {
					if(error.response.data.message == "You have exceeded the number of free queries.") {
						showToast('Has excedido el número de consultas gratuitas', 'error', 3000, POSITION.BOTTOM_CENTER);
						localStorage.setItem('limit', 'true');
						vewLogin.value = true;
					}else if(error.response.data.message == "User, you have exceeded the number of free queries.") {
						localStorage.setItem('registerLimit', 'true');
						vewLogin.value = true;
					} else {
						showToast(`Error al enviar: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
					}
				});
		}
		spinner.value = false;
		viewEndAnswer()
	}

	const appInit = async () => {
		const session = localStorage.getItem('session');
		if (session) {
			const sessionSplit = session.split('-');
			token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
			idUser.value = sessionSplit[sessionSplit.length - 1];
			await getExpert();
			await history();
		} else {
			vewLogin.value = true;
		}
	}

	const viewEndAnswer = () => {
		const endChatElement = document.getElementById('endChat');
		if (endChatElement) endChatElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}

	const getAnswerEnd = (answer: string): string => {
		const endTagIndex = answer.indexOf('</end>');
		return endTagIndex !== -1 ? answer.substring(0, endTagIndex) : answer;
	}

	onMounted(async () => {
		language.value = lang(localStorage.getItem("Lang") === "Es").doitbot;
		if (localStorage.getItem('chat')) {
			msg.value = localStorage.getItem('chat') || '';
			localStorage.removeItem('chat');
		}

		if (!localStorage.getItem('session')) {
			vewLogin.value = true;
		}else{
			await appInit();
		}

		viewEndAnswer()
	});
</script>

<template>
	<div>
		<div class="max-w-550 px-1 mx-auto mb-1">
			<div class="d-flex si-center py-1">
				<img src="../../assets/expert.svg" alt="">
				<div class="d-flex jc-fe flex-d-col">
					<h3 class="m-0 text-left" v-if="myExpert.name">{{ myExpert.name }}</h3>
					<p v-if="myExpert.career">{{ myExpert.career }}</p>
				</div>
			</div>
			<p>{{ myExpert.description }}</p>
		</div>
		<select name="" v-model="myExpert" @change="history()">
			<option v-for="expert in listExpert" :value="expert">{{ expert.career }}</option>
		</select>
	</div>
	<div class="d-ib va-t w-50 p-2 mt-1 bot">
		<div class="answerbot pr-1">
			<div v-if="dataHistory.length == 0">
				<p class="botanswer" style="white-space: pre-line;">{{ language.text001 }}</p>
			</div>
			<div v-for="chat in dataHistory">
				<p class="send">{{ chat.question }}</p>
				<p class="botanswer" style="white-space: pre-line;">{{ getAnswerEnd(chat.answer) }}</p>
			</div>
			<div id="endChat" class="mt-2 w-100"></div>
			<spinner v-if="spinner" />
		</div>
		<div class="d-flex ai-center inputUser mt-1" style="position: relative;">
			<input class="w-100" style=" padding-right: 3rem;" type="text" placeholder="Escribe algo" v-model="msg" @keypress.enter="sendChat()">
			<img style="right: 10px; position: absolute;" class="cursor-p" src="../../assets/send.svg" alt="" @click="sendChat()">
		</div>
	</div>
	<p class="text-center mt-2">{{ language.text002 }} <a href="https://forms.gle/Nj27Lg1eXGhv6eeT6" target="_blank">{{language.text003}}</a></p>

	<login-bot v-if="vewLogin" :closeModal="closeModal" />
</template>

<style scoped>
	.send {
		background-color: #263F28;
		border-radius: 25px 25px 0 25px;
		color: rgb(251, 251, 251);
		text-align: right;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.botanswer {
		background-color: #e4e3e3;
		border-radius: 25px 25px 25px 0;
		text-align: left;
		padding: 1rem;
		margin-bottom: 1rem;
	}

	.answerbot {
		height: 55vh;
		overflow-y: scroll;
	}

	.bot {
		background-color: white;
		width: 90%;
		max-width: 550px;
	}
</style>