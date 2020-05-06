import Vue from 'vue'
import CarbonComponentsVue from '@carbon/vue'
import '~/assets/scss/carbon/components.scss'
import { CarbonIconsVue } from '@carbon/icons-vue'
import Calendar20 from '@carbon/icons-vue/lib/calendar/20'
import Map20 from '@carbon/icons-vue/lib/map/20'
import ArrowRight20 from '@carbon/icons-vue/lib/arrow--right/20'
import Menu20 from '@carbon/icons-vue/lib/menu/20'

Vue.use(CarbonComponentsVue)
Vue.use(CarbonIconsVue, {
  components: {
    Calendar20,
    Map20,
    ArrowRight20,
    Menu20
  }
})
