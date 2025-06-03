// stores/lang.js
import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: localStorage.getItem('locale') || 'uz'  // localStorage dan o‘qib olish, aks holda 'uz'
  }),
  actions: {
    setLang(lang) {
      this.locale = lang
      localStorage.setItem('locale', lang)  // localStorage ga yozish
    }
  }
})
