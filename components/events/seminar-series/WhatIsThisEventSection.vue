<template>
  <section>
    <h2 class="copy__title" v-text="title" />
    <AppMosaic :mosaic-elements="mosaicElements" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { MosaicElement } from '~/components/ui/AppMosaic.vue'

@Component
export default class WhatIsThisEventSection extends Vue {
  title = 'What is the Quantum Information Science Seminar Series?';

  mosaicElements: MosaicElement[] = [
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
@import "~/assets/scss/blocks/copy.scss";
</style>
