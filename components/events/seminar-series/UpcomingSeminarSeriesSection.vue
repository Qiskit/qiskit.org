<template>
  <section class="upcoming-seminar-series-section">
    <h2 class="copy__title">
      Upcoming Seminar Schedule
    </h2>
    <SeminarSeriesDataTable :columns="tableData.columns" :data-per-row="tableData.dataPerRow" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import events from '~/content/events/upcoming-seminar-series-events.json'

@Component
export default class UpcomingSeminarSeriesSection extends Vue {
  tableDataPerRow = events.map(event => ([
    {
      component: 'span',
      styles: 'min-width: 8rem; display: inline-block;',
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
      styles: 'min-width: 6rem;',
      data: {
        url: event.to,
        label: 'Join the event'
      }
    }
  ]));

  tableData = {
    columns: ['Speaker', 'Institution', 'Seminar title', 'Date of talk', 'Link to talk'],
    dataPerRow: this.tableDataPerRow
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";
</style>
