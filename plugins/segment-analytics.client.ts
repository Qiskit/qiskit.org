import Vue from 'vue'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'

interface AnalyticsContext {
  _analytics?: any
  _analyticsReady?: Promise<Event>
  bluemixAnalytics?: any
  digitalData?: any
}

interface ClickEventParams {
  action: string
}

interface CtaEvent {
  CTA: string
  productTitle: string
  category: string
}

declare global {
  interface Window extends AnalyticsContext {}
}

function configureAnalytics () {
  // See window._analytics default values at:
  // https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
  window._analytics = {
    segment_key: process.env.analyticsKey,
    coremetrics: false,
    optimizely: false,
    googleAddServices: false,
    fullStory: false,
    autoPageEventSpa: false,
    autoFormEvents: false,
    autoPageView: false
  }

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
}

function installAnalyticsOnce () {
  window._analyticsReady = window._analyticsReady || new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = process.env.analyticsScriptUrl || ''
    document.head.appendChild(script)
    script.onload = resolve
    script.onerror = (err) => {
      console.warn('Error loading Bluemix Analytics script:', err)
      resolve()
    }
  })
}

/**
 * Send a page visitation event to segment.
 * @param pageComponent the page component.
 */
function trackPage (pageComponent: QiskitPage) {
  if (!window.bluemixAnalytics || !window.bluemixAnalytics.pageEvent) { return }
  if (!pageComponent.routeName) {
    console.warn(
      'Component',
      pageComponent,
      'is missing the \'routeName\' property, needed by analytics.')
    return
  }

  // TODO: Consider getting these values from the `digitalData` global object
  // when addressing:
  // https://github.com/Qiskit/qiskit.org/issues/364
  const category: string = 'Qiskit.org'
  const routeName: string = pageComponent.routeName

  window.bluemixAnalytics.pageEvent(category, routeName, {
    navigationType: 'pushState',
    productTitle: 'IBM Q Experience',
    title: pageComponent.$metaInfo.title
  })
}

function trackClickEvent (context: AnalyticsContext, params: ClickEventParams) {
  const { action } = params
  const { bluemixAnalytics, digitalData } = context

  if (!bluemixAnalytics || !digitalData) { return }

  const productTitle = getOrFailProductTitle(digitalData)
  const category = getOrFailCategory(digitalData)

  const cta: CtaEvent = {
    productTitle,
    category,
    CTA: action
  }

  bluemixAnalytics.trackEvent('CTA Clicked', cta)
}

function getOrFailProductTitle (digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.productTitle,
    '`digitalData.page.pageInfo.productTitle` is missing'
  )
}

function getOrFailCategory (digitalData: any): string {
  return assertCanGet(
    () => digitalData.page.pageInfo.analytics.category,
    '`digitalData.page.pageInfo.analytics.category` is missing'
  )
}

function assertCanGet<T> (getter: () => T, error: string): T {
  let result
  try {
    result = getter()
  } catch (ex) { }
  if (!result) {
    throw new Error(error)
  }
  return result
}

declare module 'vue/types/vue' {
  interface Vue {
    $trackClickEvent(params: ClickEventParams): void
    $trackPage(page: QiskitPage): void
  }
}

Vue.prototype.$trackClickEvent = async (params: ClickEventParams) => {
  try {
    await window._analyticsReady
    trackClickEvent(window, params)
  } catch (ex) {
    console.warn('Error trying to track a click event:', ex)
  }
}

export default (_, inject) => {
  configureAnalytics()
  installAnalyticsOnce()
  //inject('trackClickEvent', trackClickEvent)
  inject('trackPage', trackPage)
}

export { trackClickEvent, ClickEventParams, AnalyticsContext }
