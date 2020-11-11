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
import TheAdvocatesHeader from '~/components/advocates/TheAdvocatesHeader.vue'
import AdvocatesJoinSection from '~/components/advocates/AdvocatesJoinSection.vue'
import MeetTheAdvocates from '~/components/advocates/MeetTheAdvocates.vue'

@Component({
  components: {
    TheAdvocatesHeader,
    AdvocatesJoinSection,
    MeetTheAdvocates
  },

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
export default class extends QiskitPage {
  routeName: string = 'advocates'
}
</script>

<style lang="scss">
.advocates-page {
  background-color: $white;
}
</style>
