<template>
  <div class="metal-page">
    <header>
      Metal
    </header>
    <FeaturesSection />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import FeaturesSection from '~/components/metal/FeaturesSection.vue'

@Component({
  components: { FeaturesSection },
  layout: 'metal',
  head () {
    return {
      title: 'Metal'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'metal'

  automationCard = {
    title: 'Automation',
    description: 'Metal is designed with the vision to seamlessly automate classical and quantum analysis. Choose from a list of available tools or connect your own through a flexible plug-in interface that allows you to orchestrate device design from within Metal. When you are ready, with the click of a button, export the design for fabrication, and you are done.',
    image: '/images/metal/automation.png'
  }
}
</script>

<style lang="scss" scoped>
</style>
