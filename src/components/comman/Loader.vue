<template>
  <transition name="blur-fade">
    <div
      v-if="visible"
      class="fixed inset-0 z-50 bg-opacity-20 backdrop-blur-xl"
    ></div>
  </transition>
</template>

<script setup>
import { computed } from 'vue'
import { useLoaderStore } from '@/stores/loader'

const loaderStore = useLoaderStore()
const visible = computed(() => loaderStore.visible)
</script>

<style scoped>
.blur-fade-enter-active {
  transition: none; /* Kirishda animatsiya yo'q */
}
.blur-fade-enter-from,
.blur-fade-enter-to {
  backdrop-filter: blur(20px);
}

.blur-fade-leave-active {
  transition: backdrop-filter 0.1s ease; /* Chiqishda blur 1 soniyada kamayadi */
}
.blur-fade-leave-from {
  backdrop-filter: blur(20px);
}
.blur-fade-leave-to {
  backdrop-filter: blur(0);
}
</style>
