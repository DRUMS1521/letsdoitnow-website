<template>
    <div style="margin-top: 2rem;">
    <CardBlogCategory :text="'Tech'" :text2="'Inteligencia Artificial'" :text3="'Educación'" :text4="'Webinars'" :text5="'Eventos'"/>
    </div>
    <div class="wrapper-blog">
      <div class="last-entry">
        <h1 class="subtitle">Norem ipsum dolor sit amet, consectetur adipiscing elit. <span class="rectangle">Etiam eu turpis</span> molestie, dictum est a</h1>
        <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
        <button class="btn-underline" style="margin-top: 2rem;">Lee la entrada aquí</button>
      </div>
      <div>
        <img src="../assets/img-blog-background.png" alt="">
      </div>
    </div>

    <div class="line-port"></div>

    <div class="wrapper-blog-2">
      <CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'"/>
      <CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'"/>
      <CardBlogResume :title="'El cambio inevitable'" :category="'Inteligencia Artificial'" :nameCreator="'Marysabel'" :timeRead="'8min'"/>
    </div>

</template>
  
  <script>
  import CardBlogCategory from './cards/cardBlogCategory.vue';
  import CardBlogResume from './cards/cardBlogResume.vue';
  export default {

    components: {
            
            CardBlogResume,
            CardBlogCategory
        }
    
  };
  </script>

  <style>
  .wrapper-blog{
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 4rem;
  }

  .last-entry{
    margin: 3rem;
  }

  .wrapper-blog-2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
  }

</style>