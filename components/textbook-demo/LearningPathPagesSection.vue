<template>
  <section class="learning-path-pages-section">
    <div>
      <h2 class="copy__title">Learning path pages</h2>
      <nav class="learning-path-pages-section__nav">
        <ul class="learning-paths">
          <li
            v-for="{ label, progress, url } in learningPaths"
            :key="label"
            class="learning-path"
          >
            <div class="connection" />
            <div class="progress-wrapper">
              <div class="progress" r="10" p="0">
                <svg
                  v-if="progress === 1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 0.125C3.66875 0.125 0.125 3.66875 0.125 8C0.125 12.3313 3.66875 15.875 8 15.875C12.3313 15.875 15.875 12.3313 15.875 8C15.875 3.66875 12.3313 0.125 8 0.125ZM6.875 11.0938L4.0625 8.28125L4.96249 7.4375L6.875 9.29374L11.0375 5.1875L11.9375 6.08749L6.875 11.0938Z"
                    fill="#8A3FFC"
                  />
                </svg>
                <svg
                  v-else-if="progress > 0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M8 2V8L2 10.5L5.5 15L12.5 13.5L15.5 7L12 2H8Z"
                    fill="#8A3FFC"
                  />
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#8A3FFC"
                    stroke-width="2"
                  />
                </svg>
              </div>
            </div>
            <a
              class="entry"
              :class="{ active: label === activeLearningPathLabel }"
              :href="url"
              v-text="label"
              @mouseover="selectLearningPath(label)"
            />
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
        <a href="#">
          <img
            class="learning-path-pages-section__main__preview__image"
            :src="activeLearningPathPreviewImage"
          />
        </a>
        <AppCta
          v-bind="cta"
          class="learning-path-pages-section__main__preview__cta"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LearningPathPagesSection extends Vue {
  learningPaths = [
    {
      image: "why-quantum-computing.png",
      label: "Why quantum computing?",
      progress: 1,
      url: "#",
    },
    { image: "how-it-works.png", label: "How it works", progress: 1, url: "#" },
    {
      image: "introduction-to-quantum-effects.png",
      label: "Introduction to quantum effects",
      progress: 1,
      url: "#",
    },
    {
      image: "formalising-the-fundamentals.png",
      label: "Formalising the fundamentals",
      progress: 0.5,
      url: "#",
    },
    {
      image: "multiple-qubits-entanglement.png",
      label: "Multiple qubits & entanglement",
      progress: 0,
      url: "#",
    },
    { image: "kickback.png", label: "Kickback", progress: 0, url: "#" },
    {
      image: "building-with-gates.png",
      label: "Building with gates",
      progress: 0,
      url: "#",
    },
    {
      image: "creating-quantum-oracle-problems.png",
      label: "Creating quantum oracle problems",
      progress: 0,
      url: "#",
    },
    {
      image: "introduction-to-grover.png",
      label: "Introduction to Grover",
      progress: 0,
      url: "#",
    },
    {
      image: "applied-grover-project.png",
      label: "Applied Grover project",
      progress: 0,
      url: "#",
    },
    { image: "whats-next.png", label: "What’s next", progress: 0, url: "#" },
  ];
  activeLearningPathLabel = "";
  cta = { label: "Go to page", url: "#" };

  get activeLearningPath() {
    const activeLearningPath = this.learningPaths.find(
      ({ label }) => label === this.activeLearningPathLabel
    );
    return activeLearningPath || null;
  }

  get activeLearningPathPreviewImage() {
    if (!this.activeLearningPath) {
      return "";
    }

    const imageUrlBase =
      "/images/textbook-demo/learning-paths/introduction-course";

    return `${imageUrlBase}/${this.activeLearningPath.image}`;
  }

  selectLearningPath(learningPathLabel: string) {
    this.activeLearningPathLabel = learningPathLabel;
  }

  selectFirstUnfinishedLearningPath() {
    const firstUnfinishedLearningPath = this.learningPaths.find(
      ({ progress }) => progress < 1
    );

    if (firstUnfinishedLearningPath) {
      this.selectLearningPath(firstUnfinishedLearningPath.label);
    } else {
      this.selectLearningPath(this.learningPaths[0].label);
    }
  }

  mounted() {
    this.selectFirstUnfinishedLearningPath();
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

    .connection {
      border: 1px black solid;
      height: calc(100% - 12px);
      left: 9px;
      pointer-events: none;
      position: absolute;
      top: 24px;
    }

    .entry {
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

    .progress {
      border: 2px black solid;
      border-radius: 100%;
      box-sizing: border-box;
      display: inline-block;
      height: 20px;
      width: 20px;
    }

    .progress-wrapper {
      display: inline-block;
      height: 20px;
      width: 20px;
      position: absolute;
      top: 5px;
    }

    &:last-of-type {
      .connection {
        display: none;
      }
    }
  }
}
</style>
