/// <reference path="types/index.d.ts" />

import path from 'path'
import fs from 'fs'
import consola from 'consola'

import markdownIt from 'markdown-it'
import miLinkAttributes from 'markdown-it-link-attributes'
import miAnchor from 'markdown-it-anchor'
import uslug from 'uslug'
import Mode from 'frontmatter-markdown-loader/mode'

import pkg from './package.json'
import fetchEvents from './hooks/update-events'
import fetchAdvocates from './hooks/update-advocates'
import fetchEcosystemMembers from './hooks/update-ecosystem'

const {
  NODE_ENV,
  ENABLE_ANALYTICS,
  GENERATE_CONTENT,
  AIRTABLE_API_KEY
} = process.env

const IS_PRODUCTION = NODE_ENV === 'production'

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
  slugify (id: any) { return uslug(id) }
})

export default defineNuxtConfig({
  target: 'static',

  // Disable Server Side rendering
  ssr: false,

  // Inline server bundle dependencies
  standalone: true,

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      analyticsScriptUrl: IS_PRODUCTION
        ? 'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js'
        : 'https://dev.console.test.cloud.ibm.com/analytics/build/bluemix-analytics.min.js',
      analyticsKey: IS_PRODUCTION
        ? 'ffdYLviQze3kzomaINXNk6NwpY9LlXcw'
        : 'zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H',
    }
  },

  /*
  ** Headers of the page
  */
  app: {
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
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App.
  */
  plugins: [
    '~/plugins/router-hooks.ts',
    '~/plugins/carbon.ts',
    '~/plugins/deep-load.ts',
    { src: '~/plugins/hotjar.ts', mode: 'client' },
    ...optional(
      IS_PRODUCTION || ENABLE_ANALYTICS,
      { src: '~/plugins/segment-analytics.ts', mode: 'client' } as const
    )
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxt/content'
  ],

  components: [
    {
      /* According to https://stackoverflow.com/questions/66336557/nuxt-not-automatically-importing-components-from-nested-directory
      ** we need to set `pathPrefix: false` to allow the registration of nested directories
      */
      path: '~/components',
      pathPrefix: false
    }
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
          markdown: (body: any) => {
            return md.render(body)
          }
        }
      })
      config.module.rules.push({
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader')
      })
    },

    // TODO: Workaround for dealing with. Remove once its solved:
    // https://github.com/nuxt/nuxt.js/issues/3877
    splitChunks: {
      layouts: true
    }
  },

  generate: {
    routes: (function () {
      const events = getContentUrls('events')

      return [...events]

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
        if (!IS_PRODUCTION && !GENERATE_CONTENT) {
          console.warn('Skipping content generation. Set GENERATE_CONTENT to enable it.')
          return
        }
        await generateContent()
      }
    }
  }
})

function optional<T> (test: any, ...plugins: T[]): T[] {
  return test ? plugins : []
}

async function generateContent () {
  if (AIRTABLE_API_KEY) {
    consola.info('Generating community event previews')
    await fetchEvents(AIRTABLE_API_KEY, './content/events')

    consola.info('Generating advocate previews')
    await fetchAdvocates(AIRTABLE_API_KEY, './content/advocates')
  } else {
    consola.warn('Cannot generate events: missing AIRTABLE_API_KEY environment variable')
  }

  await fetchEcosystemMembers('./content/ecosystem')
}
