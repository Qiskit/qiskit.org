<template>
  <article>
    <HomeLeadSpace :version="qiskitVersion" />
    <HomeCapabilities />
    <OneXPPageSection
      :features="[
        {
          title: 'Documentation',
          descriptionParagraphs: [
            'We are reorganizing Qiskit documentation on IBM Quantum to better support your research and development workflows.',
          ],
          cta: {
            label: 'Check out Documentation',
            segment: {
              cta: 'go-to-documentation',
              location: 'one-xp-banner',
            },
            url: 'https://example.com',
          },
        },
        {
          title: 'Learning',
          descriptionParagraphs: [
            'We are building a new learning application with courses and tutorials to help you learn the basics and start experimenting with Qiskit.',
          ],
          cta: {
            label: 'Check out Learning',
            segment: {
              cta: 'go-to-learning',
              location: 'one-xp-banner',
            },
            url: 'https://example.com',
          },
        },
      ]"
      img-alt="Screenshot of the new Qiskit documentation"
      img-src="/images/one-xp/documentation-screenshot.png"
    >
      <template #title>
        Qiskit is getting a new documentation<br />and learning experience →
      </template>
    </OneXPPageSection>
    <HomeProviders />
  </article>
</template>

<script setup lang="ts">
interface PackageInfo {
  info: {
    version: string;
  };
}

definePageMeta({
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
