<script setup lang="ts">
const props = defineProps({
	text: {
		type: String
	},
	text2: {
		type: String
	},
	text3: {
		type: String
	},
	text4: {
		type: String
	},
	text5: {
		type: String
	}
})
</script>

<template>
	<h3 class="subtitle-3">Categorías del blog</h3>
	<ul class="links-blog">
		<a href="">
			<li>{{ props.text }}</li>
		</a>
		<a href="">
			<li>{{ props.text2 }}</li>
		</a>
		<a href="">
			<li>{{ props.text3 }}</li>
		</a>
		<a href="">
			<li>{{ props.text4 }}</li>
		</a>
		<a href="">
			<li>{{ props.text5 }}</li>
		</a>
	</ul>
</template>