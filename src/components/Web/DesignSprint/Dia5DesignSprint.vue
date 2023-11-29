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
		content: [
			{
				id: string;
				enjoyed: string;
				upgrades: string;
				works: string;
			}
		];
	}

	const question = ref<Question>({
		isFinished: false,
		content: [
			{id: '1', enjoyed: '', upgrades: '', works: ''},
		]
	});

	const newId = () => {
		return `${question.value.content.length + 1}`;
	};

	const saveDay5 = async() => {
		const emptyAnswer = question.value.content.filter((q) => q.enjoyed == '' || q.upgrades == '' || q.works == '');
		if (emptyAnswer.length > 0) {
			showToast('No se pueden dejar campos vacios', 'error', 3000, POSITION.BOTTOM_CENTER);
		} else {
			question.value.isFinished = true;
			await props.saveDay(5, question.value);
		}
	};

	onMounted(() => {
		if (props.dataSprint.day5) question.value = props.dataSprint.day5;
	});

</script>

<template>
	<div>
		<div class="my-2 md:my-6">
			<p class="ml-1 font-semibold my-6">Feedback: <span class="font-semibold text-green-600">Solución</span>
			</p>
		</div>
		<div v-for="solution in props.dataSprint.day2.content.solutions.content">
			<div v-if="solution.isWinner">
				<p class="mb-2 font-medium">Descripción de la solución</p>
				<textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="3" v-model="solution.msg" disabled></textarea>
			</div>
		</div>
	</div>
	<div class="h-full overflow-y-auto">
		<div class="my-4">
			<div class="mt-4" v-for="q in question.content">
				<div class="mb-2 ml-1 font-semibold"><p>Usuario {{ q.id }} <span v-if="question.isFinished" class="text-[10px] text-red-500">Esta entrada ya no es editable</span></p></div>
				<div class="md:w-full md:flex pr-2">
					<div class="mb-2 md:w-1/5 md:mr-2">
						<p class="font-medium">Lo que disfrutó</p>
						<input class="border border-gray-800 rounded-md w-full py-1" type="text" v-model="q.enjoyed" :disabled="question.isFinished">
					</div>
					<div class="md:w-2/5 md:mr-2">
						<p class="font-medium">Posibles mejoras</p>
						<input class="border border-gray-800 rounded-md w-full py-1" type="text" v-model="q.upgrades" :disabled="question.isFinished">
					</div>
					<div class="md:w-2/5">
						<p class="font-medium">Lo que funcionan bien</p>
						<input class="border border-gray-800 rounded-md w-full py-1" type="text" v-model="q.works" :disabled="question.isFinished">
					</div>
				</div>
			</div>
		</div>

		<div class="w-full mt-2 flex justify-center md:flex md:items-center">
			<button class="rounded-full flex mx-auto" @click="!question.isFinished ? question.content.push({id: newId(), enjoyed: '', upgrades: '', works: ''}) : showToast('No se pueden agregar mas elementos', 'error', 3000, POSITION.BOTTOM_CENTER)">
				<span>
					<img src="@/assets/suma.svg" alt="Siguiente" class="w-10 h-10 hover:scale-95" />
				</span>
			</button>
		</div>
	</div>
	<div class="w-full mt-4">
		<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto" @click="question.isFinished ? router.go(-1) : saveDay5()">{{ question.isFinished ? 'Salir' : 'Finalizar Sprint' }}</button>
	</div>

    <!-- <div>
        <div>
            <div class="mb-8">
                <p class="text-lg font-semibold">¡Haz finalizado el sprint!</p>
                <p class="font-medium">Aqui encontraras un resumen de tu desing sprint</p>
            </div>
            <div class="flex justify-between items-center px-4 p-1 py-2 bg-green-300 rounded-md w-full mb-4">
                <p class="text-xl font-semibold">Día 1</p>
                <div>
                    <img src="@/assets/expand_more.svg" alt="">
                </div>
            </div>
            <div class="flex justify-between items-center px-4 p-1 py-2 bg-green-300 rounded-md w-full mb-4">
                <p class="text-xl font-semibold">Día 2</p>
                <div>
                    <img src="@/assets/expand_more.svg" alt="">
                </div>
            </div>
            <div class="flex justify-between items-center px-4 p-1 py-2 bg-green-300 rounded-md w-full mb-4">
                <p class="text-xl font-semibold">Día 3</p>
                <div>
                    <img src="@/assets/expand_more.svg" alt="">
                </div>
            </div>
            <div class="flex justify-between items-center px-4 p-1 py-2 bg-green-300 rounded-md w-full mb-4">
                <p class="text-xl font-semibold">Día 4</p>
                <div>
                    <img src="@/assets/expand_more.svg" alt="">
                </div>
            </div>
            <div class="flex justify-between items-center px-4 p-1 py-2 bg-green-300 rounded-md w-full mb-4">
                <p class="text-xl font-semibold">Día 5</p>
                <div>
                    <img src="@/assets/expand_more.svg" alt="">
                </div>
            </div>
        </div>
        <div class="w-full mt-4">
            <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
                Volver al Inicio
            </button>
        </div>
    </div> -->
</template>