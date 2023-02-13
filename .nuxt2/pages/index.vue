<template>
  <main class="landing-page">
    <TheHeroMoment :version="qiskitVersion" />
    <TheQuickStart />
    <TheQiskitCapabilitiesSection />
    <TheLearnSection />
  </main>
</template>

<script setup lang="ts">
import axios from 'axios'
import QiskitPage from '~/components/logic/QiskitPage.vue'

definePageMeta({
  layout: 'default-max'
})

useHead({
  title: 'Qiskit'
})

// TODO: Refactor async data fetching in pages
// @Component({
//   async asyncData () {
//     const qiskitPackageInfoUrl = 'https://pypi.org/pypi/qiskit/json'
//     const packageInfo = (await axios.get(qiskitPackageInfoUrl)).data
//     return {
//       qiskitVersion: packageInfo.info.version
//     }
//   }
// })
// TODO: Refactor "logic" pages
// export default class LandingPage extends QiskitPage {
//   routeName = 'qiskit-landing-page'
// }
</script>
