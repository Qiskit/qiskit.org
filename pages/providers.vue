<template>
  <div class="providers-page">
    <LayoutLeadSpaceFixed>
      Run Qiskit compiled
      <br />
      circuits on
      <br class="show-in-md" />
      <UiTypewriterEffect :values="['real hardware', 'simulators']" />
    </LayoutLeadSpaceFixed>
    <section id="contentContainer" class="cds--grid page-section">
      <div class="cds--row">
        <div class="cds--col-sm-0 cds--col-md-3 cds--col-lg-3">
          <div class="providers-page__table-of-contents">
            <ProvidersToc
              :active-section="activeSection"
              :entries="tocEntries"
              title="Run Qiskit with"
            />
            <UiCta
              :url="howToGuideLink.url"
              :label="howToGuideLink.label"
              kind="ghost"
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
            <ProvidersAccordion
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
            :url="howToGuideLink.url"
            :label="howToGuideLink.label"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";
import {
  Provider,
  ProvidersSection,
  TableOfContentEntry,
} from "~/types/providers";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Providers",
  routeName: "providers",
});

const config = useRuntimeConfig();
const description =
  "All the ways you can run Qiskit! From Local Simulators to real Quantum Hardware";

useSeoMeta({
  title: "Qiskit Providers",
  ogTitle: "Qiskit Providers",
  description,
  ogDescription: description,
  ogImage: `${config.public.siteUrl}/images/metal/hero/cryo.png`,
  ogUrl: `${config.public.siteUrl}/providers/`,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const { data: providersData } = await useAsyncData("providers", () =>
  queryContent<ProvidersSection>("/providers/list").find()
);

const contentSections = providersData.value;

if (!contentSections) {
  throw new Error("No providers data found");
}

const tocEntries: TableOfContentEntry[] = contentSections.map((section) => ({
  isSecondary: true,
  sectionId: section.id,
  title: section.title,
}));

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
@use "~/assets/scss/helpers/classes.scss";

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
