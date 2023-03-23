import Vue from "vue";
import CarbonComponentsVue from "@carbon/vue";
import { CarbonIconsVue } from "@carbon/icons-vue";
import ArrowLeft16 from "@carbon/icons-vue/lib/arrow--left/16";
import LogoGitHub32 from "@carbon/icons-vue/lib/logo--github/32";
import Copy16 from "@carbon/icons-vue/lib/copy/16";

Vue.use(CarbonComponentsVue);
Vue.use(CarbonIconsVue, {
  components: {
    Copy16,
    ArrowLeft16,
    LogoGitHub32,
  },
});
