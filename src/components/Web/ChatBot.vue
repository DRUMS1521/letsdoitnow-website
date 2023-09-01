<script setup lang="ts">
	import axios from 'axios';
	import { ref, onMounted, computed } from 'vue'
	import Spinner from '@/components/General/SpinerComponent.vue';
	import LoginBot from '@/components/Web/GeneralWeb/LoginBot.vue';
	import { showToast, POSITION } from '../../stores/Toast';
	import { lang } from '../../stores/SwitchLang';

	const language = ref({});
	const msg = ref('');
	const idUser = ref('');
	const token = ref('');
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	const dataHistory = ref<HistoryItem[]>([{ question: '', answer: '' }]);
	const listExpert = ref([{career: ''}]);
	const myExpert = ref({});
	const spinner = ref(false);
	const vewLogin = ref(false);
	const cuestionList = ref([]);

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
				myExpert.value = res.data[0];
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
			const res = await axios.post(`${URL}/chats/expert`, { "userId": idUser.value, "expertId": myExpert.value?._id }, { headers: { 'token': token.value } });
			dataHistory.value = res.data.reverse();
			listCuestion();
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
			await axios.post(`${URL}/chats`, { "userId": idUser.value, "expertId": myExpert.value?._id, "userQuestion": msg.value }, { headers: { 'token': token.value } })
				.then((res) => {
					history();
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

	const listCuestion = () => {
		const regex = /(\¿.+?\?)/g;
		if (dataHistory.value.length > 0) {
			const lastAnswer = dataHistory.value[dataHistory.value.length - 1].answer;
			cuestionList.value = lastAnswer.split('</end>')[lastAnswer.split('</end>').length - 1].match(regex);
		}
	};

	onMounted(async () => {
		language.value = lang(localStorage.getItem("Lang") === "Es").chatbot;
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
		listCuestion();
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
			<p>{{ myExpert.description }} </p>
		</div>
		<select class="p-4 py-2 outline-none bg-[#e9f5ec] border-0" name="" v-model="myExpert" @change="history()">
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
		<div class="mt-8" v-if="dataHistory != 0">
			<p class="send cursor-pointer text-xs" @click="msg = cuestionList[0], sendChat()">{{ cuestionList[0] }}</p>
			<p class="send cursor-pointer text-xs" @click="msg = cuestionList[1], sendChat()">{{ cuestionList[1] }}</p>
			<p class="send cursor-pointer text-xs" @click="msg = cuestionList[2], sendChat()">{{ cuestionList[2] }}</p>
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