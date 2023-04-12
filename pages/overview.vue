<template>
  <div class="overview-page">
    <UiPageHeaderFixed>
      The most
      <UiTypewriterEffect
        :values="['feature-rich', 'modular', 'open', 'popular']"
      />
      quantum computing SDK
    </UiPageHeaderFixed>
    <section id="contentContainer" class="cds--grid page-section">
      <div class="cds--row">
        <div class="cds--col-sm-0 cds--col-md-2 cds--col-lg-3">
          <div class="overview-page__table-of-contents">
            <OverviewTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
            <UiCta
              kind="ghost"
              :label="quickStartLink.label"
              :url="quickStartLink.url"
            />
          </div>
        </div>
        <div class="cds--col-lg-13 cds--col-md-6">
          <UiIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="overview-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
            :link="section.link"
            :linkset="section.linkset"
          >
            <OverviewContentAccordion
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
          </UiIntroductoryContent>
        </div>
      </div>
    </section>
    <LandingQuickStartComponent id="quick-start" />
  </div>
</template>

<script setup lang="ts">
import { ContentAccordionTab } from "~/components/Overview/OverviewContentAccordion.vue";
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  OverviewSubSection,
} from "~/constants/overviewContent";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Overview",
  routeName: "overview",
});

useHead({
  title: "Qiskit Overview",
});

const tocEntries = TABLE_OF_CONTENTS;
const contentSections = CONTENT_SECTIONS;

const { activeSection } = useScrollBetweenSections();

const quickStartLink = {
  url: "#quick-start",
  label: "Get Started",
};

function asTabs(
  subsections: Array<OverviewSubSection>
): Array<ContentAccordionTab> {
  return subsections.map((subsection) => subsection as ContentAccordionTab);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.overview-page {
  &__table-of-contents {
    position: sticky;
    top: carbon.$spacing-06;
  }

  &__content-section {
    margin-bottom: carbon.$spacing-10;
    overflow: hidden;
  }

  &__content-section-details {
    background-color: qiskit.$background-color-lighter;
    height: 100%;
  }

  &__content-section-image {
    transform: translateX(20%);
    max-width: 100%;
    max-height: 30.5rem;

    &__wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
