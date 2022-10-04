export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tbcc-web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/main.css',
    '@/assets/css/base.scss',
    '@/assets/css/slider.scss',
    '@/assets/css/chart.scss',
    '@/assets/css/slots.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-flickity.js', ssr: false },
    { src: '@/plugins/vue-apexcharts.js', ssr: false},
    { src: '@/plugins/trading-vue.js', ssr: false},
    { src: '@/plugins/vue-datapicker.js'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [  'ch', 'en'],
    vueI18nLoader: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/dotenv'
  ],

  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    treeShake: true,
    theme: {
      primary: '#0066FF'
    }
  },

  moment: {
    defaultTimezone: 'UTC'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, {isDev, isClient}) {
      config.node = {
        fs: "empty"
      };
    }
  },

  serverMiddleware: [
    { path: "/api", handler: require("body-parser").json() },
    {
      path: "/api",
      handler: (req, res, next) => {
        const url = require("url");
        // eslint-disable-next-line node/no-deprecated-api
        req.query = url.parse(req.url, true).query;
        req.params = { ...req.query, ...req.body };
        next();
      }
    },
    { path: "/api", handler: "~/serverMiddleware/api-server.js" }
  ],
}
