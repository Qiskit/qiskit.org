<template>
  <div class="overview-page">
    <PageHeader>
      The most
      <RelevantWord>
        feature rich
      </RelevantWord><br>
      quantum computing SDK
    </PageHeader>
    <section class="overview-page__content-container copy__util_vertical-spacer">
      <div class="overview-page__table-of-contents">TABLE OF CONTENTS</div>
      <div class="overview-page__list-of-contents">
        <article class="overview-page__content-element">
          <div class="overview-page__content-element__overview">
            <h2 class="copy__title">Research Applications</h2>
            <p class="copy__paragraph"> Qiskit allows for easy research and development for specific industry use cases that have the highest potential for quantum advantage.</p>
            <AppLink class="copy__link" url="/">
              See docs
            </AppLink>
          </div>
          <div class="overview-page__content-element__section-content">
            <slot />
          </div>
        </article>
      </div>
    </section>
    <TheQuickStart />
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import PageHeader from '~/components/ui/PageHeader.vue'
import RelevantWord from '~/components/ui/RelevantWord.vue'
import TheQuickStart from '~/components/landing/TheQuickStart/index.vue'

@Component({
  components: { PageHeader, RelevantWord, TheQuickStart },
  head () {
    return {
      title: 'Qiskit Overview'
    }
  }
})
export default class extends QiskitPage {
  routeName = 'overview'
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.overview-page {
  background-color: white;

  &__content-container {
    @include contained();
    display: flex;
  }

  &__table-of-contents {
    max-width: 3 * $column-size-large;
    padding-right: $spacing-07;
    color: black;

    @include mq($from: medium, $until: large) {
      max-width: 2 * $column-size-medium;
    }

    @include mq($until: medium) {
      display: none;
    }
  }

  &__list-of-contents {
  }

  &__content-element {
    width: 100%;
    display: flex;
    margin-bottom: $layout-01 + $layout-05;

    &__overview {
      max-width: 5 * $column-size-large;
      padding-right: $spacing-07;
    }

    &__section-content {
      background-color: blueviolet;
    }
  }
}
</style>
