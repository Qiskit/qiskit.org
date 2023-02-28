import Vue from "vue";
import CarbonComponentsVue from "@carbon/vue";
import { CarbonIconsVue } from "@carbon/icons-vue";
import Calendar20 from "@carbon/icons-vue/lib/calendar/20";
import CheckmarkFilled16 from "@carbon/icons-vue/lib/checkmark--filled/16";
import PendingFilled16 from "@carbon/icons-vue/lib/pending--filled/16";
import ErrorFilled16 from "@carbon/icons-vue/lib/error--filled/16";
import Time20 from "@carbon/icons-vue/lib/time/20";
import Education20 from "@carbon/icons-vue/lib/education/20";
import ArrowLeft16 from "@carbon/icons-vue/lib/arrow--left/16";
import LogoTwitter20 from "@carbon/icons-vue/lib/logo--twitter/20";
import LogoYouTube20 from "@carbon/icons-vue/lib/logo--youtube/20";
import LogoMedium20 from "@carbon/icons-vue/lib/logo--medium/20";
import LogoGitHub32 from "@carbon/icons-vue/lib/logo--github/32";
import Copy16 from "@carbon/icons-vue/lib/copy/16";
import StarFilled16 from "@carbon/icons-vue/lib/star--filled/16";

Vue.use(CarbonComponentsVue);
Vue.use(CarbonIconsVue, {
  components: {
    Calendar20,
    Copy16,
    Time20,
    Education20,
    ArrowLeft16,
    LogoTwitter20,
    LogoYouTube20,
    LogoMedium20,
    LogoGitHub32,
    CheckmarkFilled16,
    ErrorFilled16,
    PendingFilled16,
    StarFilled16,
  },
});
