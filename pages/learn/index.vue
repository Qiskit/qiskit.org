<template>
  <div class="learn-page">
    <LearnLeadSpace />
    <LearnStartLearning class="learn-page__section" />
    <UiHelpfulResources
      class="learn-page__section"
      :resources="helpfulResources"
    />
  </div>
</template>

<script setup lang="ts">
import { SocialMedia } from "~/constants/links";
import { DescriptionCard } from "~/types/uiComponents";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Textbook",
  routeName: "learn",
});

const config = useRuntimeConfig();

const title = "Qiskit Textbook";
const description =
  "A university quantum algorithms/computation course supplement based on Qiskit.";
const image = `${config.public.siteUrl}/images/learn/qiskit-logo-header.png`;
const pageUrl = `${config.public.siteUrl}/learn`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: title,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const helpfulResources: DescriptionCard[] = [
  {
    title: "Documentation",
    description:
      "The Qiskit Documentation is the right place for you if you are looking for the installation guide, release notes, or API references.",
    cta: {
      url: `${config.public.siteUrl}/documentation/`,
      label: "Go to documentation",
      segment: { cta: "documentation", location: "helpful-resources" },
    },
  },
  {
    title: SocialMedia.support.label,
    description:
      "If you need support on anything relating to using and developing Qiskit, you can use the following forums to direct your issue / queries to the appropriate audience.",
    cta: {
      url: SocialMedia.support.url,
      label: "Visit Support Channels",
      segment: { cta: "support-channels", location: "helpful-resources" },
    },
  },
  {
    title: SocialMedia.slack.label,
    description:
      "The Slack community is a great place to engage in discussion on research and quantum development.",
    cta: {
      url: SocialMedia.slack.url,
      label: "Visit Slack",
      segment: { cta: "slack", location: "helpful-resources" },
    },
  },
  {
    title: "Educators Program",
    description:
      "This program helps teachers in the growing quantum field connect with one another, and provides the learning resources, tools, and systems access they need to provide quality educational experiences.",
    cta: {
      url: "https://quantum-computing.ibm.com/programs/educators",
      label: "Visit the Educators Program",
      segment: { cta: "educators-program", location: "helpful-resources" },
    },
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-page {
  &__section {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
    margin-bottom: carbon.$spacing-07;
    margin-top: carbon.$spacing-10;
  }
}
</style>
