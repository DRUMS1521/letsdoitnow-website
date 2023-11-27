<script setup lang="ts">
	import { ref, defineProps, onMounted } from 'vue';
	import router from '@/router';
	import  { showToast, POSITION } from '../../../stores/Toast';
	import Dia2DesingnSpintView1 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSpintView1.vue';
	import Dia2DesingnSpintView2 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSprintView2.vue';
	import Dia2DesingnSpintView3 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSprintView3.vue';

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
			solutions: {
				title: string;
				description: string;
				content: {
					id: string;
					msg: string;
					vote: number;
					isWinner: boolean;
				}[];
			};
			industryIdeas: {
				title: string;
				description: string;
				content: {
					id: string;
					msg: string;
				}[];
			};
			idealClient: {
				title: string;
				description: string;
				content: {
					id: string;
					msg: string;
				}[];
			};
		};
	}

	const tap = ref<number>(1);
	const question = ref<Question>({
		isFinished: false,
		content: {
			solutions: {
				title: 'Solucion propuesta',
				description: 'Agrega una variedad de enfoques innovadores y viables para resolver desafíos específicos en el proyecto, ofreciendo opciones creativas y factibles.',
				content: [
					{id: '1', msg: '', vote: 0, isWinner: false}
				]
			},
			industryIdeas: {
				title: 'Idea de otra industria',
				description: 'Proporciona ejemplos relevantes y prácticos de estrategias exitosas dentro de la industria objetivo, destacando casos que podrían inspirar soluciones en el proyecto.',
				content: [
					{id: '1', msg: ''}
				]
			},
			idealClient: {
				title: 'Cliente ideal',
				description: 'Describe perfiles detallados de los tipos de clientes ideales para el proyecto, identificando características clave que podrían influir en las soluciones.',
				content: [
					{id: '1', msg: ''}
				]
			},
		}
	});

	const allBtn = (n: number) => {
		return {
			'bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex': true,
			'bg-green-600': tap.value == n,
		}
	};

	const getDescription = () => {
		switch (tap.value) {
			case 1:
				return question.value.content.solutions.description;
			case 2:
				return question.value.content.industryIdeas.description;
			case 3:
				return question.value.content.idealClient.description;
			default:
				return '';
		}
	};

	const saveDay2 = async() => {
		const solutions = question.value.content.solutions.content[0].msg;
		const industryIdeas = question.value.content.industryIdeas.content[0].msg;
		const idealClient = question.value.content.idealClient.content[0].msg;

		if (solutions == "" || industryIdeas == "" || idealClient == "") {
			showToast('Agrega por lo menos un campo para cada una de las pestañas', 'error', 3000, POSITION.BOTTOM_CENTER);
			
			let view: any[];
			switch (true) {
				case solutions == "":
					tap.value = 1; view = question.value.content.solutions.content; break;
				case industryIdeas == "":
					tap.value = 2; view = question.value.content.industryIdeas.content; break;
				case idealClient == "":
					tap.value = 3; view = question.value.content.idealClient.content; break;
			}

			const textareas = document.querySelectorAll('textarea');

			textareas.forEach((textarea) => {
				const questionId = textarea.getAttribute('data-question-id');

				if (view.some((q: { id: string | null; }) => q.id === questionId)) {
					textarea.classList.add('border-red-500');
				} else {
					textarea.classList.remove('border-red-500');
				}
			});
		} else {
			question.value.content.solutions.content = question.value.content.solutions.content.filter((s) => s.msg != "");
			question.value.content.industryIdeas.content = question.value.content.industryIdeas.content.filter((s) => s.msg != "");
			question.value.content.idealClient.content = question.value.content.idealClient.content.filter((s) => s.msg != "");

			question.value.isFinished = true;
			await props.saveDay(2, question.value);
			router.go(0);
		}
	};

	onMounted(() => {
		if(props.dataSprint.day2) question.value = props.dataSprint.day2;
	});

</script>

<template>
	<div class="flex my-4">
		<button class="mr-8" :class="allBtn(1)" @click="tap = 1">Soluciones</button>
		<button class="mr-8" :class="allBtn(2)" @click="tap = 2">Ideas de otras industrias</button>
		<button class="mr-8" :class="allBtn(3)" @click="tap = 3">Mi cliente ideal</button>
	</div>
	<p class="max-w-[800px] pb-2">{{ getDescription() }}</p>
	<div class="overflow-y-auto h-full">
		<div class="overflow-y-auto">
			<dia2-desingn-spint-view1 v-if="tap == 1" :question="question"/>
			<dia2-desingn-spint-view2 v-if="tap == 2" :question="question"/>
			<dia2-desingn-spint-view3 v-if="tap == 3" :question="question"/>
		</div>
	</div>
	<div class="w-full text-right mt-4">
		<button class="ml-auto" :class="allBtn(0)" @click="question.isFinished ? props.changeDay(3): saveDay2()">
			Siguiente
			<span class="ml-2">
				<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
			</span>
		</button>
    </div>
</template>