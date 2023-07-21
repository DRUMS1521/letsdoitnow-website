<template>
    <div class="app">    
        <div class="languaje">
          <h5>English</h5>
          <label class="switch">
            <input type="checkbox" @click="changeLanguage">
            <span class="slider round"></span>
          </label>
          <h5>Español</h5>
        </div>
        <NavBarResponsive v-show="language" class="es" :about="'Nosotros'" :home="'Inicio'" :services="'Servicios'" :porfolio="'Portafolio'" :blog="'Blog Site'"/>
        <NavBarResponsive v-show="!language" class="en" :about="'About'" :home="'Home'" :services="'Services'" :porfolio="'Portfolio'" :blog="'Blog Site'"/>
        <!--<NavigationBar v-show="language" class="es" :about="'Nosotros'" :home="'Inicio'" :services="'Servicios'" :porfolio="'Portafolio'" :blog="'Blog Site'"/>
        <NavigationBar v-show="!language" class="en" :about="'About'" :home="'Home'" :services="'Services'" :porfolio="'Portfolio'" :blog="'Blog Site'"/>-->
        <router-view/>
        <Footer/>
    </div>

  </template>
  
  <script>
    import Footer from './components/Footer.vue'
    import NavBarResponsive from "./components/navBarResponsive.vue"
    export default {
        name: "App",
        components: {
            Footer,
            NavBarResponsive
        },
        data(){
          return{
            language: false
          };
        },
        methods:{
          changeLanguage(){
            this.language = !this.language
            this.$emit('setCheckboxVal', this.language)
            if(this.language == false){
              this.$router.push('/home-en');
            }
            if(!this.language == false){
              this.$router.push('/');
            }
          }
          
        }
    };
  </script>
  
  <style>
  .app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .languaje{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .languaje h5{
    padding: 0 1rem;
    color: #4d4d4d;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 24px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #79DB92;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #79DB92;
}

input:focus + .slider {
  box-shadow: 0 0 1px #79DB92;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
  </style>