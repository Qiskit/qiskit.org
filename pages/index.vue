<template>
  <main>
    <LandingHeroMomentComponent :version="qiskitVersion" />
    <LandingQiskitCapabilitiesSectionComponent />
    <LandingQuickStartComponent />
    <LandingLearnSectionComponent />
  </main>
</template>

<script setup lang="ts">
interface PackageInfo {
  info: {
    version: string;
  };
}

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit",
  routeName: "qiskit-landing-page",
});

useSeoMeta({
  title: "Qiskit",
  ogTitle: "Qiskit",
  description:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogDescription:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogImage: "public/images/qiskit-logo.png",
  ogUrl: "https://qiskit.org/",
});

const { data: packageInfo } = await useAsyncData<PackageInfo>(() =>
  $fetch("https://pypi.org/pypi/qiskit/json")
);

const qiskitVersion = packageInfo.value?.info.version ?? "";

useSchemaOrg([
  defineWebSite({
    name: "Qiskit.org",
  }),
  defineOrganization({
    name: "Qiskit",
    logo: "/images/qiskit-logo.png",
  }),
  defineWebPage(),
]);
</script>
