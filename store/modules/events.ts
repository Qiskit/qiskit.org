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
    }
  },
  actions: {
    async fetchEvents () {
      const eventsModule = await import('~/content/events/events-previews.json')
      return eventsModule.default || []
    }
  }
}
