<template>
  <div class="overview-page">
    <PageHeader>
      The most
      <RelevantWord>
        feature rich
      </RelevantWord><br>
      quantum computing SDK
    </PageHeader>
    <section class="overview-page__content-container">
      <div class="overview-page__table-of-contents">TABLE OF CONTENTS</div>
      <div class="overview-page__list-of-contents">
        <ContentSection
          :title="researchAppsSection.title"
          :description="researchAppsSection.description"
          :link="researchAppsSection.link"
        >
          Content Section
        </ContentSection>
        <ContentSection
          :title="libraryOfAlgorithms.title"
          :description="libraryOfAlgorithms.description"
          :link="libraryOfAlgorithms.link"
        >
          Content Section 2
        </ContentSection>
      </div>
    </section>
    <TheQuickStart />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import RelevantWord from '~/components/ui/RelevantWord.vue'
import TheQuickStart from '~/components/landing/TheQuickStart/index.vue'
import ContentSection from '~/components/overview/ContentSection.vue'

@Component({
  components: {
    PageHeader,
    RelevantWord,
    ContentSection,
    TheQuickStart
  },
  head () {
    return {
      title: 'Qiskit Overview'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'overview'

  researchAppsSection = {
    title: 'Research Applications',
    description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
    link: {
      label: 'See docs',
      url: '/'
    }
  }

  libraryOfAlgorithms = {
    title: 'Library of Algorithms',
    description: 'Qiskit contains a library of cross-domain quantum algorithms upon which applications for near-term quantum computing can be built. These algorithms are designed to be extensible, and employs a pluggable framework where quantum algorithms can easily be added. It currently contains machine learning, optimization and core sets of algorithms.',
    link: {
      label: 'See docs',
      url: '/'
    }
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
    margin-bottom: $layout-07 / 2;

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }

  &__table-of-contents {
    width: 20%;
    padding-right: $spacing-07;
    color: black;

    @include mq($until: medium) {
      display: none;
    }
  }

  &__list-of-contents {
    width: 80%;

    @include mq($until: medium) {
      width: 100%;
    }
  }
}
</style>
