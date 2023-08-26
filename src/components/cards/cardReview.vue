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
		<div class="name-review">
			<img src="../../assets/clients/aliaga_go.png" alt="">
			<div>
				<h5>{{ props.namePerson }}</h5>
				<h6>{{ props.company }}</h6>
			</div>
		</div>
		<p>{{ props.review }}</p>
		<!-- <iframe width="420" height="315"
		src="https://drive.google.com/file/d/1HCZ3nN2clj1o0zmT6nNgk4bZ5GPrF_GE/view?usp=sharing" style="border-radius: 6px;">
		</iframe> -->
		
	</div>
</template>