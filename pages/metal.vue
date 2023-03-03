<template>
  <!-- TODO: review if class is needed or can be deleted -->
  <div class="metal-page">
    <!-- TODO: Integrate components -->
    <MetalTheDarkHeader />
    <MetalIntroSection />
    <MetalCapabilitiesSection />
    <MetalFeaturesSection />
    <MetalBuildingSection />
    <MetalJoinUsSection />
  </div>
</template>

<script setup lang="ts">
// TODO: Integrate old code

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
