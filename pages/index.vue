<template>
  <!-- TODO: review if class is needed or can be deleted -->
  <main class="landing-page">
    Index page
    <!-- TODO: Integrate components -->
    <!-- <TheHeroMoment :version="qiskitVersion" /> -->
    <!-- <TheQuickStart /> -->
    <!-- <TheQiskitCapabilitiesSection /> -->
    <!-- <TheLearnSection /> -->
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
});

useHead({
  title: "Qiskit",
});

// TODO: Refactor tracking
const routeName = "qiskit-landing-page";

const { data: packageInfo } = await useAsyncData<PackageInfo>(() =>
  $fetch("https://pypi.org/pypi/qiskit/json")
);

const qiskitVersion = packageInfo.value?.info.version ?? "";
</script>
