<template>
  <main class="landing-page">
    <TheHeroMoment :version="qiskitVersion" />
    <TheFeatures />
    <TheQuickStart />
    <TheLearnSection />
  </main>
</template>

<script lang="ts">
import axios from 'axios'

import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return { title: 'Qiskit' }
  },
  async asyncData () {
    const qiskitPackageInfoUrl = 'https://pypi.org/pypi/qiskit/json'
    const packageInfo = (await axios.get(qiskitPackageInfoUrl)).data
    return {
      qiskitVersion: packageInfo.info.version
    }
  }
})
export default class LandingPage extends QiskitPage {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import '~/assets/scss/blocks/copy.scss';

.landing-page {
  background-color: white;
}
</style>
