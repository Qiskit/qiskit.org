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
      title: 'About the hosts',
      description:
        'Dr. Zlatko K. Minev, research staff member at IBM Quantum and recipient of MIT Tech Review’s 35 under 35 Global Innovator award, is our lead host. He is joined by Dr. Olivia Lanes, an experimental researcher and education developer at IBM, working to bridge the gap between the hardware and software communities.',
      image: '/images/events/seminar-series/mosaic-hosts.png'
    },
    {
      position: 'third',
      title: 'The latest in quantum computing',
      description:
        'This series will discuss all the most current research and new developements across the field of quantum computing.',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'fourth',
      title: 'Real time questions & discussion',
      description:
        'Discuss in real time with other researchers, students, and folks in quantum, while having the ability to ask questions of the speaker in real time via the comment chat box on YouTube.',
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";
</style>
