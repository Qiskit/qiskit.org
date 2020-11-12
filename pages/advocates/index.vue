<template>
  <main class="community-page advocates-page">
    <TheAdvocatesHeader />
    <AdvocatesJoinSection />
    <MeetTheAdvocates :advocates="filteredAdvocates" />
  </main>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Advocates'
    }
  },

  computed: {
    ...mapGetters([
      'filteredAdvocates'
    ])
  },

  methods: {
    ...mapActions({
      fetchAdvocates: 'fetchAdvocates'
    })
  },

  async fetch ({ store }) {
    const advocates = await store.dispatch('fetchAdvocates')

    store.commit('setAdvocates', advocates)
  }
})
export default class AdvocatesPage extends QiskitPage {
  routeName: string = 'advocates'
}
</script>

<style lang="scss">
.advocates-page {
  background-color: $white;
}
</style>
