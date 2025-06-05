<template>
  <div class="py-6">
    <h1 class="text-2xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
      <font-awesome-icon icon="fa-solid fa-chart-line" class="text-blue-600" />
      Skills
    </h1>

    <!-- Programming Languages -->
    <h1 class="text-md font-semibold mb-4">Languages</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 place-items: center;">
      <!-- Python -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'python']" class="text-green-600 text-5xl mb-3" />
        <span class="skill-name">Python</span>
      </div>

      <!-- JavaScript -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'js']" class="text-yellow-500 text-5xl mb-3" />
        <span class="skill-name">JavaScript</span>
      </div>

      <!-- HTML -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'html5']" class="text-orange-500 text-5xl mb-3" />
        <span class="skill-name">HTML</span>
      </div>

      <!-- CSS -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'css3-alt']" class="text-blue-500 text-5xl mb-3" />
        <span class="skill-name">CSS</span>
      </div>
    </div>

    <!-- Technologies -->
    <h1 class="text-md font-semibold mb-4">Technologies</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- Django -->
      <div class="skill-card">
        <img
          src="https://www.svgrepo.com/show/373554/django.svg"
          alt="Tailwind CSS"
          class="w-12 h-12 mb-3"
        />
        <span class="skill-name">Django</span>
      </div>

      <!-- Vue.js -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'vuejs']" class="text-green-500 text-5xl mb-3" />
        <span class="skill-name">Vue.js</span>
      </div>

      <!-- REST API -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fas', 'server']" class="text-blue-600 text-5xl mb-3" />
        <span class="skill-name">REST API</span>
      </div>

      <!-- Tailwind CSS -->
      <div class="skill-card">
        <img
          src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg"
          alt="Tailwind CSS"
          class="w-12 h-12 mb-3"
        />
        <span class="skill-name">Tailwind CSS</span>
      </div>

      <!-- Git -->
      <div class="skill-card">
        <font-awesome-icon :icon="['fab', 'git-alt']" class="text-orange-600 text-5xl mb-3" />
        <span class="skill-name">Git</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faVuejs,
  faJs,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faPython
} from '@fortawesome/free-brands-svg-icons'
import { faServer, faChartLine } from '@fortawesome/free-solid-svg-icons'

library.add(
  faVuejs,
  faJs,
  faGitAlt,
  faHtml5,
  faCss3Alt,
  faPython,
  faServer,
  faChartLine
)
</script>

<style scoped>
.skill-card {
  @apply flex flex-col items-center justify-center cursor-pointer will-change-transform p-6 bg-gradient-to-tr from-green-100 to-blue-100 shadow-lg shadow-black/20 dark:shadow-white/50 rounded-2xl transform hover:scale-105 transition duration-300 ease-in-out;
}

.skill-name {
  @apply text-base font-semibold text-gray-700;
}
</style>
