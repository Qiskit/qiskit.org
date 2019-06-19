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
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
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
        include: path.resolve(__dirname, 'src'),
        options: {
          vue: {
            root: 'dynamicMarkdown'
          },
          markdown: (body) => {
            return md.render(body)
          }
        }
      })
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
    routes: (function () {
      return fs.readdirSync(path.resolve(__dirname, 'src', 'events'))
        .filter(filename => path.extname(filename) === '.md')
        .map(filename => `/events/${path.parse(filename).name}`)
    })()
  }
}
