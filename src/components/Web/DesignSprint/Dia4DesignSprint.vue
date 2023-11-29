<script setup lang="ts">
	import { ref, defineProps, onMounted } from 'vue';
	import router from '@/router';
	import  { showToast, POSITION } from '../../../stores/Toast';

	const props = defineProps({
		saveDay: {
			type: Function,
			default: () => {
				showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
			},
		},
		dataSprint: {
			type: Object,
			default: () => {
				return {
					day1: false,
				};
			},
		},
		changeDay:  {
			type: Function,
			default: () => {
				showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
			},
		}
	});

	interface Question {
		isFinished: boolean;
		isTaskFinished: boolean;
		content: [
			{
				id: string;
				Teammember: string;
				task: string;
				supply: string;
			}
		];
	}

	const question = ref<Question>({
		isFinished: false,
		isTaskFinished: false,
		content: [
			{id: '1', Teammember: '', task: '', supply: ''},
		]
	});

	const saveDay4 = async(a: boolean) => {
		const emptyAnswer = question.value.content[0].task;
		const emptyAnswer2 = question.value.content[0].Teammember;
		const emptyAnswer3 = question.value.content[0].supply;

		if (a) {
			if (emptyAnswer == '' || emptyAnswer2 == '') {
				showToast('El campo "Miembro del equipo" y "Tarea" son obligatorios', 'error', 3000, POSITION.BOTTOM_CENTER);
			} else {
				question.value.content = question.value.content.filter((q) => q.task !== '');
				question.value.isTaskFinished = true;
				await props.saveDay(4, question.value);
			}
		} else {
			if (emptyAnswer3 == '') {
				showToast('El campo "Link de entrega" es obligatorio', 'error', 3000, POSITION.BOTTOM_CENTER);
			} else {
				question.value.content = question.value.content.filter((q) => q.task !== '');
				question.value.isFinished = true;
				await props.saveDay(4, question.value);
				router.go(0);
			}
		}
	};

	const newId = () => {
		return `${question.value.content.length + 1}`;
	};

	onMounted(() => {
		if (props.dataSprint.day4) question.value = props.dataSprint.day4;
	});
</script>

<template>
	<div class="overflow-y-auto h-full">
		<h1 class="ml-1 my-2 md:my-6 text-xl"><b>Tareas</b></h1>

		<div class="md:flex w-full shadow-xl p-3 px-2 rounded-md bg-white mb-6" v-for="q in question.content">
			<div class="w-full md:w-1/4 flex flex-col justify-end">
				<p class="font-medium leading-4">Miembro del equipo<br><span v-if="question.isTaskFinished" class="text-[10px] text-red-500">Esta entrada ya no es editable</span></p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" v-model="q.Teammember" type="text" placeholder="Escribe tu respuesta" :disabled="question.isTaskFinished">
			</div>
			<div class="w-full my-2 md:w-2/4 md:mx-4 md:my-0 flex flex-col justify-end">
				<p class="font-medium leading-4">Tarea<br><span v-if="question.isTaskFinished" class="text-[10px] text-red-500">Esta entrada ya no es editable</span></p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" v-model="q.task" type="text" placeholder="Escribe tu respuesta" :disabled="question.isTaskFinished">
			</div>
			<div class="w-full md:w-1/4 flex flex-col justify-end">
				<p class="font-medium leading-4">Link de entrega<br><span v-if="!question.isTaskFinished" class="text-[8px] text-red-500">Primero debes terminar la asignacion de tareas</span><span v-if="question.isFinished" class="text-[10px] text-red-500">Esta entrada ya no es editable</span></p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" v-model="q.supply" type="text" placeholder="Escribe tu respuesta" :disabled="!question.isTaskFinished || question.isFinished">
			</div>
		</div>

		<div class="w-full mt-2 flex justify-center md:flex md:items-center">
			<button class="rounded-full flex mx-auto" @click="!question.isTaskFinished ? question.content.push({id: newId(), Teammember: '', task: '', supply: ''}) : showToast('No se pueden agregar mas elementos', 'error', 3000, POSITION.BOTTOM_CENTER)">
				<span>
					<img src="@/assets/suma.svg" alt="Siguiente" class="w-10 h-10 hover:scale-95" />
				</span>
			</button>
		</div>

	</div>

	<div class="flex">
		<div class="w-full mt-4">
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md" @click="saveDay4(true)" v-if="!question.isTaskFinished">Terminar asignacion</button>
		</div>
		<div class="w-full mt-4">
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto" @click="question.isFinished ? props.changeDay(5) : saveDay4(false)" v-if="question.isTaskFinished">
				Siguiente
				<span class="ml-2">
					<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
				</span>
			</button>
		</div>
	</div>
</template>