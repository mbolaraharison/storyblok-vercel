export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  routeRules:{
    '/old-newsletter': { redirect: { to: '/newsletter', statusCode: 301 } }
  },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'TxPQ4jhBUBXm2n9imbyIdwtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ]
})
