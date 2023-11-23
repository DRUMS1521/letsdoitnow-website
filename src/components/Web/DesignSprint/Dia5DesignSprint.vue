<script setup lang="ts">
</script>

<template>
    <h1>Dia 5</h1>
    <div>
        <div>
            <div class="my-2 md:my-6">
                <p class="ml-1 font-semibold my-6">Feedback: <span class="font-semibold text-green-600">Solución # 1</span></p>
            </div>
            <div>
                <p class="mb-2 font-medium">Descripción de la solución</p>
                <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7"></textarea>
            </div>
        </div>
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
        <div class="w-full mt-4">
            <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
                Finalizar Sprint
            </button>
        </div>
    </div>
</template>