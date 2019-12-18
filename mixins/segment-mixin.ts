declare global {
  interface Window {
    digitalData: any
    _analytics: any,
    bluemixAnalytics: any
  }
}

export const segmentMixin = {
  created () {
    const self = this as any

    if (process.client) {
      window.digitalData = {
        page: {
          pageInfo: {
            productTitle: self.title,
            analytics: {
              category: 'Qiskit.org'
            }
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
    }
  },
  beforeRouteEnter (to, from, next) {
    next(self => {
      const routeName: string = self.belongsTo
      const title: string = self.$metaInfo.title
      const path: string = to.path

      if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
        window.bluemixAnalytics.pageEvent(
          'Qiskit.org',
          routeName,
          {
            navigationType: 'pushState',
            productTitle: title,
            path,
            title
          }
        )
      }
    })
  }
}
