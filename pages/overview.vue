<template>
  <div class="overview-page">
    <ThePageHeader>
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
    </ThePageHeader>
    <section
      id="contentContainer"
      class="
        copy__util
        copy__util_vertical-spacer
        overview-page__content-container
      "
    >
      <div class="overview-page__table-of-contents">
        <TheTableOfContents
          :entries="tocEntries"
          :active-section="activeSection"
        />
        <AppCta
          v-bind="quickStartLink"
          kind="ghost"
        />
      </div>
      <div class="overview-page__list-of-contents">
        <ContentSection
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
            :tabs="asTabs(section.subSections)"
          />
          <img
            v-else
            class="overview-page__content-section-image"
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
  }
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

  &__table-of-contents {
    position: sticky;
    top: $layout-02;
    flex: 0 0 (3 * $column-size-large);

    @include mq($from: medium, $until: large) {
      flex: 0 0 (2 * $column-size-medium);
    }

    @include mq($until: medium) {
      display: none;
    }
  }

  &__list-of-contents {
    flex: 1;
  }

  &__content-section {
    margin-bottom: $layout-05;
    overflow: hidden;
  }

  &__content-section-image {
    position: relative;
    right: -20%;
    max-width: 100%;
    max-height: 30.5rem;
  }
}
</style>
