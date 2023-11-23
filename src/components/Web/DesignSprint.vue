<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import MenuLeftDesignSprint from '@/components/Web/DesignSprint/MenuLeftDesignSprint.vue';
	import DaschboardDesignSprint from '@/components/Web/DesignSprint/DaschboardDesignSprint.vue';
	import MenuUpDesignSprint from '@/components/Web/DesignSprint/MenuUpDesignSprint.vue';
	import Dia1DesignSprint from '@/components/Web/DesignSprint/Dia1DesignSprint.vue';
	import Dia2DesignSprint from '@/components/Web/DesignSprint/Dia2DesignSprint.vue';
	import Dia3DesignSprint from '@/components/Web/DesignSprint/Dia3DesignSprint.vue';
	import Dia4DesignSprint from '@/components/Web/DesignSprint/Dia4DesignSprint.vue';
	import Dia5DesignSprint from '@/components/Web/DesignSprint/Dia5DesignSprint.vue';
	import ChatDesignSprint from '@/components/Web/DesignSprint/ChatDesignSprint.vue';

	const view = ref<Number>(0);

	onMounted(() => {
		console.log('Design Sprint');
	});
</script>

<template>
	<div class="flex h-screen">
		<div class="max-w-[200px] absolute md:relative ml-[-200px] md:ml-0">
			<menu-left-design-sprint />
		</div>
		<div class="p-4 md:p-8 w-[100%] overflow-hidden flex flex-col justify-between">
			<menu-up-design-sprint v-if="view != 0"/>
			<daschboard-design-sprint v-if="view == 0"/>
			<dia1-design-sprint v-else-if="view == 1"/>
			<dia2-design-sprint v-else-if="view == 2"/>
			<dia3-design-sprint v-else-if="view == 3"/>
			<dia4-design-sprint v-else-if="view == 4"/>
			<dia5-design-sprint v-else-if="view == 5"/>
			<chat-design-sprint v-if="view != 0"/>
			<button @click="view++" class="absolute">Mas {{ view }}</button>
		</div>
	</div>

</template>