import type { ActionTree, GetterTree, MutationTree } from 'vuex'

const ADVOCATES_WORLD_REGIONS = Object.freeze({
  northAmerica: 'North America',
  southAmerica: 'South America',
  australia: 'Australia',
  africa: 'Africa',
  europe: 'Europe',
  asia: 'Asia'
} as const)

type AdvocatesWorldRegion = typeof ADVOCATES_WORLD_REGIONS[keyof typeof ADVOCATES_WORLD_REGIONS]

/**
 * Interface for a Qiskit advocate.
 */
interface Advocate {
  city: string
  country: string
  image: string
  location?: string
  name: string
  region: AdvocatesWorldRegion
  slackId?: string
  slackUsername?: string
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

export class State {
  advocates: Advocate[] = []
  regionFilters: string[] = []
}

const getters = <GetterTree<State, any>> {
  /**
   * List of advocates filtered by selected regions.
   */
  filteredAdvocates ({ advocates, regionFilters }): Advocate[] {
    const noRegionFilters = regionFilters.length === 0

    if (noRegionFilters) {
      return advocates
    }

    return advocates.filter(advocate => regionFilters.includes(advocate.region))
  }
}

const mutations = <MutationTree<State>> {
  setAdvocates (state, advocates: Advocate[]) {
    state.advocates = advocates
  },

  setRegionFilters (state, regionFilters: string[]) {
    state.regionFilters = regionFilters
  }
}

const actions = <ActionTree<State, any>> {
  async fetchAdvocates ({ commit }): Promise<void> {
    const advocatesModule = await import('~/content/advocates/advocates.json')
    const advocates = advocatesModule.default || []
    commit('setAdvocates', advocates)
  }
}

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters
}
