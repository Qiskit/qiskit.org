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
  title = 'What is the Quantum Information Science Seminar Series?'

  mosaicElements: MosaicElement[] = [
    {
      position: 'first',
      title: 'Learn from experts',
      description:
        'Learn from & interact directly with world-leading experts in quantum, from across the globe.',
      image: '/images/events/seminar-series/mosaic-experts.png'
    },
    {
      position: 'second',
      title: 'About the team',
      description:
        'Our savvy producer is Paul Searle and our seminar co-host is Dr. Olivia Lanes.',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'third',
      title: 'About the host',
      description:
        'Dr. Zlatko K. Minev, from IBM Quantum, is our lead host, whose quantum research earned him MIT Tech Review’s 35 under 35 Global Innovator award, a spot on Discover’s Top 50 Stories of the Year, and the JVA Presidential Award. Minev loves sharing science and is also the recipient of the Yale-Jefferson Award for Public Service.',
      image: '/images/events/seminar-series/mosaic-host.png'
    },
    {
      position: 'fourth',
      title: 'Real time questions & discussion',
      description:
        'Discuss in real time with other researchers, students, and folks in quantum, while having the ability to ask questions of the speaker in real time via the comment chat box on youtube. ',
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";
</style>
