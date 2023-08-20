<script setup>
	import { ref } from 'vue';

	const email = ref('');
	const password = ref('');
	const confirmPassword = ref('');

	const submitForm = () => {
		// Lógica de manejo del formulario
	};
</script>

<template>
	<div class="modal">
		<div class="modal-content">
			<span class="close" @click="closeModal">&times;</span>
			<h2 class="modal-title">Registro</h2>
			<form @submit.prevent="submitForm">
				<div class="form-group">
					<input v-model="email" type="email" placeholder="Email" required />
				</div>
				<div class="form-group">
					<input v-model="password" type="password" placeholder="Password" required />
				</div>
				<div class="form-group">
					<input v-model="confirmPassword" type="password" placeholder="Confirmar password" required />
				</div>
				<button class="submit" type="submit">Registrarse</button>
			</form>
		</div>
	</div>
</template>

<style scoped>
	.modal {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-content {
		background-color: #fff;
		margin: 15% auto;
		padding: 1.5rem;
		border: 1px solid #888;
		width: 80%;
		max-width: 400px;
		position: relative;
		border-radius: 1rem;
	}

	.close {
		position: absolute;
		top: 0;
		right: 10px;
		font-size: 28px;
		font-weight: bold;
		cursor: pointer;
	}

	/* Estilos para el formulario */
	.modal-title {
		text-transform: uppercase;
		color: #2C3E50;
		margin-bottom: 10px;
	}

	input {
		padding: 15px;
		border: 1px solid #ccc;
		border-radius: 3px;
		margin-bottom: 10px;
		width: 100%;
		box-sizing: border-box;
		font-family: montserrat;
		color: #2C3E50;
		font-size: 13px;
	}

	.submit {
		width: 100px;
		background: #27AE60;
		font-weight: bold;
		color: white;
		border: 0 none;
		border-radius: 1px;
		cursor: pointer;
		padding: 10px;
		margin: 10px 5px;
		text-decoration: none;
		font-size: 14px;
	}

	.submit:hover {
		background-color: #34c26f;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.modal-content {
			max-width: 90%;
		}
	}
</style>