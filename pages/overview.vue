<template>
  <div class="overview-page">
    <ThePageHeader>
      The most <RelevantWord>feature&nbsp;rich</RelevantWord><br>
      quantum computing SDK
    </ThePageHeader>
    <section id="contentContainer" class="overview-page__content-container">
      <div class="overview-page__main-nav-options">
        <TheTableOfContents :entries="tocEntries" />
        <AppCta class="overview-page__get-started" url="#quick-start">
          Get Started
        </AppCta>
      </div>
      <div class="overview-page__list-of-contents">
        <ContentSection
          v-for="section in contentSections"
          :id="section.id"
          :key="section.id"
          class="overview-page__content-section"
          :title="section.title"
          :description="section.description"
          :link="section.link"
        >
          <ContentAccordion
            v-if="section.subSections"
            :tabs="asTabs(section.subSections)"
          />
          <img
            v-else
            class="overview-page__content-section__image"
            :src="section.image"
          >
        </ContentSection>
      </div>
    </section>
    <TheQuickStart id="quick-start" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import ThePageHeader from '~/components/ui/ThePageHeader.vue'
import RelevantWord from '~/components/ui/RelevantWord.vue'
import TheTableOfContents from '~/components/overview/TheTableOfContents.vue'
import TheQuickStart from '~/components/landing/TheQuickStart/index.vue'
import ContentSection from '~/components/overview/ContentSection.vue'
import ContentAccordion, { ContentAccordionTab } from '~/components/overview/ContentAccordion.vue'
import AppCta from '~/components/ui/AppCta.vue'
import {
  TABLE_OF_CONTENTS,
  CONTENT_SECTIONS,
  OverviewSubSection
} from '~/constants/overviewContent'

@Component({
  components: {
    ThePageHeader,
    RelevantWord,
    TheTableOfContents,
    ContentSection,
    ContentAccordion,
    TheQuickStart,
    AppCta
  },
  head () {
    return {
      title: 'Qiskit Overview'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'overview'

  tocEntries = TABLE_OF_CONTENTS
  contentSections = CONTENT_SECTIONS

  asTabs (subsections: Array<OverviewSubSection>): Array<ContentAccordionTab> {
    return subsections.map(subsection => subsection as ContentAccordionTab)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.overview-page {
  background-color: white;

  &__content-container {
    @include contained();
    display: flex;
    align-items: flex-start;
    overflow: visible;
    margin-bottom: $layout-05;

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }

  &__main-nav-options {
    width: 20%;
    padding-right: $spacing-07;
    position: sticky;
    top: $layout-02;

    @include mq($until: medium) {
      display: none;
    }
  }

  &__get-started {
    margin-top: $layout-02;
  }

  &__list-of-contents {
    width: 80%;

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__content-section {
    width: 100%;
    margin-bottom: $layout-07 / 2;

    &__image {
      height: 30.5rem;
    }
  }
}
</style>
