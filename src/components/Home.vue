<template>
  <div class="wrapper">
    <div class="layout">
      <h1 class="title">Sofware <br><span class="rectangle">de Soluciones</span><br>Digitales</h1>
      <p class="pf">Construimos a escala, hagamos realidad tus ideas</p>
      <div class="layout-btn">
      <a href="">
        <button class="btn-style-deg">
          Cotiza ahora
        </button>
      </a>
      <a href="">
        <button class="btn-underline">
          Ver portafolio
        </button>
      </a>
      </div>
    </div> 
    </div> 

    <div class="wrapper-2">
      <div class="grid-card">
      <Card :imgIcon="1"
            :text="'Diseño de páginas web'"/>
      <Card :imgIcon="2"
            :text="'Ingeniería de software'"/>
      <Card :imgIcon="3"
            :text="'Desarrollo de aplicaciones móviles'"/>
      <Card :imgIcon="4"
            :text="'Desarrollo de aplicaciones web'"/>            
    </div> 
      <div class="layout-2">
      <h1 class="subtitle">¿Qué hacemos nostros por ti?</h1>
      <p class="pf">Tu visión es nuestra misión. ¡Permítenos convertir tus ideas en realidades tangibles!</p>
      <a href="">
        <button class="btn-style-deg">
          Explora más
        </button>
      </a>
    </div>
    </div>

    <div class="wrapper-3">
      <div>
        <CardInformation :imgIcon="1"
          :text="'Más de 7 años en la industria'"/>
      </div>
      <div>
        <CardInformation :imgIcon="2"
          :text="'Diseñamos tus ideas'"/>
      </div>
      <div>
        <CardInformation :imgIcon="3"
          :text="'Conectamos tu negocio con tu target'"/>
      </div>
      <div>
        <CardInformation :imgIcon="4"
          :text="'Equipo internacional'"/>
      </div>      
    </div>

    <div class="wrapper-6">
    <div class="layout-3">
      <h1 class="subtitle">Compartimos nuestro con<span class="rectangle">ocimiento y pasión</span> por el mundo digital</h1>
      <p class="pf">Sumérgete en la última información y tendencias del mundo digital</p>
      <div class="layout-btn">
      <a href="">
        <button class="btn-style-deg">
          Visita el blog
        </button>
      </a>
      </div>
    </div>
      <div class="layout-4">
        <CardBlogResume/>
        <CardBlogResume/>
      </div>
    </div> 

    <div class="wrapper-4">      
      <CardBlogCategory/>
    </div>

    <div class="wrapper-5">
      <h2>Únete a nuestra red de clientes satisfechos y experimenta la transformación digital de tu negocio</h2>
      <div class="layout-5">
        <CardReview/>
        <CardReview/>
        <CardReview/>
      </div>
      <p>Comienza la transformación ahora
        <br>¿Estás listo? ¡Hagámoslo ahora!</p>
        <a href="">
        <button class="btn-style-deg">
          Recibe una consultoría gratis
        </button>
      </a>
    </div>

  </template>
  
  <script>
    import Card from './cards/card-1.vue'
    import CardBlogCategory from './cards/cardBlogCategory.vue';
    import CardBlogResume from './cards/cardBlogResume.vue';
    import CardInformation from './cards/cardInformation.vue'
    import CardReview from './cards/cardReview.vue';
    export default {
      components: {
            Card,
            CardInformation,
            CardBlogResume,
            CardBlogCategory,
            CardReview
        }
    };
  </script>

  <style>
  .wrapper{
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    background-image: url("../assets/recurso-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .layout{
    display: flex;
    flex-direction: column;
    width: 500px;
    text-align: left;
    margin-left: 32px;
    margin-bottom: 10%;
  }

  .layout-btn{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .layout-img{
    width: 0%;
    display: flex;
    justify-items: flex-end;
  }

  .rectangle{
    background: linear-gradient(180deg, rgba(121, 219, 146, 0.00) 57.28%, #79DB92 57.29%);
  }

  .wrapper-2{
    max-height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-image: url("../assets/background-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .grid-card{
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    margin-top: 250px;
    height: 500px;
    justify-content: space-between;
  }
  
  .layout-2{
    margin-top: 40px;
    width: 600px;
    text-align: right;
    margin-left: 32px;
  }

  .wrapper-3{
    max-height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #E1FFDC;
    justify-items: center;
    padding: 15% 0;
  }

  .layout-3{
    width: 420px;
    text-align: left;
    margin-right: 15%;
  }

  .layout-4{
    padding: 10% 0;
  }

  .wrapper-4{
    padding: 25px;
    background-color: #79DB92; ;
  }

  .wrapper-5{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .wrapper-5 h2{
    width: 650px;
    color: #263F28;
    letter-spacing: 0.8px;
    font-weight: 700;
  }

  .layout-5{
    width: 100%;
    margin-bottom: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .wrapper-5 button{
    margin-top: 32px;
  }

  .wrapper-6{
    max-height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }

  </style>
  