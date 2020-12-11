import Vuex, { Store } from 'vuex'
import cloneDeep from 'lodash/cloneDeep'
import { storeOptions } from '~/store'

let store: Store<any>

const mockAdvocate1 = () => ({
  city: 'Lima',
  country: 'Peru',
  image: 'https://example.com/img/1.jpg',
  name: 'John Doe',
  region: 'South America'
})
const mockAdvocate2 = () => ({
  city: 'Munich',
  country: 'Germany',
  image: 'https://example.com/img/2.jpg',
  name: 'Max Mustermann',
  region: 'Europe'
})

/**
 * GETTERS
 * -----------------------------------------------------------------------------
 */

describe('filteredAdvocates', () => {
  const getter = 'advocates/filteredAdvocates'
  const mockMatchingRegionFilter1 = () => 'South America'
  const mockMatchingRegionFilter2 = () => 'Europe'
  const mockNonMatchingRegionFilter = () => 'Moon'

  beforeEach(() => {
    const initialStoreOptions = cloneDeep(storeOptions)
    store = new Vuex.Store(initialStoreOptions)
    store.commit('advocates/setAdvocates', [mockAdvocate1(), mockAdvocate2()])
  })

  it('returns a filtered list of advocates for 1 matching filter', () => {
    store.commit('advocates/setRegionFilters', [mockMatchingRegionFilter1()])
    expect(store.getters[getter]).toEqual([mockAdvocate1()])
  })

  it('returns a filtered list of advocates for 2 matching filters', () => {
    store.commit('advocates/setRegionFilters', [mockMatchingRegionFilter1(), mockMatchingRegionFilter2()])
    expect(store.getters[getter]).toEqual([mockAdvocate1(), mockAdvocate2()])
  })

  it('returns an empty filtered list of advocates for no matching filters', () => {
    store.commit('advocates/setRegionFilters', [mockNonMatchingRegionFilter()])
    expect(store.getters[getter]).toEqual([])
  })

  it('returns the complete list of advocates when there are no filters', () => {
    store.commit('advocates/setRegionFilters', [])
    expect(store.getters[getter]).toEqual([mockAdvocate1(), mockAdvocate2()])
  })
})

/**
 * MUTATIONS
 * -----------------------------------------------------------------------------
 */

describe('setAdvocates', () => {
  const mutationType = 'advocates/setAdvocates'

  beforeEach(() => {
    const initialStoreOptions = cloneDeep(storeOptions)
    store = new Vuex.Store(initialStoreOptions)
  })

  it('sets the list of advocates with one advocate', () => {
    store.commit(mutationType, [mockAdvocate1()])
    expect(store.state.advocates.advocates).toEqual([mockAdvocate1()])
  })

  it('sets the list of advocates twice and keeps only the latest list', () => {
    store.commit(mutationType, [mockAdvocate1()])
    store.commit(mutationType, [mockAdvocate2()])
    expect(store.state.advocates.advocates).toEqual([mockAdvocate2()])
  })

  it('sets the list of advocates with multiple advocates', () => {
    store.commit(mutationType, [mockAdvocate1(), mockAdvocate2()])
    expect(store.state.advocates.advocates).toEqual([mockAdvocate1(), mockAdvocate2()])
  })

  it('unsets the list of advocates', () => {
    store.commit(mutationType, [])
    expect(store.state.advocates.advocates).toEqual([])
  })
})

describe('setRegionFilters', () => {
  const mutationType = 'advocates/setRegionFilters'
  const mockRegionFilter1 = 'South America'
  const mockRegionFilter2 = 'Europe'

  beforeEach(() => {
    const initialStoreOptions = cloneDeep(storeOptions)
    store = new Vuex.Store(initialStoreOptions)
  })

  it('sets the region filters with one filter', () => {
    store.commit(mutationType, [mockRegionFilter1])
    expect(store.state.advocates.regionFilters).toEqual([mockRegionFilter1])
  })

  it('sets the region filters twice and keeps only the latest filters', () => {
    store.commit(mutationType, [mockRegionFilter1])
    store.commit(mutationType, [mockRegionFilter2])
    expect(store.state.advocates.regionFilters).toEqual([mockRegionFilter2])
  })

  it('sets the region filters with multiple filters', () => {
    store.commit(mutationType, [mockRegionFilter1, mockRegionFilter2])
    expect(store.state.advocates.regionFilters).toEqual([mockRegionFilter1, mockRegionFilter2])
  })

  it('unsets the region filters', () => {
    store.commit(mutationType, [])
    expect(store.state.advocates.regionFilters).toEqual([])
  })
})
