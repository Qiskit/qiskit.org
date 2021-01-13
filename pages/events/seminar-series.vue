<template>
  <main class="event-page seminar-series-page">
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
        <div>Up next:</div>
        <EventCard
          date="January 13, 2021"
          image="/images/events/seminar-series/speakers/abraham-asfaw.jpg"
          location="YouTube"
          title="Will Oliver"
          to="https://www.youtube.com/watch?v=miK5y8BYlwQ&list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2&index=1"
          vertical-layout
        >
          Quantum Engineering of Superconducting Qubits
        </EventCard>
      </template>
    </ThePageHeader>

    <WhatIsThisEventSection class="seminar-series-page__section" />
  </main>
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
  background-color: $white;
  color: $white-text-01;
  display: flex;
  flex-flow: column;

  &__header {
    padding-bottom: $layout-05;
    padding-top: $layout-06;

    &__card {
      background-color: $cool-gray-10;
    }
  }

  &__section {
    @include contained();
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
