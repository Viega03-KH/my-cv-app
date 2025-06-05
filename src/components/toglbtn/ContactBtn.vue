<template>
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <a :href="`tel:${phoneNumber}`">
        <n-button icon-placement="right" type="primary">
          <template #icon>
            <n-icon>
              <font-awesome-icon :icon="['fas', 'square-phone']" class="w-5 h-5" />
            </n-icon>
          </template>
          {{ $t("contact") }}
        </n-button>
      </a>
    </template>
    <span class="italic">
      {{ $t("clickToContact") }}
      <span class="text-green-500">Tel: {{ phoneNumber }}</span>
    </span>
  </n-tooltip>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
library.add(faSquarePhone)

const phoneNumber = '88-380-29-03'
</script>
