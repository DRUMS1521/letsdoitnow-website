<script setup lang="ts">
</script>

<template>
    <div class="overflow-y-auto">
        <div>
            <p class="pb-1">¿Cual es el problema que estamos tratando de resolver?</p>
            <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta"></textarea>
        </div>
        <div class="py-2">
            <p class="pb-1">¿Quienes son los usuarios o clientes que estamos tratando de ayudar?</p>
            <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta"></textarea>
        </div>
        <div class="py-2">
            <p class="pb-1">¿Cuales son los objetivos específicos que queremos lograr con este sprint?</p>
            <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta"></textarea>
        </div>
        <div>
            <p class="pb-1">¿Que recursos o limitaciones debemos tener en cuenta durante el sprint?</p>
            <textarea class="border border-gray-800 rounded-md p-1 w-full" name="" id="" cols="30" rows="7" placeholder="Escribe tu respuesta"></textarea>
        </div>
    </div>
    <div class="w-full text-right mt-4">
        <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
            Siguiente
            <span class="ml-2">
                <img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
            </span>
        </button>
    </div>
</template>