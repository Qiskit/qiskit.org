type Event = {
  type: String,
  title: String,
  image: String,
  place: String,
  date: String,
  to: String
}

export default {
  state: {
    items: [],
    typeFilters: []
  },
  getters: {
    eventsCount () {

    },
    filteredEvents (state) {
      const { items, typeFilters } = state
      const events = items
      let accFilteredEvents: Array<Event> = []

      if (!typeFilters.length) { return events }

      if (typeFilters) {
        typeFilters.forEach((typeFilter: String) => {
          const filteredEvents: Array<Event> = events.filter((event: Event) => event.type === typeFilter)
          accFilteredEvents = [...accFilteredEvents, ...filteredEvents]
        })
      }

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

      state[filter] = filters.filter((eventFilter: String) => eventFilter !== filterValue)
    },
    removeFilter (state, payload) {
      const { filter, filterValue } = payload
      const filters = state[filter]

      state[filter] = [...filters, filterValue]
    }
  },
  actions: {
    async fetchEvents () {
      const eventsModule = await import('~/content/events/events-previews.json')
      return eventsModule.default || []
    }
  }
}
