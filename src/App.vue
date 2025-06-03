<script setup>
  import { RouterView } from 'vue-router'
  import Header from '@/components/comman/Header.vue'
  import { NMessageProvider } from 'naive-ui'
  </script>
  
  <template>
    <n-message-provider>
      <div class="layout-container mx-auto w-full max-w-screen-2xl p-4">
        <div>
          <Header />
        </div>
        <div class="content-wrapper pt-5">
          <RouterView data-aos="fade-up" />
        </div>
      </div>
    </n-message-provider>
  </template>
  