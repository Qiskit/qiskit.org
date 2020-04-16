const COMMUNITY_EVENT_TYPES = Object.freeze({
  hackathon: 'Hackathon',
  camp: 'Camp',
  unconference: 'Unconference',
  industryEvent: 'Industry Event',
  workshop: 'Workshop',
  talks: 'Talks',
  online: 'Online'
} as const)

const WORLD_LOCATIONS = Object.freeze({
  americas: 'Americas',
  asiaPacific: 'Asia Pacific',
  europe: 'Europe',
  africa: 'Africa',
  // TODO: Remove when "Online" is under "Type of Event" in Airtable. Right now
  // it is a region but the event squad expressed its will of "Online" being an
  // event type.
  //
  // See also:
  // https://github.com/Qiskit/qiskit.org/issues/526
  online: 'Online'
} as const)

type CommunityEventSet = 'past'|'upcoming'
type WorldLocation = typeof WORLD_LOCATIONS[keyof typeof WORLD_LOCATIONS]
type CommunityEventType = typeof COMMUNITY_EVENT_TYPES[keyof typeof COMMUNITY_EVENT_TYPES]

type CommunityEvent = {
  types: CommunityEventType[],
  title: string,
  image: string,
  // TODO: We need to clarify if region and place have default values and what
  // these are. Place and location may seem mandatory but human error is
  // possible. In that case, what's the value of place and location?
  //
  // See also:
  // https://github.com/Qiskit/qiskit.org/issues/527
  place: string|null,
  location: WorldLocation|null,
  date: string,
  to: string
}

const WORLD_LOCATION_OPTIONS = Object.freeze([
  WORLD_LOCATIONS.americas,
  WORLD_LOCATIONS.asiaPacific,
  WORLD_LOCATIONS.europe,
  WORLD_LOCATIONS.africa
])
const COMMUNITY_EVENT_TYPE_OPTIONS = Object.freeze([
  COMMUNITY_EVENT_TYPES.hackathon,
  COMMUNITY_EVENT_TYPES.camp,
  COMMUNITY_EVENT_TYPES.unconference,
  COMMUNITY_EVENT_TYPES.industryEvent,
  COMMUNITY_EVENT_TYPES.workshop,
  COMMUNITY_EVENT_TYPES.talks,
  COMMUNITY_EVENT_TYPES.online
])

export {
  CommunityEvent,
  CommunityEventType,
  WorldLocation,
  COMMUNITY_EVENT_TYPES,
  WORLD_LOCATION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS
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
          const propValue = event[propToFilter] || []
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
