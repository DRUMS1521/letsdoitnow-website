<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue'
import Spinner from '@/components/General/SpinerComponent.vue';

const msg = ref<string>('');
const URL = 'https://44.210.136.115:3000/api';
const dataHistory = ref<any>([]);
const spinner = ref<Boolean>(false);

const history = async () => {
	spinner.value = true;
	try {
		const res = await axios.post(`${URL}/chats/expert`, {"userId": "64d5d5d3877039bb218d3702", "expertId": "64d5d76f24206155ff312cc6"}, {});
		dataHistory.value = res.data.slice().reverse();
	} catch (error) {
		console.log(error);
	}
	spinner.value = false;
}

const sendChat = async () => {
	spinner.value = true;
	if (msg.value != '') {
		dataHistory.value.push({ question: msg.value, answer: '' });
		viewEndAnswer()
		await axios.post(`${URL}/chats`, {"userId": "64d5d5d3877039bb218d3702", "expertId": "64d5d76f24206155ff312cc6", "userQuestion": msg.value}, {})
			.then((res) => {
				dataHistory.value[dataHistory.value.length - 1].answer = res.data.answer;
				msg.value = '';
				viewEndAnswer()
			})
			.catch((error) => {
				console.log(error);
			});
	}
	spinner.value = false;
	viewEndAnswer()
}

const viewEndAnswer = () => {
	const endChatElement = document.getElementById('endChat');
	if (endChatElement)	endChatElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

const  getAnswerEnd = (answer: string): string => {
	const endTagIndex = answer.indexOf('</end>');
	return endTagIndex !== -1 ? answer.substring(0, endTagIndex) : answer;
}

onMounted(async () => {
	await history();
	if (localStorage.getItem('chat') != null) {
		msg.value = localStorage.getItem('chat')!;
		localStorage.removeItem('chat');
		sendChat();
	}
	viewEndAnswer()
});
</script>

<template>
	<p class="text-center px-1" style="color: brown; margin: 2rem auto 0; font-size: 12px; max-width: 450px;">"Esta versión es una beta, el historial de las conversaciones puede ser visualizado por otras personas y será eliminado de manera periódica. En un futuro próximo, tendrás la opción de guardarlo para consultarlo siempre que lo necesites.</p>
	<div class="d-ib va-t w-50 p-2 mt-1 bot">
        <div class="answerbot pr-1">
			<div v-for="chat in dataHistory">
				<p class="send">{{ chat.question }}</p>
				<p class="botanswer" style="white-space: pre-line;">{{ getAnswerEnd(chat.answer) }}</p>
			</div>
			<div id="endChat" class="mt-2 w-100"></div>
			<spinner v-if="spinner" />
        </div>
        <div class="d-flex ai-center inputUser mt-1" style="position: relative;">
            <input class="w-100" type="text" placeholder="Escribe algo" v-model="msg" @keypress.enter="sendChat()" >
            <img style="right: 10px; position: absolute;" class="cursor-p" src="../../assets/send.svg" alt="" @click="sendChat()">
        </div>
    </div>
	<p class="text-center mt-2">Dejanos saber que opinas <a href="https://forms.gle/Nj27Lg1eXGhv6eeT6" target="_blank">Aquí</a></p>
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