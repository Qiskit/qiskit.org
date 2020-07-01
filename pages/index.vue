<template>
  <main class="element landing-page">
    <TheHeroMoment
      class="landing-page__hero-moment"
      :version="qiskitVersion"
    />
    <TheFeatures />
    <TheQuickStart />
    <TheLearnSection />
  </main>
</template>

<script lang="ts">
import axios from 'axios'

import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheHeroMoment from '~/components/landing/TheHeroMoment/index.vue'
import TheFeatures from '~/components/landing/TheFeatures/index.vue'
import TheQuickStart from '~/components/landing/TheQuickStart/index.vue'
import TheLearnSection from '~/components/landing/TheLearnSection/index.vue'

@Component({
  components: {
    TheHeroMoment,
    TheFeatures,
    TheQuickStart,
    TheLearnSection
  },
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
export default class extends QiskitPage {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import '~/assets/scss/element.scss';
@import '~/assets/scss/blocks/landing-page.scss';
</style>
