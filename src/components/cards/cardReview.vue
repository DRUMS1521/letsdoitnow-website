<script setup lang="ts">
const props = defineProps({
	namePerson: {
		type: String
	},
	company: {
		type: String
	},
	review: {
		type: String
	}
})
</script>

<template>
	<div class="layout-card-review">
		<p>{{ props.review }}</p>
		<div class="name-review">
			<img src="../../assets/icon-review.svg" alt="">
			<div>
				<h5>{{ props.namePerson }}</h5>
				<h6>{{ props.company }}</h6>
			</div>

		</div>
	</div>
</template>