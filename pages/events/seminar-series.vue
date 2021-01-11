<template>
  <div class="event-page seminar-series-page">
    <ThePageHeader class="seminar-series-page__header" :cta="cta">
      Quantum Information Science Seminar Series

      <template #description>
        <p>
          The Quantum Information Science Seminar Series is a deep dive into
          various academic and research topics within the quantum community.
        </p>
        <p>Join every Friday at 12:00 PM EDT</p>
      </template>

      <template #aside>
        Aside content.
      </template>
    </ThePageHeader>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { SEMINAR_SERIES_ALL_EPISODES_CTA } from '~/constants/appLinks.ts'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series';

  cta = SEMINAR_SERIES_ALL_EPISODES_CTA;
}
</script>

<style lang="scss" scoped>
.seminar-series-page {
  &__header {
    padding-bottom: $layout-05;
    padding-top: $layout-06;
  }
}
</style>
