<template>
  <div>
    <MetalDarkHeader />
    <MetalIntroSection />
    <MetalCapabilitiesSection />
    <MetalFeaturesSection />
    <MetalBuildingSection />
    <MetalJoinUsSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "metal",
  pageTitle: "Metal",
  routeName: "metal",
});

useSeoMeta({
  title: "Qiskit Metal",
  ogTitle: "Qiskit Metal",
  description:
    "A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal. ",
  ogDescription:
    "A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal. ",
  ogImage: "public/images/metal/hero/cryo.png",
  ogUrl: "https://qiskit.org/metal",
});
</script>
