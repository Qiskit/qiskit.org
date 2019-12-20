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
  },
  location: {
    href: 'http://test.com/test/path',
    pathname: '/test/path'
  }
}

const eventParams = {
  action: 'Test Action',
  objectType: 'Test Type',
  milestoneName: 'Test Milestone'
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
      'Custom Event',
      {
        productTitle: window.digitalData.page.pageInfo.productTitle,
        category: window.digitalData.page.pageInfo.analytics.category,
        url: window.location.href,
        path: window.location.pathname,
        action: `${window.location.href} - Button Clicked: ${eventParams.action}`,
        objectType: eventParams.objectType,
        successFlag: true,
        milestoneName: eventParams.milestoneName
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
