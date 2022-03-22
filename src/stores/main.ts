import { acceptHMRUpdate, defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const isMenuVisible = ref(false)
  const isMenuDark = ref(false)
  const isContentLoading = ref(false)
  const bgColor = ref('#0F6CAF')

  return {
    isMenuVisible,
    isMenuDark,
    isContentLoading,
    bgColor
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useMainStore, import.meta.hot))

