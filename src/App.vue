<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/comman/Header.vue'
import { NMessageProvider } from 'naive-ui'
import Loader from './components/comman/Loader.vue'
import { ref } from 'vue'

const loaderVisible = ref(true)

// Misol uchun: sahifa 3 soniyadan keyin yuklanadi
setTimeout(() => {
  loaderVisible.value = false
}, 1000)
</script>

<template>
  <n-message-provider>
    <div class="layout-container mx-auto w-full max-w-screen-2xl p-4">
      <Loader v-model:show="loaderVisible" />
      <div>
        <Header />
      </div>
      <div class="content-wrapper pt-5">
        <RouterView data-aos="fade-up" />
      </div>
    </div>
  </n-message-provider>
</template>
