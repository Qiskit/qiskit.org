<template>
  <main class="learn-page">
    <!-- TODO: Integrate components -->
    <!-- <qiskit-banner>
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
    </qiskit-banner> -->
    <!-- <LearnHeader /> -->
    <!-- <StartLearningSection class="learn-page__section" /> -->
    <!-- <AppHelpfulResourcesSection
      class="learn-page__section"
      :resources="helpfulResources"
    /> -->
  </main>
</template>

<script setup lang="ts">
// TODO: Integrate old code
// import "@qiskit/web-components/components/banner";
// import QiskitPage from "~/components/logic/QiskitPage.vue";
// import { DescriptionCard } from "~/components/ui/AppDescriptionCard.vue";
// import { SOCIAL_MEDIA } from "~/constants/menuLinks";

definePageMeta({
  // TODO: Integrate layout
  // layout: "default-max",
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit Textbook",
});

// TODO: Integrate old code
// const helpfulResources: DescriptionCard[] = [
//   {
//     title: "Documentation",
//     description: `The Qiskit Documentation is the right place for you if
//     you are looking for the installation guide, release notes, or API
//     references.`,
//     cta: {
//       url: "https://qiskit.org/documentation/",
//       label: "Go to documentation",
//       segment: { cta: "documentation", location: "helpful-resources" },
//     },
//   },
//   {
//     title: SOCIAL_MEDIA.stack.label,
//     description: `Have a question? Ask it on stack exchange! Qiskit
//     advocates and core contributors monitor this forum and will happily
//     answer your questions.`,
//     cta: {
//       url: SOCIAL_MEDIA.stack.url,
//       label: "Visit Stack Exchange",
//       segment: { cta: "stack-exchange", location: "helpful-resources" },
//     },
//   },
//   {
//     title: SOCIAL_MEDIA.slack.label,
//     description: `The Slack community is a great place to engage in
//     discussion on research and quantum development.`,
//     cta: {
//       url: SOCIAL_MEDIA.slack.url,
//       label: "Visit Slack",
//       segment: { cta: "slack", location: "helpful-resources" },
//     },
//   },
//   {
//     title: "Educators Program",
//     description:
//       "This program helps teachers in the growing quantum field connect with one another, and provides the learning resources, tools, and systems access they need to provide quality educational experiences.",
//     cta: {
//       url: "https://quantum-computing.ibm.com/programs/educators",
//       label: "Visit the Educators Program",
//       segment: { cta: "educators-program", location: "helpful-resources" },
//     },
//   },
// ];

// TODO: Refactor "logic" pages
// export default class LearnPage extends QiskitPage {
//   routeName: string = 'learn'
// }
</script>

<style lang="scss" scoped>
// TODO: Review old CSS
// .learn-page {
//   &__section {
//     @include contained();

//     max-width: $max-size;
//     margin-bottom: carbon.$spacing-07;
//     margin-top: carbon.$spacing-10;
//   }

//   qiskit-banner {
//     .content {
//       @include contained();

//       max-width: $max-size;
//       padding: carbon.$spacing-04 carbon.$spacing-06;
//       display: flex;
//       flex: 1;

//       @include carbon.breakpoint-down(md) {
//         display: block;
//       }
//     }

//     .link {
//       color: qiskit.$text-color-white;
//       text-decoration: underline;
//       margin-left: 4px;

//       &:hover,
//       &:visited {
//         color: currentColor;
//       }

//       @include carbon.breakpoint-down(md) {
//         margin-left: 2px;
//       }
//     }
//   }
// }
</style>
