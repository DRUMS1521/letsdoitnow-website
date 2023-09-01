<template>
  <div>
    <div
      ref="elementToAnimate"
      class="zoom-in-element"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const elementToAnimate = ref(null);

const zoomIn = () => {
  if (elementToAnimate.value) {
    elementToAnimate.value.style.transform = 'scale(1.1)';
    elementToAnimate.value.style.transition = 'transform 0.3s';
  }
};

const zoomOut = () => {
  if (elementToAnimate.value) {
    elementToAnimate.value.style.transform = 'scale(1)';
    elementToAnimate.value.style.transition = 'transform 0.3s';
  }
};

onMounted(() => {
 zoomIn();
 setTimeout(() => {
  zoomOut()
 }, 700);
});
</script>

<style scoped>
.zoom-in-element {
  transition: transform 0.3s;
}
</style>
