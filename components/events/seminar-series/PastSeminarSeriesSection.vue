<template>
  <section class="past-seminar-series-section">
    <h2 class="copy__title">
      Past Quantum Seminars
    </h2>
    <SeminarSeriesDataTable :events="events" events-section="past-events-section" />
    <AppCta
      class="past-seminar-series-section__cta"
      kind="ghost"
      v-bind="showMoreCta"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SEMINAR_SERIES_FULL_ARCHIVE_CTA } from '~/constants/appLinks.ts'
import { SeminarSeriesEvent } from '~/hooks/event-conversion-utils.ts'

@Component
export default class PastSeminarSeriesSection extends Vue {
  @Prop({ type: Array, required: true }) events!: SeminarSeriesEvent[]

  showMoreCta = SEMINAR_SERIES_FULL_ARCHIVE_CTA
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.past-seminar-series-section {
  &__cta {
    padding-bottom: 0;
  }
}
</style>
