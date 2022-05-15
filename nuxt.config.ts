import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@vueuse/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
})
