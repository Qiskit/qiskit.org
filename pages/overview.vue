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
      <div class="overview-page__list-of-contents">LIST OF CONTENTS</div>
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
  }

  &__list-of-contents {
    width: auto;
    color: black;

  }
}
</style>
