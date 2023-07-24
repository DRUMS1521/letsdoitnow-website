<template>
    <div class="wrapper-about">
    <div class="layout-about-2">
      <div class="layout-about">
        <h2 style="color: white;">Empezamos con la curiosidad y resolvemos el problema</h2>
        <p style="color: white;">Sabemos que cada negocio tiene su propio problema. Nuestro trabajo comienza con la identificación del problema y su usuario.</p>
      </div> 
      <div class="layout-about-3">
        <CardAbout :titleText="'Evaluación'"
        :descriptionText="'Comprendemos su producto o idea mediante la definición de los requisitos y las estrategias de ejecución.'"/>
        <CardAbout :titleText="'Prototipo'"
        :descriptionText="'Enmarcaremos tus ideas y diseñaremos un prototipo interactivo.'"/>
        <CardAbout :titleText="'Desarrollo'"
        :descriptionText="'Entrega de valor acelerada y mejora continua mediante la metodología ágil para satisfacer a los clientes.'"/>
      </div>
      <div class="text-line">
      <div class="line-about"></div>
      <p style="width: auto;">Nuestro experimentado equipo ha aprendido que uno de los principales problemas al contratar una agencia es que las agencias no son dueñas del problema del cliente. En base a eso, hemos estado construyendo la confianza de nuestros clientes en:</p>
    </div>
    </div>
  </div>
  
  <div class="wrapper-about-2">
    <div class="layout-about-4">
      <div class="card-align">
        <CardAboutGreens 
        style="background-color: #DFF1DC;"
        :titleText="'Escalabilidad'"
        :descriptionText="'Para satisfacer las demandas futuras y aumentar su rendimiento sin aumentar la complejidad.'"/>
      </div>
      <div class="card-align-2">
        <CardAboutGreens style="background-color: #C4E5BF;"
        :titleText="'Nos hacemos cargo de su problema'"
        :descriptionText="'Comprendemos los problemas de nuestros clientes mediante un proceso de consultoría liderado por nuestros expertos comerciales.'"/>
      </div>
      <div class="card-align-3">
        <CardAboutGreens style="background-color: #A4D79C;"
        :titleText="'Hablamos tu idioma'"
        :descriptionText="'Nuestra comunicación se establece con nuestros expertos comerciales que poseen la fluidez de la pila para dar vida a la visión de su producto.'"/>
      </div>
    </div>
  </div>

  <div class="wrapper-about-3">
    
  </div>
</template>
  
<script>
  import CardAbout from '../components/cards/cardAbout.vue'
  import CardAboutGreens from '../components/cards/cardAboutGreens.vue'
  export default {
    components:{
      CardAbout,
      CardAboutGreens
    }
    
  };
</script>

<style>
.wrapper-about{
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-image: url('../assets/background-3.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.layout-about{
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 400px;  
  margin-left: 5rem;
  margin-top: 15%;
}

.layout-about-2{
  display: flex;
  flex-direction: column;
  gap: 8rem;
}

.layout-about-3{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.wrapper-about-2{
  margin: 30% 0 10% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-image: url('../assets/background-4.svg');
  background-repeat: no-repeat;
  background-size: cover;
}

.line-about{
  margin: 2rem 0;
  width: 548px;
  height: 2px;
  background-color: #A7A7A7;
}

.text-line{
  display: flex;
  flex-direction: column;
  margin-left: 5rem;
}

.layout-about-4{
  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  width: fit-content;
  
}

.card-align{
  display: flex;
  align-items: start;
}
.card-align-2{
  display: flex;
  align-items: center;
}
.card-align-3{
  display: flex;
  align-items: end;
}

@media screen and (max-width: 768px){

  .layout-about{
  width: auto;  
  margin-left: 1rem;
}

.layout-about-2{
  gap: 5rem;
}

.layout-about-3{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 620px;
}
.wrapper-about{
  height: 1000px;
}

.text-line{
  margin-left: 1rem;
}

.line-about{
  width: auto;
}

.wrapper-about-2{
  margin: 70% 0 10% 0;
}

.layout-about-4{
  height: auto;
  display: flex;
  flex-direction: column;
}

}
</style>