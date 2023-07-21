<template>
  <div class="wrapper">
    <div class="layout">
      <h1 class="title">Sofware <br><span class="rectangle">de Soluciones</span><br>Digitales</h1>
      <p class="pf">Construimos a escala, hagamos realidad tus ideas</p>
      <div class="layout-btn">
      <a href="">
        <button class="btn-style-deg" @click="quote">
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
      <h1 class="subtitle">¿Qué hacemos nosotros por ti?</h1>
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
          :text="'Más de 7 años en la industria'" :longText="'No solo queremos entregar un producto para el presente. Diseñamos estrategias que duran, diseñadas para liderar la industria.'"/>
      </div>
      <div>
        <CardInformation :imgIcon="2"
          :text="'Diseñamos tus ideas'" :longText="'Creamos proyectos digitales que se ajustan a las necesidades de tu negocio y al futuro de tu mercado.'"/>
      </div>
      <div>
        <CardInformation :imgIcon="3"
          :text="'Conectamos tu negocio con tu target'" :longText="'La tecnología va más rápido que nunca. Queremos llevar tu negocio al mundo digital, pensando en los beneficios desde el primer día.'"/>
      </div>
      <div>
        <CardInformation :imgIcon="4"
          :text="'Equipo internacional'" :longText="'Contamos con una red mundial de desarrolladores que nos permite hacer software de calidad al mejor precio.'"/>
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
        <CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'"/>
        <CardBlogResume :title="'Desencadenando el Poder de la Inteligencia Artificial'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'"/>
      </div>
    </div> 

    <div class="wrapper-4">      
      <CardBlogCategory :text="'Tech'" :text2="'Inteligencia Artificial'" :text3="'Educación'" :text4="'Webinars'" :text5="'Eventos'"/>
    </div>

    <div class="wrapper-5">
      <h2>Únete a nuestra red de clientes satisfechos y experimenta la transformación digital de tu negocio</h2>
      <div class="layout-5">
        <CardReview :review="'Contratamos a Lets Do It porque queríamos estar más presentes en línea, no solo nos ayudaron a mejorar nuestro sitio web sino que también le ofrecieron a nuestros clientes una experiencia personalizada.'" :company="'AJPenny'" :namePerson="'Penélope'"/>
        <CardReview :review="'La mejor opción de calidad beneficio. Estos chicos hacen magia. He estado con el sitio web y algunas campañas publicitarias con Let´s Do It durante 6 meses y mi negocio sigue creciendo un montón.'" :company="'Manager Real/State Agency'" :namePerson="'Ian'"/>
        <CardReview :review="'Let´s Do It es una empresa que se destaca por su capacidad para entender nuestro negocio, además de tomar nuestros requisitos. Creemos que se convierten en una parte de equipo.'" :company="'CEO, AliadaGO'" :namePerson="'Brandon'"/>
      </div>
      <p>Comienza la transformación ahora
        <br>¿Estás listo? ¡Hagámoslo ahora!</p>
        <a href="">
        <button class="btn-style-deg" @click="freeConsulation">
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
        },

        methods:{
          quote: function(event) {
            window.open("https://7j1l5jqb43v.typeform.com/to/kSlNtr0J");
          },
          freeConsulation: function(event){
                window.open("https://calendly.com/juanes-paca-letsdoitnow/30min?month=2023-07")
          }
      }
  };
  </script>

  <style scoped>
  .wrapper{
    width: auto;
    height: 600px;
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
    justify-content: center;
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

  @media screen and (max-width: 768px){
    .wrapper{
    height: 500px;
    display: flex;
    background-image: none;
  }

  .wrapper-2{
    max-height: fit-content;
    display: flex;
    flex-direction: column-reverse;
    background-image: url("../assets/background-1.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 60%;
  }

  .layout{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    text-align: left;
    margin-left: 32px;
    margin-bottom: 10%;
  }

  .grid-card{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    grid-template-columns: 1fr;
    margin-top: 0px;
    margin-bottom: 1rem;
    height: 660px;
    justify-content: space-between;
  }
  
  .layout-2{
    margin-top: 40px;
    margin-bottom: 40px;
    width: fit-content;
    text-align: center;
    margin: 40px 32px;
  }

  .layout-btn{
    align-items: flex-start;
    flex-direction: column;
  }

  .wrapper-3{
    max-height: fit-content;
    background-color: #E1FFDC;
    justify-items: center;
    padding: 15% 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
  }

  .wrapper-6{
    max-height: fit-content;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  .layout-3{
    width: fit-content;
    margin-right: 0;
  }


  }  
  

</style>
  