declare global {
  interface Window {
    digitalData: any
    _analytics: any,
    bluemixAnalytics: any
  }
}

export const segmentMixin = {
  created() {
    if (process.client) {
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
  mounted() {
    const self = this as any

    self.$nextTick(function () {
      window.digitalData = {
        page: {
          pageInfo: {
            pageID: `${self.to}`,
            productTitle: 'experiments',
            analytics: {
              category: 'Qiskit.org'
            }
          }
        }
      }

      if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
        window.bluemixAnalytics.pageEvent(
          'Qiskit.org', 
          'experiments', 
          {
            navigationType: 'pushState',
            productTitle: self.title,
            path: self.to,
          }
        )
      }
    })
  }
}