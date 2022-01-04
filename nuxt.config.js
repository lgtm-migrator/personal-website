import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Lukas Stauersbøl',
    title: 'Home',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js', ssr: false },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js', ssr: false }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-particles', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    // https://github.com/ivodolenc/nuxt-gsap-module
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // https://firebase.nuxtjs.org/guide/getting-started
    '@nuxtjs/firebase'
  ],

  sitemap: {
    hostname: 'https://lukasstauersboel.dk',
    gzip: true,
    exclude: [
      '/admin',
      '/admin/*',
      '/admin/**'
    ],
    routes: [
      '/',
      '/about',
      '/projects',
      '/contact'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    progress: false
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: '~/components/LoadingScreen.vue',

  firebase: {
    config: {
      apiKey: 'AIzaSyBfXFhcczwqyZk327U4Bx8-radg7i8N-Gg',
      authDomain: 'personalwebsite-7bf11.firebaseapp.com',
      projectId: 'personalwebsite-7bf11',
      storageBucket: 'personalwebsite-7bf11.appspot.com',
      messagingSenderId: '54308610383',
      appId: '1:54308610383:web:61388bf01d41eebe7be53a'
    },
    services: {
      auth: true,
      firestore: true,
      storage: true
    }
  }
}
