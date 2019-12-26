import path from 'path'
import fs from 'fs'
import markdownIt from 'markdown-it'
import miLinkAttributes from 'markdown-it-link-attributes'
import miAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import Mode from 'frontmatter-markdown-loader/mode'
import pkg from './package'
import generateTextbookToc from './hooks/generate-textbook-toc'

const md = markdownIt({
  linkify: true,
  html: true
})
md.use(miLinkAttributes, {
  pattern: /^https?:/,
  attrs: {
    target: '_blank',
    rel: 'noopener'
  }
})
md.use(miAnchor, {
  slugify (id) { return uslug(id) }
})

export default {
  mode: 'universal',

  env: {
    analyticsScriptUrl: process.env.NODE_ENV === 'development'
      ? 'https://dev.console.test.cloud.ibm.com/analytics/build/bluemix-analytics.min.js'
      : 'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js',
    analyticsKey: process.env.NODE_ENV === 'development'
      ? 'zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H'
      : 'ffdYLviQze3kzomaINXNk6NwpY9LlXcw'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/directives.ts',
    '~/plugins/deep-load.ts',
    { src: '~/plugins/hotjar.ts', mode: 'client' },
    { src: '~/plugins/segment-analytics.ts', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    /*
    ** Do not include styles! Only variables, mixins and functions.
    */
    scss: [
      './assets/scss/mq.scss',
      './assets/scss/mixins.scss'
    ]
  },

  /*
  ** Migrating from Nuxt 2.8.x to 2.9.y
  ** https://typescript.nuxtjs.org/migration.html
  */
  buildModules: [
    ['@nuxt/typescript-build', {
      typeCheck: true,
      ignoreNotFoundWarnings: true
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.HTML],
          vue: {
            root: 'content'
          },
          markdown: (body) => {
            return md.render(body)
          }
        }
      })
    },

    // TODO: Workaround for dealing with. Remove once its solved:
    // https://github.com/nuxt/nuxt.js/issues/3877
    splitChunks: {
      layouts: true
    }
  },

  router: {
    scrollBehavior (to) {
      if (to.hash) {
        const el = document.querySelector(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },

  generate: {
    dir: 'public',
    routes: (function () {
      const events = fs.readdirSync(path.resolve(__dirname, 'content', 'events'))
        .filter(filename => path.extname(filename) === '.md')
        .map(filename => `/events/${path.parse(filename).name}`)
      const experiments = fs.readdirSync(path.resolve(__dirname, 'content', 'experiments'))
        .filter(filename => path.extname(filename) === '.md')
        .map(filename => `/experiments/${path.parse(filename).name}`)
      return events.concat(experiments)
    })()
  },

  hooks: {
    build: {
      before () {
        generateTextbookToc(
          './static/textbook/preface.html',
          './content/education/textbook-toc.md'
        )
      }
    }
  }
}
