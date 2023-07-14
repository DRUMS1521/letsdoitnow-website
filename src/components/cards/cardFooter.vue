<template>
    <ul class="links-footer">
        <a :href="link1"><li>{{ textFooter }}</li></a>
        <a :href="link2"><li>{{textFooter2}}</li></a>
        <a :href="link3"><li>{{textFooter3}}</li></a>
    </ul>
</template>

<script>
    export default{
        props:{
        textFooter:{
            type: String
        },
        textFooter2:{
            type: String
        },
        textFooter3:{
            type: String
        },
        link1:{
            type: String
        },
        link2:{
            type: String
        },
        link3:{
            type: String
        }
    }
}

</script>

<style>
    .links-footer{
    height: 100%;
    align-items: flex-start;
    padding: initial;
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    gap: 32px;
}

.links-footer a{
    color: #333;  
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.48px;

}
</style>