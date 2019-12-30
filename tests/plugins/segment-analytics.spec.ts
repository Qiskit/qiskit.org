import { trackClickEvent, AnalyticsContext } from '~/plugins/segment-analytics'

const window: AnalyticsContext = {
  bluemixAnalytics: {
    trackEvent: jest.fn()
  },
  digitalData: {
    page: {
      pageInfo: {
        productTitle: 'Test Product Title',
        analytics: {
          category: 'Test Analytics Category'
        }
      }
    }
  }
}

const eventParams = {
  action: 'Test Action',
}

describe('trackClickEvent', () => {
  beforeEach(() => {
    window.bluemixAnalytics.trackEvent.mockClear()
  })

  it('delegates in Bluemix Analytics `trackEvent` function', () => {
    trackClickEvent(window, eventParams)
    expect(window.bluemixAnalytics.trackEvent).toHaveBeenCalledTimes(1)
  })

  it('translates the event into a Bluemix Analytics "Custom Event"', () => {
    trackClickEvent(window, eventParams)
    expect(window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(
      'CTA Clicked',
      {
        productTitle: window.digitalData.page.pageInfo.productTitle,
        category: window.digitalData.page.pageInfo.analytics.category,
        CTA: eventParams.action,
      }
    )
  })

  it('fails silently if the context lacks `bluemixAnalytics` object', () => {
    trackClickEvent(
      {
        ...window,
        bluemixAnalytics: undefined
      },
      eventParams
    )
    expect(window.bluemixAnalytics.trackEvent).not.toBeCalled()
  })

  it('fails silently if the context lacks `digitalData` object', () => {
    trackClickEvent(
      {
        ...window,
        digitalData: undefined
      },
      eventParams
    )
    expect(window.bluemixAnalytics.trackEvent).not.toBeCalled()
  })

  it('throws if `productTitle` is undefined', () => {
    expect(() => trackClickEvent(
      {
        ...window,
        digitalData: {
          page: {
            pageInfo: {
              analytics: {
                category: 'Test Analytics Category'
              }
            }
          }
        }
      },
      eventParams
    )).toThrow()
  })

  it('throws if `category` is undefined', () => {
    expect(() => trackClickEvent(
      {
        ...window,
        digitalData: {
          page: {
            pageInfo: {
              productTitle: 'Test Product Title',
              analytics: { }
            }
          }
        }
      },
      eventParams
    )).toThrow()
  })

  it('throws if the path to `pageTitle` or `category` is broken', () => {
    expect(() => trackClickEvent(
      {
        ...window,
        digitalData: {}
      },
      eventParams
    )).toThrow()
  })
})
