<script setup lang="ts">
import router from '@/router';
import { ref, onMounted } from 'vue'

const activeDiv = ref<number>(0);
const menuExpert = ref<boolean>(true);
const msg = ref<string>('');

const sedChat = (n: number) => {
	if (n == 0 && msg.value != '') {
		localStorage.setItem('chat', msg.value);
	} else if (n == 1) {
		localStorage.setItem('chat', '¿Cómo puede la tecnología de inteligencia artificial (IA) beneficiar a mi negocio?');
	} else if (n == 2) {
		localStorage.setItem('chat', '¿Qué tipo de soporte técnico puedo ofrecer después de la venta?');
	} else if (n == 3) {
		localStorage.setItem('chat', '¿Que hay de la capacitación para el uso de sus productos o servicios de tecnológicos?');
	}
	router.push('/doitbot/chat');
};

const toggleDiv = (n: number) => {
	if (activeDiv.value === n) {
		activeDiv.value = 0;
	} else {
		activeDiv.value = n;
	}
};

onMounted(() => {
	window.addEventListener('resize', () => {
		const currentWidth = window.innerWidth;
		if (currentWidth < 768) {
			menuExpert.value = false;
		} else {
			menuExpert.value = true;
		}
	});
});
</script>

<template>
	<h1>Do it <span class="rectangle">bot</span></h1>
	<div class="boxBot">
		<div class="menu cursor-p" @click="menuExpert = !menuExpert">
			<img src="../../assets/menu.svg" alt="">
		</div>
		<div class="d-ib va-t w-50 expert z-950" :class="menuExpert ? 'open-menu' : 'closed-menu'">
			<h2>Experto</h2>
			<p>Ten una conversación con algunos de nuestros expertos. te servirá para recibir información de forma más puntual y centrada.</p>
			<div>
				<div @click="toggleDiv(1)" class="w-100 divExpert cursor-p">
					<p class="d-ib va-t expertName">01 / VENTAS</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>

				<transition name="fade" mode="out-in">
					<div v-if="activeDiv === 1" :key="'div1'" class="fade-div animar cursor-p" @click="$router.push('/doitbot/chat')">
						<div class="d-flex si-center py-1">
							<img src="../../assets/expert.svg" alt="">
							<div class="d-flex jc-fe flex-d-col">
								<h3 class="m-0">Juan</h3>
								<p>Vendedor</p>
							</div>
						</div>
						<p>Profesional altamente capacitado en identificar las necesidades de los clientes, comunicar el valor de un producto o servicio.</p>
					</div>
				</transition>

				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">02 / FINANZAS</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">03/ RECURSOS HUMANOS</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">04 / CRECIMIENTO</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">05 / OPERACIONES</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">06 / LOGÍSTICA</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
				<div class="w-100 divExpert">
					<p class="d-ib va-t expertName">07 / TECNOLOGÍA</p>
					<img class="d-ib va-t expertArrow" src="../../assets/Arrow-1.svg" alt="">
				</div>
			</div>
		</div>
		<div class="d-ib va-t w-50 bot">
			<div class="d-flex ai-center jc-sb">
				<div class="d-flex ai-center jc-sb">
					<img class="backArrow" src="../../assets/Arrow-1.svg" alt="">
					<img class="ml-1" src="../../assets/botico.svg" alt="">
				</div>
				<div>
					<h2 class="m-0" style="font-size: 2rem;">Do it Bot</h2>
					<ul>
						<li class="text-left text-primary" style="margin-left: 25px; font-weight: 200; font-size: 1.5rem;"> Online</li>
					</ul>
				</div>
				<div>
					<img class="max-w-40" src="../../assets/icon-pc.svg" alt="">
				</div>
			</div>
			<div class="mt-2 mb-2">
				<img class="max-w-40" src="../../assets/textImg.svg" alt="">
				<p class="w-100 text-center"><b>Habla con expertos</b></p>
				<div class="btnRecom cursor-p" @click="sedChat(0)">
					<p>Ventas</p>
				</div>
				<div class="btnRecom cursor-p">
					<p>Operaciones</p>
				</div>
				<div class="btnRecom cursor-p">
					<p>Tecnología</p>
				</div>
				<div class="w-100 mt-1">
					<p class="text-primary w-100 text-center">Todos los expertos disponibles</p>
				</div>
			</div>
			<div class="mt-2">
				<img src="../../assets/edit.svg" alt="">
				<p class="w-100 text-center"><b>Pregunta sobre nosotros</b></p>

				<div class="btnRecom cursor-p" @click="sedChat(1)">
					<p>¿Cómo puede la tecnología de inteligencia artificial (IA) beneficiar a mi negocio?</p>
				</div>
				<div class="btnRecom cursor-p" @click="sedChat(2)">
					<p>¿Qué tipo de soporte técnico puedo ofrecer después de la venta?</p>
				</div>
				<div class="btnRecom cursor-p" @click="sedChat(3)">
					<p>¿Que hay de la capacitación para el uso de sus productos o servicios de tecnológicos?</p>
				</div>
			</div>
			<div class="d-flex ai-center inputUser mt-1" style="position: relative;">
				<input class="w-100" type="text" placeholder="Escribe algo para empezar o selecciona" v-model="msg" @keypress.enter="sedChat(0)">
				<img style="right: 10px; position: absolute;" class="cursor-p" src="../../assets/send.svg" alt="" @click="sedChat(0)">
			</div>
		</div>
	</div>
</template>

<style scoped>
	.boxBot {
		max-width: 950px;
		margin: 0 auto;
		padding: 1rem;
	}

	h2 {
		margin-top: 0;
		text-align: left;
	}

	.divExpert {
		margin-top: 2rem;
	}

	.z-950 {
		z-index: 950;
	}

	.expert,
	.bot {
		padding: 2rem;
	}

	.expert {
		background-color: white;
	}

	.expertArrow,
	.backArrow {
		width: 20px;
		margin-left: 1rem;
		transform: rotate(135deg);
	}

	.backArrow {
		transform: rotate(225deg);
	}

	.expertName {
		width: calc(100% - 45px);
	}

	.btnRecom {
		background-color: #e4e3e3;
		border-radius: 25px;
		padding: 0.5rem 1rem;
		margin-top: 1rem;
		width: 100%;
	}

	.btnRecom p {
		text-align: center;
		font-size: .85rem;
	}

	.inputUser input {
		border: solid 0.5px rgb(116, 116, 116);
		border-radius: 25px;
		padding: 0.7rem 1.2rem;
		outline: none;
	}

	/* cambiar el border al seleccionar el input */
	.inputUser input:focus {
		border: solid 0.5px #397a3e;
		border-radius: 25px;
	}
	.menu {
		width: 30px;
		display: none;
	}



	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-div {
		animation: miAnimacion 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		margin-left: 0;
		z-index: 1400;
	}

	.fade-div.hidden {
		transform: translateX(100%);
		transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		opacity: 0;
		animation: close 0.6s;
		z-index: -1;
	}

	@keyframes close {
		from {
			transform: translateX(0);
		}

		50% {
			transform: translateX(10px);
		}

		to {
			transform: translateX(100%);
		}
	}

	@keyframes miAnimacion {
		from {
			transform: translateX(10px);
			display: none;
			opacity: 0;
		}

		to {
			transform: translateX(0);
			display: initial;
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.bot, .expert {
			max-width: 500px;
			width: 100%;
		}
		.menu {
			display: block;
		}
		.expert {
			border: solid 0.5px rgb(0, 0, 0);
			border-radius: 25px;
			position: absolute;
			width: 90%;
			margin-top: 5px;
			margin-left: 5px;
		}

		.open-menu {
			opacity: 1;
			transform: translateX(0);
			transition: .5s;
			transition: opacity transform ease-in-out .5s;
		}

		.closed-menu {
			opacity: 0;
			transform: translateX(-120%);
			transition: opacity transform ease .5s;
		}
	}
</style>