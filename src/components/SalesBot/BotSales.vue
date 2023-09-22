<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import botIco from '../icons/bot-ico.vue';

const router = useRouter();
const showChat = ref<boolean>(false);
const msg = ref<string>('');

const sendChat = () => {
	console.log('sendChat');
};

onMounted(() => {
	console.log('mounted');
});
</script>

<template>
	<div class="fixed bottom-0 right-0 m-6 drop-shadow-xl" style="display: none;">
		<div class="bg-[#263F28] text-white p-4 py-2 rounded-t-[25px] cursor-pointer" :class="[showChat ? 'rounded-t-[25px] w-[350px]' : 'rounded-[25px]']" @click="showChat = !showChat">
			<div class="flex items-center">
				<botIco svgColorClass="white" :height="'50'" :width="'50'" />
				<div>
					<p class="ml-2 text-sm"><span class="font-semibold">Chat Bot</span><br>online</p>
				</div>
			</div>
		</div>
		<div class="bg-white rounded-b-[25px] w-[350px] overflow-hidden" v-if="showChat">
			<div class="p-4 min-h-[150px] max-h-[350px] overflow-y-auto">
				<div class="flex items-center mb-4">
					<div class="bg-[#69C36E] rounded-full h-[30px] w-[30px]">
						<botIco svgColorClass="#263F28" :height="'30'" :width="'30'" />
					</div>
					<div class="bg-[#E3E3E3] ml-4 p-3 py-1 rounded-lg">primer mensaje<br>segunda linea</div>
				</div>
				<div class="flex justify-end mb-4">
					<div class="bg-[#263F28] p-3 py-1 rounded-lg text-white">segundo mensaje</div>
				</div>
			</div>
			<div class="relative items-center flex mt-1">
				<input class="w-full pr-12 border-t border-gray-400 px-4 pt-3 pb-4 text-lg outline-none" type="text" placeholder="¿Cómo puedo ayudarte?" v-model="msg" @keypress.enter="sendChat()">
				<img class="cursor-pointer right-3 absolute" src="../../assets/send.svg" alt="" @click="sendChat()">
			</div>
		</div>
	</div>
</template>