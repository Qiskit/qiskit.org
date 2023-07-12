<template>
  <main>
    <HomeLeadSpace :version="qiskitVersion" />
    <HomeCapabilities />
    <HomeProviders />
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
const description =
  "Qiskit is an open-source SDK for working with quantum computers at the level of pulses, circuits, and application modules.";

useSeoMeta({
  title: "Qiskit",
  ogTitle: "Qiskit",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/qiskit-logo.png`,
  ogUrl: `${config.public.siteUrl}`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
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
