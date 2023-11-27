<script setup lang="ts">
	import { onMounted, ref, defineProps } from 'vue';
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
		content: {
			id: string;
			title: string;
			answer: string;
		}[];
	}

	const textareaClass = () => {
		return {
			'border border-gray-800 rounded-md p-1 w-full': true,
			'focus:relative bg-green-500 text-green-50': false,
			'bg-green-600 text-green-50': false,
		};
	};

	const question = ref<Question>({
		isFinished: false,
		content: [
			{id: '1', title: '¿Cual es el problema que estamos tratando de resolver?', answer: ''},
			{id: '2', title: '¿Quienes son los usuarios o clientes que estamos tratando de ayudar?', answer: '',},
			{id: '3', title: '¿Cuales son los objetivos específicos que queremos lograr con este sprint?', answer: ''},
			{id: '4', title: '¿Que recursos o limitaciones debemos tener en cuenta durante el sprint?', answer: ''},
		]
	});

	const saveDay1 = async() => {
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

	onMounted(() => {
		if (props.dataSprint.day1) question.value = props.dataSprint.day1;
	});
</script>

<template>
	<div class="overflow-y-auto h-full pr-0 md:pr-2">
		<div v-for="q in question.content" class="mb-6">
			<p class="pb-1">{{ q.title }} <span v-if="question.isFinished" class="text-xs text-red-500">Esta entrada ya no es editable</span></p>
			<textarea :class="textareaClass()" v-model="q.answer" cols="30" rows="5" placeholder="Escribe tu respuesta" :data-question-id="q.id" :disabled="question.isFinished"></textarea>
		</div>
	</div>
	<div class="w-full text-right mt-4">
		<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto" @click="question.isFinished ? props.changeDay(2): saveDay1()">
			Siguiente
			<span class="ml-2">
				<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
			</span>
		</button>
	</div>
</template>