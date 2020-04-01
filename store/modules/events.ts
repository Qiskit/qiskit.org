export default {
  state: {
    communityEvents: [],
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
      const { communityEvents, typeFilters, locationFilters } = state
      const events = communityEvents
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
    setEvents (state, events) {
      state.communityEvents = events
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
    async fetchEvents () {
      const eventsModule = await import('~/content/events/events-previews.json')
      return eventsModule.default || []
    }
  }
}
