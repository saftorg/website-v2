// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: { build: { assetsInlineLimit: 0 } },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
});
