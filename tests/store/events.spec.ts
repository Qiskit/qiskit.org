import createStore from '~/store'

describe('module events', () => {
  let store: any

  const unconferenceCampInAsia = {
    title: 'Fake event A',
    types: ['Unconference', 'Camp'],
    location: 'Asia Pacific'
  }
  const hackathonInEurope = {
    title: 'Fake event B',
    types: ['Unconference', 'Hackathon'],
    location: 'Europe'
  }
  const campInAfrica = {
    title: 'Fake event C',
    types: ['Camp'],
    location: 'Africa'
  }
  const hackathonInAmericas = {
    title: 'Fake event D',
    types: ['Camp', 'Hackathon'],
    location: 'Americas'
  }
  const unconferenceOnline = {
    title: 'Fake event E',
    types: ['Unconference'],
    location: 'Online'
  }

  const futureEvents = [unconferenceCampInAsia, hackathonInEurope, campInAfrica]
  const pastEvents = [hackathonInAmericas, unconferenceOnline]

  beforeEach(() => {
    store = createStore()
    store.commit('setEvents', {
      events: 'upcomingCommunityEvents',
      eventsSet: futureEvents
    })
    store.commit('setEvents', {
      events: 'pastCommunityEvents',
      eventsSet: pastEvents
    })
  })

  describe('filteredEvents', () => {
    it('gets future events by default', () => {
      expect(store.getters.filteredEvents).toEqual(futureEvents)
    })

    it('gets past events after setting the the active set to past', () => {
      store.commit('setActiveSet', 'past')
      expect(store.getters.filteredEvents).toEqual(pastEvents)
    })

    it('gets active-set filtered by location', () => {
      store.commit('addFilter', {
        filter: 'locationFilters',
        filterValue: 'Asia Pacific'
      })
      expect(store.getters.filteredEvents).toEqual([unconferenceCampInAsia])
    })

    it('gets active-set filtered by type', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: 'Hackathon'
      })
      expect(store.getters.filteredEvents).toEqual([hackathonInEurope])
    })

    it('gets active-set filtered by type, considering events with several types', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: 'Camp'
      })
      expect(store.getters.filteredEvents).toEqual([unconferenceCampInAsia, campInAfrica])
    })

    it('gets active-set filtered by type and location', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: 'Camp'
      })
      store.commit('addFilter', {
        filter: 'locationFilters',
        filterValue: 'Africa'
      })
      expect(store.getters.filteredEvents).toEqual([campInAfrica])
    })
  })
})
