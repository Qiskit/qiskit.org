import advocatesModule from '~/store/modules/advocates'

const advocate1 = {
  city: 'Lima',
  country: 'Peru',
  image: 'https://example.com/img/1.jpg',
  name: 'John Doe',
  region: 'South America'
}
const advocate2 = {
  city: 'Munich',
  country: 'Germany',
  image: 'https://example.com/img/2.jpg',
  name: 'Max Mustermann',
  region: 'Europe'
}

/**
 * ACTIONS
 * -----------------------------------------------------------------------------
 */

describe('fetchAdvocates', () => {
  it('commits "setAdvocates" with a list of fetched elements', async () => {
    const commit = jest.fn()

    const fetchAdvocates = advocatesModule.actions.fetchAdvocates as Function
    await fetchAdvocates({ commit })

    expect(commit).toHaveBeenCalledWith(
      'setAdvocates',
      expect.arrayContaining([expect.anything()])
    )
  })
})

/**
 * MUTATIONS
 * -----------------------------------------------------------------------------
 */

describe('setAdvocates', () => {
  const state = {
    advocates: [],
    regionFilters: []
  }

  it('sets the list of advocates with one advocate', () => {
    advocatesModule.mutations.setAdvocates(state, [advocate1])
    expect(state).toEqual({
      advocates: [advocate1],
      regionFilters: []
    })
  })

  it('sets the list of advocates with one different advocate', () => {
    advocatesModule.mutations.setAdvocates(state, [advocate2])
    expect(state).toEqual({
      advocates: [advocate2],
      regionFilters: []
    })
  })

  it('sets the list of advocates with multiple advocates', () => {
    advocatesModule.mutations.setAdvocates(state, [advocate1, advocate2])
    expect(state).toEqual({
      advocates: [advocate1, advocate2],
      regionFilters: []
    })
  })

  it('unsets the empty list of advocates', () => {
    advocatesModule.mutations.setAdvocates(state, [])
    expect(state).toEqual({
      advocates: [],
      regionFilters: []
    })
  })
})

describe('setRegionFilters', () => {
  const state = {
    advocates: [],
    regionFilters: []
  }
  const regionFilter1 = 'South America'
  const regionFilter2 = 'Europe'

  it('sets the region filters with one filter', () => {
    advocatesModule.mutations.setRegionFilters(state, [regionFilter1])
    expect(state).toEqual({
      advocates: [],
      regionFilters: [regionFilter1]
    })
  })

  it('sets the region filters with one different filter', () => {
    advocatesModule.mutations.setRegionFilters(state, [regionFilter2])
    expect(state).toEqual({
      advocates: [],
      regionFilters: [regionFilter2]
    })
  })

  it('sets the region filters with multiple filters', () => {
    advocatesModule.mutations.setRegionFilters(state, [regionFilter1, regionFilter2])
    expect(state).toEqual({
      advocates: [],
      regionFilters: [regionFilter1, regionFilter2]
    })
  })

  it('unsets the region filters', () => {
    advocatesModule.mutations.setRegionFilters(state, [])
    expect(state).toEqual({
      advocates: [],
      regionFilters: []
    })
  })
})

/**
 * GETTERS
 * -----------------------------------------------------------------------------
 */

describe('filteredAdvocates', () => {
  const filteredAdvocates = advocatesModule.getters.filteredAdvocates as Function
  const state = {
    advocates: [advocate1, advocate2],
    regionFilters: ['']
  }

  it('returns a filtered list of advocates for 1 matching filter', () => {
    state.regionFilters = ['Europe']
    expect(filteredAdvocates(state)).toEqual([advocate2])
  })

  it('returns a filtered list of advocates for 2 matching filters', () => {
    state.regionFilters = ['Europe', 'South America']
    expect(filteredAdvocates(state)).toEqual([advocate1, advocate2])
  })

  it('returns an empty filtered list of advocates for no matching filters', () => {
    state.regionFilters = ['Moon']
    expect(filteredAdvocates(state)).toEqual([])
  })

  it('returns the complete list of advocates when there are no filters', () => {
    state.regionFilters = []
    expect(filteredAdvocates(state)).toEqual([advocate1, advocate2])
  })
})
