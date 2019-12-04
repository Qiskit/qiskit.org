declare global {
  interface Window {
    digitalData: any
    _analytics: any
  }
}

export const segmentMixin = {
  created() {
    const self = this as any
    
    if (process.client) {
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
      window._analytics = {
        segment_key: 'zbHWEXPUfXm0K6C7HbegwB5ewDEC8o1H',
        coremetrics: false,
        optimizely: false,
        autoPageView: true
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    console.log('===to', to)
    console.log('===from', from)
    console.log('===next', next)
  }
}