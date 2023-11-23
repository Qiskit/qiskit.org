<template>
  <article>
    <OneXPBanner
      copy="🎉 Starting on November 29, 2023 Qiskit Documentation and Learning will only be live on IBM Quantum"
      :cta="{
        label: 'Check it out',
        segment: {
          cta: 'learn-more-1xp',
          location: '1xp-banner',
        },
        url: 'https://medium.com/qiskit/important-changes-to-qiskits-documentation-and-learning-7f4e346b19ab',
      }"
    />
    <HomeLeadSpace :version="qiskitVersion" />
    <HomeCapabilities />
    <OneXPPageSection
      id="new-experience"
      :features="[
        {
          title: 'Documentation',
          descriptionParagraphs: [
            'We have reorganized Qiskit documentation on IBM Quantum Platform to better support your research and development workflows.',
          ],
          cta: {
            label: 'Check out Documentation',
            segment: {
              cta: 'go-to-1xp-documentation',
              location: '1xp-page-section',
            },
            url: 'https://docs.quantum-computing.ibm.com',
          },
        },
        {
          title: 'Learning',
          descriptionParagraphs: [
            'We have built a new learning application with courses and tutorials to help you learn the basics and start experimenting with Qiskit.',
          ],
          cta: {
            label: 'Check out Learning',
            segment: {
              cta: 'go-to-1xp-learning',
              location: '1xp-page-section',
            },
            url: 'https://learning.quantum-computing.ibm.com',
          },
        },
      ]"
      img-alt="Screenshot of the new Qiskit documentation"
      img-src="/images/one-xp/documentation-screenshot.png"
    >
      <template #title>
        <div>
          Qiskit documentation and learning resources are moving to IBM Quantum
          on Nov 29, 2023.
          <a
            href="https://medium.com/qiskit/important-changes-to-qiskits-documentation-and-learning-7f4e346b19ab"
            class="index-page__one-xp-section__link"
            >Learn more &rarr;</a
          >
        </div>
      </template>
    </OneXPPageSection>
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

<style lang="scss" scoped>
.index-page {
  &__one-xp-section {
    &__link {
      color: rgb(0 110 255);
      text-decoration: none;
    }
  }
}
</style>
