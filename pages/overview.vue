<template>
  <div class="overview-page">
    <ThePageHeader>
      The most
      <RelevantWord>
        feature rich
      </RelevantWord><br>
      quantum computing SDK
    </ThePageHeader>
    <section id="contentContainer" class="overview-page__content-container">
      <div class="overview-page__main-nav-options">
        <TheTableOfContents :elements="tableOfContentsElements" />
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
          <ContentAccordion v-if="section.subSections" :elements="section.subSections" />
          <img v-else :src="section.image">
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
import ContentAccordion from '~/components/overview/ContentAccordion.vue'
import AppCta from '~/components/ui/AppCta.vue'
import {
  RESEARCH_APPS_IN_MENU,
  RESEARCH_APPS,
  ALGORITHMS_COLLECTION_IN_MENU,
  ALGORITHMS_COLLECTION,
  EXPERIMENTALIST_TOOLBOX_IN_MENU,
  EXPERIMENTALIST_TOOLBOX,
  CIRCUITS_IN_MENU,
  CIRCUITS
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

  tableOfContentsElements = [
    {
      url: '#applications',
      label: 'Write quantum code'
    },
    RESEARCH_APPS_IN_MENU,
    ALGORITHMS_COLLECTION_IN_MENU,
    EXPERIMENTALIST_TOOLBOX_IN_MENU,
    CIRCUITS_IN_MENU,
    {
      url: '#simulators',
      label: 'Run Quantum Code'
    },
    {
      url: '#simulators',
      label: 'Simulators',
      isSecondary: true
    },
    {
      url: '#hardware',
      label: 'Hardware',
      isSecondary: true
    }
  ]

  contentSections = [
    RESEARCH_APPS,
    ALGORITHMS_COLLECTION,
    EXPERIMENTALIST_TOOLBOX,
    CIRCUITS,
    {
      id: 'simulators',
      title: 'Simulate Quantum Hardware',
      description: 'Qiskit provides a framework for understanding and mitigating noise in quantum circuits and systems. The experiments provided in Qiskit are grouped into the topics of characterization, verification and mitigation.',
      link: {
        label: 'See docs',
        url: '/'
      },
      image: '/images/qiskit-logo.png'
    },
    {
      id: 'hardware',
      title: 'Run Circuits on Real Quantum Systems',
      description: 'Circuits are the foundational roots for our software stack. Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends. Qiskit is modularly constructed, simplifying the addition of extensions for circuit optimizations and backends.',
      link: {
        label: 'See docs',
        url: '/'
      },
      image: '/images/qiskit-logo.png'
    }
  ]
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
  }
}
</style>
