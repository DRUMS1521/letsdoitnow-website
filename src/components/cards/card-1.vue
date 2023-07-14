<template>
    <div class="layout-card">
        <img v-if="imgIcon==1" src="../../assets/icon-global.svg" alt="">
        <img v-if="imgIcon==2" src="../../assets/icon-pc.svg" alt="">
        <img v-if="imgIcon==3" src="../../assets/icon-phone.svg" alt="">
        <img v-if="imgIcon==4" src="../../assets/icon-web.svg" alt="">
        <h4>{{text}}</h4>
    </div>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },

  props:{

    imgIcon:{
        type: Number
    },
    text:{
        type: String
    }

  }
}
</script>

<style>
    .layout-card{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 0 2rem;
        width: 200px;
        height: 200px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 7px 11px 22px 0px rgba(101, 101, 101, 0.25);
    }

    .layout-card h4{
        margin-bottom: 0;
    }
</style>