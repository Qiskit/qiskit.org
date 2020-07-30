<template>
  <div class="overview-page">
    <header class="the-overview-header">
      <div class="the-overview-header__container">
        <h1 class="the-overview-header__title">
          The most
          <span class="the-overview-header__relevant-word">
            feature rich
          </span><br>
          quantum computing SDK
        </h1>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Learn'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'overview'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';
@include carbon--theme($carbon--theme--white);

.overview-page {
  background-color: white;
}

.the-overview-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);
  min-height: 28rem;

  @include mq($until: large) {
    min-height: 28rem * 40 / 64;
  }

  &__container {
    @include contained();
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 28rem;

    @include mq($until: large) {
      height: 28rem * 40 / 64;
    }
  }

  &__title {
    @include type-style('expressive-heading-05', true);
    color: $white-text-01;
  }

  &__relevant-word {
    font-style: italic;
    background-color: $purple-70;
    color: white;
    padding: $spacing-01 $spacing-03;
  }
}
</style>
