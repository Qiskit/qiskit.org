<template>
  <main class="learn-page">
    <qiskit-banner>
      <div class="content">
        Miss the old version of the textbook? Access it
        <UiAppLink
          class="link"
          :segment="{ action: `${routeName} > banner > old-textbook-version` }"
          url="https://qiskit.org/textbook"
        >
          here
        </UiAppLink>
      </div>
    </qiskit-banner>
    <LearnPageHeader />
    <LearnStartLearningSection class="learn-page__section" />
    <UiAppHelpfulResourcesSection
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
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit Textbook",
});

const helpfulResources: DescriptionCard[] = [
  {
    title: "Documentation",
    description: `The Qiskit Documentation is the right place for you if
    you are looking for the installation guide, release notes, or API
    references.`,
    cta: {
      url: "https://qiskit.org/documentation/",
      label: "Go to documentation",
      segment: { cta: "documentation", location: "helpful-resources" },
    },
  },
  {
    title: SOCIAL_MEDIA.stack.label,
    description: `Have a question? Ask it on stack exchange! Qiskit
    advocates and core contributors monitor this forum and will happily
    answer your questions.`,
    cta: {
      url: SOCIAL_MEDIA.stack.url,
      label: "Visit Stack Exchange",
      segment: { cta: "stack-exchange", location: "helpful-resources" },
    },
  },
  {
    title: SOCIAL_MEDIA.slack.label,
    description: `The Slack community is a great place to engage in
    discussion on research and quantum development.`,
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

// TODO: Refactor tracking
const routeName = "learn";
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-page {
  &__section {
    @include qiskit.contained();

    max-width: qiskit.$max-size;
    margin-bottom: carbon.$spacing-07;
    margin-top: carbon.$spacing-10;
  }

  qiskit-banner {
    .content {
      @include qiskit.contained();

      max-width: qiskit.$max-size;
      padding: carbon.$spacing-04 carbon.$spacing-06;
      display: flex;
      flex: 1;

      @include carbon.breakpoint-down(md) {
        display: block;
      }
    }

    .link {
      color: qiskit.$text-color-white;
      text-decoration: underline;
      margin-left: 4px;

      &:hover,
      &:visited {
        color: currentColor;
      }

      @include carbon.breakpoint-down(md) {
        margin-left: 2px;
      }
    }
  }
}
</style>
