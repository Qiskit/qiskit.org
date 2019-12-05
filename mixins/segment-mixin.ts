declare global {
  interface Window {
    digitalData: any
    _analytics: any,
    bluemixAnalytics: any
  }
}

export const segmentMixin = {
  created() {
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
  mounted() {
    const self = this as any

    self.$nextTick(function () {
      if (window.bluemixAnalytics && window.bluemixAnalytics.pageEvent) {
        window.bluemixAnalytics.pageEvent(
          'Qiskit.org',
          self.belongsTo,
          {
            navigationType: 'pushState',
            productTitle: self.title,
            path: self.to,
            title: self.title
          }
        )
      }
    })
  }
}
