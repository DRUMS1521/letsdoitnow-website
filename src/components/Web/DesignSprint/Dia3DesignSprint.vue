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
		content: {
			id: string;
			title: string;
			description: string;
			answer: string;
		}[];
	};

	const question = ref<Question>({
		isFinished: false,
		content: [
			{id: '1', title: 'Impacto', description: 'Posible impacto', answer: ''},
			{id: '2', title: 'Viabilidad', description: 'Posible Viabilidad', answer: '',},
			{id: '3', title: 'Implementación', description: 'Facilidad de implementación', answer: ''}
		]
	});

	const finishVote = ref<boolean>(false);

	const isFinishedVote = () => {
		// guardar el arrye en arr
		const arr = props.dataSprint.day2.content.solutions.content;
		// crear un nuevo arrye con los votos de cada objeto
		const arrVote = arr.map((item: any) => item.vote);
		// obtener el valor maximo del arrye
		const maxVote = Math.max(...arrVote);
		// obtener el indice del valor maximo
		const indexMaxVote = arrVote.indexOf(maxVote);
		// obtener el indice del valor maximo
		const indexMaxVote2 = arrVote.lastIndexOf(maxVote);

		if (maxVote == 0) {
			showToast('No hay votos', 'error', 3000, POSITION.BOTTOM_CENTER)
		}

		if (maxVote != 0 && indexMaxVote != indexMaxVote2) {
			showToast('Hay empate, selecciona una opción', 'error', 3000, POSITION.BOTTOM_CENTER)
		}

		if (indexMaxVote == indexMaxVote2) {
			// obtener la posicion del objeto con el valor maximo en el arrye props.dataSprint.day2.content.solutions.content
			const index = arr.findIndex((item: any) => item.vote == maxVote);
			// agregar el valor true a la propiedad isWinner del objeto con el valor maximo
			props.dataSprint.day2.content.solutions.content[index].isWinner = true;
			finishVote.value = true;
		}

	};

	const saveDay3 = async() => {
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
			await props.saveDay(2, props.dataSprint.day2);
			await props.saveDay(3, question.value);
			router.go(0);
		}
	};

onMounted(() => {
	if (props.dataSprint.day2.content.solutions.content.some((item: any) => item.isWinner == true)) {
		finishVote.value = true;
	}
	if (props.dataSprint.day3) question.value = props.dataSprint.day3;
});
</script>

<template>
	<div class="h-full overflow-y-auto">
		<div class="my-4">
			<p class="ml-1 font-semibold">Votaciones</p>
		</div>
		<div class="">

			<div class="w-full">
				<div class="w-[250px] mx-2 mt-4 inline-block align-top" v-for="(solution, i) in props.dataSprint.day2.content.solutions.content" :key="i">
					<div class="flex justify-between mb-2">
						<p class="font-medium">Solucion #{{ i +1 }}</p>
						<div class="flex">
							<div class="bg-green-600 text-white px-3 border rounded-md cursor-pointer" @click="(solution.vote-- == 0) ? solution.vote = 0 : solution.vote">-</div>
							<div class="min-w-[32px] px-2">{{ solution.vote }}</div>
							<div class="bg-green-600 text-white px-3 border rounded-md cursor-pointer" @click="solution.vote++">+</div>
						</div>
					</div>
					<div>
						<textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="8"
							placeholder="Escribe tu respuesta" v-model="solution.msg" disabled></textarea>
					</div>
				</div>
			</div>

			<div v-if="finishVote" class="pr-2">
				<div class="mt-8">
					<p class="font-semibold">Solución con más votos</p>
				</div>
				<div class="pt-2" v-for="solution in props.dataSprint.day2.content.solutions.content">
					<div v-if="solution.isWinner">
						<p class="pb-1">Descripción de la solución <span class="text-xs text-red-500">Esta entrada ya no es editable</span></p>
						<textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta" v-model="solution.msg" disabled></textarea>
					</div>
				</div>

				<div class="py-2" v-for="q in question.content">
					<p class="mt-6 font-medium">{{ q.title }}</p>
					<p class="pb-1">{{ q.description }} <span v-if="question.isFinished" class="text-xs text-red-500">Esta entrada ya no es editable</span></p>
					<textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta" :data-question-id="q.id" v-model="q.answer" :disabled="question.isFinished"></textarea>
				</div>
			</div>

		</div>
	</div>

	<div class="flex">
		<div class="w-full mt-4">
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md" @click="isFinishedVote()" v-if="!finishVote">Terminar votacion</button>
		</div>
		<div class="w-full mt-4">
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto" v-if="finishVote"  @click="question.isFinished ? props.changeDay(4): saveDay3()">
				Siguiente
				<span class="ml-2">
					<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
				</span>
			</button>
		</div>
	</div>
</template>