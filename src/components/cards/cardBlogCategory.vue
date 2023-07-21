<template>
    <h3 class="subtitle-3">Categorías del blog</h3>
    <ul class="links-blog">
        <a href=""><li>{{text}}</li></a>
        <a href=""><li>{{ text2}}</li></a>
        <a href=""><li>{{ text3 }}</li></a>
        <a href=""><li>{{text4}}</li></a>
        <a href=""><li>{{text5}}</li></a>
    </ul>
</template>

<script>
export default{
    props:{
        text:{
            type: String
        },
        text2:{
            type: String
        },
        text3:{
            type: String
        },
        text4:{
            type: String
        },
        text5:{
            type: String
        },
    }
}

</script>

<style>
.links-blog{
    height: 100%;
    margin: 0px;
    align-items: center;
    padding: initial;
    list-style: none;
    display: inline-flex;
    gap: 32px;
}

.links-blog a{
    color: #333;  
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;

}
</style>