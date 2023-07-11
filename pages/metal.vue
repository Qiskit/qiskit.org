<template>
  <div>
    <MetalLeadSpace />
    <MetalIntro />
    <MetalCapabilities />
    <MetalFeatures />
    <MetalBuilding />
    <MetalJoinUs />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "metal",
  pageTitle: "Metal",
  routeName: "metal",
});

const config = useRuntimeConfig();
const description =
  "A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal.";

useSeoMeta({
  title: "Qiskit Metal",
  ogTitle: "Qiskit Metal",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/metal/hero/cryo.png`,
  ogUrl: `${config.public.siteUrl}/metal`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});
</script>
