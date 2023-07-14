<template>
    <div class="line-f"></div>
    <div class="wrapper-f1">        
        <div class="layout-f1">
            <img src="../assets/LOGO.svg" alt="">
            <p>Todos los derechos reservados. Let's do it now 2023</p>
            <h2 class="subtitle-2">Subscríbete a nuestro newsletter</h2>
            <div class="input">
                <input class="input-content" type="text" placeholder="Ingresa tu email aquí">
                <input class="input-button" type="button" value="">
            </div>
        </div>
        <div class="layout-f2">
            <h3>INFORMACIÓN</h3>
            <CardFooter :textFooter="'Sobre nosotros'" :link1="'/about'"
            :textFooter2="'Carreras'"
            :textFooter3="'Blog'" :link3="'blog'"/>
        </div>
        <div class="layout-f2">
            <h3>SOCIALES</h3>
            <CardFooter :textFooter="'Instagram'" :link1="'https://www.instagram.com/lets.doit.now/'"
            :textFooter2="'Linkedin'" :link2="'https://www.linkedin.com/company/letsdoitnowus/'"
            :textFooter3="'Chat'" :link3="'https://api.whatsapp.com/send?phone=15512612985&text=Hola!%20%F0%9F%91%8B%F0%9F%8F%BC%20'"/>
        </div>
        <div class="layout-f2">
            <h3>APOYO</h3>
            <CardFooter :textFooter="'Privacidad'"/>
        </div>
    </div>
</template>

<script>
    import CardFooter from '../components/cards/cardFooter.vue'
    export default{
        components: {
            CardFooter
        }
    }

</script>

<style>
.line-f{
    margin-top: 5rem;
    margin-bottom: 2rem;
    width: 100%;
    height: 0.5px;
    background-color:#9CCE7C;
}

.wrapper-f1{
    display: flex;
    display: grid;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 3rem;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
}

.layout-f1, .layout-f1 h2{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.layout-f1 img{
    width: 100px;
}

.input{
    display: flex;
    align-content: center;
    padding: 0.2rem;
    width: fit-content;
    height: fit-content;
    border-radius: 6px;
    background: #D9D9D9;
}

.input-content{
    width: 300px;
    height: 40px;
    background: none;
    text-align: start;
    border: none;
    padding-left: 5%;
}

input:focus {
       outline: none;  
    }

.input-button{
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 100%;
    background-image: url('../assets/arrow-1.svg');
}  

.layout-f2{
    display: flex;
    justify-content: flex-end;
    flex-direction:column;
    align-items: flex-end;
}
.layout-f2 h3{
    color: #263F28;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.4px;
}
</style>