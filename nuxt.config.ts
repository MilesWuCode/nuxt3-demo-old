// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // Transition全域設定
    // 不換layout只換頁
    pageTransition: { name: 'fade', mode: 'out-in' },
    // 換layout
    layoutTransition: { name: 'fade', mode: 'out-in' },
  },

  build: {
    transpile: ['@headlessui/vue'],
  },

  css: ['~/assets/css/app.css'],

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
