<template>
  <div class="providers-page">
    <AppPageHeaderFixed>
      Run Qiskit Compiled circuits on
      <TypewriterEffect
        :values="[
          'real hardware',
          'simulators',
        ]"
      />
    </AppPageHeaderFixed>
    <section
      id="contentContainer"
      class="bx--grid page-section"
    >
      <div class="bx--row">
        <div class="bx--col-sm-0 bx--col-md-3 bx--col-lg-3">
          <div class="providers-page__table-of-contents">
            <TheTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
            <AppCta
              v-bind="howToGuideLink"
              kind="ghost"
            />
          </div>
        </div>
        <div class="bx--col-md-5 bx--col-lg-13">
          <AppIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="providers-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
          >
            <ContentAccordion
              v-if="section.providers"
              class="providers-page__content-section-details"
              :tabs="asTabs(section.providers)"
            />
          </AppIntroductoryContent>
        </div>
      </div>
      <div class="bx--row providers-page__join-section">
        <div class="bx--col-md-5 bx--offset-lg-3 bx--col-lg-5">
          <h2>Become a provider</h2>
          <p>Are you looking to integrate with Qiskit? Become a provider and enable your quantum device or simulator to be used with our SDK. Check out our guides on how to write a new provider, and join our community of providers today to help accelerate the development of quantum computing.</p>
          <AppCta class="providers-page__join-section__cta" v-bind="howToGuideLink" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  ProviderObject
} from '~/constants/providersContent'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

@Component({
  mixins: [ScrollSectionsMixin],
  head () {
    return {
      title: 'Qiskit Providers'
    }
  },
  layout: 'default-max'
})
export default class ProvidersPage extends QiskitPage {
  routeName = 'providers'

  tocEntries = TABLE_OF_CONTENTS
  contentSections = CONTENT_SECTIONS

  howToGuideLink = {
    url: 'https://qiskit.org/documentation/apidoc/providers.html#writing-a-new-provider',
    label: 'Become a provider'
  }

  asTabs (providers: Array<ProviderObject>): Array<ProviderObject> {
    return providers.map(provider => provider as ProviderObject)
  }
}
</script>

<style lang="scss" scoped>
.providers-page {
  &__table-of-contents {
    position: sticky;
    top: $spacing-11;
  }

  &__content-section {
    margin-bottom: $spacing-10;
  }

  &__content-section-details {
    background-color: $background-color-lighter;
    height: 100%;
  }

  &__join-section {
    padding-top: $spacing-09;

    @include mq($until: medium) {
      padding-top: initial;
    }

    &__cta {
      margin-top: $spacing-07;
    }
  }
}
</style>
