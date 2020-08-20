<template>
  <div class="overview-page">
    <ThePageHeader>
      The most <RelevantWord>feature&nbsp;rich</RelevantWord><br>
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

  activeSection = ''

  _observer: IntersectionObserver | null = null

  mounted () {
    const threshold = [...Array(25).keys()].map(x => 4*x/100)
    const windowTriggerMargins = '-16px 0px -66% 0px'
    this._observer = new IntersectionObserver(
      this._onSectionAppearing,
      {
        root: this.$root.$el,
        rootMargin: windowTriggerMargins,
        threshold
      }
    );
    (this.$el as HTMLElement)
      .querySelectorAll('.overview-page__content-section')
      .forEach(section => {
        (this._observer as IntersectionObserver).observe(section)
      })
  }

  beforeDestroy() {
    this._observer && this._observer.disconnect()
  }

  beforeRouteEnter (route, _, next) {
    next(overviewPage => overviewPage._parseSectionFromUrl(route))
  }

  beforeRouteUpdate (route, _, next) {
    this._parseSectionFromUrl(route)
    next()
  }

  _onSectionAppearing (entries: Array<IntersectionObserverEntry>) {
    let highestTopValue = Infinity
    entries.forEach(entry => {
      const {
        target,
        boundingClientRect,
        rootBounds
      } = entry
      if (!rootBounds) { return }
      const targetTop = boundingClientRect.top
      const triggerWindowTop = rootBounds.top
      const triggerWindowBottom = rootBounds.bottom
      const onTop = targetTop >= 0 && targetTop <= triggerWindowBottom
      if (onTop && targetTop < highestTopValue) {
        this.activeSection = target.id
        highestTopValue = targetTop
      }
    })
  }

  _parseSectionFromUrl (route) {
    this.activeSection = route.hash.substr(1)
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

  &__get-started {
    margin-top: $layout-02;
  }

  &__list-of-contents {
    flex: 1;
  }

  &__content-section {
    margin-bottom: $layout-05;
    overflow: hidden;
  }

  &__content-section-image {
    max-width: 100%;
    max-height: 30.5rem;
  }
}
</style>
