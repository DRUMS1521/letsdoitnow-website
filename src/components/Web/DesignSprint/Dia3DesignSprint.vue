<script setup lang="ts">
import { ref } from 'vue';
import Dia3DesignSprintUpper from '@/components/Web/DesignSprint/Dia3DesignSprint/Dia3DesignSprintUpper.vue';
import Dia3DesignSprintLower from '@/components/Web/DesignSprint/Dia3DesignSprint/Dia3DesignSprintLower.vue';

/* data */
const finishVote = ref<boolean>(false);

</script>

<template>
    <div class="my-4">
        <p class="ml-1 font-semibold">Votaciones</p>
    </div>
    <div>
        <div>
            <dia-3-design-sprint-upper />
        </div>
        <div v-if="finishVote">
            <dia-3-design-sprint-lower />
        </div>
        <div class="flex">
            <div class="w-full mt-4">
                <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md" @click="finishVote = true">
                    Terminar votacion
                </button>
            </div>
            <div class="w-full mt-4">
                <button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
                    Siguiente
                    <span class="ml-2">
                        <img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
                    </span>
                </button>
            </div>
        </div>
    </div>
    <h1>Dia 3</h1>
</template>