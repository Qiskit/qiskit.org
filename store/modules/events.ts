type CommunityEventSet = 'past'|'upcoming'
type WorldLocation = 'Americas'|'Asia Pacific'|'Europe'|'Africa'|'TBD'|'Online'
type CommunityEventType = 'Hackathon'|'Camp'|'Unconference'|'Industry Event'|'Workshop'|'Talks'|'Virtual Event'

type CommunityEvent = {
  types: CommunityEventType[],
  title: string,
  image: string,
  place: string,
  location: WorldLocation,
  date: string,
  to: string
}

type CommunityEventTypes = {
  [key: string]: CommunityEventType
}

const COMMUNITY_EVENT_TYPES: CommunityEventTypes = {
  hackathon: 'Hackathon',
  camp: 'Camp',
  unconference: 'Unconference',
  industryEvent: 'Industry Event',
  workshop: 'Workshop',
  talks: 'Talks',
  virtualEvent: 'Virtual Event'
}

const LOCATION_CATEGORIES: WorldLocation[] = ['Americas', 'Asia Pacific', 'Europe', 'Africa', 'Online']
const TYPE_CATEGORIES: CommunityEventType[] = [
  COMMUNITY_EVENT_TYPES.hackathon,
  COMMUNITY_EVENT_TYPES.camp,
  COMMUNITY_EVENT_TYPES.unconference,
  COMMUNITY_EVENT_TYPES.industryEvent,
  COMMUNITY_EVENT_TYPES.workshop,
  COMMUNITY_EVENT_TYPES.talks,
  COMMUNITY_EVENT_TYPES.virtualEvent
]

export {
  CommunityEvent,
  CommunityEventType,
  WorldLocation,
  LOCATION_CATEGORIES,
  TYPE_CATEGORIES,
  COMMUNITY_EVENT_TYPES
}

export default {
  state () {
    return {
      activeSet: 'upcoming',
      upcomingCommunityEvents: [],
      pastCommunityEvents: [],
      typeFilters: [],
      locationFilters: []
    }
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

      const eventsAfterApplyTypeFilter = filterBy(events, typeFilters, 'types')

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
