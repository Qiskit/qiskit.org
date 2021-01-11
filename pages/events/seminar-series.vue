<template>
  <main class="seminar-series-page">
    <ThePageHeader>
      Quantum Information Science Seminar Series
      <template #description>
        <p>
          The Quantum Information Science Seminar Series is a deep dive into
          various academic and research topics within the quantum community.
        </p>
        <p>Join every Friday at 12:00 PM EDT</p>
      </template>
    </ThePageHeader>
    <WhatIsThisEventSection class="seminar-series-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series';
}
</script>

<style lang="scss" scoped>
.seminar-series-page {
  background-color: $white;
  color: $white-text-01;
  display: flex;

  &__section {
    @include contained();
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
