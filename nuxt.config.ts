export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  app: {
    baseURL: '/resumes/', // ⚠️ HARUS sama dengan nama repo
    buildAssetsDir: 'assets',
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
  
  ssr: false, // ⚠️ PENTING untuk static site
  
  compatibilityDate: '2024-11-15',

  nitro: {
    preset: 'static', // ⚠️ PENTING
    output: {
      dir: '.output',
      publicDir: '.output/public'
    }
  }
})