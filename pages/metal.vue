<template>
  <div>
    <MetalTheDarkHeader />
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

useHead({
  title: "Metal",
});
</script>
