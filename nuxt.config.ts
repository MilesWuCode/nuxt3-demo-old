// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['@headlessui/vue'],
  },

  modules: [
    // ['@nuxtjs/eslint-module', {lintOnStart: false}],
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],

  runtimeConfig: {
    apiSecret: '123', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: '/api', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    },
  },

  typescript: {
    strict: true,
    // typeCheck: true,
  },
})
