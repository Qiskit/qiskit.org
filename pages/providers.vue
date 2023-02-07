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
        <div class="bx--col-sm-0 bx--col-md-2 bx--col-lg-3">
          <div class="providers-page__table-of-contents">
            <TheTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
          </div>
        </div>
        <div class="bx--col-lg-13 bx--col-md-6">
          <AppIntroductoryContent
            v-for="section in contentSections"
            :id="section.id"
            :key="section.id"
            class="providers-page__content-section scrollable"
            :title="section.title"
            :description="section.description"
            :link="section.link"
            :linkset="section.linkset"
          >
            <ContentAccordion
              v-if="section.subSections"
              class="providers-page__content-section-details"
              :tabs="asTabs(section.subSections)"
            />
            <div v-else class="providers-page__content-section-details">
              <div class="providers-page__content-section-image__wrapper">
                <img
                  class="providers-page__content-section-image"
                  :src="section.image"
                >
              </div>
            </div>
          </AppIntroductoryContent>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { ContentAccordionTab } from '~/components/providers/ContentAccordion.vue'
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  ProvidersSubSection
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

  asTabs (subsections: Array<ProvidersSubSection>): Array<ContentAccordionTab> {
    return subsections.map(subsection => subsection as ContentAccordionTab)
  }
}
</script>

<style lang="scss" scoped>
.providers-page {
  &__table-of-contents {
    position: sticky;
    top: $spacing-06;
  }

  &__content-section {
    margin-bottom: $spacing-10;
    overflow: hidden;
  }

  &__content-section-details {
    background-color: $background-color-lighter;
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
