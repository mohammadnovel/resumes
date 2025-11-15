export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  app: {
    baseURL: '/resumes/', // ⚠️ Sesuaikan dengan nama repo GitHub Anda
    buildAssetsDir: 'assets',
    head: {
      title: 'Moh. Novel Anugrah R - Backend Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Backend Developer with 6+ years experience in Node.js, Laravel, PostgreSQL, MongoDB. Experienced in building scalable web applications.' 
        },
        { 
          name: 'keywords', 
          content: 'Backend Developer, Node.js, Laravel, PostgreSQL, MongoDB, API Development, Fullstack Developer' 
        },
        { name: 'author', content: 'Moh. Novel Anugrah R' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/resumes/favicon.ico' }
      ]
    }
  },
  
  ssr: false,
  
  compatibilityDate: '2024-11-15',

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
      watch: {
        usePolling: true,
      }
    }
  },

  nitro: {
    output: {
      publicDir: '.output/public'
    }
  }
})