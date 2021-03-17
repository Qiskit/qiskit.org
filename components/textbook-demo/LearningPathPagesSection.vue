<template>
  <section class="learning-path-pages-section">
    <div>
      <h2 class="copy__title">
        Learning path pages
      </h2>
      <nav class="learning-path-pages-section__nav">
        <ul class="learning-paths">
          <li
            v-for="{ label, progress, segment, url } in learningPaths"
            :key="label"
            class="learning-path"
          >
            <div class="learning-path__connection" />
            <ProgressCircle absolute :progress="progress" />
            <BasicLink
              class="learning-path__entry"
              :class="{ active: label === activeLearningPathLabel }"
              :segment="segment"
              :url="url"
              @mouseenter="selectLearningPath(label)"
            >
              {{ label }}
            </BasicLink>
          </li>
        </ul>
      </nav>
    </div>
    <main class="learning-path-pages-section__main">
      <div class="learning-path-pages-section__main__title-wrapper">
        <div class="learning-path-pages-section__main__title copy__subtitle">
          Page preview
        </div>
      </div>
      <div class="learning-path-pages-section__main__preview">
        <BasicLink :url="activeLearningPath.url">
          <img
            class="learning-path-pages-section__main__preview__image"
            :src="activeLearningPathPreviewImage"
          >
        </BasicLink>
        <AppCta
          v-bind="activeLearningPath"
          label="Go to page"
          class="learning-path-pages-section__main__preview__cta"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { SegmentData } from '~/constants/appLinks'

interface LearningPath {
  image: string;
  label: string;
  progress: Number;
  segment: SegmentData;
  url: string;
}

@Component
export default class LearningPathPagesSection extends Vue {
  activeLearningPathLabel = '';
  segmentActionBase = 'introduction-course > learning-paths >'

  learningPaths: LearningPath[] = [
    {
      image: 'introduction-page-preview.png',
      label: 'Introduction',
      progress: 1,
      segment: { action: `${this.segmentActionBase} introduction` },
      url: 'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/introduction'
    },
    {
      image: 'the-atoms-of-computation-page-preview.png',
      label: 'The Atoms of Computation',
      progress: 1,
      segment: { action: `${this.segmentActionBase} the-atoms-of-computation` },
      url: 'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/the-atoms-of-computation'
    },
    {
      image: 'representing-qubits-states-page-preview.png',
      label: 'Representing Qubit States',
      progress: 0.6,
      segment: { action: `${this.segmentActionBase} representing-qubits-states` },
      url: 'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/representing-qubit-states'
    },
    {
      image: 'single-qubits-gates-page-preview.png',
      label: 'Single Qubits Gates',
      progress: 0,
      segment: { action: `${this.segmentActionBase} single-qubits-gates` },
      url: 'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/single-qubit-gates'
    },
    {
      image: 'the-case-for-quantum-page-preview.png',
      label: 'The Case for Quantum',
      progress: 0,
      segment: { action: `${this.segmentActionBase} the-case-for-quantum` },
      url: 'https://project-platypus-default.apis-dev-5dd5718798d097eccc65fac4e78a33ce-0000.us-south.containers.appdomain.cloud/course/learning-states-and-qubits/the-case-for-quantum-computers'
    }
  ]

  get activeLearningPath () {
    const activeLearningPath = this.learningPaths.find(
      ({ label }) => label === this.activeLearningPathLabel
    )
    return activeLearningPath || null
  }

  get activeLearningPathPreviewImage () {
    if (!this.activeLearningPath) {
      return ''
    }

    const imageUrlBase =
      '/images/textbook-demo/learning-paths/introduction-course'

    return `${imageUrlBase}/${this.activeLearningPath.image}`
  }

  selectLearningPath (learningPathLabel: string) {
    this.activeLearningPathLabel = learningPathLabel
  }

  selectFirstUnfinishedLearningPath () {
    const firstUnfinishedLearningPath = this.learningPaths.find(
      ({ progress }) => progress < 1
    )

    if (firstUnfinishedLearningPath) {
      this.selectLearningPath(firstUnfinishedLearningPath.label)
    } else {
      this.selectLearningPath(this.learningPaths[0].label)
    }
  }

  created () {
    this.selectFirstUnfinishedLearningPath()
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.learning-path-pages-section {
  display: grid;
  column-gap: $spacing-07;
  grid-template-areas: ". main main .";
  grid-template-columns: repeat(4, 1fr);

  @include mq($until: large) {
    grid-template-areas: ". main main main";
  }

  @include mq($until: medium) {
    grid-template-areas: ".";
    grid-template-columns: 1fr;
  }

  &__main {
    grid-area: main;

    @include mq($until: medium) {
      display: none;
    }

    &__title {
      border-bottom: 4px solid $purple-60;
      display: inline;
      padding-bottom: $spacing-02;
      padding-right: $spacing-03;

      &-wrapper {
        margin: $spacing-06 0;
      }
    }

    &__preview {
      background: $cool-gray-10;
      padding: $spacing-05;
      position: relative;

      &__image {
        width: 100%;
      }

      &__cta {
        bottom: $spacing-05;
        position: absolute;
        right: $spacing-05;
      }
    }
  }

  &__nav {
    margin-right: -$spacing-07;

    @include mq($until: medium) {
      margin-right: initial;
    }
  }
}

.learning-paths {
  .learning-path {
    margin: 0 0 0.5em;
    position: relative;

    &__connection {
      border: 1px black solid;
      height: calc(100% - 12px);
      left: 9px;
      pointer-events: none;
      position: absolute;
      top: 24px;
    }

    &__entry {
      @include type-style("body-long-01");
      color: $cool-gray-80;
      display: inline-block;
      margin-left: 25px;
      max-width: calc(100% - 25px);
      padding: $spacing-02 $spacing-03;
      text-decoration: none;
      width: 100%;

      &.active {
        background: $cool-gray-10;
        font-weight: 600;

        @include mq($until: medium) {
          background: initial;
        }
      }
    }

    &:last-of-type {
      .learning-path__connection {
        display: none;
      }
    }
  }
}
</style>
