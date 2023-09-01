  <script setup>
  import { ref, onMounted } from 'vue';
  
  const elementToAnimate = ref(null);
  
  onMounted(() => {
    if (elementToAnimate.value) {
      elementToAnimate.value.style.opacity = '1';
      elementToAnimate.value.style.transform = 'translateX(0)';
    }
  });
  </script>
  
  <template>
    <div>
      <div
        ref="elementToAnimate"
        class="fade-left-element"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .fade-left-element {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.3s, transform 0.3s;
  }
  </style>