<template>
  <main>
    <AppPageHeaderFixed>
      Connect with the<br>
      <TypewriterEffect
        :values="[
          'enthusiasts',
          'advocates',
          'mentors',
          'experts'
        ]"
      />
      from within<br>
      the Qiskit community
    </AppPageHeaderFixed>
    <AdvocatesJoinSection />
    <MeetTheAdvocates :advocates="filteredAdvocates" />
  </main>
</template>

<script setup lang="ts">
import { mapGetters } from 'vuex'
import QiskitPage from '~/components/logic/QiskitPage.vue'

definePageMeta({
  layout: 'default-max'
})

useHead({
  title: 'Qiskit Advocates',
  meta: [
    {
      name: 'description',
      content: 'The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.'
    }
  ]
})

// TODO: Replace Vuex with Pinia
// @Component({
//   computed: {
//     ...mapGetters('advocates', [
//       'filteredAdvocates'
//     ])
//   },

//   async fetch ({ store }) {
//     await store.dispatch('advocates/fetchAdvocates')
//   }
// })

// TODO: Refactor "logic" pages
// export default class AdvocatesPage extends QiskitPage {
//   routeName: string = 'advocates'
// }
</script>
