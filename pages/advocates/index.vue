<template>
  <main class="community-page advocates-page">
    <TheAdvocatesHeader />
    <AdvocatesJoinSection />
    <MeetTheAdvocates :advocates="filteredAdvocates" />
  </main>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Advocates'
    }
  },

  computed: {
    ...mapGetters('advocates', [
      'filteredAdvocates'
    ])
  },

  async fetch ({ store }) {
    await store.dispatch('advocates/fetchAdvocates')
  }
})
export default class AdvocatesPage extends QiskitPage {
  routeName: string = 'advocates'
}
</script>
