<template>
  <div class="overview-page">
    <PageHeader>
      The most
      <span class="page-header__relevant-word">
        feature rich
      </span><br>
      quantum computing SDK
    </PageHeader>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import PageHeader from '~/components/ui/PageHeader.vue'

@Component({
  components: { PageHeader },
  head () {
    return {
      title: 'Qiskit Overview'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'overview'
}
</script>

<style lang="scss" scoped>
.overview-page {
  background-color: white;
}
</style>
