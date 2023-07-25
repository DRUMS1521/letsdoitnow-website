<script setup lang="ts">
const props = defineProps({

    imgIcon: {
        type: Number
    },
    text: {
        type: String
    },
    longText: {
        type: String
    }

})
</script>

<template>
    <div class="layout-cardI">
        <img v-if="imgIcon == 1" src="../../assets/icon-line.svg" alt="">
        <img v-if="imgIcon == 2" src="../../assets/icon-draw.svg" alt="">
        <img v-if="imgIcon == 3" src="../../assets/icon-people.svg" alt="">
        <img v-if="imgIcon == 4" src="../../assets/icon-people-2.svg" alt="">
        <h4 class="subtitle-2">{{ props.text }}</h4>
        <p class="pf">{{ props.longText }}</p>
    </div>
</template>