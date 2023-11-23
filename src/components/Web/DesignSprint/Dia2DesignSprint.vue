<script setup lang="ts">
import { ref } from 'vue';
import Dia2DesingnSpintView1 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSpintView1.vue';
import Dia2DesingnSpintView2 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSprintView2.vue';
import Dia2DesingnSpintView3 from '@/components/Web/DesignSprint/Dia2DesignSprint/Dia2DesignSprintView3.vue';

/* data */
const soluciones = ref<boolean>(true);
const otrasIdeas = ref<boolean>(false);
const clienteIdeal = ref<boolean>(false);

/* methods */
function changeView(a: Number) {
	if (a === 1) {
		soluciones.value = true;
		otrasIdeas.value = false;
		clienteIdeal.value = false;
	} else if (a === 2) {
		soluciones.value = false;
		otrasIdeas.value = true;
		clienteIdeal.value = false;
	} else if (a === 3) {
		soluciones.value = false;
		otrasIdeas.value = false;
		clienteIdeal.value = true;
	}
}

</script>

<template>
	<div class="h-full">
		<div class="flex my-4">
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex" @click="changeView(1)">Soluciones</button>
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex mx-8" @click="changeView(2)">Ideas de otras industrias</button>
			<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex" @click="changeView(3)">Mi cliente ideal</button>
		</div>
		<div class="overflow-y-auto">
			<dia2-desingn-spint-view1 v-if="soluciones" />
			<dia2-desingn-spint-view2 v-if="otrasIdeas" />
			<dia2-desingn-spint-view3 v-if="clienteIdeal" />
		</div>
	</div>
	<div class="w-full text-right mt-4">
		<button class="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-md flex ml-auto">
			Siguiente
			<span class="ml-2">
				<img src="@/assets/Arrow-2.svg" alt="Siguiente" class="w-6 h-6" />
			</span>
		</button>
</div></template>