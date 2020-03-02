import Vue from 'vue'
import 'carbon-components/css/carbon-components.css'
import CarbonComponentsVue from '@carbon/vue'
import { CarbonIconsVue } from '@carbon/icons-vue'
import Calendar32 from '@carbon/icons-vue/lib/calendar/32'
import Map32 from '@carbon/icons-vue/lib/map/32'

Vue.use(CarbonComponentsVue)
Vue.use(CarbonIconsVue, {
  components: {
    Calendar32,
    Map32
  }
})
