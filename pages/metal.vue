<template>
  <div class="metal-page">
    <header>
      Metal
    </header>
    <IntroSection />
    <FeaturesSection />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import IntroSection from '~/components/metal/IntroSection.vue'
import FeaturesSection from '~/components/metal/FeaturesSection.vue'

@Component({
  components: { IntroSection, FeaturesSection },
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
