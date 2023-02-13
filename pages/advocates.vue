<template>
  <main>
    <!-- TODO: Integrate components -->
    <!-- <AppPageHeaderFixed>
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
    </AppPageHeaderFixed> -->
    <!-- <AdvocatesJoinSection /> -->
    <!-- <MeetTheAdvocates /> -->
  </main>
</template>

<script setup lang="ts">
// TODO: Integrate old code
// import QiskitPage from "~/components/logic/QiskitPage.vue";

definePageMeta({
  // TODO: Integrate layout
  // layout: "default-max",
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit Advocates",
  meta: [
    {
      name: "description",
      content:
        "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.",
    },
  ],
});

// TODO: Refactor "logic" pages
// export default class AdvocatesPage extends QiskitPage {
//   routeName: string = 'advocates'
// }
</script>
