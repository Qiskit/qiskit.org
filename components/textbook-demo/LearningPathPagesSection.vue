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
    <main class="learning-path-pages-section__main">Right side</main>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LearningPathPagesSection extends Vue {
  learningPaths = ["One", "Two", "Three"];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.learning-path-pages-section {
  display: grid;
  column-gap: $spacing-07;
  grid-template-areas: ". main main main";
  grid-template-columns: repeat(4, 1fr);

  &__main {
    grid-area: main;
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
      display: inline-block;
      margin-left: 25px;
      max-width: calc(100% - 35px);
      padding: 3px;
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
