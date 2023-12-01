<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import  { showToast, POSITION } from '../../../stores/Toast';

const props = defineProps({
	dataSprint: {
		type: Object,
		default: () => {
			return {
				day1: false,
			};
		},
	}
});

const route = useRoute();
const isChatboxOpen = ref(false);
const viewDown = ref(false);
const idSprint = ref<string | string[]>();
const token = ref<string>();
const URL = 'https://api-chatbot.letsdoitnow.us/api';
const awaitingMessage = ref(false);
const msg = ref<string>();

const toggleChatbox = () => {
	isChatboxOpen.value = !isChatboxOpen.value;
	setTimeout(() => {
		scrollToLoading();
	}, 100);
}

const getchat = async () => {
	awaitingMessage.value = true;
	setTimeout(() => {
		scrollToLoading();
	}, 100);
	if(msg.value === '' || msg.value === undefined) {
		showToast('Escribe un mensaje', 'info', 3000, POSITION.BOTTOM_CENTER);
		awaitingMessage.value = false;
		return;
	}
	await axios.post(`${URL}/designSprint/chats`, {id: idSprint.value, question: msg.value}, {headers: {'token': token.value}})
		.then((res) => {
			props.dataSprint.chatIa = res.data.chatIa;
			msg.value = '';
			setTimeout(() => {
				scrollToLoading();
			}, 100);
		})
		.catch((error) => {
			showToast(`Error en la conexión: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		});
	awaitingMessage.value = false;
}

const saveDay = async () => {
	awaitingMessage.value = true;
	await axios.post(`${URL}/designSprint/update`, {id: idSprint.value, chatIa: []}, {headers: {'token': token.value}})
		.then(() => {
			showToast('Chat limpiado corectamente', 'info', 3000, POSITION.BOTTOM_CENTER);
			props.dataSprint.chatIa = [];
		})
		.catch((error) => {
			showToast(`Error en la conexión: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		});
	awaitingMessage.value = false;
};

const copyToClipboard = (i: string) => {
    const texto = document.getElementById(i)?.innerText;

    navigator.clipboard.writeText(texto ? texto : 'https://letsdoitnow.us')
        .then(() => {
			showToast('Texto copiado', 'success', 3000, POSITION.BOTTOM_CENTER);
        })
        .catch(err => {
			showToast('Error al copiar el texto', 'error', 3000, POSITION.BOTTOM_CENTER);
        });
}

const scrollToLoading = () => {
	const loadingElement = document.getElementById('loading');
	if (loadingElement) {
		loadingElement.scrollIntoView({ behavior: 'smooth' });
	}
};

const checkScrollBottom = () => {
    const chatbox = document.getElementById('chatbox');
    if (chatbox) {
        const isScrolledToBottom = chatbox.scrollHeight - chatbox.clientHeight <= chatbox.scrollTop + 1000;
        if (!isScrolledToBottom) {
			viewDown.value = true;
		} else {
			viewDown.value = false;
		}
    }
}

onMounted(() => {
	scrollToLoading();
	const session = localStorage.getItem('session');
	if (session) {
		const sessionSplit = session.split('-');
		token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
	}
	idSprint.value = route.params.id;
	/* getchat(); */
});

</script>

<template>
	<div class="fixed bottom-0 right-0 mb-4 mr-4">
		<button class="z-20 text-white grow-0 fixed bottom-12 md:bottom-20 right-5 rounded-lg mr-1 mb-5" @click="toggleChatbox">
			<div class="p-3 rounded-full border-4 border-white bg-green-600">
				<svg class="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"></path>
				</svg>
			</div>
		</button>
	</div>
	<div v-if="isChatboxOpen" class="fixed bottom-16 md:bottom-24 right-4 w-80 md:w-96">
		<div class="bg-white shadow-md rounded-lg max-w-lg w-full">
			<div class="p-4 border-b bg-green-500 text-white rounded-t-lg flex justify-between items-center">
				<div>
					<p class="text-lg font-semibold">BotDoit</p>
					<p class="text-xs">Chat con IA</p>
				</div>
				<button class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400" @click="saveDay()" title="Limpiar chat">
					<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960">
						<path d="m376-400 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" fill="white"/>
					</svg>
				</button>
				<button id="close-chat" class="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400"  @click="toggleChatbox">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
						stroke="white">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
						</path>
					</svg>
				</button>
			</div>
			<div id="chatbox" class="p-4 h-80 overflow-y-auto" @scroll="checkScrollBottom">
				<div v-for="(chat, i) in dataSprint.chatIa" :key="i">
					<div class="mb-4 text-right">
						<p class="bg-green-500 text-white rounded-lg py-2 px-4 inline-block max-w-[85%]">{{ chat.question }}</p>
					</div>
					<div class="mb-4 flex">
						<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block max-w-[85%]" :id="`msg${i}`">{{ chat.answer }}</p>
						<div>
							<svg @click="copyToClipboard(`msg${i}`)" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960">
								<path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" fill="#4ade80"/>
							</svg>
						</div>
					</div>
				</div>

				<div class="flex items-center justify-center space-x-2 mt-8 mb-4" v-if="awaitingMessage">
					<div class="w-3 h-3 rounded-full animate-pulse dark:bg-green-500 animate-pulse"></div>
					<div class="w-3 h-3 rounded-full animate-pulse dark:bg-green-500 animate-pulse" style="animation-delay: 0.2s;"></div>
					<div class="w-3 h-3 rounded-full animate-pulse dark:bg-green-500 animate-pulse" style="animation-delay: 0.4s;"></div>
				</div>
				<div id="loading" class="w-full h-1">
				</div>
			</div>
			<div class="relative w-full flex justify-end pr-8" v-if="viewDown">
				<div class="absolute p-1 rounded-full bg-white bottom-2 cursor-pointer" @click="scrollToLoading()">
					<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 -960 960 960">
						<path d="m480-360 160-160H320l160 160Zm0 280q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="#4ade80"/>
					</svg>
				</div>
			</div>
			<div class="p-4 border-t flex">
				<input id="user-input" type="text" placeholder="Escribe un mensaje" class="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500" :disabled="awaitingMessage" v-model="msg" @keypress.enter="getchat()">
				<button id="send-button" class="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition duration-300" @click="!awaitingMessage ? getchat() : ''">
					<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 -960 960 960">
						<path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" fill="white"/>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>