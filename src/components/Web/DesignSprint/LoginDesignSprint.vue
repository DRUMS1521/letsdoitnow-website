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
	const idUser = ref('');
	const token = ref();
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	/* const URL = 'http://localhost:3000/api'; */
	const spinner = ref(false);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const cleanForm = () => {
		email.value = '';
		password.value = '';
		confirmPassword.value = '';
	};

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
				let dataSend = {
					name: name.value,
					email: email.value,
					password: password.value
				};
				let res = await axios.post(`${URL}/user`, dataSend, {});
				localStorage.setItem('session', res.data.token + '-' + res.data.user);
				showToast('Registrado correctamente', 'success', 2000, POSITION.BOTTOM_CENTER);
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
	<div class="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-40">
		<div class="bg-white p-6 border border-gray-300 w-80 max-w-xs md:max-w-screen-sm relative rounded-lg">
			<span class="absolute top-0 right-2 text-2xl font-bold cursor-pointer" v-if="isLogin" @click="isLogin = false">&times;</span>
			<div>
				<h2 class="uppercase text-gray-700 mb-2" v-if="isLogin"><b>Iniciar sesión</b></h2>
				<h2 class="uppercase text-gray-700 mb-2" v-else><b>Registro</b></h2>
				<div>
					<div class="form-group" v-if="!isLogin">
						<input class="w-full my-[0.3rem] pr-12 border border-[0.5px] border-gray-400 rounded-[5px] p-[0.7rem] [1.2rem] outline-none" v-model="name" type="text" placeholder="Nombre" required />
					</div>
					<div class="form-group">
						<input class="w-full my-[0.3rem] pr-12 border border-[0.5px] border-gray-400 rounded-[5px] p-[0.7rem] [1.2rem] outline-none" v-model="email" type="email" placeholder="Email" required />
					</div>
					<div class="form-group">
						<input class="w-full my-[0.3rem] pr-12 border border-[0.5px] border-gray-400 rounded-[5px] p-[0.7rem] [1.2rem] outline-none" v-model="password" type="password" placeholder="Password" required />
					</div>
					<div class="form-group" v-if="!isLogin">
						<input class="w-full my-[0.3rem] pr-12 border border-[0.5px] border-gray-400 rounded-[5px] p-[0.7rem] [1.2rem] outline-none" v-model="confirmPassword" type="password" placeholder="Confirmar password" required />
					</div>
					<div class="my-4" v-if="!isLogin">
						<p class="text-xs">Al registrarte aceptas nuestros <a href="https://letsdoitnow.us/terminos-y-condiciones" target="_blank" class="text-green-500 font-bold">términos y condiciones</a> y <a href="https://letsdoitnow.us/politica-de-privacidad" target="_blank" class="text-green-500 font-bold">política de privacidad</a>.</p>
					</div>
					<div class="text-center w-full">
						<button class="w-36 bg-green-500 font-bold text-white border-0 rounded cursor-pointer py-2 px-5 text-sm mx-auto hover:bg-green-600 my-3" @click="login()" v-if="isLogin">Iniciar sesión</button>
						<button class="w-36 bg-green-500 font-bold text-white border-0 rounded cursor-pointer py-2 px-5 text-sm mx-auto hover:bg-green-600 my-3" @click="register()" v-else>Registrarse</button>
					</div>

					<p class="w-100 text-center mt-1" v-if="!isLogin">¿Ya tienes cuenta? inicia sesión <span class="cursor-p text-green-500 font-bold cursor-pointer" @click="isLogin = true">aquí</span></p>

					<p class="w-100 text-center mt-1" v-else>¿No tienes cuenta? regístrate <span class="cursor-p text-green-500 font-bold cursor-pointer" @click="isLogin = false">aquí</span></p>
				</div>
			</div>
		</div>
	</div>
	<spinner v-if="spinner" />
</template>