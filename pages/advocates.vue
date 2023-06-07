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

useSeoMeta({
  title: "Qiskit Advocates",
  ogTitle: "Qiskit Advocates",
  description:
    "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.",
  ogDescription:
    "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.",
  ogImage: "/images/qiskit-logo.png",
  ogUrl: "https://qiskit.org/advocates/",
});
</script>
