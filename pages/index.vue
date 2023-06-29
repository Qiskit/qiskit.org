<template>
  <main>
<<<<<<< HEAD
    <HomeLeadSpace :version="qiskitVersion" />
    <HomeCapabilities />
    <HomeProviders />
    <HomeLearn />
=======
    <SchemaOrgDebug />
    <LandingHeroMomentComponent :version="qiskitVersion" />
    <LandingQiskitCapabilitiesSectionComponent />
    <LandingQuickStartComponent />
    <LandingLearnSectionComponent />
>>>>>>> d49ff5dc6 (move schemaOrg to composable)
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

const config = useRuntimeConfig();

useSeoMeta({
  title: "Qiskit",
  ogTitle: "Qiskit",
  description:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogDescription:
    "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.",
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}`,
});

const { data: packageInfo } = await useAsyncData<PackageInfo>(() =>
  $fetch("https://pypi.org/pypi/qiskit/json")
);

const qiskitVersion = packageInfo.value?.info.version ?? "";
</script>
