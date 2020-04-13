import createStore from '~/store'

describe('module events', () => {
  let store: any

  const unconferenceCampInAsia = {
    title: 'Fake event A',
    type: ['Unconference', 'Camp'],
    location: 'Asia Pacific'
  }
  const hackathonInEurope = {
    title: 'Fake event B',
    type: ['Unconference', 'Hackathon'],
    location: 'Europe'
  }
  const campInAfrica = {
    title: 'Fake event C',
    type: ['Camp'],
    location: 'Africa'
  }
  const hackathonInAmericas = {
    title: 'Fake event D',
    type: ['Camp', 'Hackathon'],
    location: 'Americas'
  }
  const unconferenceOnline = {
    title: 'Fake event E',
    type: ['Unconference'],
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
    it('get future events by default', () => {
      expect(store.getters.filteredEvents).toEqual(futureEvents)
    })

    it('get past events after setting the the active set to past', () => {
      store.commit('setActiveSet', 'past')
      expect(store.getters.filteredEvents).toEqual(pastEvents)
    })

    it('get active-set filtered by location', () => {
      store.commit('addFilter', {
        filter: 'locationFilters',
        filterValue: 'Asia Pacific'
      })
      expect(store.getters.filteredEvents).toEqual([unconferenceCampInAsia])
    })

    it('get active-set filtered by type', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: 'Hackathon'
      })
      expect(store.getters.filteredEvents).toEqual([hackathonInEurope])
    })

    it('get active-set filtered by type, considering events with several types', () => {
      store.commit('addFilter', {
        filter: 'typeFilters',
        filterValue: 'Camp'
      })
      expect(store.getters.filteredEvents).toEqual([unconferenceCampInAsia, campInAfrica])
    })

    it('get active-set filtered by type and location', () => {
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
