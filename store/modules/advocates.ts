const WORLD_REGIONS = Object.freeze({
  americas: 'Americas',
  asiaPacific: 'Asia Pacific',
  europe: 'Europe',
  africa: 'Africa'
} as const)

type WorldRegion = typeof WORLD_REGIONS[keyof typeof WORLD_REGIONS]

type Advocate = {
  name: string,
  image: string,
  location: string,
  // region: WorldRegion,
  slackId: string
}

const WORLD_REGION_OPTIONS = Object.freeze([
  WORLD_REGIONS.americas,
  WORLD_REGIONS.asiaPacific,
  WORLD_REGIONS.europe,
  WORLD_REGIONS.africa
])

export {
  WorldRegion,
  WORLD_REGIONS,
  WORLD_REGION_OPTIONS,
  Advocate
}

export default {
  state () {
    return {
      advocates: []
    }
  },
  getters: {
    regionFiltersForAdvocates (state: any) {
      return state.regionFiltersForAdvocates
    },
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
      const eventsModule = await import('~/content/advocates/advocates.json')
      return eventsModule.default || []
    }
  }
}
