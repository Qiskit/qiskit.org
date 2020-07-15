<template>
  <div class="learn-page">
    <header class="the-learn-header">
      <div class="the-learn-header__container">
        <h1 class="the-learn-header__title">
          A Carefully Worded Summary of<br>
          Quantum Computing for
          <span class="the-learn-header__relevant-word">Beginners</span>
        </h1>
      </div>
    </header>
    <section class="the-learning-resources-list">
      <div class="the-learning-resources-list__container">
        <TheCarefulExplanationForBeginner
          class="the-learning-resources-list__item"
          hide-title
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import TheCarefulExplanationForBeginner from '~/components/learn/TheCarefulExplanationForBeginner.vue'

@Component({
  components: {
    TheCarefulExplanationForBeginner
  },

  head () {
    return {
      title: 'Qiskit Learn - A Carefully Worded Summary of Quantum Computing for Beginners'
    }
  }
})

export default class extends QiskitPage {
  routeName = 'learn-summary-advanced'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';
@include carbon--theme($carbon--theme--white);

.learn-page {
  background-color: white;
}

.the-learn-header {
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

.the-learning-resources-list {
  @include responsive-grid-bg('/images/grid/grid-left-inverted.svg', 36rem);
  background-repeat: no-repeat;
  background-position: left bottom;

  &__container {
    @include contained();
  }

  &__layout {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      display: block;
    }
  }

  &__filter-level {
    margin-bottom: $layout-04;

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }

  &__filter-time {
    width: 25%;
    margin-right: $layout-03;
    color: $cool-gray-80;
    flex: initial;

    @include mq($until: medium) {
      width: auto;
      margin-right: 0;
      margin-bottom: $layout-03;
    }
  }

  &__filter-time-label {
    margin-bottom: $layout-01;
    white-space: nowrap;
  }

  &__item {
    margin-bottom: $layout-02;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }

  &__small-only {
    @include mq($from: medium) {
      display: none;
    }
  }

  &__medium-large-only {
    @include mq($until: medium) {
      display: none;
    }
  }

  &__results {
    flex: auto;

    @include mq($until: medium) {
      width: 100%;
    }
  }
}
</style>

<style lang="scss">
@import '~/assets/scss/blocks/copy.scss';
/**
 * TODO: Review if there is some mechanism, inside the Carbon Themes
 * framework, for applying a different theme to an specific component (#703).
 *
 * If there is not, we need some alternative way of overriding component
 * internal CSS. The following approach takes advantage of BEM methodology
 * and CSS specificity to override the internal CSS.
 */
.the-learning-resources-list {
  &__filter-level {
    & a.bx--tabs__nav-link {
      color: $cool-gray-80;
      border-bottom-color: $cool-gray-20;

      &:focus,
      &:active {
        outline: none;
      }

      &:not(.bx--tabs__nav-item--disabled) {
        color: $cool-gray-80;
      }
    }

    & .bx--tabs__nav-item {
      &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
      &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
        color: $cool-gray-80;
      }

      &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $purple-70;
      }
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
      box-shadow: none;
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
    & .bx--tabs__nav-item,
    & .bx--tabs-trigger {
      background-color: white;

      svg {
        fill: $gray-100;
      }
    }

    & .bx--tabs__nav-link,
    & .bx--tabs-trigger-text {
      color: $gray-100;
    }
  }

  &__filter-time {
    & .bx--dropdown,
    & .bx--dropdown-item {
      background-color: white;

        svg {
          fill: $gray-100;
        }
    }

    & .bx--dropdown-item:hover,
    & .bx--dropdown--show-selected .bx--dropdown--selected:hover {
      // To match default light theme UI hover, which is not among the Carbon
      // palette. 🤦
      background-color: #e5e5e5;
    }

    & .bx--dropdown-link,
    & .bx--dropdown-text {
      color: $gray-100;
      border-top-color: #dde1e6;
    }

    & .bx--dropdown--show-selected .bx--dropdown--selected .bx--dropdown-link {
      border-top-color: #dde1e6;
      border-bottom-color: #dde1e6;
    }

    & .bx--dropdown-link:hover {
      border-bottom-color: #dde1e6;
    }
  }

  & .bx--radio-button__appearance {
    border-color: black;
  }
}
</style>
