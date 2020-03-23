import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {
      events: []
    },
    getters: {
      eventsCount () {

      }
    },
    actions: {
      fetchEvents () {

      }
    },
    mutations: {
      setEvents (state, events) {
        state.events = events
      }
    }
  })
}

export default store
