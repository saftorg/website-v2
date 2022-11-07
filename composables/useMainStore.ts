export const useMainStore = () =>
  useState('main', () => {
    return {
      isMenuVisible: true,
      isMenuOpen: false,
      isDark: false,
      isContentLoading: false,
      bgColor: '#0F6CAF',
    };
  });
