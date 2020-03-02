import path from 'path'
import fs from 'fs'
import markdownIt from 'markdown-it'
import miLinkAttributes from 'markdown-it-link-attributes'
import miAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import Mode from 'frontmatter-markdown-loader/mode'

import { Configuration } from '@nuxt/types'
import pkg from './package.json'
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

const config: Configuration = {
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
  ** Plugins to load before mounting the App.
  */
  plugins: [
    '~/plugins/router-hooks.ts',
    '~/plugins/highlight-js.ts',
    '~/plugins/carbon.ts',
    '~/plugins/deep-load.ts',
    { src: '~/plugins/hotjar.ts', mode: 'client' },
    { src: '~/plugins/segment-analytics.ts', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
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
      config.module = config.module || { rules: [] }
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
    scrollBehavior (to, from) {
      const nuxt = window.$nuxt

      // Force `triggerScroll` when navigating through the page.
      // Did not found the event `triggerScroll` documented but it is used in
      // the default behaviour to ensure the page has loaded:
      // https://github.com/nuxt/nuxt.js/blob/e3ba6c290dd60e1a8c5b7daec72982a667a7fe04/packages/vue-app/template/router.scrollBehavior.js
      if (to.path === from.path && to.hash !== from.hash) {
        nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
      }

      return new Promise((resolve) => {
        nuxt.$once('triggerScroll', () => {
          if (!to.hash) {
            return resolve()
          }

          const el: HTMLElement | null = document.querySelector(to.hash)
          if (!el) {
            console.warn('Trying to navigate to a missing element', to.hash)
            return resolve()
          }

          if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
          } else {
            window.scrollTo(0, el.offsetTop)
          }

          return resolve()
        })
      })
    }
  },

  generate: {
    routes: (function () {
      const events = getContentUrls('events')
      const experiments = getContentUrls('experiments')
      return events.concat(experiments)

      function getContentUrls (contentRoot: string): string[] {
        return fs.readdirSync(path.resolve(__dirname, 'content', contentRoot))
          .filter(isContentAndNotReadme)
          .map(toContentUrl(contentRoot))
      }

      function isContentAndNotReadme (filename: string): boolean {
        return path.extname(filename) === '.md' &&
               path.parse(filename).name.toUpperCase() !== 'README'
      }

      function toContentUrl (contentRoot: string): (s: string) => string {
        return (filename: string): string => {
          return `/${contentRoot}/${path.parse(filename).name}`
        }
      }
    })()
  },

  hooks: {
    build: {
      async before () {
        await generateTextbookToc(
          'https://qiskit.org/textbook/preface.html',
          './content/education/textbook-toc.md'
        )
      }
    }
  }
}

export default config
