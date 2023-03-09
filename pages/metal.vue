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
});

useHead({
  // TODO: Review if this is the intended title
  title: "Metal",
});

// TODO: Refactor tracking
// export default class MetalPage {
//   routeName = 'metal'
// }
</script>
