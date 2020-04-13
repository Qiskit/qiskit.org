type CommunityEventSet = 'past'|'upcoming'
type WorldLocation = 'Americas'|'Asia Pacific'|'Europe'|'Africa'|'TBD'|'Online'
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

const LOCATION_CATEGORIES: WorldLocation[] = ['Americas', 'Asia Pacific', 'Europe', 'Africa', 'Online']

export { CommunityEvent, CommunityEventType, WorldLocation, LOCATION_CATEGORIES }

export default {
  state: {
    activeSet: 'upcoming',
    upcomingCommunityEvents: [],
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
        activeSet,
        upcomingCommunityEvents,
        pastCommunityEvents,
        typeFilters,
        locationFilters
      } = state
      const showUpcomingEvents = activeSet === 'upcoming'
      const events = showUpcomingEvents ? upcomingCommunityEvents : pastCommunityEvents
      const noTypeFilters = typeFilters.length === 0
      const noLocationFilters = locationFilters.length === 0

      if (noTypeFilters && noLocationFilters) { return events }

      const eventsAfterApplyTypeFilter = filterBy(events, typeFilters, 'type')

      return filterBy(eventsAfterApplyTypeFilter, locationFilters, 'location')

      function filterBy (allEvents: CommunityEvent[], selectedFilters: string[], propToFilter: keyof CommunityEvent) {
        const noFilters = selectedFilters.length === 0

        if (noFilters) { return allEvents }

        return allEvents.filter((event) => {
          const propValue = event[propToFilter]
          const valueArray = Array.isArray(propValue) ? propValue : [propValue]
          return valueArray.some(value => selectedFilters.includes(value))
        })
      }
    }
  },
  mutations: {
    setEvents (state, payload) {
      const { events, eventsSet } = payload

      state[events] = eventsSet
    },
    setActiveSet (state, payload: CommunityEventSet) {
      state.activeSet = payload
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
    async fetchUpcomingEvents () {
      const eventsModule = await import('~/content/events/upcoming-community-events.json')
      return eventsModule.default || []
    },
    async fetchPastEvents () {
      const eventsModule = await import('~/content/events/past-community-events.json')
      return eventsModule.default || []
    }
  }
}
