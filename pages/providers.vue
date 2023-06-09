<template>
  <div class="providers-page">
    <UiPageHeaderFixed>
      Run Qiskit compiled <br />
      circuits on<br />
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
            <UiCta v-bind="howToGuideLink" kind="ghost" />
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
      <div class="cds--row providers-page__join-section">
        <div class="cds--col-md-5 bx--offset-lg-3 cds--col-lg-5">
          <h2>Become a provider</h2>
          <p>
            Are you looking to integrate with Qiskit? Become a provider and
            enable your quantum device or simulator to be used with our SDK.
            Check out our guides on how to write a new provider, and join our
            community of providers today to help accelerate the development of
            quantum computing.
          </p>
          <UiCta
            class="providers-page__join-section__cta"
            v-bind="howToGuideLink"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type {
  Provider,
  ProvidersSection,
  TableOfContentEntry,
} from "~/types/providers";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Providers",
  routeName: "providers",
});

const config = useRuntimeConfig();

useSeoMeta({
  title: "Qiskit Providers",
  ogTitle: "Qiskit Providers",
  description:
    "All the ways you can run Qiskit! From Local Simulators to real Quantum Hardware",
  ogDescription:
    "All the ways you can run Qiskit! From Local Simulators to real Quantum Hardware",
  ogImage: `${config.public.siteUrl}/images/metal/hero/cryo.png`,
  ogUrl: `${config.public.siteUrl}/providers/`,
});

const { data: providersData } = await useAsyncData("providers", () =>
  queryContent<ProvidersSection>("/providers/list").find()
);

const contentSections = providersData.value;

if (!contentSections) {
  throw new Error("No providers data found");
}

const tocEntries: TableOfContentEntry[] = [
  {
    title: "Run Qiskit with",
  },
  ...contentSections.map((section) => ({
    isSecondary: true,
    sectionId: section.id,
    title: section.title,
  })),
];

const { activeSection } = useScrollBetweenSections();

const howToGuideLink = {
  url: "https://qisk.it/writing-a-new-provider",
  label: "Become a provider",
};

function asTabs(providers: Array<Provider>): Array<Provider> {
  return providers.map((provider) => provider as Provider);
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

  &__join-section {
    padding-top: carbon.$spacing-09;

    @include carbon.breakpoint-down(md) {
      padding-top: initial;
    }

    &__cta {
      margin-top: carbon.$spacing-07;
    }
  }
}
</style>
