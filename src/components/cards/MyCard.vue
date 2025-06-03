<template>
  <div>
    <div class="bg-gradient-to-r from-green-600 to-blue-700 animate-gradient text-white p-4 md:p-5">
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex justify-center mb-6 md:mb-0">
          <div
            class="w-40 border-white overflow-hidden flex items-center justify-center"
          >
            <n-image
              oncontextmenu="return false"
              draggable="false"
              :src="myImage"
              alt="profile cover"
              @load="onImageLoad"
              :class="[
                'rounded-3xl w-full object-cover transition-all duration-700 ease-in-out border-[1px] dark:border-white',
                loaded ? 'blur-0 opacity-100' : 'blur-2xl opacity-60'
              ]"
            />
          </div>
        </div>
        <div class="md:w-3/4 text-center md:text-left md:pl-8">
          <h1 class="text-3xl md:text-4xl font-extrabold mb-2 uppercase">{{ $t("myname") }}</h1>
          <h2 class="text-xl md:text-2xl font-bold mb-4">Full-stack Developer</h2>

          <div class="flex flex-wrap justify-center md:justify-start gap-3">
            <div
              v-for="(contact, index) in contacts"
              :key="index"
              class="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-1 cursor-pointer
                     transition-transform duration-300 ease-in-out
                     hover:scale-110"
            >
              <font-awesome-icon
                :icon="contact.icon"
                class="h-4 w-4 mr-2"
              />
              <span class="text-sm">{{ contact.text }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import myImage from '@/assets/my-img/my-img.jpg'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTelegram,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

library.add(faTelegram, faGithub, faInstagram, faLinkedin)

const loaded = ref(false)

function onImageLoad() {
  loaded.value = true
}

const contacts = [
  { icon: ['fab', 'telegram'], text: 'umairarshad6697@gmail.com' },
  { icon: ['fab', 'github'], text: 'github.com/yourprofile' },
  { icon: ['fab', 'instagram'], text: 'instagram.com/yourchannel' },
  { icon: ['fab', 'linkedin'], text: 'linkedin.com/in/umairarshad-dev' },
]
</script>

<script>
export default {
  components: {
    FontAwesomeIcon,
  },
}
</script>
