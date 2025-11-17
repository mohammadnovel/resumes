export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  css: ['~/assets/css/tailwind.css'],
  
  app: {
    baseURL: '/resumes/',
    // baseURL: '/',
    buildAssetsDir: '_nuxt/',
    head: {
      title: 'Moh. Novel Anugrah R - Backend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Backend Developer with 6+ years experience in Node.js, Laravel, PostgreSQL, MongoDB' 
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },
  
  ssr: true,
  
  compatibilityDate: '2024-11-15',

  nitro: {
    preset: 'static',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    },
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // ✅ TAMBAHKAN INI - Disable features yang menyebabkan 404
  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: false
  },

  // ✅ TAMBAHKAN INI - Ensure proper routing
  routeRules: {
    '/resumes/**': { ssr: true }
  }
})