<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';

	const misDesignSprint = ref<Array<Object>>([{}]);

	const getMisDesignSprint = async () => {
		try {
			const response = await axios.get('http://localhost:3000/api/v1/design-sprint');
			misDesignSprint.value = response.data;
		} catch (error) {
			console.log(error);
		}
	}

	onMounted(() => {
		console.log('Design Sprint');
	});
</script>

<template>
	<div class="flex flex-col h-full">
		<div class="h-[30%]">
			<h1 class="text-2xl"><b>Mis Design Sprint</b></h1>
			<p class="text-xs mt-2">Encuentra aquí todos los proyectos creados y el progreso en el que se ecuentran</p>
			<button class="group relative py-1 px-4 overflow-hidden rounded-md bg-green-500 hover:bg-green-600 text-lg font-bold text-white mt-2">Agregar proyecto</button>
		</div>
	
		<!-- <div class="mt-4 h-full w-full flex flex-col justify-center items-center">
			<div class="w-[150px]">
				<img src="../../../assets/shapes.svg" alt="">
			</div>
			<p class="text-center mt-8">Aún no tienes ningún Design Sprint.<br><b>¡Comienza uno ahora!</b></p>
		</div> -->

		<div class="mt-4 h-full w-full overflow-y-auto">
			<div class=" p-1 px-2 bg-[#F6FFF7] flex w-full items-center rounded-md border-b-2 border-green-500 max-w-[1000px] mx-auto mb-8">
				<p class="w-[50%]">Nombre del Spring</p>

				<!-- <span role="progressbar" aria-labelledby="ProgressLabel" aria-valuenow="50" class="block rounded-full bg-gray-200 w-[50%]">
					<span class="block h-4 rounded-full bg-green-500 text-center text-[10px]/4" style="width: 50%">
						<span class="font-bold text-white"> 50% </span>
					</span>
				</span> -->

				<div class="w-[50%]">
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

	

	<!-- <div role="status" class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
		<svg aria-hidden="true" class="w-8 h-8 text-green-300 animate-spin dark:text-green-300 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
			<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
		</svg>
		<span class="sr-only">Loading...</span>
	</div> -->
</template>