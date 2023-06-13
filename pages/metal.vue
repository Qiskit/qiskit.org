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

const config = useRuntimeConfig();

useSeoMeta({
  title: "Qiskit Metal",
  ogTitle: "Qiskit Metal",
  description:
    "A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal. ",
  ogDescription:
    "A first-of-its-kind, open-source project for engineers and scientists to design superconducting quantum devices with ease: Qiskit Metal. ",
  ogImage: `${config.public.siteUrl}/images/metal/hero/cryo.png`,
  ogUrl: `${config.public.siteUrl}/metal`,
});
</script>
