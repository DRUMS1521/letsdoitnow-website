<template>
	<div class="w-full h-[100vh] flex items-center justify-center spinnerCont">
		<div class="spinner">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<style scoped>
.spinnerCont {
	position: absolute;
	z-index: 900;
	top: 0;
	left: 0;
	height: 100%;
}
/* Spinner */
.spinner {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}

.spinner div {
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid #333;
	border-radius: 50%;
	animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #21bd48 transparent transparent transparent;
}

.spinner div:nth-child(1) {
	animation-delay: -0.45s;
}

.spinner div:nth-child(2) {
	animation-delay: -0.3s;
}

.spinner div:nth-child(3) {
	animation-delay: -0.15s;
}

@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
/* Fin Spinner */
</style>