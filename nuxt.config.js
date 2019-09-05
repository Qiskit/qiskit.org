import path from 'path'
import fs from 'fs'
import markdownIt from 'markdown-it'
import miLinkAttributes from 'markdown-it-link-attributes'
import miAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import pkg from './package'

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
  slugify(id) { return uslug(id) }
})

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    script: [
      {
        hid: 'segment',
        innerHTML: `
(function () {
  'use strict'
  window.digitalData = {
    page: {
      pageInfo: {
        productTitle: 'IBM Q Experience',
        analytics: {
          category: 'Qiskit.org'
        }
      }
    }
  }
  window._analytics = {
    segment_key: 'ffdYLviQze3kzomaINXNk6NwpY9LlXcw',
    coremetrics: false,
    optimizely: false
  }
}());
`
      },
      {
        src: 'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js',
        async: true
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    __dangerouslyDisableSanitizersByTagID: {
      'segment': ['innerHTML']
    }
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
    '~/plugins/deep-load.ts'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

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
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
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
    scrollBehavior(to) {
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
  }
}
