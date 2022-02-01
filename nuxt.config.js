export default {
  server: {
    port: 3000,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daywork-landing-page-v3',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    cache: false,
    hardSource: false,
    analyze: false,

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    extend(config, { isClient }) {
      if (isClient) {
        // https://webpack.js.org/configuration/devtool/
        config.devtool = 'eval-cheap-module-source-map'
      }

      // https://stackoverflow.com/a/61686471/13161255
      config.module.rules.push({
        test: /\.less$/,
        use: [
          // { loader: 'style-loader' },
          // { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              // https://lesscss.org/usage/
              lessOptions: {
                math: 'always',
                javascriptEnabled: true,
              },
            },
          },
        ],
      })
    },
  },
}
