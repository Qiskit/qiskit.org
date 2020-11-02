<template>
  <div class="advocates-page">
    <ThePageHeader>
      Connect with the
      <TypewriterEffect
        :values="[
          'enthusiasts',
          'advocates',
          'mentors',
          'experts'
        ]"
      /><br>
      from within the Qiskit community
    </ThePageHeader>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import TypewriterEffect from '~/components/ui/TypewriterEffect.vue'

@Component({
  components: {
    ThePageHeader,
    TypewriterEffect
  },

  head () {
    return {
      title: 'Qiskit Advocates'
    }
  }
})

export default class extends QiskitPage {
  routeName = 'advocates'
}
</script>

<style lang="scss" scoped>
.advocates-page {
  background-color: $white;
}
</style>
