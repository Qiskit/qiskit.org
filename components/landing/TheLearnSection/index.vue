<template>
  <article class="the-learn-section">
    <div
      class="
        the-learn-section__container
        landing-page__util
        landing-page__util_vertical-spacer
      "
    >
      <h2 class="landing-page__title">
        Learn with Qiskit
      </h2>
      <LearnCard />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import LearnCard from '~/components/landing/TheLearnSection/LearnCard.vue'

@Component({ components: { LearnCard } })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';

.the-learn-section {
  @include responsive-grid-bg('/images/grid/grid-left.svg', 36rem);
  background-repeat: no-repeat;
  background-position: left bottom -2px;

  &__container {
    @include contained();
  }
}
</style>
