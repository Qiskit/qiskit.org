declare global {
  interface Window {
    digitalData: any
    _analytics: any
  }
}

export default () => {
  'use strict'
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
    optimizely: false
  }
  const script = document.createElement('script')
  script.src = 'https://cloud.ibm.com/analytics/build/bluemix-analytics.min.js'
  script.async = true
  document.head.appendChild(script)
}
