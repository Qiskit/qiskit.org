<template>
  <section class="learning-path-pages-section">
    <div>
      <h2 class="copy__title">Learning path pages</h2>
      <nav class="learning-path-pages-section__nav">
        <ul class="learning-paths">
          <li
            v-for="learningPath in learningPaths"
            :key="learningPath"
            class="learning-path"
          >
            <div class="connection" />
            <div class="progress-wrapper">
              <div class="progress" r="10" p="0">
                <svg width="44" height="44" />
              </div>
            </div>
            <a class="entry" href="#" v-text="learningPath" />
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
        <img
          class="learning-path-pages-section__main__preview__image"
          src="/images/textbook-demo/learning-paths/introduction-course/page-preview.png"
        />
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
  learningPaths = ["One", "Two", "Three"];
  cta = { label: "Go to page", url: "#" };
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.learning-path-pages-section {
  display: grid;
  column-gap: $spacing-07;
  grid-template-areas: ". main main .";
  grid-template-columns: repeat(4, 1fr);

  &__main {
    grid-area: main;

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
      max-width: calc(100% - 35px);
      padding: $spacing-02 $spacing-03;
      text-decoration: none;
      width: 100%;

      &.active {
        background: $cool-gray-10;
        font-weight: 600;
      }
    }

    .progress {
      border: 2px black solid;
      border-radius: 100%;
      box-sizing: border-box;
      display: inline-block;
      height: 20px;
      width: 20px;

      svg {
        margin: -14px;
        position: relative;
        z-index: -1;
      }
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
