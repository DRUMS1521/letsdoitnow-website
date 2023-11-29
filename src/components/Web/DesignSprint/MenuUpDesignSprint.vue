<script setup lang="ts">
	import { defineProps } from 'vue';
	import router from '@/router';
	import  { showToast, POSITION } from '../../../stores/Toast';

	const props = defineProps({
		dataSprint: {
			type: Object,
			default: () => {
				return {
					day1: false,
					day2: false,
				};
			},
		},
		changeDay:  {
			type: Function,
			default: () => {
				showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
			},
		},
		view: {
			type: Number,
			default: 1,
		},
	});

	const getButtonClasses = (day: number) => {
		return {
			'inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-gray-50': true,
			'focus:relative bg-green-500 text-green-50': props.dataSprint[`day${day}`],
			'bg-green-600 text-green-50': props.dataSprint[`day${day - 1}`] && props.dataSprint[`day${day - 1}`].isFinished && !props.dataSprint[`day${day}`],
			'bg-green-700': props.view == day,
		};
	};

	const handleButtonClick = (day: number) => {
		if (props.dataSprint[`day${day - 1}`] && props.dataSprint[`day${day - 1}`].isFinished && !props.dataSprint[`day${day}`]) {
			props.changeDay(day);
		}else if(props.dataSprint[`day${day}`]){
			props.changeDay(day);
		}
	};

	const getButtonTitle = (day: number) => {
		return props.dataSprint[`day${day - 1}`] && !props.dataSprint[`day${day}`] ? `Dia ${day}` : 'No disponible';
	};
</script>

<template>
	<div>
		<div class="flex">
			<div class="flex items-center pr-2 cursor-pointer">
				<p class="text-green-600" @click="router.replace('/design-sprint'), router.go(-1)"><b>&#60;</b></p>
			</div>
			<div class="inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm">
				<button
					class="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-green-700 hover:text-gray-50"
					:class="{'focus:relative bg-green-500 text-green-50': dataSprint.day1, 'bg-green-600 text-green-50': !dataSprint.day1, 'bg-green-700': view == 1}"
					@click="props.changeDay(1)"
					title="Dia 1"
				>Dia 1</button>

				<button v-for="day in [2, 3, 4, 5]" :key="day"
					:class="getButtonClasses(day)"
					:title="getButtonTitle(day)"
					@click="handleButtonClick(day)"
					>Dia {{ day }}
				</button>
			</div>
		</div>
		<div class="mb-4">
			<p class="text-xs mt-2">Encuentra aquí todos los detalles de tu Design Sprint</p>
		</div>
	</div>
</template>