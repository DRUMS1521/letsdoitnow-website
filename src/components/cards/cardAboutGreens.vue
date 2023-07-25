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
	<div class="card-style-green">
		<h2>{{ titleText }}</h2>
		<p>{{ descriptionText }}</p>
	</div>
</template>