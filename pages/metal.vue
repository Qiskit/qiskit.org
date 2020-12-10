<template>
  <div class="metal-page">
    <TheDarkHeader />
    <IntroSection />
    <CapabilitiesSection />
    <FeaturesSection />
    <BuildingSection />
    <EarlyAccessSection />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  layout: 'metal',
  head () {
    return {
      title: 'Metal'
    }
  }
})
export default class MetalPage extends QiskitPage {
  routeName = 'metal'
}
</script>

<style lang="scss" scoped>
</style>
