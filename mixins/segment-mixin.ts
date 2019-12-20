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

const trackPage = (routeName, path, title) => {
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

export const segmentMixin = {
  created () {
    const pageComponent = this as any
    const routeName: string = pageComponent.belongsTo
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
      const routeName: string = pageComponent.belongsTo
      const title: string = pageComponent.$metaInfo.title
      const path: string = to.path

      trackPage (routeName, path, title)
    })
  }
}
