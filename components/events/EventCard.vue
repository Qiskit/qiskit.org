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

      <div>
        <div class="event-card__info-detail">
          <Map20 class="event-card__icon" />
          <span class="event-card__location">{{ location }}</span>
        </div>
        <div class="event-card__date-and-arrow">
          <div class="event-card__info-detail">
            <Calendar20 class="event-card__icon" />
            <span class="event-card__date"><time>{{ date }}</time></span>
          </div>
        </div>
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

.card-link {
  text-decoration: none;
}

.event-card {
  height: 13rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: $ui-01;
  color: $text-01;
  display: flex;

  @include mq($until: medium) {
    height: 24rem;
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
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    @include type-style('productive-heading-03');
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

  &__location, &__date {
    @include type-style('body-short-01');
  }

  &__location, &__date {
    padding-left: 0.31rem;
  }

  &__info-detail {
    margin-top: 0.63rem;
  }

  &__icon {
    fill: currentColor;
    position: relative;
    top: .3em;
    width: 1.25rem;
    height: 1.25rem;

    &--purple {
      color: $icon-01;
    }
  }

  &__date-and-arrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}
</style>
