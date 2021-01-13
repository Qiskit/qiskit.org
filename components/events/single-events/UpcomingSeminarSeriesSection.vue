<template>
  <section class="upcoming-seminar-series-section">
    <h2 class="copy__title">
      Upcoming Seminar Schedule
    </h2>
    <SeminarSeriesDataTable :data="tableData" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class UpcomingSeminarSeriesSection extends Vue {
  tableData = [
    {
      speaker: 'Javad Shabani',
      nameOfTalk: 'Progress in Realizing Novel Qubits with Josephson Field Effect Transistors',
      institution: 'MIT',
      dateOfTalk: '2021/01/25',
      linkToTalk: {
        url: 'https://qiskit.org',
        label: 'Join the event'
      }
    },
    {
      speaker: 'Javad Shabani 2',
      nameOfTalk: 'Progress in Realizing Novel Qubits with Josephson Field Effect Transistors 2',
      institution: 'MIT 2',
      dateOfTalk: '2021/01/25',
      linkToTalk: {
        url: 'https://qiskit.org',
        label: 'Join the event'
      }
    }
  ]
}
</script>
