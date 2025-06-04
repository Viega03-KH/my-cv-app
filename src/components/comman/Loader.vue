<template>
  <div
    v-show="show"
    @animationend="onAnimationEnd"
    :class="[
      'fixed inset-0 z-50 bg-white bg-opacity-20 backdrop-blur-xl',
      animationPlaying ? 'animate-blurOut' : ''
    ]"
  ></div>
</template>

<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  show: Boolean,
})

const emit = defineEmits(['update:show'])

const animationPlaying = ref(false)

watch(() => props.show, (newVal) => {
  if (newVal) {
    animationPlaying.value = false
  } else {
    animationPlaying.value = true
  }
})

function onAnimationEnd() {
  emit('update:show', false)
}
</script>

<style scoped>
@keyframes blurOut {
  0% {
    backdrop-filter: blur(20px);
    opacity: 1;
  }
  100% {
    backdrop-filter: blur(2px);
    opacity: 0;
  }
}

.animate-blurOut {
  animation: blurOut 1s ease forwards;
}
</style>
