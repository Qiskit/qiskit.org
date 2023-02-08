<template>
  <div class="providers-page">
    <UiPageHeaderFixed>
      Run Qiskit Compiled circuits on
      <UiTypewriterEffect :values="['real hardware', 'simulators']" />
    </UiPageHeaderFixed>
    <section id="contentContainer" class="cds--grid page-section">
      <div class="cds--row">
        <div class="cds--col-sm-0 cds--col-md-2 cds--col-lg-3">
          <div class="providers-page__table-of-contents">
            <ProvidersTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
          </div>
        </div>
        <div class="cds--col-lg-13 cds--col-md-6">
          <UiIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="providers-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
            :link="section.link"
            :linkset="section.linkset"
          >
            <ProvidersContentAccordion
              v-if="section.subSections"
              class="providers-page__content-section-details"
              :tabs="asTabs(section.subSections)"
            />
            <div v-else class="providers-page__content-section-details">
              <div class="providers-page__content-section-image__wrapper">
                <img
                  class="providers-page__content-section-image"
                  :src="section.image"
                />
              </div>
            </div>
          </UiIntroductoryContent>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ContentAccordionTab } from "~/components/Providers/ProvidersContentAccordion.vue";
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  ProvidersSubSection,
} from "~/constants/providersContent";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Providers",
  routeName: "providers",
});

useHead({
  title: "Qiskit Providers",
});

const tocEntries = TABLE_OF_CONTENTS;
const contentSections = CONTENT_SECTIONS;

const { activeSection } = useScrollBetweenSections();

function asTabs(
  subsections: Array<ProvidersSubSection>
): Array<ContentAccordionTab> {
  return subsections.map((subsection) => subsection as ContentAccordionTab);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.providers-page {
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
