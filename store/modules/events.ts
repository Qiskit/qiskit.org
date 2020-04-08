type CommunityEventsToShowByDate = 'past'|'upcoming'
type WorldLocation = 'America'|'Asia'|'Europe'|'Africa'|'TBD'
type CommunityEventType = 'Hackathon'|'Camp'|'Unconference'|'Conference'

type CommunityEvent = {
  type: CommunityEventType,
  title: string,
  image: string,
  place: string,
  location: WorldLocation,
  date: string,
  to: string
}

export { CommunityEvent, CommunityEventType, WorldLocation }

export default {
  state: {
    communityEventsShowed: 'upcoming',
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
        communityEventsShowed,
        futureCommunityEvents,
        pastCommunityEvents,
        typeFilters,
        locationFilters
      } = state
      const showFutureEvents = communityEventsShowed === 'upcoming'
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
    setCommunityEventsShowed (state, payload) {
      state.communityEventsShowed = payload
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
