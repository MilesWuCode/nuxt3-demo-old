// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: [
    // ['@nuxtjs/eslint-module', {lintOnStart: false}],
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: '/api',
    },
  },

  typescript: {
    strict: true,
    // typeCheck: true,
  },
})
