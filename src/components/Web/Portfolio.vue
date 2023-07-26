<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { lang } from '@/stores/SwitchLang'
import { seoMeta } from '@/stores/SeoMeta';

const language = ref<any>({
	langweb: "", titleweb: "", desciptionweb: "", keywords: "", imgweb: "", 
});

onMounted(() => {
	language.value = lang(localStorage.getItem("Lang") === "Es").porfolio
	seoMeta(language.value.langweb, language.value.titleweb, language.value.desciptionweb, language.value.imgweb, language.value.keywords);
})
</script>

<template>
	<div class="wrapper-port">
		<h1 class="subtitle">Por<span class="rectangle">tafolio</span></h1>
		<p>Aquí encontrarás una selección de los proyectos en los que hemos tenido el honor de trabajar.<br>¿Estás listo para ser nuestro próximo caso de éxito? ¡Hagámoslo ahora!</p>
		<div class="card-portfolio">
			<h3>01/CARRAZO.PE</h3>
			<p style="margin-block-end: 1em;">Reinventando la compra y venta de vehículos con tecnología personalizada</p>
			<div class="imgs-port">
				<img src="../../assets/carrazo-port.png" alt="" >
				<img src="../../assets/carrazo-port-2.png" alt="" >
			</div>
			<button class="btn-underline" style="font-size: medium;">Accede a más información aquí</button>
		</div>
		<div class="line-port"></div>

		<div class="card-portfolio">
			<h3>02/PLANIUM.AI</h3>
			<p style="margin-block-end: 1em;">La solución ERP para constructores</p>
			<div class="imgs-port">
				<img src="../../assets/planium-port.png" alt="" >
			</div>
			<button class="btn-underline" style="font-size: medium;">Accede a más información aquí</button>
		</div>
		<div class="line-port"></div>

		<div class="card-portfolio">
			<h3>03/AJPENNY</h3>
			<p style="margin-block-end: 1em;">Revolucionando la Producción de Persianas con un ERP a Medida</p>
			<div class="imgs-port">
				<img src="../../assets/ajpenny-port.png" alt="" >
			</div>
			<button class="btn-underline" style="font-size: medium;">Accede a más información aquí</button>
		</div>
		<div class="line-port"></div>
	</div>
</template>