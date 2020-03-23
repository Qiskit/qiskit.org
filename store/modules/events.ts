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
    items: []
  },
  getters: {
    eventsCount () {

    }
  },
  mutations: {
    setEvents (state, events) {
      state.items = events
    }
  },
  actions: {
    async fetchEvents () {
      const eventsModule = await import('~/content/events/events-previews.json')
      return eventsModule.default || []
    }
  }
}
