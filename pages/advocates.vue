<template>
  <main>
    <LayoutLeadSpaceFixed>
      Connect with the<br />
      <UiTypewriterEffect
        :values="['enthusiasts', 'advocates', 'mentors', 'experts']"
      /><br />
      within the Qiskit community
    </LayoutLeadSpaceFixed>
    <AdvocatesJoin />
    <AdvocatesMeetTheAdvocates />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Advocates",
  routeName: "advocates",
});

const config = useRuntimeConfig();
const description =
  "The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community. Join the program today!";

useSeoMeta({
  title: "Qiskit Advocates",
  ogTitle: "Qiskit Advocates",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}/advocates/`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});
</script>
