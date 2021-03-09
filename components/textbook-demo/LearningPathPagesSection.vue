<template>
  <section class="learning-path-pages-section">
    <div>
      <h2 class="copy__title">
        Learning path pages
      </h2>
      <nav class="learning-path-pages-section__nav">
        Paths nav
      </nav>
    </div>
    <main class="learning-path-pages-section__main">Right side</main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class LearningPathPagesSection extends Vue {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.learning-path-pages-section {
  display: grid;
  column-gap: $spacing-07;
  grid-template-areas: '. main main main';
  grid-template-columns: repeat(4, 1fr) ;

  &__main {
    grid-area: main;
  }

  &__nav {
    margin-right: -$spacing-07;
  }
}
</style>
