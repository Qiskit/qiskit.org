<template>
  <div class="learn-entry">
    <header class="learn-entry__header">
      <div class="learn-entry__header__container">
        <h1 class="learn-entry__header__title">
          {{ pageContent.attributes.title }}
        </h1>
      </div>
    </header>
    <!-- TODO: We should migrate to nuxt-content and get rid of this. -->
    <!-- eslint-disable vue/no-v-html -->
    <main class="learn-entry__content" v-html="pageContent.html" />
    <!-- eslint-enable -->
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    const self = this as any

    return { title: self.title }
  },
  async asyncData (context: Context) {
    const sourceName = context.route.params.slug
    if (sourceName === 'undefined') {
      return
    }
    const pageContent = await import(`~/content/learn/${sourceName}.md`)
    return { pageContent }
  }
})
export default class LearnEntry extends QiskitPage {
  routeName = 'learn-entry'
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.learn-entry {
  background-color: white;

  &__header {
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
  }

  &__content {
    @include contained();
    background-color: transparent;
    background-image: none;

    // Same as copy__paragraph
    p {
      @include type-style('body-long-01');
      color: $cool-gray-80;
      margin-bottom: $layout-03;
      max-width: 9 * $column-size-large;

      @include mq($from: medium, $until: large) {
        @include type-style('label-01');
        margin-bottom: $layout-01;
      }

      @include mq($until: medium) {
        @include type-style('label-01');
        margin-bottom: $layout-01;
      }
    }

    // Same as copy__link
    a {
      @include type-style('body-long-01');
      color: $purple-70;
      text-decoration: none;

      @include mq($from: medium, $until: large) {
        @include type-style('label-01');
      }

      @include mq($until: medium) {
        @include type-style('label-01');
      }
    }

    code {
      background-color: $purple-10;
      padding: $spacing-01;
    }

    blockquote {
      position: relative;
      background-color: $purple-20;
      padding: $spacing-07;
      margin-bottom: $layout-03;

      &::before {
        @include type-style('display-02');
        content: '”';
        color: $purple-70;
        position: absolute;
        top: 0;
        left: 0;
        padding: $spacing-02 $spacing-03;
      }

      *:last-child {
        margin-bottom: 0;
      }

      @include mq($from: medium, $until: large) {
        margin-bottom: $layout-01;
      }

      @include mq($until: medium) {
        margin-bottom: $layout-01;
      }
    }

    // Same as copy__title
    h2 {
      @include type-style('expressive-heading-05');
      margin-bottom: $layout-03;
      color: $cool-gray-80;

      @include mq($from: medium, $until: large) {
        @include type-style('expressive-heading-03');
        font-weight: 300;
        margin-bottom: $layout-01;
      }

      @include mq($until: medium) {
        @include type-style('expressive-heading-03');
        font-weight: 300;
        margin-bottom: $layout-01;
      }
    }

    ul {
      @include type-style('body-long-01');
      list-style-type: '-';
      color: $cool-gray-80;
      margin-bottom: $layout-03;
      max-width: 9 * $column-size-large;

      @include mq($from: medium, $until: large) {
        @include type-style('label-01');
        margin-bottom: $layout-01;
      }

      @include mq($until: medium) {
        @include type-style('label-01');
        margin-bottom: $layout-01;
      }

      li {
        padding-left: $spacing-03;
        margin-left: $spacing-03;
        margin-top: $layout-01;

        li {
          margin-left: $spacing-03;
        }
      }
    }

    table {
      margin-bottom: $layout-03;

      td, th {
        @include type-style('body-long-01');
        border: 1px solid $cool-gray-20;
        color: $cool-gray-80;
        vertical-align: middle;
        padding: $spacing-05;
        max-width: 9 * $column-size-large;

        @include mq($from: medium, $until: large) {
          @include type-style('label-01');
          margin-bottom: $layout-01;
        }

        @include mq($until: medium) {
          @include type-style('label-01');
          padding: $spacing-03;
          margin-bottom: $layout-01;
        }
      }

      th {
        text-align: center;
        background-color: $purple-60;
        color: white;
        font-weight: bold;
      }
    }
  }
}
</style>
