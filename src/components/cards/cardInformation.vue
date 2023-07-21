<template>
    <div class="layout-cardI">
            <img v-if="imgIcon==1" src="../../assets/icon-line.svg" alt="">
            <img v-if="imgIcon==2" src="../../assets/icon-draw.svg" alt="">
            <img v-if="imgIcon==3" src="../../assets/icon-people.svg" alt="">
            <img v-if="imgIcon==4" src="../../assets/icon-people-2.svg" alt="">
            <h4 class="subtitle-2">{{ text }}</h4>
        <p class="pf">{{longText}}</p>
    </div>
</template>

<script>
    export default {
        props:{

        imgIcon:{
            type: Number
        },
        text:{
            type: String
        },
        longText:{
            type: String
        }

        }
    }
</script>

<style>
.layout-cardI{
    width: 500px;
    display: flex;
    align-items: start;
    text-align: left;
    flex-direction: column;
}

.layout-cardI h4{
    margin-top: 0;
}

.layout-cardI p{
    margin-top: 0;
}

@media screen and (max-width: 768px){
    .layout-cardI {
        width: fit-content;
    }
}
</style>