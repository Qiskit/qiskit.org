<template>
  <div class="overview-page">
    <PageHeader>
      The most
      <RelevantWord>
        feature rich
      </RelevantWord><br>
      quantum computing SDK
    </PageHeader>
    <section id="contentContainer" class="overview-page__content-container">
      <div class="overview-page__main-nav-options">
        <TableOfContents />
        <AppCta class="overview-page__get-started" url="">
          Get Started
        </AppCta>
      </div>
      <div class="overview-page__list-of-contents">
        <ContentSection
          v-for="section in contentSections"
          :id="section.id"
          :key="section.id"
          :title="section.title"
          :description="section.description"
          :link="section.link"
        >
          Content {{ section.title }}
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
import TableOfContents from '~/components/overview/TableOfContents.vue'
import TheQuickStart from '~/components/landing/TheQuickStart/index.vue'
import ContentSection from '~/components/overview/ContentSection.vue'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: {
    PageHeader,
    RelevantWord,
    TableOfContents,
    ContentSection,
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

  contentSections = [
    {
      id: 'applications',
      title: 'Research Applications',
      description: 'Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.',
      link: {
        label: 'See docs',
        url: '/'
      }
    },
    {
      id: 'algorithms',
      title: 'Collection of Algorithms',
      description: 'Qiskit contains a generic framework of cross-domain quantum algorithms upon which applications for near-term quantum computing can be built.',
      link: {
        label: 'See docs',
        url: '/'
      }
    },
    {
      id: 'characterization',
      title: 'Experimentalist Toolbox',
      description: 'Qiskit provides a framework for understanding and mitigating noise in quantum circuits and systems. The experiments provided in Qiskit are grouped into the topics of characterization, verification and mitigation.',
      link: {
        label: 'See docs',
        url: '/'
      }
    },
    {
      id: 'circuits',
      title: 'Circuits',
      description: 'Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends.',
      link: {
        label: 'See docs',
        url: '/'
      }
    },
    {
      id: 'simulators',
      title: 'Simulate Quantum Hardware',
      description: 'Qiskit provides a framework for understanding and mitigating noise in quantum circuits and systems. The experiments provided in Qiskit are grouped into the topics of characterization, verification and mitigation.',
      link: {
        label: 'See docs',
        url: '/'
      }
    },
    {
      id: 'hardware',
      title: 'Run Circuits on Real Quantum Systems',
      description: 'Circuits are the foundational roots for our software stack. Qiskit provides a set of tools for composing quantum programs at the level of circuits and pulses, optimizing them for the constraints of a particular physical quantum processor, and managing the batched execution of experiments on remote-access backends. Qiskit is modularly constructed, simplifying the addition of extensions for circuit optimizations and backends.',
      link: {
        label: 'See docs',
        url: '/'
      }
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
    margin-bottom: $layout-07 / 2;

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }

  &__main-nav-options {
    width: 20%;
    padding-right: $spacing-07;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: $layout-02;

    @include mq($until: medium) {
      display: none;
    }
  }

  &__get-started {
    @include type-style('label-01');
    margin-top: $layout-04;
  }

  &__list-of-contents {
    width: 80%;

    @include mq($until: medium) {
      width: 100%;
    }
  }
}
</style>
