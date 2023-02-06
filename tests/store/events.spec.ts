import Vue from 'vue'
import Vuex from 'vuex'
import storeOptions from './_store-options'
import { COMMUNITY_EVENT_TYPES, WORLD_REGIONS } from '~/types/events'

Vue.use(Vuex)

describe('module events', () => {
  let store: any

  const workshopCampInAsia = {
    title: 'Fake event A',
    types: [COMMUNITY_EVENT_TYPES.workshop, COMMUNITY_EVENT_TYPES.camp],
    regions: [WORLD_REGIONS.asiaPacific]
  }
  const hackathonInEurope = {
    title: 'Fake event B',
    types: [COMMUNITY_EVENT_TYPES.talks, COMMUNITY_EVENT_TYPES.hackathon],
    regions: [WORLD_REGIONS.europe, WORLD_REGIONS.online]
  }
  const campInAfrica = {
    title: 'Fake event C',
    types: [COMMUNITY_EVENT_TYPES.camp],
    regions: [WORLD_REGIONS.africa]
  }
  const hackathonInSouthAmerica = {
    title: 'Fake event D',
    types: [COMMUNITY_EVENT_TYPES.camp, COMMUNITY_EVENT_TYPES.hackathon],
    regions: [WORLD_REGIONS.southAmerica]
  }
  const talksOnline = {
    title: 'Fake event E',
    types: [COMMUNITY_EVENT_TYPES.talks],
    regions: [WORLD_REGIONS.online]
  }

  const futureEvents = [workshopCampInAsia, hackathonInEurope, campInAfrica, talksOnline]
  const pastEvents = [hackathonInSouthAmerica]

  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store(storeOptions())
    store.commit('setEvents', {
      events: 'upcomingCommunityEvents',
      eventsSet: futureEvents
    })
    store.commit('setEvents', {
      events: 'pastCommunityEvents',
      eventsSet: pastEvents
    })
  })

  describe('filteredEvents', () => {
    it('gets future events by default', () => {
      expect(store.getters.filteredEvents).toEqual(futureEvents)
    })

    it('gets past events after setting the the active set to past', () => {
      store.commit('setActiveSet', 'past')
      expect(store.getters.filteredEvents).toEqual(pastEvents)
    })

    it('gets active-set filtered by region', () => {
      store.commit('addFilter', {
        filter: 'regionFilters',
        filterValue: WORLD_REGIONS.asiaPacific
      })
      expect(store.getters.filteredEvents).toEqual([workshopCampInAsia])
    })

    it('gets active-set filtered by region, considering events with several regions', () => {
      store.commit('addFilter', {
        filter: 'regionFilters',
        filterValue: WORLD_REGIONS.online
      })
      expect(store.getters.filteredEvents).toEqual([hackathonInEurope, talksOnline])
    })

    it('gets active-set filtered by type', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: COMMUNITY_EVENT_TYPES.hackathon
      })
      expect(store.getters.filteredEvents).toEqual([hackathonInEurope])
    })

    it('gets active-set filtered by type, considering events with several types', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: COMMUNITY_EVENT_TYPES.camp
      })
      expect(store.getters.filteredEvents).toEqual([workshopCampInAsia, campInAfrica])
    })

    it('gets active-set filtered by type and region', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: COMMUNITY_EVENT_TYPES.camp
      })
      store.commit('addFilter', {
        filter: 'regionFilters',
        filterValue: WORLD_REGIONS.africa
      })
      expect(store.getters.filteredEvents).toEqual([campInAfrica])
    })

    it('can update entire active-set, given a list of filters', () => {
      const regionsList = [WORLD_REGIONS.northAmerica, WORLD_REGIONS.africa, WORLD_REGIONS.europe]
      // add initial region filter
      store.commit('addFilter', {
        filter: 'regionFilters',
        filterValue: WORLD_REGIONS.africa
      })
      expect(store.getters.regionFilters).toEqual([WORLD_REGIONS.africa])

      // update entire active-set
      store.commit('updateFilterSet', {
        filter: 'regionFilters',
        filterValues: regionsList
      })
      expect(store.getters.regionFilters).toEqual(regionsList)
    })
  })
})
