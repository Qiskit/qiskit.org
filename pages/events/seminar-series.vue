<template>
  <main class="event-page seminar-series-page">
    <SeminarSeriesHeader class="seminar-series-page__header" />
    <WhatIsThisEventSection class="seminar-series-page__section" />
    <UpcomingSeminarSeriesSection class="seminar-series-page__section" />
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

  &__header {
    padding-bottom: $layout-05;
    padding-top: $layout-06;

    @include mq($until: medium) {
      padding-top: $layout-04;
    }
  }

  &__section {
    @include contained();
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
