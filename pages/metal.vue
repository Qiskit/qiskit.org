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
import TheDarkHeader from '~/components/metal/TheDarkHeader.vue'
import IntroSection from '~/components/metal/IntroSection.vue'
import FeaturesSection from '~/components/metal/FeaturesSection.vue'
import BuildingSection from '~/components/metal/BuildingSection.vue'
import CapabilitiesSection from '~/components/metal/CapabilitiesSection.vue'
import EarlyAccessSection from '~/components/metal/EarlyAccessSection.vue'

@Component({
  components: { TheDarkHeader, IntroSection, CapabilitiesSection, FeaturesSection, EarlyAccessSection, BuildingSection },
  layout: 'metal',
  head () {
    return {
      title: 'Metal'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'metal'
}
</script>

<style lang="scss" scoped>
</style>
