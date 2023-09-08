<script setup lang="ts">
const props = defineProps({
	titleText: {
		type: String
	},
	descriptionText: {
		type: String
	}
})
</script>

<template>
	<div class="">
		<h2 class="text-[#397A3E] font-medium">{{ titleText }}</h2>
		<p>{{ descriptionText }}</p>
	</div>
</template>