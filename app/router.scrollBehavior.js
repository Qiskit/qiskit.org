export default function (to, from) {
  const nuxt = window.$nuxt

  const isPageNavigation = to.name !== from.name

  if (isPageNavigation) {
    nuxt.$nextTick(() => nuxt.$emit('scroll-to-top'))
  } else {
    const isInPageNavigation = to.path === from.path && to.hash !== from.hash

    if (isInPageNavigation) {
      nuxt.$nextTick(() => nuxt.$emit('scroll-to-section'))
    }
  }

  return new Promise((resolve) => {
    nuxt.$once('scroll-to-top', () => {
      window.scrollTo(0, 0)
      return resolve()
    })

    nuxt.$once('scroll-to-section', () => {
      if (!to.hash) {
        return resolve()
      }

      const el = document.querySelector(to.hash)
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
