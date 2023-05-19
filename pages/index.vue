<template>
  <main>
    <LandingHeroMomentComponent :version="qiskitVersion" />
    <LandingQiskitCapabilitiesSectionComponent />
    <LandingQuickStartComponent />
    <LandingLearnSectionComponent />
  </main>
</template>

<script setup lang="ts">
import {
  useSchemaOrg,
  defineWebSite,
  defineWebPage,
} from "@unhead/schema-org-vue";
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

useSchemaOrg([
  defineWebSite({
    name: "My Awesome Website",
  }),
  defineWebPage(),
]);
</script>
