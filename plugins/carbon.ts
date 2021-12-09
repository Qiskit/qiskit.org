import Vue from 'vue'
import CarbonComponentsVue from '@carbon/vue'
import { CarbonIconsVue } from '@carbon/icons-vue'
import Calendar20 from '@carbon/icons-vue/lib/calendar/20'
import Time20 from '@carbon/icons-vue/lib/time/20'
import Education20 from '@carbon/icons-vue/lib/education/20'
import Map20 from '@carbon/icons-vue/lib/map/20'
import ArrowRight20 from '@carbon/icons-vue/lib/arrow--right/20'
import ArrowRight16 from '@carbon/icons-vue/lib/arrow--right/16'
import ArrowLeft16 from '@carbon/icons-vue/lib/arrow--left/16'
import ArrowDown16 from '@carbon/icons-vue/lib/arrow--down/16'
import Menu20 from '@carbon/icons-vue/lib/menu/20'
import Close20 from '@carbon/icons-vue/lib/close/20'
import LogoTwitter20 from '@carbon/icons-vue/lib/logo--twitter/20'
import LogoSlack20 from '@carbon/icons-vue/lib/logo--slack/20'
import LogoYouTube20 from '@carbon/icons-vue/lib/logo--youtube/20'
import LogoMedium20 from '@carbon/icons-vue/lib/logo--medium/20'
import LogoGitHub32 from '@carbon/icons-vue/lib/logo--github/32'
import Launch16 from '@carbon/icons-vue/lib/launch/16'
import ErrorOutline16 from '@carbon/icons-vue/lib/error--outline/16'
import Copy16 from '@carbon/icons-vue/lib/copy/16'

Vue.use(CarbonComponentsVue)
Vue.use(CarbonIconsVue, {
  components: {
    Calendar20,
    Copy16,
    Time20,
    Education20,
    Map20,
    ArrowRight20,
    ArrowRight16,
    ArrowLeft16,
    ArrowDown16,
    Menu20,
    Close20,
    LogoTwitter20,
    LogoSlack20,
    LogoYouTube20,
    LogoMedium20,
    LogoGitHub32,
    Launch16,
    ErrorOutline16
  }
})
