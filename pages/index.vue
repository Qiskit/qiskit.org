<template>
  <main class="landing-page">
    <QiskitBanner padding-x-none class="qiskit-runtime">
      <div class="bx--grid">
        <span class="banner__title">Start building with Qiskit Runtime.</span>
        <span class="banner__message">Leverage the new programming model and execution framework to efficiently execute circuits.</span>
        <AppLink
          :segment="{ action: `banner > qiskit-runtime` }"
          url="https://qiskit.org/documentation/partners/qiskit_ibm_runtime/"
        >
          Learn more
        </AppLink>
      </div>
    </QiskitBanner>
    <TheHeroMoment :version="qiskitVersion" />
    <TheQuickStart />
    <TheQiskitCapabilitiesSection />
    <TheLearnSection />
  </main>
</template>

<script lang="ts">
import axios from 'axios'
import { Component } from 'vue-property-decorator'
import QiskitBanner from '@qiskit-community/qiskit-vue/src/components/banner/Banner.vue'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return { title: 'Qiskit' }
  },
  layout: 'default-max',
  async asyncData () {
    const qiskitPackageInfoUrl = 'https://pypi.org/pypi/qiskit/json'
    const packageInfo = (await axios.get(qiskitPackageInfoUrl)).data
    return {
      qiskitVersion: packageInfo.info.version
    }
  },
  components: { QiskitBanner }
})
export default class LandingPage extends QiskitPage {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import "@carbon/colors/scss/colors";

.qiskit-banner.qiskit-runtime {
  background-color: $background-color-lighter !important;

  .banner__title {
    color: $cool-gray-100;
    font-weight: 600;
  }

  .banner__message {
    color: $cool-gray-100;
  }

  .app-link,
  .app-link:visited {
    color: $active-color !important;
    text-decoration: none;
    float: right;
  }
}
</style>
