export const useMainStore = () => useState('main', () => {
  return {
    isMenuVisible: false,
    isMenuDark: false,
    isContentLoading: false,
    bgColor: '#0F6CAF',
  }
})
