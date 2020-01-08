import { trackClickEvent, trackPage, AnalyticsContext } from '~/plugins/segment-analytics'

const window: AnalyticsContext = {
  bluemixAnalytics: {
    trackEvent: jest.fn(),
    pageEvent: jest.fn()
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
  action: 'Test Action'
}

const routeName = 'sample route'

const title = 'sample title'

const commonSuite: [Function, any[], string][] = [
  [trackPage, [routeName, title], 'pageEvent'],
  [trackClickEvent, [eventParams], 'trackEvent']
]

commonSuite.forEach(([fn, args, delegate]) => {
  describe(`${fn.name}`, () => {
    beforeEach(() => {
      window.bluemixAnalytics[delegate].mockClear()
    })

    it(`delegates in Bluemix Analytics \`${delegate}\` function`, () => {
      fn(window, ...args)
      expect(window.bluemixAnalytics[delegate]).toHaveBeenCalledTimes(1)
    })

    it('fails silently if the context lacks `bluemixAnalytics` object', () => {
      fn(
        {
          ...window,
          bluemixAnalytics: undefined
        },
        ...args
      )
      expect(window.bluemixAnalytics[delegate]).not.toBeCalled()
    })

    it('fails silently if the context lacks `digitalData` object', () => {
      fn(
        {
          ...window,
          digitalData: undefined
        },
        ...args
      )
      expect(window.bluemixAnalytics[delegate]).not.toBeCalled()
    })

    it('throws if `productTitle` is undefined', () => {
      expect(() => fn(
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
        ...args
      )).toThrow()
    })

    it('throws if `category` is undefined', () => {
      expect(() => fn(
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
        ...args
      )).toThrow()
    })

    it('throws if the path to `pageTitle` or `category` is broken', () => {
      expect(() => fn(
        {
          ...window,
          digitalData: {}
        },
        ...args
      )).toThrow()
    })
  })
})

describe('trackClickEvent', () => {
  beforeEach(() => {
    window.bluemixAnalytics.trackEvent.mockClear()
  })

  it('translates the event into a Bluemix Analytics "CTA Clicked" event', () => {
    trackClickEvent(window, eventParams)
    expect(window.bluemixAnalytics.trackEvent).toHaveBeenCalledWith(
      'CTA Clicked',
      {
        productTitle: window.digitalData.page.pageInfo.productTitle,
        category: window.digitalData.page.pageInfo.analytics.category,
        CTA: eventParams.action
      }
    )
  })
})

describe('trackPage', () => {
  beforeEach(() => {
    window.bluemixAnalytics.pageEvent.mockClear()
  })

  it('translates the event into a Bluemix Analytics "pushState" page event', () => {
    trackPage(window, routeName, title)
    expect(window.bluemixAnalytics.pageEvent).toHaveBeenCalledWith(
      window.digitalData.page.pageInfo.analytics.category,
      routeName,
      {
        navigationType: 'pushState',
        productTitle: window.digitalData.page.pageInfo.productTitle,
        title
      }
    )
  })
})
