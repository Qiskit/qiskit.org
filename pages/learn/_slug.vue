<template>
  <div class="learn-entry">
    <header class="learn-entry__header">
      <div class="learn-entry__header__container">
        <h1 class="learn-entry__header__title">
          {{ pageContent.attributes.title }}
        </h1>
      </div>
    </header>
    <main class="learn-entry__content" v-html="pageContent.html" />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  layout: 'learn',
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
export default class extends QiskitPage {
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

    a {
      text-decoration: none;
    }

    h2 {
      padding-top: 4rem;
      margin: 0 0 2rem;
      color: #0A1D8F;

      &::before {
        content: "";
        float: left;
        width: 5%;
        margin-top: 0.5rem;
        margin-right: 5%;
        border-top: 1px solid #0A1D8F;
      }
    }

    h3 {
      font-weight: bold;
      margin-top: 2.5rem;
      margin-bottom: 1rem;
    }

    h3 strong {
      font-weight: bold;
    }

    table {
      margin: $layout-05 5%;
    }

    table td {
      text-align: center;
      padding: 1.2rem 1.2rem 1rem 0;
      border-bottom: 1px dotted #0A1D8F;
    }

    table tr td:first-child {
      text-align: left;
    }
  }
}
</style>
