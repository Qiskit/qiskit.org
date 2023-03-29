<template>
  <main>
    <LandingTheHeroMomentComponent :version="qiskitVersion" />
    <LandingTheQuickStart />
    <LandingTheQiskitCapabilitiesSectionComponent />
    <LandingTheLearnSectionComponent />
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

useHead({
  title: "Qiskit",
});

const { data: packageInfo } = await useAsyncData<PackageInfo>(() =>
  $fetch("https://pypi.org/pypi/qiskit/json")
);

const qiskitVersion = packageInfo.value?.info.version ?? "";
</script>
