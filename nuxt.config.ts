// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css:['@/assets/css/main.scss'],
    vite: {
        define: {
          'process.env.DEBUG': false,
        },
    },
})
