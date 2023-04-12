<template>
  <main class="learn-page">
    <LearnPageHeader />
    <LearnStartLearningSection class="learn-page__section" />
    <UiHelpfulResourcesSection
      class="learn-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script setup lang="ts">
import "@qiskit/web-components/banner";
import { SOCIAL_MEDIA } from "~/constants/menuLinks";
import type { DescriptionCard } from "~/types/uiComponents";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Textbook",
  routeName: "learn",
});

useHead({
  title: "Qiskit Textbook",
});

const helpfulResources: DescriptionCard[] = [
  {
    title: "Documentation",
    description:
      "The Qiskit Documentation is the right place for you if you are looking for the installation guide, release notes, or API references.",
    cta: {
      url: "https://qiskit.org/documentation/",
      label: "Go to documentation",
      segment: { cta: "documentation", location: "helpful-resources" },
    },
  },
  {
    title: SOCIAL_MEDIA.support.label,
    description:
      "If you need support on anything relating to using and developing Qiskit, you can use the following forums to direct your issue / queries to the appropriate audience.",
    cta: {
      url: SOCIAL_MEDIA.support.url,
      label: "Visit Support Channels",
      segment: { cta: "support-channels", location: "helpful-resources" },
    },
  },
  {
    title: SOCIAL_MEDIA.slack.label,
    description:
      "The Slack community is a great place to engage in discussion on research and quantum development.",
    cta: {
      url: SOCIAL_MEDIA.slack.url,
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

  qiskit-banner {
    .content {
      @include qiskit.contained;

      max-width: qiskit.$max-size;
      display: flex;
      flex: 1;

      @include carbon.breakpoint-down(md) {
        display: block;
      }

      @include carbon.breakpoint-between(sm, max) {
        padding-left: 0;
      }
    }

    .link {
      color: qiskit.$text-color-white;
      text-decoration: underline;
      margin-left: 4px;

      &:hover,
      &:visited {
        color: currentcolor;
      }

      @include carbon.breakpoint-down(md) {
        margin-left: 2px;
      }
    }
  }
}
</style>
