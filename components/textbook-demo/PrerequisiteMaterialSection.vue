<template>
  <section class="prerequisite-material-section">
    <h2 class="copy__title">
      Prerequisite material
    </h2>
    <div class="prerequisite-material-section__cards">
      <article
        v-for="{ title, description, progress, segment, url } in prerequisites"
        :key="title"
        class="prerequisite-material-section__card"
      >
        <div>
          <header
            class="prerequisite-material-section__card__headline"
            v-text="title"
          />
          <main
            class="prerequisite-material-section__card__description"
            v-text="description"
          />
        </div>
        <footer class="prerequisite-material-section__card__footer">
          <AppCta
            class="prerequisite-material-section__card__cta"
            kind="ghost"
            label="Go to page"
            :segment="segment"
            :url="url"
          />
          <ProgressCircle :progress="progress" />
        </footer>
      </article>
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
        'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/prerequisites/environment-setup-guide-to-work-with-qiskit-textbook'
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
        'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/prerequisites/introduction-to-python-and-jupyter-notebooks'
    },
    {
      title: 'What is quantum?',
      description:
        '‘Quantum physics’ is a term widely used but much less understood. It is a mathematical model first used to describe the...',
      progress: 0,
      segment: { action: `${this.segmentActionBase} what-is-quantum` },
      url:
        'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/getting-started/what-is-quantum'
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.prerequisite-material-section {
  &__card {
    align-content: space-between;
    background: $cool-gray-10;
    color: $cool-gray-80;
    display: grid;
    padding: $spacing-05 $spacing-05 0;

    &__headline {
      @include type-style("productive-heading-02");
    }

    &__description {
      @include type-style('body-long-01');
      margin-top: $spacing-05;
    }

    &__footer {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin-top: $spacing-09;
    }

    &__cta {
      width: max-content !important;
    }
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
