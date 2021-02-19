<template>
  <header class="events-header">
    <div class="events-header__container">
      <div class="events-header__main">
        <div>
          <AppPageHeaderTitle>
            {{ title }}
          </AppPageHeaderTitle>
          <div class="events-header__description">
            <p
              v-for="(paragraph, index) in description"
              :key="index"
              class="copy__paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>
        <AppCta v-bind="cta" class="events-header__cta" />
      </div>
      <div class="events-header__aside">
        <div class="events-header__card-up-title-wrapper">
          <div class="events-header__card-up-title copy__subtitle">
            {{ cardTitle }}
          </div>
        </div>
        <EventCard v-bind="cardContent" vertical-layout>
          {{ cardContent.description }}
        </EventCard>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class EventsHeader extends Vue {
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: Array, required: true }) description!: string[]
  @Prop({ type: Object, required: true }) cta!: GeneralLink
  @Prop({ type: String, required: true }) cardTitle!: string
  @Prop({ type: Object, required: true }) cardContent!: Object
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';
@import '~/assets/scss/blocks/copy.scss';

.events-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-learn.svg', auto, 28rem);

  &__container {
    @include contained();
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-areas: 'main main aside';
    row-gap: $spacing-07;

    @include mq($until: large) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'main aside';
    }

    @include mq($until: medium) {
      grid-template-columns: 1fr;
      grid-template-areas:
        'main'
        'aside';
    }
  }

  &__aside {
    grid-area: aside;
  }

  &__cta {
    margin: 0 0 $layout-02;

    @include mq($until: medium) {
      margin-top: $layout-03;
    }
  }

  &__description {
    margin-top: $layout-03;
    margin-bottom: $layout-03;
  }

  &__main {
    display: flex;
    flex-flow: column;
    grid-area: main;
    justify-content: space-between;
    margin-top: $spacing-07;
  }

  &__card-up-title {
    border-bottom: 4px solid $purple-60;
    display: inline;
    padding-bottom: $spacing-02;
    padding-right: $spacing-03;

    &-wrapper {
      margin-bottom: $spacing-06;
    }
  }
}
</style>
