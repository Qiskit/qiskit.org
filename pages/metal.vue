<template>
  <div class="metal-page">
    <header>
      Metal
    </header>
    <IntroSection />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import IntroSection from '~/components/metal/IntroSection.vue'

@Component({
  components: { IntroSection },
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
