import Vue from 'vue'
import CarbonComponentsVue from '@carbon/vue'
import '~/assets/scss/carbon/components.scss'
import { CarbonIconsVue } from '@carbon/icons-vue'
import Calendar20 from '@carbon/icons-vue/lib/calendar/20'
import Map20 from '@carbon/icons-vue/lib/map/20'
import ArrowRight20 from '@carbon/icons-vue/lib/arrow--right/20'
import ArrowRight16 from '@carbon/icons-vue/lib/arrow--right/16'
import Menu20 from '@carbon/icons-vue/lib/menu/20'
import LogoTwitter20 from '@carbon/icons-vue/lib/logo--twitter/20'
import LogoSlack20 from '@carbon/icons-vue/lib/logo--slack/20'
import LogoYouTube20 from '@carbon/icons-vue/lib/logo--youtube/20'
import LogoMedium20 from '@carbon/icons-vue/lib/logo--medium/20'

Vue.use(CarbonComponentsVue)
Vue.use(CarbonIconsVue, {
  components: {
    Calendar20,
    Map20,
    ArrowRight20,
    ArrowRight16,
    Menu20,
    LogoTwitter20,
    LogoSlack20,
    LogoYouTube20,
    LogoMedium20
  }
})
