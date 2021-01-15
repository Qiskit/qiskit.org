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

@Component
export default class UpcomingSeminarSeriesSection extends Vue {
  tableData = {
    columns: ['Speaker', 'Institution', 'Seminar title', 'Date of talk', 'Link to talk'],
    dataPerRow: [
      [
        {
          component: 'span',
          styles: 'min-width: 8rem; display: inline-block;',
          data: 'Javad Shabani'
        },
        {
          component: 'span',
          styles: 'min-width: 9rem; display: inline-block;',
          data: 'University of Waterloo'
        },
        {
          component: 'span',
          styles: 'min-width: 21rem; display: inline-block;',
          data: 'Progress in Realizing Novel Qubits with Josephson Field Effect Transistors'
        },
        {
          component: 'span',
          styles: 'min-width: 5rem; display: inline-block;',
          data: '2021/01/25'
        },
        {
          component: 'AppCta',
          styles: 'min-width: 6rem;',
          data: {
            url: 'https://qiskit.org',
            label: 'Join the event'
          }
        }
      ],
      [
        {
          component: 'span',
          styles: 'min-width: 8rem; display: inline-block;',
          data: 'Javad Shabani'
        },
        {
          component: 'span',
          styles: 'min-width: 9rem; display: inline-block;',
          data: 'MIT'
        },
        {
          component: 'span',
          styles: 'min-width: 21rem; display: inline-block;',
          data: 'Progress in Realizing Novel Qubits with Josephson Field Effect Transistors'
        },
        {
          component: 'span',
          styles: 'min-width: 5rem; display: inline-block;',
          data: '2021/01/25'
        },
        {
          component: 'AppCta',
          styles: 'min-width: 6rem;',
          data: {
            url: 'https://qiskit.org',
            label: 'Join the event'
          }
        }
      ]
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";
</style>
