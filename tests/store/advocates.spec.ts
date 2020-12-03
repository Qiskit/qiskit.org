import advocatesModule from '~/store/modules/advocates'

/**
 * ACTIONS
 * -----------------------------------------------------------------------------
 */

describe('fetchAdvocates', () => {
  it('fetches the list of advocates', async () => {
    const commit = jest.fn()

    const fetchAdvocates = advocatesModule.actions.fetchAdvocates as Function
    await fetchAdvocates({ commit })

    expect(commit).toHaveBeenCalledWith(
      'setAdvocates',
      expect.arrayContaining([expect.anything()])
    )
  })
})

describe('updateRegionFilters', () => {
  it('updates the region filters', async () => {
    const commit = jest.fn()
    const regionFilters = ['South America', 'Europe']

    const updateRegionFilters = advocatesModule.actions
      .updateRegionFilters as Function
    await updateRegionFilters({ commit }, regionFilters)

    expect(commit).toHaveBeenCalledWith('setRegionFilters', regionFilters)
  })
})

/**
 * MUTATIONS
 * -----------------------------------------------------------------------------
 */

describe('setAdvocates', () => {
  it('sets the list of advocates', () => {
    const state = {
      advocates: [],
      regionFilters: []
    }
    const advocate1 = [
      {
        city: 'Lima',
        country: 'Peru',
        image: 'https://example.com/img/1.jpg',
        name: 'John Doe',
        region: 'South America'
      }
    ]
    const advocate2 = [
      {
        city: 'Munich',
        country: 'Germany',
        image: 'https://example.com/img/2.jpg',
        name: 'Max Mustermann',
        region: 'Europe'
      }
    ]

    /**
     * Advocate 1.
     */
    advocatesModule.mutations.setAdvocates(state, advocate1)
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Lima",
            "country": "Peru",
            "image": "https://example.com/img/1.jpg",
            "name": "John Doe",
            "region": "South America",
          },
        ],
        "regionFilters": Array [],
      }
    `)

    /**
     * Advocate 2.
     */
    advocatesModule.mutations.setAdvocates(state, advocate2)
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Munich",
            "country": "Germany",
            "image": "https://example.com/img/2.jpg",
            "name": "Max Mustermann",
            "region": "Europe",
          },
        ],
        "regionFilters": Array [],
      }
    `)

    /**
     * Advocates 1 and 2.
     */
    advocatesModule.mutations.setAdvocates(state, [...advocate1, ...advocate2])
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [
          Object {
            "city": "Lima",
            "country": "Peru",
            "image": "https://example.com/img/1.jpg",
            "name": "John Doe",
            "region": "South America",
          },
          Object {
            "city": "Munich",
            "country": "Germany",
            "image": "https://example.com/img/2.jpg",
            "name": "Max Mustermann",
            "region": "Europe",
          },
        ],
        "regionFilters": Array [],
      }
    `)

    /**
     * No advocates.
     */
    advocatesModule.mutations.setAdvocates(state, [])
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [],
      }
    `)
  })
})

describe('setRegionFilters', () => {
  it('sets the region filters', () => {
    const state = {
      advocates: [],
      regionFilters: []
    }
    const regionFilter1 = ['South America']
    const regionFilter2 = ['Europe']

    /**
     * Filter 1.
     */
    advocatesModule.mutations.setRegionFilters(state, regionFilter1)
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "South America",
        ],
      }
    `)

    /**
     * Filter 2.
     */
    advocatesModule.mutations.setRegionFilters(state, regionFilter2)
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "Europe",
        ],
      }
    `)

    /**
     * Filters 1 and 2.
     */
    advocatesModule.mutations.setRegionFilters(state, [
      ...regionFilter1,
      ...regionFilter2
    ])
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [
          "South America",
          "Europe",
        ],
      }
    `)

    /**
     * No filters.
     */
    advocatesModule.mutations.setRegionFilters(state, [])
    expect(state).toMatchInlineSnapshot(`
      Object {
        "advocates": Array [],
        "regionFilters": Array [],
      }
    `)
  })
})

/**
 * GETTERS
 * -----------------------------------------------------------------------------
 */

describe('filteredAdvocates', () => {
  it('returns the filtered list of advocates', () => {
    const filteredAdvocates = advocatesModule.getters
      .filteredAdvocates as Function

    /**
     * 1 matching filter.
     */
    const state = {
      advocates: [
        {
          city: 'Lima',
          country: 'Peru',
          image: 'https://example.com/img/1.jpg',
          name: 'John Doe',
          region: 'South America'
        },
        {
          city: 'Munich',
          country: 'Germany',
          image: 'https://example.com/img/2.jpg',
          name: 'Max Mustermann',
          region: 'Europe'
        }
      ],
      regionFilters: ['Europe']
    }
    let actual = filteredAdvocates(state)
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Munich",
          "country": "Germany",
          "image": "https://example.com/img/2.jpg",
          "name": "Max Mustermann",
          "region": "Europe",
        },
      ]
    `)

    /**
     * 2 matching filters.
     */
    state.regionFilters = ['Europe', 'South America']
    actual = filteredAdvocates(state)
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Lima",
          "country": "Peru",
          "image": "https://example.com/img/1.jpg",
          "name": "John Doe",
          "region": "South America",
        },
        Object {
          "city": "Munich",
          "country": "Germany",
          "image": "https://example.com/img/2.jpg",
          "name": "Max Mustermann",
          "region": "Europe",
        },
      ]
    `)

    /**
     * No matching filter.
     */
    state.regionFilters = ['Moon']
    actual = filteredAdvocates(state)
    expect(actual).toMatchInlineSnapshot('Array []')

    /**
     * No filter.
     */
    state.regionFilters = []
    actual = filteredAdvocates(state)
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Lima",
          "country": "Peru",
          "image": "https://example.com/img/1.jpg",
          "name": "John Doe",
          "region": "South America",
        },
        Object {
          "city": "Munich",
          "country": "Germany",
          "image": "https://example.com/img/2.jpg",
          "name": "Max Mustermann",
          "region": "Europe",
        },
      ]
    `)
  })
})
