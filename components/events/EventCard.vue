<template>
  <article class="event-card">
    <img
      class="event-card__image"
      :src="image"
      alt=""
    >
    <div class="event-card__content">
      <header class="event-card__header">
        <h3 class="event-card__title">
          {{ title }}
        </h3>
        <div class="event-card__tags">
          <cv-tag
            v-for="type in types"
            :key="type"
            :label="type"
            kind="purple"
          />
        </div>
      </header>

      <div class="event-card__info-detail">
        <p class="event-card__location">
          <Map20 class="event-card__icon" />
          {{ location }}
        </p>
        <p class="event-card__date">
          <Calendar20 class="event-card__icon" />
          <time>{{ date }}</time>
        </p>
      </div>

      <footer>
        <AppCta
          v-if="hasWebsite"
          class="event-card__link"
          :url="to"
        >
          Join the event
        </AppCta>
      </footer>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})
export default class extends Vue {
  @Prop(Array) types
  @Prop(String) title
  @Prop(String) image
  @Prop(String) location
  @Prop(String) date
  @Prop(String) to

  hasWebsite: boolean = !!this.to
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.event-card {
  height: 13rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: $cool-gray-10;
  color: $cool-gray-80;
  display: flex;

  @include mq($until: medium) {
    height: auto;
    flex-direction: column;
  }

  &__image {
    width: 14rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @include mq($from: medium, $until: large) {
      width: 13rem;
    }

    @include mq($until: medium) {
      height: 13rem;
      width: auto;
    }
  }

  &__content {
    @include type-style('body-long-01');
    padding: $spacing-05 $spacing-05 $spacing-05 $spacing-07;
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @include mq($until: large) {
      flex-direction: column;
    }
  }

  &__title {
    @include type-style('productive-heading-02');
    width: 100%;
  }

  &__tags {
    width: 20rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    @include mq($until: large) {
      justify-content: flex-start;
      margin-top: $spacing-03;
    }

    @include mq($until: medium) {
      width: 100%;
    }

    .bx--tag--purple {
      background-color: $purple-70;
      color: $white;
    }

    .bx--tag:first-child {
      margin-left: 0;
    }
  }

  &__info-detail {
    margin-top: $spacing-06;
  }

  &__location, &__date {
    @include type-style('body-long-01');
    margin-bottom: $spacing-03;
    display: flex;
    align-items: center;
  }

  &__icon {
    margin-right: $spacing-03;
    fill: currentColor;
  }
}
</style>
