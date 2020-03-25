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
      let accFilteredEvents: Array<Event> = []

      if (!typeFilters.length && !locationFilters.length) { return events }

      if (!locationFilters.length && typeFilters.length) {
        typeFilters.forEach((typeFilter: String) => {
          const filteredEvents: Array<Event> = events.filter((event: Event) => event.type === typeFilter)
          accFilteredEvents = [...accFilteredEvents, ...filteredEvents]
        })

        return accFilteredEvents
      }

      if (!typeFilters.length && locationFilters.length) {
        locationFilters.forEach((locationFilter: String) => {
          const filteredEvents: Array<Event> = events.filter((event: Event) => event.location === locationFilter)
          accFilteredEvents = [...accFilteredEvents, ...filteredEvents]
        })
        return accFilteredEvents
      }

      typeFilters.forEach((typeFilter: String) => {
        locationFilters.forEach((locationFilter: String) => {
          const filteredEvents: Array<Event> = events.filter((event: Event) => event.type === typeFilter && event.location === locationFilter)
          accFilteredEvents = [...accFilteredEvents, ...filteredEvents]
        })
      })

      return accFilteredEvents
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
