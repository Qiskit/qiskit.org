import {
  CtaClickedEventProperties,
  CtaClickedSegmentTrackProperties,
  SearchedTermSegmentTrackProperties
} from '~/constants/segment'

/**
 * Set of configuration objects and flags required by Bluemix Analytics.
 * Main configuration objects are `_analytics`, `bluemixAnalytics` and
 * `digitalData`.
 *
 * See
 * https://github.ibm.com/Bluemix/Bluemix.Analytics/blob/master/webpack.constants.js
 * for default values.
 */
interface AnalyticsContext {
  _analytics?: any
  _analyticsReady?: Promise<Event>
  bluemixAnalytics?: any
  digitalData?: any
}

declare global {
  interface Window extends AnalyticsContext {}
}

function configureAnalytics () {
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
  window._analyticsReady = window._analyticsReady || new Promise<Event>((resolve, reject) => {
    const script = document.createElement('script')
    script.async = true
    script.src = process.env.analyticsScriptUrl || ''
    document.head.appendChild(script)
    script.onload = resolve
    script.onerror = (err) => {
      console.warn('Error loading Bluemix Analytics script:', err)
      reject(err)
    }
  })
}

/**
 * Send a page visitation event to segment.
 * @param context the Bluemix Analytics object with the analytics configuration.
 * This is usually `window`.
 * @param routeName a unique name identifying the contents of the route.
 * @param title the title meta tag of the page
 */
function trackPage (context: AnalyticsContext, routeName: string, title: string) {
  const { bluemixAnalytics, digitalData } = context

  if (!bluemixAnalytics || !digitalData) { return }

  const category = getOrFailCategory(digitalData)
  const productTitle = getOrFailProductTitle(digitalData)

  bluemixAnalytics.pageEvent(category, routeName, {
    navigationType: 'pushState',
    productTitle,
    title
  })
}

/**
 * Send the information of a CTA click event to Segment.
 * @param context Bluemix Analytics configuration
 * @param properties Segment click event properties
 */
function trackClickEvent (
  context: AnalyticsContext,
  customProperties: CtaClickedEventProperties
) {
  const { bluemixAnalytics, digitalData } = context
  const { cta, location } = customProperties

  if (!bluemixAnalytics || !digitalData) { return }

  const productTitle = getOrFailProductTitle(digitalData)
  const category = getOrFailCategory(digitalData)

  const segmentOptions: CtaClickedSegmentTrackProperties = {
    category,
    CTA: cta,
    location,
    productTitle
  }

  bluemixAnalytics.trackEvent('CTA Clicked', segmentOptions)
}

/**
 * Send the information of an entered search term to Segment.
 * @param context Bluemix Analytics configuration
 * @param searchComponent Name of the search component
 * @param searchTerm Search term
 */
function trackSearchTerm (
  context: AnalyticsContext,
  searchComponent: string,
  searchTerm: string
) {
  const { bluemixAnalytics, digitalData } = context

  if (!bluemixAnalytics || !digitalData) { return }

  const productTitle = getOrFailProductTitle(digitalData)
  const category = getOrFailCategory(digitalData)

  const eventOptions: SearchedTermSegmentTrackProperties = {
    category,
    location: searchComponent,
    productTitle,
    text: searchTerm
  }

  bluemixAnalytics.trackEvent('Searched Term', eventOptions)
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

function afterAnalyticsReady<S extends any[]> (callback: (...S: any[]) => void) {
  return async function (...args: S): Promise<void> {
    try {
      await window._analyticsReady
      callback(window, ...args)
    } catch (err) {
      console.warn(err)
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $metaInfo: { title: string }
    $trackClickEvent(customProperties: CtaClickedEventProperties): void
    $trackPage(routeName: string, title: string): void
    $trackSearchTerm(searchComponent: string, searchTerm: string): void
  }
}

export default (_: any, inject: any) => {
  configureAnalytics()
  installAnalyticsOnce()
  inject('trackPage', afterAnalyticsReady(trackPage))
  inject('trackClickEvent', afterAnalyticsReady(trackClickEvent))
  inject('trackSearchTerm', afterAnalyticsReady(trackSearchTerm))
}

export {
  trackClickEvent,
  trackPage,
  trackSearchTerm,
  AnalyticsContext
}
