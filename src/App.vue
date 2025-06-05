<script setup>
import { createPinia } from 'pinia'
import { RouterView } from 'vue-router'
import Header from '@/components/comman/Header.vue'
import Loader from '@/components/comman/Loader.vue'
import { NMessageProvider } from 'naive-ui'
import { onMounted } from 'vue'
import { useLoaderStore } from '@/stores/loader'

const pinia = createPinia()
const loaderStore = useLoaderStore()

onMounted(() => {
  loaderStore.show()
  setTimeout(() => {
    loaderStore.hide()
  }, 800) 
})
</script>

<template>
  <Loader />
  <n-message-provider>
    <div class="layout-container mx-auto w-full max-w-screen-2xl p-4">
      <Header />
      <div class="content-wrapper pt-5">
        <RouterView data-aos="fade-up" />
      </div>
    </div>
  </n-message-provider>
</template>
