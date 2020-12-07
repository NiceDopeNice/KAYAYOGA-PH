export default {
  target: 'static',
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: (process.env.NODE_ENV == "development") ? 'http://api.kaya.com/' : 'https://www.kayayoga.ph/kaya_api',
    credentials: false
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Kaya Yoga PH',
    meta: [ 
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "title", content: "Kaya Yoga PH" },
      { hid: "description", name: "description", content: "At Kaya, we put our students first. We speak their language. We teach yoga with the student’s needs in mind. We thrive individually and collectively. Come build your foundation with us. Practice efficiently and safely with Kaya Yoga." },
      { hid: "og:type", property: "og:type", content: "website" },
      { hid: "og:url", property: "og:url", content: "https://kayayoga.ph/" },
      { hid: "og:title", property: "og:title", content: "Kaya Yoga PH" },
      { hid: "og:description", property: "og:description", content: "At Kaya, we put our students first. We speak their language. We teach yoga with the student’s needs in mind. We thrive individually and collectively. Come build your foundation with us. Practice efficiently and safely with Kaya Yoga." },
      { hid: "og:image", property: "og:image", content: "/img/KayaYogaSocial.png" },
      { hid: "twitter:card", property: "twitter:card", content: "summary_large_image" },
      { hid: "twitter:url", property: "twitter:url", content: "https://kayayoga.ph/" },
      { hid: "twitter:title", property: "twitter:title", content: "Kaya Yoga PH" },
      { hid: "twitter:description", property: "twitter:description", content: "At Kaya, we put our students first. We speak their language. We teach yoga with the student’s needs in mind. We thrive individually and collectively. Come build your foundation with us. Practice efficiently and safely with Kaya Yoga." },
      { hid: "twitter:image", property: "twitter:image", content: "/img/KayaYogaSocial.png" },
      { name: "application-name", content: "&nbsp;" },
      { name: "msapplication-TileColor", content: "#FFFFFF" },
      { name: "msapplication-TileImage", content: "mstile-144x144.png" },
      { name: "msapplication-square70x70logo", content: "mstile-70x70.png" },
      { name: "msapplication-square150x150logo", content: "mstile-150x150.png" },
      { name: "msapplication-wide310x150logo", content: "mstile-310x150.png" },
      { name: "msapplication-square310x310logo", content: "mstile-310x310.png" }
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/favicon/favicon-196x196.png", sizes: "196x196" },
      { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/png", href: "/favicon/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/favicon/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", type: "image/png", href: "/favicon/favicon-128.png", sizes: "128x128" },
      { rel: "apple-touch-icon-precomposed", sizes: "57x57", href: "/favicon/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "114x114", href: "/favicon/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "72x72", href: "/favicon/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "144x144", href: "/favicon/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "60x60", href: "/favicon/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "120x120", href: "/favicon/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "76x76", href: "/favicon/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon-precomposed", sizes: "152x152", href: "/favicon/apple-touch-icon-152x152.png" }
    ], 
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js' } 
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/stylus/kayayoga.styl',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/v-viewer.js' },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/vue-slick-carousel.js' },
    { src: '~plugins/v-lazy-image.js' }
  ],
 
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { duration: 800 }],
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'http://www.kayayoga.ph/',
    gzip: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["vee-validate/dist/rules"],
  }
}
 