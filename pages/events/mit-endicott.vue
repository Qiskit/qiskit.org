<template>
  <main class="mit-endicott-page">
    <!-- TODO add sections here -->
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'MIT Endicott Event'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'mit-endicott'
}
</script>

<style lang="scss" scoped>
.mit-endicott-page {
  color: $white-text-01;
}
</style>
