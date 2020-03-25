type Event = {
  type: String,
  title: String,
  image: String,
  place: String,
  location: String,
  date: String,
  to: String
}

export default {
  state: {
    items: [],
    typeFilters: [],
    locationFilters: []
  },
  getters: {
    eventsCount () {

    },
    getTypeFilters (state) {
      return state.typeFilters
    },
    getLocationFilters (state) {
      return state.locationFilters
    },
    filteredEvents (state) {
      const { items, typeFilters, locationFilters } = state
      const events = items

      if (!typeFilters.length && !locationFilters.length) { return events }

      const applyFiltersToEvents = (allEvents, selectedFilters, propToFilter) => {
        let accFilteredEvents: Array<Event> = []

        selectedFilters.forEach((typeFilter: String) => {
          const filteredEvents: Array<Event> = allEvents.filter((event: Event) => event[propToFilter] === typeFilter)
          accFilteredEvents = [...accFilteredEvents, ...filteredEvents]
        })

        return accFilteredEvents
      }

      if (!locationFilters.length && typeFilters.length) {
        return applyFiltersToEvents(events, typeFilters, 'type')
      }

      if (!typeFilters.length && locationFilters.length) {
        return applyFiltersToEvents(events, locationFilters, 'location')
      }

      const eventsAfterApplyTypeFilter = applyFiltersToEvents(events, typeFilters, 'type')

      return applyFiltersToEvents(eventsAfterApplyTypeFilter, locationFilters, 'location')
    }
  },
  mutations: {
    setEvents (state, events) {
      state.items = events
    },
    addFilter (state, payload) {
      const { filter, filterValue } = payload
      const filters = state[filter]

      state[filter] = [...filters, filterValue]
    },
    removeFilter (state, payload) {
      const { filter, filterValue } = payload
      const filters = state[filter]

      state[filter] = filters.filter((eventFilter: String) => eventFilter !== filterValue)
    }
  },
  actions: {
    async fetchEvents () {
      const eventsModule = await import('~/content/events/events-previews.json')
      return eventsModule.default || []
    }
  }
}
