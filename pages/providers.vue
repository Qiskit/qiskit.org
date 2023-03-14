<template>
  <div class="providers-page">
    <UiPageHeaderFixed>
      Run Qiskit Compiled circuits on
      <UiTypewriterEffect :values="['real hardware', 'simulators']" />
    </UiPageHeaderFixed>
    <section id="contentContainer" class="cds--grid page-section">
      <div class="cds--row">
        <div class="cds--col-sm-0 cds--col-md-3 cds--col-lg-3">
          <div class="providers-page__table-of-contents">
            <ProvidersTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
          </div>
        </div>
        <div class="cds--col-md-5 cds--col-lg-13">
          <UiIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="providers-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
          >
            <ProvidersContentAccordion
              v-if="section.providers"
              class="providers-page__content-section-details"
              :tabs="asTabs(section.providers)"
            />
          </UiIntroductoryContent>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  ProviderObject,
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

function asTabs(providers: Array<ProviderObject>): Array<ProviderObject> {
  return providers.map((provider) => provider as ProviderObject);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.providers-page {
  &__table-of-contents {
    position: sticky;
    top: carbon.$spacing-11;
  }

  &__content-section {
    margin-bottom: carbon.$spacing-10;
  }

  &__content-section-details {
    background-color: qiskit.$background-color-lighter;
    height: 100%;
  }
}
</style>
