declare global {
  interface Window {
    digitalData: any
    _analytics: any,
    bluemixAnalytics: any
  }
}

export const segmentMixin = {
  created () {
    if (process.client) {
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
        optimizely: false,
        googleAddServices: false,
        fullStory: false,
        autoPageEventSpa: false,
        autoFormEvents: false,
        autoPageView: false
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    next((pageComponent) => {
      const routeName: string = pageComponent.belongsTo
      const title: string = pageComponent.$metaInfo.title
      const path: string = to.path

      if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
        window.bluemixAnalytics.pageEvent(
          'Qiskit.org',
          routeName,
          {
            navigationType: 'pushState',
            productTitle: 'IBM Q Experience',
            path,
            title
          }
        )
      }
    })
  }
}
