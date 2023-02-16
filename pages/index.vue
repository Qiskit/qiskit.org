<template>
  <!-- TODO: review if class is needed or can be deleted -->
  <main class="landing-page">
    Index page
    <!-- TODO: Integrate components -->
    <!-- <TheHeroMoment :version="qiskitVersion" /> -->
    <!-- <TheQuickStart /> -->
    <!-- <TheQiskitCapabilitiesSection /> -->
    <!-- <TheLearnSection /> -->
  </main>
</template>

<script setup lang="ts">
// TODO: Integrate old code
// import axios from 'axios'

definePageMeta({
  layout: "default-max",
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit",
});

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
// TODO: Refactor tracking
// export default class LandingPage {
//   routeName = 'qiskit-landing-page'
// }
</script>
