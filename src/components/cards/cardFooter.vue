<script setup lang="ts">
const props = defineProps({
	textFooter: {
		type: String
	},
	textFooter2: {
		type: String
	},
	textFooter3: {
		type: String
	},
	link1: {
		type: String
	},
	link2: {
		type: String
	},
	link3: {
		type: String
	}
})

</script>

<template>
	<ul class="links-footer">
		<a :href="link1">
			<li>{{ props.textFooter }}</li>
		</a>
		<a :href="link2">
			<li>{{ props.textFooter2 }}</li>
		</a>
		<a :href="link3">
			<li>{{ props.textFooter3 }}</li>
		</a>
	</ul>
</template>

