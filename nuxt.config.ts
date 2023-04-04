// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  typescript: {
    strict: true,
    typeCheck: true,
  },
})
