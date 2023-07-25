<script setup lang="ts">
const props = defineProps({
	title: {
		type: String
	},
	nameCreator: {
		type: String
	},
	timeRead: {
		type: String
	},
	category: {
		type: String
	},
})
</script>

<template>
	<div class="layout-card-blog">
		<div class="entry-blog">
			<h4 class="subtitle-2">{{ props.title }}</h4>
			<div class="line"></div>
			<p>{{ props.nameCreator }} | {{ props.timeRead }} | {{ props.category }}</p>
		</div>
	</div>
</template>