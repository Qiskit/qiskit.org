<template>
  <div class="overview-page">
    <!-- TODO: Integrate components -->
    <!-- <AppPageHeaderFixed>
      The most
      <TypewriterEffect
        :values="['feature-rich', 'modular', 'open', 'popular']"
      />
      quantum computing SDK
    </AppPageHeaderFixed> -->
    <!-- <section id="contentContainer" class="bx--grid page-section">
      <div class="bx--row">
        <div class="bx--col-sm-0 bx--col-md-2 bx--col-lg-3">
          <div class="overview-page__table-of-contents">
            <TheTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
            <AppCta v-bind="quickStartLink" kind="ghost" />
          </div>
        </div>
        <div class="bx--col-lg-13 bx--col-md-6">
          <AppIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="overview-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
            :link="section.link"
            :linkset="section.linkset"
          >
            <ContentAccordion
              v-if="section.subSections"
              class="overview-page__content-section-details"
              :tabs="asTabs(section.subSections)"
            />
            <div v-else class="overview-page__content-section-details">
              <div class="overview-page__content-section-image__wrapper">
                <img
                  class="overview-page__content-section-image"
                  :src="section.image"
                />
              </div>
            </div>
          </AppIntroductoryContent>
        </div>
      </div>
    </section> -->
    <!-- <TheQuickStart id="quick-start" /> -->
  </div>
</template>

<script setup lang="ts">
import { ContentAccordionTab } from "~/components/overview/ContentAccordion.vue";
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  OverviewSubSection,
} from "~/constants/overviewContent";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";

definePageMeta({
  layout: "default-max",
});

useHead({
  // TODO: Review if this is the intended title
  title: "Qiskit Overview",
});

// TODO: Integrate old code
// const tocEntries = TABLE_OF_CONTENTS;
// const contentSections = CONTENT_SECTIONS;

// TODO: Check if this is working correctly
const { activeSection } = useScrollBetweenSections();

const quickStartLink = {
  url: "#quick-start",
  label: "Get Started",
};

// function asTabs(
//   subsections: Array<OverviewSubSection>
// ): Array<ContentAccordionTab> {
//   return subsections.map((subsection) => subsection as ContentAccordionTab);
// }

// TODO: Refactor tracking
// export default class OverviewPage {
//   routeName = 'overview'
// }
</script>

<style lang="scss" scoped>
// TODO: Review old CSS
// .overview-page {
//   &__table-of-contents {
//     position: sticky;
//     top: carbon.$spacing-06;
//   }

//   &__content-section {
//     margin-bottom: carbon.$spacing-10;
//     overflow: hidden;
//   }

//   &__content-section-details {
//     background-color: qiskit.$background-color-lighter;
//     height: 100%;
//   }

//   &__content-section-image {
//     transform: translateX(20%);
//     max-width: 100%;
//     max-height: 30.5rem;

//     &__wrapper {
//       display: flex;
//       justify-content: flex-end;
//     }
//   }
// }
</style>
