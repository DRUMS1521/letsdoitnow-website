<script setup lang="ts">
/* import { ref, onMounted } from 'vue';
import { lang } from '@/stores/SwitchLang'
import { seoMeta } from '@/stores/SeoMeta';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", 
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").porfolio
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
}) */

const jobs = (): void => {
	window.open("https://www.linkedin.com/company/letsdoitnowus/jobs/", '_blank')
}
</script>

<template>
    <div class="wrapper-crs">
        <img class="img-crs" src="../../assets/img-careers.png" alt="">
        <div class="layout-crs">
            <h1 class="subtitle">Carreras</h1>
            <p>En Letsdoitnow.us, impulsamos el futuro de las soluciones tecnológicas B2B y nuestro éxito radica en las personas que conforman nuestro equipo. Buscamos talentos apasionados y centrados en el cliente para llevar nuestras innovaciones al siguiente nivel. Aquí, tendrás la oportunidad de trabajar con tecnologías de vanguardia, crecer personal y profesionalmente, y ser parte de un ambiente dinámico y de apoyo. Si estás listo para dar el siguiente paso en tu carrera y marcar la diferencia en la vida de nuestros clientes, te invitamos a unirte a nosotros en Letsdoitnow.us. Juntos, hacemos que las cosas sucedan.</p>
            <button class="btn-style-deg" style="margin-top: 2rem;" @click="jobs">Conoce más</button>  
        </div>
    </div>
</template>