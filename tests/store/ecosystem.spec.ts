import Vue from 'vue'
import Vuex from 'vuex'
import type { Store } from 'vuex'
import storeOptions from './_store-options'
import '~/content/ecosystem/members.json'

Vue.use(Vuex)

let store: Store<any>

const mockMember1 = () => ({
  name: 'member1',
  url: 'https://github.com/member1',
  description: 'This is member1',
  licence: 'Apache-2.0 License',
  tier: 'Main'
})

const mockMember2 = () => ({
  name: 'member2',
  url: 'https://github.com/member2',
  description: 'This is member2',
  licence: 'Apache-2.0 License',
  tier: 'Community'
})

const mockMember3 = () => ({
  name: 'member3',
  url: 'https://github.com/member3',
  description: 'This is member3',
  licence: 'Apache-2.0 License',
  tier: 'Prototypes'
})

const mockTier1 = () => 'Main'
const mockTier2 = () => 'Community'
const mockTier3 = () => 'Prototypes'

/**
 * GETTERS
 * -----------------------------------------------------------------------------
 */
describe('filteredMembers', () => {
  const getter = 'ecosystem/filteredMembers'
  const mockFilter1 = () => 'Main'
  const mockFilter2 = () => 'Community'

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store(storeOptions())
    store.commit('ecosystem/setMembers', [mockMember1(), mockMember2(), mockMember3()])
  })
  it('returns a filtered list of ecosystem members for 1 matching filter', () => {
    store.commit('ecosystem/setTierFilters', [mockFilter1()])
    expect(store.getters[getter]).toEqual([mockMember1()])
  })

  it('returns a filtered list of ecosystem members for 2 matching filters', () => {
    store.commit('ecosystem/setTierFilters', [mockFilter1(), mockFilter2()])
    expect(store.getters[getter]).toEqual([mockMember1(), mockMember2()])
  })

  it('returns full list of ecosystem members when no filters set', () => {
    store.commit('ecosystem/setTierFilters', [])
    expect(store.getters[getter]).toEqual([mockMember1(), mockMember2(), mockMember3()])
  })
})

/**
 * MUTATIONS
 * -----------------------------------------------------------------------------
 */
describe('setMembers', () => {
  const mutationType = 'ecosystem/setMembers'

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store(storeOptions())
  })

  it('sets the ecosystem list with one member', () => {
    store.commit(mutationType, [mockMember1()])
    expect(store.state.ecosystem.members).toEqual([mockMember1()])
  })

  it('sets the ecosystem list twice and keeps only the latest list', () => {
    store.commit(mutationType, [mockMember1()])
    store.commit(mutationType, [mockMember2()])
    expect(store.state.ecosystem.members).toEqual([mockMember2()])
  })

  it('sets the ecosystem list with multiple members', () => {
    store.commit(mutationType, [mockMember1(), mockMember2()])
    expect(store.state.ecosystem.members).toEqual([mockMember1(), mockMember2()])
  })

  it('unsets the ecosystem list', () => {
    store.commit(mutationType, [])
    expect(store.state.ecosystem.members).toEqual([])
  })
})

describe('setTiers', () => {
  const mutationType = 'ecosystem/setTiers'

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store(storeOptions())
  })

  it('sets the ecosystem tiers list with one tier', () => {
    store.commit(mutationType, [mockTier1()])
    expect(store.state.ecosystem.tiers).toEqual([mockTier1()])
  })

  it('sets the ecosystem tiers list twice and keeps only the latest list', () => {
    store.commit(mutationType, [mockTier1()])
    store.commit(mutationType, [mockTier2()])
    expect(store.state.ecosystem.tiers).toEqual([mockTier2()])
  })

  it('sets the ecosystem tiers list with multiple tiers', () => {
    store.commit(mutationType, [mockTier1(), mockTier2()])
    expect(store.state.ecosystem.tiers).toEqual([mockTier1(), mockTier2()])
  })

  it('unsets the ecosystem list', () => {
    store.commit(mutationType, [])
    expect(store.state.ecosystem.tiers).toEqual([])
  })
})

describe('setTierFilters', () => {
  const mutationType = 'ecosystem/setTierFilters'

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store(storeOptions())
  })

  it('sets the tier filters list with one filter', () => {
    store.commit(mutationType, [mockTier1()])
    expect(store.state.ecosystem.tierFilters).toEqual([mockTier1()])
  })

  it('sets the tier filters list twice and keeps only the latest filters', () => {
    store.commit(mutationType, [mockTier1()])
    store.commit(mutationType, [mockTier2()])
    expect(store.state.ecosystem.tierFilters).toEqual([mockTier2()])
  })

  it('sets the tier filters list with multiple filters', () => {
    store.commit(mutationType, [mockTier1(), mockTier2()])
    expect(store.state.ecosystem.tierFilters).toEqual([mockTier1(), mockTier2()])
  })

  it('unsets the tier filters', () => {
    store.commit(mutationType, [])
    expect(store.state.ecosystem.tierFilters).toEqual([])
  })
})

