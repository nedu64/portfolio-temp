// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  imports: {
    autoImport: true
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-studio'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  studio: {
    route: '/admin',
    dev: false,
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          },
          langs: [
            'python','js'
          ]
        },
      }
    },
    renderer: {
      anchorLinks: false
    }
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY ?? '',
    primaryEmail: process.env.PRIMARY_EMAIL ?? '',
    mailDomain: process.env.MAIL_DOMAIN ?? '',
  }
})