declare global {
  interface Window {
    _analytics: any,
    bluemixAnalytics: any
  }
}

/**
 * Sends the page event to segment. Needs the following information:
 * @param pageComponent has the information of the page.
 *
 * It's not needed to add the 'path' because it's done automatically
 */
const trackPage = (pageComponent: any) => {
  const category: string = 'Qiskit.org'
  const productTitle: string = 'IBM Q Experience'
  const navigationType: string = 'pushState'
  const routeName: string = pageComponent.routeName
  const title: string = pageComponent.$metaInfo.title

  if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
    window.bluemixAnalytics.pageEvent(
      category,
      routeName,
      {
        navigationType,
        productTitle,
        title
      }
    )
  }
}

/**
 * To use this tracking we need:
 * - To include this js file in all pages:
 * https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js
 * We do this on nuxt.config.js
 * - To include the title of the page. We do this on the meta info on the header
 * - To add the routeName for each page (on vue index component and in .md files)
 *   The routheName identifies the visited page regardless of the URL changing
 *   over the time
 */
export const segmentMixin = {
  created () {
    const pageComponent = this as any

    if (process.client) {
      // To see the window._analytics default values go to
      // https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
      window._analytics = {
        // For testing use: zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H
        segment_key: 'ffdYLviQze3kzomaINXNk6NwpY9LlXcw',
        optimizely: false,
        googleAddServices: false,
        autoPageView: false
      }

      window.onload = () => {
        trackPage(pageComponent)
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((pageComponent) => {
      trackPage(pageComponent)
    })
  }
}
