<template>
  <div class="metal-page">
    <TheDarkHeader />
    <IntroSection />
    <CapabilitiesSection />
    <FeaturesSection />
    <BuildingSection />
    <JoinUsSection />
  </div>
</template>

<script setup lang="ts">
import QiskitPage from '~/components/logic/QiskitPage.vue'

definePageMeta({
  layout: 'metal'
})

useHead({
  title: 'Metal'
})

// TODO: Refactor "logic" pages
// export default class MetalPage extends QiskitPage {
//   routeName = 'metal'
// }
</script>
