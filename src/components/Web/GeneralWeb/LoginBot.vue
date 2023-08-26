<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import axios from 'axios';
	import  { showToast, POSITION } from '../../../stores/Toast';
	import Spinner from '@/components/General/SpinerComponent.vue';

	const email = ref('');
	const password = ref('');
	const confirmPassword = ref('');
	const name = ref('');
	const isLogin = ref(false);
	const isLimit = ref(false);
	const idUser = ref('');
	const token = ref();
	const isregisterLimit = ref(false);
	/* const URL = 'http://localhost:3000/api'; */
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	const spinner = ref(false);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const props = defineProps({
		closeModal: Function
	});

	const cleanForm = () => {
		email.value = '';
		password.value = '';
		confirmPassword.value = '';
	};

	const notAcount = async () => {
		try {
			const res = await axios.get(`${URL}/user/temp`);
			if (res.status === 200) {
				localStorage.setItem('session', res.data.token + '-' + res.data.user);
				if (props.closeModal) {
					props.closeModal();
				}
				window.location.reload();
			} else {
				showToast('Error al cargar', 'error', 3000, POSITION.BOTTOM_CENTER)
			}
		} catch (error) {
			showToast('Error al cargar', 'error', 3000, POSITION.BOTTOM_CENTER)
		}
	0};

	const register = async () => {
		spinner.value = true;
		if (!emailRegex.test(email.value)) {
			showToast('El email no es válido', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else if (!name.value||!password.value || !confirmPassword.value) {
			showToast('Todos los campos son obligatorios', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else if (password.value !== confirmPassword.value) {
			showToast('Las contraseñas no coinciden', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else {
			try {
				let dataSend;
				if (idUser.value) {
					dataSend = {
						"userId": idUser.value,
						"name": name.value,
						"email": email.value,
						"password": password.value
					};
				} else {
					dataSend = {
						"name": name.value,
						"email": email.value,
						"password": password.value
					};
				}
				let res = await axios.post(`${URL}/user`, dataSend, {});
				localStorage.setItem('session', res.data.token + '-' + res.data.user);
				showToast('Registrado correctamente', 'success', 2000, POSITION.BOTTOM_CENTER);
				if (props.closeModal) {
					props.closeModal();
				}
				setTimeout(() => {
					window.location.reload();
				}, 1200);
				cleanForm();
			} catch (error: any) {
				if (error.response.data.message == "A user with this email already exists.") {
					showToast(`Correo registrado`, 'error', 3000, POSITION.BOTTOM_CENTER)
				} else {
					showToast(`Error al registrar ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
				}
			}
		}
		spinner.value = false;
	};

	const login = () => {
		spinner.value = true;
		if (!emailRegex.test(email.value)) {
			showToast('El email no es válido', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else if (!password.value) {
			showToast('Todos los campos son obligatorios', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else {
			axios.post(`${URL}/login`, { "email": email.value, "password": password.value }, {})
				.then((res) => {
					localStorage.setItem('session', res.data.token + '-' + res.data.user);
					showToast('Iniciado correctamente', 'success', 2000, POSITION.BOTTOM_CENTER);
					if (props.closeModal) {
						props.closeModal();
					}
					setTimeout(() => {
						window.location.reload();
					}, 1200);
					cleanForm();
				})
				.catch((error) => {
					if (error.response.data.message == "Invalid email or password.") {
						showToast(`Contraseña o correo incorrectos`, 'error', 3000, POSITION.BOTTOM_CENTER)
					} else {
						showToast(`Error al iniciar ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
					}
				});
		}
		spinner.value = false;
	};

	onMounted(async () => {
		if (localStorage.getItem('limit')) {
			isLimit.value = true;
			localStorage.removeItem('limit');
		}
		if (localStorage.getItem('registerLimit')) {
			isregisterLimit.value = true;
			localStorage.removeItem('registerLimit');
		}

		if (localStorage.getItem('session')) {
			const session = localStorage.getItem('session') || '';
			const sessionSplit = session.split('-') || '';
			token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
			idUser.value = sessionSplit[sessionSplit.length - 1];
		}else {
			token.value = "";
			idUser.value = "";
		}
	});
</script>

<template>
	<div class="modal">
		<div class="modal-content">
			<span class="close"  @click="notAcount()">&times;</span>
			<div v-if="!isregisterLimit">
				<h2 class="modal-title" v-if="isLogin">Iniciar sesión</h2>
				<h2 class="modal-title" v-else>Registro</h2>
				<p class="text-center mb-1" v-if="isLimit">Has alcanzado el límite de consultas gratuitas, regístrate para continuar usando el chat y no perder el historial.</p>
				<div>
					<div class="form-group" v-if="!isLogin">
						<input v-model="name" type="text" placeholder="Nombre" required />
					</div>
					<div class="form-group">
						<input v-model="email" type="email" placeholder="Email" required />
					</div>
					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" required />
					</div>
					<div class="form-group" v-if="!isLogin">
						<input v-model="confirmPassword" type="password" placeholder="Confirmar password" required />
					</div>
					<button class="submit" @click="login()" v-if="isLogin">Iniciar sesión</button>
					<button class="submit" @click="register()" v-else>Registrarse</button>
	
					<p class="w-100 text-center mt-1" v-if="!isLogin">¿Ya tienes cuenta? inicia sesión <span class="cursor-p text-primary" @click="isLogin = true">aquí</span></p>
	
					<p class="w-100 text-center mt-1" v-else>¿No tienes cuenta? regístrate <span class="cursor-p text-primary" @click="isLogin = false">aquí</span></p>
	
					<p class="w-100 text-center mt-1 text-primary cursor-p" v-if="!isLogin" @click="notAcount()">Continuar sin cuenta</p>
				</div>
			</div>
			<div v-else>
				<h2>Limite alcanzado</h2>
				<p class="text-center mb-1">Has alcanzado el límite de consultas diarias, ¿quieres seguir usando el chat, considera contratar uno de nuestros planes.</p>

			</div>
		</div>
	</div>
</template>

<style scoped>
	.modal {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		z-index: 1200;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.modal-content {
		background-color: #fff;
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
		width: 150px;
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