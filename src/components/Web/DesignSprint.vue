<script setup lang="ts">
	import { ref, onMounted } from 'vue';
	import router from '@/router';
	import { useRoute } from 'vue-router';
	import axios from 'axios';
	import Spinner from '@/components/General/SpinerComponent.vue';
	import  { showToast, POSITION } from '../../stores/Toast';
	import MenuLeftDesignSprint from '@/components/Web/DesignSprint/MenuLeftDesignSprint.vue';
	import DaschboardDesignSprint from '@/components/Web/DesignSprint/DaschboardDesignSprint.vue';
	import MenuUpDesignSprint from '@/components/Web/DesignSprint/MenuUpDesignSprint.vue';
	import Dia1DesignSprint from '@/components/Web/DesignSprint/Dia1DesignSprint.vue';
	import Dia2DesignSprint from '@/components/Web/DesignSprint/Dia2DesignSprint.vue';
	import Dia3DesignSprint from '@/components/Web/DesignSprint/Dia3DesignSprint.vue';
	import Dia4DesignSprint from '@/components/Web/DesignSprint/Dia4DesignSprint.vue';
	import Dia5DesignSprint from '@/components/Web/DesignSprint/Dia5DesignSprint.vue';
	import ChatDesignSprint from '@/components/Web/DesignSprint/ChatDesignSprint.vue';
	import LoginDesignSprint from '@/components/Web/DesignSprint/LoginDesignSprint.vue';

	const route = useRoute();
	const token = ref<string>();
	const idUser = ref<string>();
	const view = ref<number | null>(null);
	const isLogin = ref(false);
	const spinner = ref<Boolean>(false);
	const URL = 'https://api-chatbot.letsdoitnow.us/api';
	const dataSprint = ref<any>({});

	const changeDay = (day: number) => {
		view.value = day;
		
		window.removeEventListener('popstate', () => {
			router.go(0);
		});
		window.addEventListener('popstate', () => {
			router.go(0);
		});
	}

	const getDataSprint = async (id: string) => {
		spinner.value = true;
		if (!token.value || !idUser.value) {
			showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else {
			await axios.get(`${URL}/designSprint/${id}`, {headers: {'token': token.value}})
				.then((res) => {
					dataSprint.value = res.data;
				})
				.catch((error) => {
					showToast(`Error en la conexión: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
				});
		}
		spinner.value = false;
	};

	const changeSprint = async (id : string) => {
		await getDataSprint(id);
		if(!dataSprint.value.day1) changeDay(1);
		if(dataSprint.value.day1 && !dataSprint.value.day2) changeDay(2);
		if(dataSprint.value.day2 && !dataSprint.value.day3) changeDay(3);
		if(dataSprint.value.day3 && !dataSprint.value.day4) changeDay(4);
		if(dataSprint.value.day4 && !dataSprint.value.day5) changeDay(5);
	}

	const saveDay = async (day: number, data: any) => {
		spinner.value = true;
		if (!token.value || !idUser.value) {
			showToast('Error en la conexión', 'error', 3000, POSITION.BOTTOM_CENTER)
		} else {
			await axios.post(`${URL}/designSprint/update`, {id: dataSprint.value._id, [`day${day}`]: data}, {headers: {'token': token.value}})
				.then((res) => {
					dataSprint.value[`day${day}`] = res.data;
				})
				.catch((error) => {
					showToast(`Error en la conexión: ${error}`, 'error', 3000, POSITION.BOTTOM_CENTER)
				});
		}
		spinner.value = false;
	};

	onMounted(async() => {
		const session = localStorage.getItem('session');
		if (session) {
			isLogin.value = true;
			const sessionSplit = session.split('-');
			token.value = sessionSplit.slice(0, sessionSplit.length - 1).toString();
			idUser.value = sessionSplit[sessionSplit.length - 1];
		}
		const idSprint = route.params.id;
		if (idSprint) {
			changeSprint(idSprint as string)
		}else{
			changeDay(0);
		}
	});
</script>

<template>
	<LoginDesignSprint v-if="!isLogin" />
	<div class="flex h-screen" v-else>
		<div class="w-[200px] absolute md:relative ml-[-200px] md:ml-0">
			<menu-left-design-sprint />
		</div>
		<div class="p-4 md:p-8 w-[100%] overflow-hidden flex flex-col justify-between">
			<menu-up-design-sprint v-if="view != 0 && view != null" :changeDay="changeDay" :dataSprint="dataSprint"/>
			<daschboard-design-sprint v-if="view == 0" :changeSprint="changeSprint"/>
			<dia1-design-sprint v-else-if="view == 1" :saveDay="saveDay" :dataSprint="dataSprint" :changeDay="changeDay"/>
			<dia2-design-sprint v-else-if="view == 2" :saveDay="saveDay" :dataSprint="dataSprint" :changeDay="changeDay"/>
			<dia3-design-sprint v-else-if="view == 3" :saveDay="saveDay" :dataSprint="dataSprint" :changeDay="changeDay"/>
			<dia4-design-sprint v-else-if="view == 4" :saveDay="saveDay" :dataSprint="dataSprint" :changeDay="changeDay"/>
			<dia5-design-sprint v-else-if="view == 5"/>
			<chat-design-sprint v-if="view != 0"/>
		</div>
		<spinner v-if="spinner" />
	</div>

</template>