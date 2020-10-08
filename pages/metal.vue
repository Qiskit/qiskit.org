<template>
  <div class="metal-page">
    <IntroSection />
    <CapabilitiesSection />
    <FeaturesSection />
    <BuildingSection />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import IntroSection from '~/components/metal/IntroSection.vue'
import FeaturesSection from '~/components/metal/FeaturesSection.vue'
import BuildingSection from '~/components/metal/BuildingSection.vue'
import CapabilitiesSection from '~/components/metal/CapabilitiesSection.vue'

@Component({
  components: { IntroSection, CapabilitiesSection, FeaturesSection, BuildingSection },
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
