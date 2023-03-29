// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  typescript: {
    strict: true,
    typeCheck: true,
  }
});
