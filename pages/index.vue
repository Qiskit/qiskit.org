<template>
  <main class="landing-page">
    <TheHeroMoment :version="qiskitVersion" />
    <TheQuickStart />
    <TheQiskitCapabilitiesSection />
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
  layout: 'default-max',
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
