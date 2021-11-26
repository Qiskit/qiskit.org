import type { ActionTree, GetterTree, MutationTree } from 'vuex'

export class State {
  members: any[] = []
  tierFilters: string[] = []
}

const getters = <GetterTree<State, any>> {
  /**
   * List of members filtered by selected tiers.
   */
  filteredMembers ({ members, tierFilters }): any[] {
    const noTierFilters = tierFilters.length === 0

    if (noTierFilters) {
      return members
    }
    return members.filter(member => tierFilters.includes(member.tier))
  },
  tierFilters ({ tierFilters }): any[] {
    return tierFilters
  }
}

const mutations = <MutationTree<State>> {
  setMembers (state, members: any[]) {
    state.members = members
  },

  setTierFilters (state, tierFilters: string[]) {
    state.tierFilters = tierFilters
  }
}

const actions = <ActionTree<State, any>> {
  async fetchMembers ({ commit }): Promise<void> {
    const membersModule = await import('~/content/ecosystem/members.json')
    const members = membersModule.default || []
    commit('setMembers', members)
  }
}

export default {
  namespaced: true,
  state: new State(),
  actions,
  mutations,
  getters
}
