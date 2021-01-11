<template>
  <main class="seminar-series-page">
    <ThePageHeader>Quantum Information Science Seminar Series</ThePageHeader>
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
