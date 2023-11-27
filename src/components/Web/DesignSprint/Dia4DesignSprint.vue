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
		content: [
			{id: '1', Teammember: '', task: '', supply: ''},
		]
	});

	const saveDay4 = async() => {
		const emptyAnswer = question.value.content.filter((q) => q.answer === '');

		if (emptyAnswer.length > 0) {
			showToast('Todos los campos son obligatorios', 'error', 3000, POSITION.BOTTOM_CENTER);
			const textareas = document.querySelectorAll('textarea');

			textareas.forEach((textarea) => {
				const questionId = textarea.getAttribute('data-question-id');

				if (emptyAnswer.some((q) => q.id === questionId)) {
					textarea.classList.add('border-red-500');
				} else {
					textarea.classList.remove('border-red-500');
				}
			});
		} else {
			question.value.isFinished = true;
			await props.saveDay(1, question.value);
			router.go(0);
		}
	};

</script>

<template>
	<div class="overflow-y-auto h-full">
		<h1 class="ml-1 my-2 md:my-6 text-xl"><b>Tareas</b></h1>

		<div class="md:flex w-full shadow-xl p-3 px-2 rounded-md bg-white mb-6">
			<div class="w-full md:w-1/4">
				<p class="font-medium">Miembro del equipo</p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" type="text" placeholder="Escribe tu respuesta">
			</div>
			<div class="w-full my-2 md:w-2/4 md:mx-4 md:my-0">
				<p class="font-medium">Tarea</p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" type="text" placeholder="Escribe tu respuesta">
			</div>
			<div class="w-full md:w-1/4">
				<p class="font-medium">Link de entrega</p>
				<input class="border border-gray-900 rounded-md px-8 py-3 w-full" type="text" placeholder="Escribe tu respuesta">
			</div>
		</div>

		<div class="w-full mt-2 flex justify-center md:flex md:items-center">
			<button class="rounded-full flex mx-auto" @click="question.isFinished ? props.changeDay(5): saveDay4()">
				<span>
					<img src="@/assets/suma.svg" alt="Siguiente" class="w-10 h-10 hover:scale-95" />
				</span>
			</button>
		</div>
	</div>
	<div class="w-full mt-4">
		<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
			Siguiente
			<span class="ml-2">
				<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
			</span>
		</button>
	</div>
</template>