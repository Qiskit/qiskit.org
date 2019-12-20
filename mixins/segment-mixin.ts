declare global {
  interface Window {
    digitalData: any
    _analytics: any,
    bluemixAnalytics: any
  }
}

const category: string = 'Qiskit.org'
const productTitle: string = 'IBM Q Experience'
const navigationType: string = 'pushState'

/**
 * Sends the page event to segment. Needs the following information:
 * @param routeName identifies the visited page regardless of the URL 
 * changing over the time
 * @param path is the route of the visited page
 * @param title is the title of the visited page
 * 
 * category, productTitle and the navigationType are always the same,
 * that's why they are in contants 
 */
const trackPage = (routeName: string, path: string, title: string) => {
  if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
    window.bluemixAnalytics.pageEvent(
      category,
      routeName,
      {
        navigationType,
        productTitle,
        path,
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
 * - To include a title. We do this on the meta info on the header
 * - To add the path for each page
 * - To add the routeName for each page
 */
export const segmentMixin = {
  created () {
    const pageComponent = this as any
    const routeName: string = pageComponent.routeName
    const title: string = pageComponent.$metaInfo.title
    const path: string = pageComponent.to

    if (process.client) {
      window.digitalData = {
        page: {
          pageInfo: {
            productTitle,
            analytics: { category }
          }
        }
      }

      window._analytics = {
        segment_key: 'zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H',
        coremetrics: false,
        optimizely: false,
        googleAddServices: false,
        fullStory: false,
        autoPageEventSpa: false,
        autoFormEvents: false,
        autoPageView: false
      }

      window.onload = () => {
        trackPage (routeName, path, title)
      }
    }

  },
  beforeRouteEnter (to, from, next) {
    next((pageComponent) => {
      const routeName: string = pageComponent.routeName
      const title: string = pageComponent.$metaInfo.title
      const path: string = to.path

      trackPage (routeName, path, title)
    })
  }
}
