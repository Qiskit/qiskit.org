<template>
  <div class="advocates-page">
    <TheAdvocatesHeader />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheAdvocatesHeader from '~/components/advocates/TheAdvocatesHeader.vue'

@Component({
  components: {
    TheAdvocatesHeader
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
