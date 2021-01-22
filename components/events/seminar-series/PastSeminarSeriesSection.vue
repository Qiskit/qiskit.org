<template>
  <section class="past-seminar-series-section">
    <h2 class="copy__title">
      Past Quantum Seminars
    </h2>
    <SeminarSeriesDataTable :columns="tableData.columns" :data-per-row="tableData.dataPerRow" />
    <AppCta
      class="past-seminar-series-section__cta"
      kind="ghost"
      v-bind="showMoreCta"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { SEMINAR_SERIES_FULL_ARCHIVE_CTA } from '~/constants/appLinks.ts'
import events from '~/content/events/past-seminar-series-events.json'

@Component
export default class PastSeminarSeriesSection extends Vue {
  tableDataPerRow = events.map(event => ([
    {
      component: 'span',
      styles: 'min-width: 9rem; display: inline-block;',
      data: event.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 9rem; display: inline-block;',
      data: event.institution
    },
    {
      component: 'span',
      styles: 'min-width: 19rem; display: inline-block;',
      data: event.title
    },
    {
      component: 'span',
      styles: 'min-width: 8rem; display: inline-block;',
      data: event.date
    },
    {
      component: 'AppCta',
      styles: 'min-width: 5rem;',
      data: {
        url: event.to,
        label: 'Join event'
      }
    }
  ]));

  tableData = {
    columns: ['Speaker', 'Institution', 'Name of talk', 'Date of talk', 'Link to talk'],
    dataPerRow: this.tableDataPerRow
  }

  showMoreCta = SEMINAR_SERIES_FULL_ARCHIVE_CTA
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.past-seminar-series-section {
  &__cta {
    margin-top: $spacing-03;
  }
}
</style>
