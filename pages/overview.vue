<template>
  <div class="overview-page">
    <PageHeader>
      The most
      <RelevantWord>
        feature rich
      </RelevantWord><br>
      quantum computing SDK
    </PageHeader>
    <section class="overview-page__content-container">
      <div class="overview-page__table-of-contents">TABLE OF CONTENTS</div>
      <div class="overview-page__list-of-contents">
        <ContentSection>
          Content Section
        </ContentSection>
        <ContentSection>
          Content Section 2
        </ContentSection>
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
import ContentSection from '~/components/overview/ContentSection.vue'

@Component({
  components: {
    PageHeader,
    RelevantWord,
    ContentSection,
    TheQuickStart
  },
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
    margin-bottom: $layout-07 / 2;

    @include mq($until: medium) {
      margin-bottom: 0;
    }
  }

  &__table-of-contents {
    width: 3 * $column-size-large;
    padding-right: $spacing-07;
    color: black;

    @include mq($from: medium, $until: large) {
      width: 2 * $column-size-medium;
    }

    @include mq($until: medium) {
      display: none;
    }
  }
}
</style>
