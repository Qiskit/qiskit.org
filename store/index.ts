import Vuex from 'vuex'
import Vue from 'vue'
import events from './modules/events'

Vue.use(Vuex)

export default () => new Vuex.Store({
  modules: { events }
})
