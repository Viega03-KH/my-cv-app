<template>
  <n-dropdown
    trigger="click"
    :options="options"
    @select="changeLang"
  >
    <n-button type="primary">{{ currentLangLabel }}</n-button>
  </n-dropdown>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores/lang'
import { NDropdown, NButton } from 'naive-ui'

const { locale } = useI18n()
const langStore = useLangStore()

// Sahifa yuklanganda localStorage dan o‘qilgan tilni i18n ga o‘rnatamiz
locale.value = langStore.locale

// Tillar ro'yxati
const options = [
  { label: 'UZ', key: 'uz' },
  { label: 'EN', key: 'en' },
  { label: 'RU', key: 'ru' }
]

// Tilni almashtirish funksiyasi
const changeLang = (key) => {
  locale.value = key
  langStore.setLang(key)
}

// Dropdown tugmasida hozirgi tilni ko‘rsatish
const currentLangLabel = computed(() => {
  const found = options.find(opt => opt.key === langStore.locale)
  return found?.label || 'Lang'
})
</script>
