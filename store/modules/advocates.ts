const ADVOCATES_WORLD_REGIONS = Object.freeze({
  northAmerica: 'North America',
  southAmerica: 'South America',
  australia: 'Australia',
  africa: 'Africa',
  europe: 'Europe',
  asia: 'Asia'
} as const)

type AdvocatesWorldRegion = typeof ADVOCATES_WORLD_REGIONS[keyof typeof ADVOCATES_WORLD_REGIONS]

type Advocate = {
  name: string,
  image: string,
  location: string
  region: AdvocatesWorldRegion
  // slackId: string
}

const ADVOCATES_WORLD_REGION_OPTIONS = Object.freeze([
  ADVOCATES_WORLD_REGIONS.northAmerica,
  ADVOCATES_WORLD_REGIONS.southAmerica,
  ADVOCATES_WORLD_REGIONS.australia,
  ADVOCATES_WORLD_REGIONS.africa,
  ADVOCATES_WORLD_REGIONS.europe,
  ADVOCATES_WORLD_REGIONS.asia
])

export {
  AdvocatesWorldRegion,
  ADVOCATES_WORLD_REGIONS,
  ADVOCATES_WORLD_REGION_OPTIONS,
  Advocate
}

export default {
  state () {
    return {
      advocates: []
    }
  },
  getters: {
    filteredAdvocates (state: any) {
      const { advocates } = state

      return advocates
    }
  },
  mutations: {
    setAdvocates (state: any, payload: any) {
      state.advocates = payload
    }
  },
  actions: {
    async fetchAdvocates () {
      const advocatesModule = await import('~/content/advocates/advocates.json')
      return advocatesModule.default || []
    }
  }
}
