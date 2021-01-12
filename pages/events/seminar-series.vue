<template>
  <main class="seminar-series-page">
    <section class="seminar-series-page__container">
      <h2 class="copy__title">
        What is the Quantum Information Science Seminar Series?
      </h2>
      <AppMosaic :mosaic-elements="mosaicElements" />
    </section>
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

  mosaicElements = [
    {
      position: 'first',
      title: 'Learn from experts',
      description:
        'This series is a deep dive into various academic and research topics within the quantum community.',
      image: '/images/events/seminar-series/mosaic-experts.png'
    },
    {
      position: 'second',
      title: 'About the host',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '/images/events/seminar-series/mosaic-host.jpg'
    },
    {
      position: 'third',
      title: 'About the speakers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '/images/events/seminar-series/mosaic-speakers.jpg'
    },
    {
      position: 'fourth',
      title: 'Interactivity headline',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ];
}
</script>

<style lang="scss" scoped>
.seminar-series-page {
  background-color: $white;
  color: $white-text-01;
  display: flex;

  &__container {
    @include contained();
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
