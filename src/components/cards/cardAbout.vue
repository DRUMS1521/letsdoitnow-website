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
	<div class="card-style">
		<h2>{{ props.titleText }}</h2>
		<p>{{ props.descriptionText }}</p>
	</div>
</template>