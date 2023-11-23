<script setup lang="ts">
</script>

<template>
    <div>
        <div class="mr-3 inline-block align-top w-full md:flex">
            <div class="md:w-1/4">
                <div class="flex justify-between mb-2">
                    <p class="font-medium">Solucion #1</p>
                    <div class="flex">
                        <div class="bg-green-600 text-white px-3 border rounded-md">-</div>
                        <div class="px-6">0</div>
                        <div class="bg-green-600 text-white px-3 border rounded-md">+</div>
                    </div>
                </div>
                <div>
                    <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="10" placeholder="Escribe tu respuesta"></textarea>
                </div>
            </div>
            <div class="w-full mt-4 flex justify-center md:flex md:items-center md:w-1/4">
                <button class="bg-green-500 hover:scale-110 p-2 rounded-full">
                    <span>
                        <img src="@/assets/suma1.png" alt="Siguiente" class="w-6 h-6" />
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>