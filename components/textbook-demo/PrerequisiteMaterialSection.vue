<template>
  <section class="prerequisite-material-section">
    <h2 class="copy__title">
      Prerequisite material
    </h2>
    <div class="prerequisite-material-section__cards">
      <AppDescriptionCard
        v-for="{ title, description, progress, segment, url } in prerequisites"
        :key="title"
        :description="description"
        class="prerequisite-material-section__card"
        :cta="{ label: 'Go to page', segment, url}"
        :title="title"
      >
        <template slot="footer-append">
          <ProgressCircle :progress="progress" />
        </template>
      </AppDescriptionCard>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { SegmentData } from '~/constants/appLinks'

interface Prerequisite {
  title: string;
  description: string;
  progress: Number;
  segment: SegmentData;
  url: string;
}

@Component
export default class PrerequisiteMaterialSection extends Vue {
  segmentActionBase = 'introduction-course > prerequisite-material >'

  prerequisites: Prerequisite[] = [
    {
      title: 'Setting Up Your Environment',
      description:
        'This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook.',
      progress: 1,
      segment: {
        action: `${this.segmentActionBase} setting-up-your-environment`
      },
      url:
        'https://platypus.qiskit.org/course/prerequisites/environment-setup-guide-to-work-with-qiskit-textbook'
    },
    {
      title: 'Python and Jupyter Notebooks',
      description:
        "Python is a programming language where you don't need to compile. You can just run it line by line...",
      progress: 0.5,
      segment: {
        action: `${this.segmentActionBase} python-and-jupyter-notebooks`
      },
      url:
        'https://platypus.qiskit.org/course/prerequisites/introduction-to-python-and-jupyter-notebooks'
    },
    {
      title: 'What is Quantum?',
      description:
        '‘Quantum physics’ is a term widely used but much less understood. It is a mathematical model first used to describe the...',
      progress: 0,
      segment: { action: `${this.segmentActionBase} what-is-quantum` },
      url:
        'https://platypus.qiskit.org/course/getting-started/what-is-quantum'
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.prerequisite-material-section {
  &__card {
    align-items: strech;
    background: $cool-gray-10;
    color: $cool-gray-80;
    display: flex;
    padding: $spacing-05 $spacing-05 0;
  }

  &__cards {
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);
    row-gap: $spacing-07;

    @include mq($until: medium) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($until: small) {
      grid-template-columns: 1fr;
      row-gap: $spacing-05;
    }
  }
}
</style>
