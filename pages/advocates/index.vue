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

    // only commit to store, advocates
    // who have filled out the approval form
    // and provided their Slack ID
    const advocatesWithApproval = advocates.filter((advocate: any) => {
      return advocate.slackId && advocate.slackId.length !== 0
    })

    store.commit('setAdvocates', advocatesWithApproval)
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
