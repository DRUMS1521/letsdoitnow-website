<script setup lang="ts">
	import { onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';
	import axios from 'axios';
	import  { showToast, POSITION } from '../../../stores/Toast';
	import Spinner from '@/components/General/SpinerComponent.vue';

	const router = useRouter();
	const isDropdownOpen = ref<Boolean>(false);
	const token = ref<string>('');
	const idUser = ref<string>('');
	const dataUser = ref<any>({});
	const spinner = ref<Boolean>(false);
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */

	const getUser = async () => {
		spinner.value = true;
		if (!token.value || !idUser.value) {
			showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else {
			await axios.post(`${URL}/user/${idUser.value}`, {}, {headers: {'token': token.value}})
				.then((res) => {
					dataUser.value = res.data;
				})
				.catch((error) => {
					showToast(`Error en la conexión: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
				});
		}
		spinner.value = false;
	};

	const closeSesion = () => {
		localStorage.removeItem('session');
		router.go(0);
	}

	onMounted(async () => {
		const session = localStorage.getItem('session');
		if (session) {
			const sessionSplit = session.split('-');
			token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
			idUser.value = sessionSplit[sessionSplit.length - 1];
			await getUser();
		}
	});
</script>

<template>
	<div class="flex h-screen flex-col justify-between border-e bg-[#F6FFF7]">
		<div class="py-6">
			<span class="grid h-10 w-32 place-content-center rounded-lg text-xs text-gray-600">
				<img src="../../../assets/LOGO.svg" alt="Let´s do it now" class="h-[30px]">
			</span>

			<ul class="mt-6 space-y-1">
				<li class="bg-[#4ade80] py-2">
					<button class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-50">Proyectos</button>
				</li>
			</ul>
		</div>

		<div class="sticky inset-x-0 bottom-0 border-t border-gray-100" @click="isDropdownOpen = !isDropdownOpen">
			<button class="flex items-center gap-2 p-4 text-left mx-auto">
				<img alt="Avatar" src="../../../assets/icon-people-2.svg" class="h-10 w-10 rounded-full object-cover" />

				<div>
					<p class="text-xs/[10px]">
						<strong class="block font-medium">{{ dataUser.name }}</strong>
						<span class="text-[8px]">{{ dataUser.email }}</span>
					</p>
					<div v-if="isDropdownOpen" class="z-10 bg-white rounded-md shadow w-32 p-1 drop-shadow-xl md:flex items-center text-sm absolute left-[50px] bottom-[50px]">
						<ul class="text-sm text-gray-700 w-full" aria-labelledby="dropdownDefaultButton">
							<li>
								<button class="block px-4 py-2 rounded-md w-full hover:bg-[#4ade80] hover:text-white" @click="closeSesion()">Cerrar sesión</button>
							</li>
						</ul>
					</div>
				</div>
			</button>
		</div>
	</div>
	<spinner v-if="spinner" />
</template>