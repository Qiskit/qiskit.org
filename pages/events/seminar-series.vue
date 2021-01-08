<template>
  <main class="event-page">
    <section class="event-page__container">
      <h2 class="copy__title">
        What is the Quantum Information Science Seminar Series?
      </h2>
      <!-- TODO: Add mosaic when #628 is done -->
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
}
</script>
