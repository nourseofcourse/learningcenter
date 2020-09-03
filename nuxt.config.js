import webpack from 'webpack'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Learning Center',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#35BEF2'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i&display=swap'
      }
    ],
    script: [
      {
        src: '//kit.fontawesome.com/07b1529b9a.js',
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#35BEF2' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/components.js'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org/#getting-started
    '@nuxtjs/auth',
    // Doc: https://bootstrap-vue.org/docs
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Bootstrap Vue config
  */
  bootstrapVue: {
    icons: true, // Install the IconsPlugin (in addition to BootStrapVue plugin),
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  /*
  ** Nuxt.js router
  */
  router: {
    middleware: ['auth'],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: 'http://localhost/learncenter/wp-json',
    withCredentials: true
  },
  /*
  ** Auth module configuration
  ** See https://auth.nuxtjs.org/api/options
  */
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'http://localhost/learncenter/wp-json/jwt-auth/v1/token',
            method: 'post',
            propertyName: 'token'
          },
          user: {
            url: 'http://localhost/learncenter/wp-json/wp/v2/users/me',
            method: 'get',
            propertyName: ''
          },
          logout: false,
          tokenRequired: true
        }
      }
    }
  },
  /*
  ** Environmental Variables
  ** See https://nuxtjs.org/api/configuration-env/
  */
  env: {
    baseURL: 'http://localhost/learncenter/wp-json'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery'
        })
      ]
    },
    /*
    ** Modify the autoprefixer
    */
    postcss: {
      autoprefixer: {
        browsers: ['last 4 versions', 'ie >= 9']
      }
    }
  }
}
