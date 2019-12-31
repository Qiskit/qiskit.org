import Vue from 'vue'

interface AnalyticsContext {
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

export { trackClickEvent, ClickEventParams, AnalyticsContext }
