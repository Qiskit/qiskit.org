<template>
  <section class="upcoming-seminar-series-section">
    <h2 class="copy__title">
      Upcoming Quantum Seminar Schedule
    </h2>
    <SeminarSeriesDataTable :events="events" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SeminarSeriesEvent } from '~/hooks/event-conversion-utils'

@Component
export default class UpcomingSeminarSeriesSection extends Vue {
  @Prop({ type: Array, default: () => [] }) events!: SeminarSeriesEvent[]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.upcoming-seminar-series-section {
  .copy__title {
    max-width: initial;
  }
}
</style>
