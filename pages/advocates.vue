<template>
  <main>
    <UiAppPageHeaderFixed>
      Connect with the<br />
      <UiTypewriterEffect
        :values="['enthusiasts', 'advocates', 'mentors', 'experts']"
      />
      from within<br />
      the Qiskit community
    </UiAppPageHeaderFixed>
    <AdvocatesJoinSection />
    <!-- <MeetTheAdvocates /> -->
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-max",
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

// TODO: Refactor tracking
// export default class AdvocatesPage {
//   routeName: string = 'advocates'
// }
</script>
