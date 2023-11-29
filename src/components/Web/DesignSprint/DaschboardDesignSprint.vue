<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import router from '@/router';
	import axios from 'axios';
	import  { showToast, POSITION } from '../../../stores/Toast';
	import Spinner from '@/components/General/SpinerComponent.vue';

	const props = defineProps({
		changeSprint:  {
			type: Function,
			default: () => {
				showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
			},
		},
	});
	
	const misDesignSprint = ref<Array<Sprint>>();
	interface Sprint {title: string, day1: Object, day2: Object, day3: Object, day4: Object, day5: Object, _id: string}
	const token = ref<string>();
	const idUser = ref<string>();
	const title = ref<string>();
	const modalTitle = ref<boolean>(false);
	const spinner = ref<Boolean>(false);
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */

	const getMisDesignSprint = async () => {
		spinner.value = true;
		try {
			const response = await axios.get(`${URL}/designSprint/user/${idUser.value}`, {headers: {'token': token.value}});
			misDesignSprint.value = response.data;
		} catch (error) {
			showToast(`Error al obtener los Design Sprint. ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spinner.value = false;
	}

	// Crar un nuevo Design Sprint
	const createDesignSprint = async () => {
		spinner.value = true;
		if (!title.value) {
			showToast('El titulo es obligatorio.', 'error', 3000, POSITION.BOTTOM_CENTER)
			return;
		}
		try {
			const response = await axios.post(`${URL}/designSprint`, {
				user: idUser.value,
				title: title.value,
			}, {headers: {'token': token.value}});
			misDesignSprint.value?.push(response.data);
			title.value = '';
			modalTitle.value = false;
		} catch (error) {
			showToast(`Error al crear el Design Sprint. ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
		}
		spinner.value = false;
	}

	const porcentaje = (sprint: Sprint) => {
		if (sprint.day4) {
			return "80%";
		} else if (sprint.day3) {
			return "60%";
		} else if (sprint.day2) {
			return "40%";
		} else if (sprint.day1){
			return "20%";
		} else {
			return "0%";
		}
	}

	onMounted(async() => {
		const session = localStorage.getItem('session');
		if (session) {
			const sessionSplit = session.split('-');
			token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
			idUser.value = sessionSplit[sessionSplit.length - 1];
			await getMisDesignSprint();
		}
	});
</script>

<template>
	<div class="flex flex-col h-full">
		<div class="h-[30%]">
			<h1 class="text-2xl"><b>Mis Design Sprint</b></h1>
			<p class="text-xs mt-2">Encuentra aquí todos los proyectos creados y el progreso en el que se ecuentran</p>
			<div>
				<button class="group relative py-1 px-4 overflow-hidden rounded-md bg-green-500 hover:bg-green-600 text-lg font-bold text-white mt-2" @click="modalTitle = true">Agregar proyecto</button>
				<div class="absolute bg-[#00000063] top-0 left-0 w-full h-full flex justify-center items-center" v-if="modalTitle">
					<div class="p-4 bg-white max-w-[400px] min-w-[300px]">
						<p class="font-2xl"><b>Titulo del Design Sprint</b></p>
						<input type="text" v-model="title" placeholder="Nombre del Design Sprint" class="p-2 border border-gray-300 rounded-md block w-full mt-2" />
						<div class="flex justify-between mt-6">
							<button class="group relative py-1 px-4 overflow-hidden rounded-md bg-gray-500 hover:bg-gray-600 text-lg font-bold text-white" @click="title = '', modalTitle = false">Cancelar</button>
							<button class="group relative py-1 px-4 overflow-hidden rounded-md bg-green-500 hover:bg-green-600 text-lg font-bold text-white ml-2" @click="createDesignSprint()">Crear</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	
		<div class="mt-4 h-full w-full flex flex-col justify-center items-center" v-if="!misDesignSprint">
			<div class="w-[150px]">
				<img src="../../../assets/shapes.svg" alt="">
			</div>
			<p class="text-center mt-8">Aún no tienes ningún Design Sprint.<br><b>¡Comienza uno ahora!</b></p>
		</div>

		<div class="mt-4 h-full w-full overflow-y-auto" v-else>
			<div class=" p-1 px-2 bg-[#F6FFF7] flex w-full items-center rounded-md border-b-2 border-green-500 max-w-[1000px] mx-auto mb-8 cursor-pointer" v-for="sprint of misDesignSprint" @click="router.push(`/design-sprint/${sprint._id}`), props.changeSprint(sprint._id)">
				<p class="w-[50%]">{{ sprint.title }}</p>

				<span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="50" class="block rounded-full bg-gray-200 w-[50%]" v-if="!sprint.day5">
					<span class="block h-4 rounded-full bg-green-500 text-center text-[10px]/4" :style="{width: porcentaje(sprint)}">
						<span class="font-bold text-white"> {{ porcentaje(sprint) }} </span>
					</span>
				</span>

				<div class="w-[50%]" v-else>
					<div class="flex items-center justify-end">
						<div class="flex items-center">
							<p class="mr-2 text-xs md:text-base">Completado</p>
							<div class="w-3 h-3 rounded-full bg-green-500"></div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
	<spinner v-if="spinner" />
</template>