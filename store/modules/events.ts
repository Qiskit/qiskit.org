export default {
  state: {
    activeTab: 0,
    futureCommunityEvents: [],
    pastCommunityEvents: [],
    typeFilters: [],
    locationFilters: []
  },
  getters: {
    typeFilters (state) {
      return state.typeFilters
    },
    locationFilters (state) {
      return state.locationFilters
    },
    filteredEvents (state) {
      const {
        activeTab,
        futureCommunityEvents,
        pastCommunityEvents,
        typeFilters,
        locationFilters
      } = state
      const showFutureEvents = activeTab === 0
      const events = showFutureEvents ? futureCommunityEvents : pastCommunityEvents
      const noTypeFilters = typeFilters.length === 0
      const noLocationFilters = locationFilters.length === 0

      if (noTypeFilters && noLocationFilters) { return events }

      const eventsAfterApplyTypeFilter = filterBy(events, typeFilters, 'type')

      return filterBy(eventsAfterApplyTypeFilter, locationFilters, 'location')

      function filterBy (allEvents, selectedFilters, propToFilter) {
        const noFilters = selectedFilters.length === 0

        if (noFilters) { return allEvents }

        return allEvents.filter(event => selectedFilters.includes(event[propToFilter]))
      }
    }
  },
  mutations: {
    setEvents (state, payload) {
      const { events, eventsList } = payload

      state[events] = eventsList
    },
    setActiveTab (state, payload) {
      state.activeTab = payload
    },
    addFilter (state, payload) {
      const { filter, filterValue } = payload
      const filterIndex = state[filter].indexOf(filterValue)
      const noFilterFound = filterIndex === -1

      noFilterFound && state[filter].push(filterValue)
    },
    removeFilter (state, payload) {
      const { filter, filterValue } = payload
      const filterIndex = state[filter].indexOf(filterValue)
      const isFilterFound = filterIndex !== -1

      isFilterFound && state[filter].splice(filterIndex, 1)
    }
  },
  actions: {
    async fetchFutureEvents () {
      const eventsModule = await import('~/content/events/future-community-events.json')
      return eventsModule.default || []
    },
    async fetchPastEvents () {
      const eventsModule = await import('~/content/events/past-community-events.json')
      return eventsModule.default || []
    }
  }
}
