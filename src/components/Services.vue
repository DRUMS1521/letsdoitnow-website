<template>
  <div class="wrapper-serv">
    <h1 class="subtitle">Tu visión es n<span class="rectangle">uestra misión</span></h1>
    <p style="text-align: center;">Transformamos tus ideas en soluciones digitales personalizadas.<br>¡Permítenos convertir tus ideas en realidades tangibles!</p>
    <div class="layout-serv">
      <div class="description">
        <h2>Diseño de Páginas Web</h2>
        <p>Obtenga un sitio web personalizado enfocado en su objetivo comercial . Nos especializamos en crear una experiencia de usuario amigable optimizada para la búsqueda de Google.</p>
      </div>
      <div>
        <img src="../assets/serv-img-1.svg" alt="" class="ref-img">
      </div>
    </div>

    <div class="layout-serv layout-serv-2">
      <div>
        <img src="../assets/serv-img-2.svg" alt="" class="ref-img">
      </div>
      <div class="description-2">
        <h2>Ingeniería de Software</h2>
        <p>Hacemos realidad tus ideas con un software a medida. Construimos su sistema desde cero o damos soporte a uno existente.</p>
      </div>
    </div>

      <div class="layout-serv">
      <div class="description">
        <h2>Desarrollo de Aplicaciones Web</h2>
        <p>Nuestro equipo puede ayudarlo con la creación de soluciones en la web. Nuestro servicio de desarrollo de aplicaciones web está destinado a optimizar mediante la creación de funcionalidades escalables en la web.</p>
      </div>
      <div>
        <img src="../assets/serv-img-3.svg" alt="" class="ref-img">
      </div>
    </div>

    <div class="layout-serv layout-serv-2">
      <div>
        <img src="../assets/serv-img-4.svg" alt="" class="ref-img">
      </div>
      <div class="description-2">
        <h2>Diseño de Aplicaciones Móviles</h2>
        <p>Podemos desarrollar su solución móvil como una aplicación independiente o una que se integre y se comunique perfectamente con el software que ya está utilizando.</p>
      </div>
      
    </div>

</div>
  </template>
  
  <script>
  export default {
    
  };
  </script>

  <style>
  .layout-serv{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    
  }

  .description{
    width: 500px;
    height: 250px;
    margin-top: 1rem;
    background-color: #DFF1DC;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
  }

  .description h2{
    color: #333333;
    text-align: start;
  }

  .ref-img{
    width: 350px;
    margin: 2rem 0;
  }
  .description-2{
    width: 500px;
    height: 250px;
    background-color: #DFF1DC;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (max-width: 768px){

    .layout-serv{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
  }

  .description{
    width: fit-content;
    height: fit-content;
  }

  .ref-img{
    width: 200px;
  }

  .description-2{
    width: fit-content;
    height: fit-content;

  }

  .layout-serv-2{
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column-reverse;
  }
    
  }
</style>