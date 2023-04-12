<template>
  <main>
    <UiPageHeaderFixed>
      Connect with the<br />
      <UiTypewriterEffect
        :values="['enthusiasts', 'advocates', 'mentors', 'experts']"
      />
      from within<br />
      the Qiskit community
    </UiPageHeaderFixed>
    <AdvocatesJoinSection />
    <AdvocatesMeetTheAdvocates />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Advocates",
  routeName: "advocates",
});

useHead({
  title: "Qiskit Advocates",
  meta: [
    {
      name: "description",
      content:
        "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.",
    },
  ],
});
</script>
