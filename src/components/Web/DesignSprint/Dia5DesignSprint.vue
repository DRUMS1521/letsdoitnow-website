<script setup lang="ts">
</script>

<template>
	<div>
		<div class="my-2 md:my-6">
			<p class="ml-1 font-semibold my-6">Feedback: <span class="font-semibold text-green-600">Solución # 1</span>
			</p>
		</div>
		<div>
			<p class="mb-2 font-medium">Descripción de la solución</p>
			<textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="3"></textarea>
		</div>
	</div>
	<div class="h-full overflow-y-auto">
		<div class="my-4">
			<div class="mb-2 ml-1 font-semibold">
				<p>Usuario 1</p>
			</div>
			<div class="md:w-full md:flex">
				<div class="mb-2 md:w-1/5 md:mr-2">
					<p class="font-medium">Lo que disfrutó</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
				<div class="md:w-2/5 md:mr-2">
					<p class="font-medium">Posibles mejoras</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
				<div class="md:w-2/5">
					<p class="font-medium">Lo que disfrutó</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
			</div>
		</div>
		<div>
			<div class="mb-2 ml-1 font-semibold">
				<p>Usuario 2</p>
			</div>
			<div class="md:w-full md:flex">
				<div class="mb-2 md:w-1/5 md:mr-2">
					<p class="font-medium">Lo que disfrutó</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
				<div class="md:w-2/5 md:mr-2">
					<p class="font-medium">Posibles mejoras</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
				<div class="md:w-2/5">
					<p class="font-medium">Lo que disfrutó</p>
					<input class="border border-gray-800 rounded-md w-full py-1" type="text">
				</div>
			</div>
		</div>
	</div>
	<div class="w-full mt-4">
		<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
			Finalizar Sprint
		</button>
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