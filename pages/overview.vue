<template>
  <div class="overview-page">
    <AppPageHeaderFixed>
      The most
      <TypewriterEffect
        :values="[
          'feature-rich',
          'modular',
          'open',
          'popular'
        ]"
      />
      quantum computing SDK
    </AppPageHeaderFixed>
    <section
      id="contentContainer"
      class="
        page-section
        overview-page__content-container
      "
    >
      <div class="bx--row">
        <div class="bx--col-lg-3 bx--col-md-2 bx--col-sm-0 overview-page__table-of-contents">
          <div class="overview-page__table-of-contents__sticky-wrapper">
            <TheTableOfContents
              :entries="tocEntries"
              :active-section="activeSection"
            />
            <AppCta
              v-bind="quickStartLink"
              kind="ghost"
            />
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
          >
            <ContentAccordion
              v-if="section.subSections"
              class="overview-page__content-section-details"
              :tabs="asTabs(section.subSections)"
            />
            <div v-else class="overview-page__content-section-details">
              <img
                class="overview-page__content-section-image"
                :src="section.image"
              >
            </div>
          </AppIntroductoryContent>
        </div>
      </div>
    </section>
    <TheQuickStart id="quick-start" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { ContentAccordionTab } from '~/components/overview/ContentAccordion.vue'
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  OverviewSubSection
} from '~/constants/overviewContent'
import ScrollSectionsMixin from '~/mixins/scrollBetweenSections'

@Component({
  mixins: [ScrollSectionsMixin],
  head () {
    return {
      title: 'Qiskit Overview'
    }
  },
  layout: 'default-max',
})
export default class OverviewPage extends QiskitPage {
  routeName = 'overview'

  tocEntries = TABLE_OF_CONTENTS
  contentSections = CONTENT_SECTIONS

  quickStartLink = {
    url: '#quick-start',
    label: 'Get Started'
  }

  asTabs (subsections: Array<OverviewSubSection>): Array<ContentAccordionTab> {
    return subsections.map(subsection => subsection as ContentAccordionTab)
  }
}
</script>

<style lang="scss" scoped>
.overview-page {
  &__content-container {
    @include contained();

    display: flex;
    align-items: flex-start;
    overflow: visible;
  }

  &__table-of-contents {
    &__sticky-wrapper {
      position: sticky;
      top: $layout-02;
    }
  }

  &__content-section {
    margin-bottom: $layout-05;
    overflow: hidden;
  }

  &__content-section-details {
    background-color: $background-color-lighter;
    height: 100%;
  }

  &__content-section-image {
    position: relative;
    right: -20%;
    max-width: 100%;
    max-height: 30.5rem;
  }
}
</style>
