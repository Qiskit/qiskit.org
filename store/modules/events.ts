const COMMUNITY_EVENT_TYPES = Object.freeze({
  hackathon: 'Hackathon',
  camp: 'Camp',
  unconference: 'Unconference',
  industryEvent: 'Industry Event',
  workshop: 'Workshop',
  talks: 'Talks',
  online: 'Online'
} as const)

const WORLD_REGIONS = Object.freeze({
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
  online: 'Online',
  tbd: 'TBD'
} as const)

type CommunityEventSet = 'past'|'upcoming'
type WorldRegion = typeof WORLD_REGIONS[keyof typeof WORLD_REGIONS]
type CommunityEventType = typeof COMMUNITY_EVENT_TYPES[keyof typeof COMMUNITY_EVENT_TYPES]

type CommunityEvent = {
  types: CommunityEventType[],
  title: string,
  image: string,
  // TODO: We need to clarify if region and place have default values and what
  // these are. Place and region may seem mandatory but human error is
  // possible. In that case, what's the value of place and region?
  //
  // See also:
  // https://github.com/Qiskit/qiskit.org/issues/527
  location: string,
  region: WorldRegion,
  date: string,
  to: string
}

type EventMultiSelectOption = {
  label: string,
  value: string,
  name: string
}

type EventPayload = {
  events: string,
  eventsSet: CommunityEvent[]
}

type FilterPayload = {
  filter: string,
  filterValue: string
}

type FilterSetPayload = {
  filter: string,
  filterValues: string[]
}

const WORLD_REGION_OPTIONS = Object.freeze([
  WORLD_REGIONS.americas,
  WORLD_REGIONS.asiaPacific,
  WORLD_REGIONS.europe,
  WORLD_REGIONS.africa
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
  WorldRegion,
  COMMUNITY_EVENT_TYPES,
  WORLD_REGIONS,
  WORLD_REGION_OPTIONS,
  COMMUNITY_EVENT_TYPE_OPTIONS,
  EventMultiSelectOption
}

type State = {
  activeSet: string,
  [upcomingCommunityEvents: string]: any,
  pastCommunityEvents: CommunityEvent[],
  typeFilters: string[],
  regionFilters: string[]
}

export default {
  state (): State {
    return {
      activeSet: 'upcoming',
      upcomingCommunityEvents: [],
      pastCommunityEvents: [],
      typeFilters: [],
      regionFilters: []
    }
  },
  getters: {
    typeFilters (state: State) {
      return state.typeFilters
    },
    regionFilters (state: State) {
      return state.regionFilters
    },
    filteredEvents (state: State) {
      const {
        activeSet,
        upcomingCommunityEvents,
        pastCommunityEvents,
        typeFilters,
        regionFilters
      } = state
      const showUpcomingEvents = activeSet === 'upcoming'
      const events = showUpcomingEvents ? upcomingCommunityEvents : pastCommunityEvents
      const noTypeFilters = typeFilters.length === 0
      const noRegionFilters = regionFilters.length === 0

      if (noTypeFilters && noRegionFilters) { return events }

      const eventsAfterApplyTypeFilter = filterBy(events, typeFilters, 'types')

      return filterBy(eventsAfterApplyTypeFilter, regionFilters, 'region')

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
    setEvents (state: State, payload: EventPayload) {
      const { events, eventsSet } = payload

      state[events] = eventsSet
    },
    setActiveSet (state: State, payload: CommunityEventSet) {
      state.activeSet = payload
    },
    addFilter (state: State, payload: FilterPayload) {
      const { filter, filterValue } = payload
      const filterIndex = state[filter].indexOf(filterValue)
      const noFilterFound = filterIndex === -1

      noFilterFound && state[filter].push(filterValue)
    },
    updateFilterSet (state: State, payload: FilterSetPayload) {
      const { filter, filterValues } = payload

      state[filter] = filterValues
    },
    removeFilter (state: State, payload: FilterPayload) {
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
