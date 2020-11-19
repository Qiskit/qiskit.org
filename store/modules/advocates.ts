import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { Advocate } from '~/types/advocate'

const ADVOCATES_WORLD_REGIONS = Object.freeze({
  northAmerica: 'North America',
  southAmerica: 'South America',
  australia: 'Australia',
  africa: 'Africa',
  europe: 'Europe',
  asia: 'Asia'
} as const)

type AdvocatesWorldRegion = typeof ADVOCATES_WORLD_REGIONS[keyof typeof ADVOCATES_WORLD_REGIONS]

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
  ADVOCATES_WORLD_REGION_OPTIONS
}

class State {
  advocates: Advocate[] = []
  regionFilter: string[] = []
}

const actions = <ActionTree<State, any>> {
  async fetchAdvocates ({ commit }): Promise<void> {
    const advocatesModule = await import('~/content/advocates/advocates.json')
    const advocates = advocatesModule.default || []
    commit('setAdvocates', advocates)
  }
}

const mutations = <MutationTree<State>> {
  setAdvocates (state, payload: Advocate[]) {
    state.advocates = payload
  }
}

const getters = <GetterTree<State, any>> {
  filteredAdvocates (state) {
    const { advocates } = state

    return advocates
  }
}

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters
}
