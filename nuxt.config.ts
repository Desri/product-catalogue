// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Catalogue Product',
      meta: [
        {
          name: 'description',
          content: 'Catalogue product popular'
        }
      ],
      link: []
    }
  },
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.BASE_URL_V1
    },
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxt/eslint',
    'nuxt-primevue'
  ],
  primevue: {
    usePrimeVue: true
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  css: [
    'primevue/resources/themes/aura-light-indigo/theme.css',
    '~/assets/scss/style.scss'
  ],
  image: {
    dir: 'assets/img'
  }
})
