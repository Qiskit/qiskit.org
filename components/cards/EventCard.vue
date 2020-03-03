<template>
  <nuxt-link
    :to="to"
    class="card-link"
  >
    <article class="event-card">
      <div class="event-card__content">
        <header>
          <span class="event-card__subtitle">
            {{ type }}
          </span>
          <h3 class="event-card__title">
            {{ title }}
          </h3>
        </header>

        <footer>
          <div class="event-card__info-detail">
            <Map20 class="event-card__icon-map" />
            <span class="event-card__place">{{ place }}</span>
          </div>
          <div class="event-card__date-and-arrow">
            <div class="event-card__info-detail">
              <Calendar20 class="event-card__icon-calendar" />
              <span class="event-card__date">{{ date }}</span>
            </div>
            <ArrowRight20 class="event-card__icon-arrow-right" />
          </div>
        </footer>
      </div>

      <div
        class="event-card__media"
        :style="`background-image: ${decorate(image)};`"
      />
    </article>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) type
  @Prop(String) title
  @Prop(String) image
  @Prop(String) place
  @Prop(String) date
  @Prop(String) to

  decorate (image) {
    const bgEffects = [
      `url(${image})`
    ]
    return bgEffects.join(', ')
  }
}
</script>

<style lang="scss" scoped>
@mixin config-icons($prefix, $colors...) {
  @each $color in $colors {
    .#{$prefix}#{nth($color, 1)} {
      fill: nth($color, 2);
      position: relative;
      top: .3em;
      width: 1.25rem;
      height: 1.25rem;
    }
  }
}

@include config-icons('event-card__icon-',
    'map' var(--white),
    'calendar' var(--white),
    'arrow-right' var(--purple-60)
);

.card-link {
  text-decoration: none;
}

.event-card {
  height: 15.875rem;
  width: 100%;
  background-color: var(--gray-70);
  display: flex;

  &__content {
    color: var(--white);
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.5rem;
    margin-top: 0.313rem;
  }

  &__subtitle, &__place, &__date {
    font-size: 0.875rem;
  }

  &__place, &__date {
    padding-left: 0.313rem;
  }

  &__info-detail {
    margin-top: 0.625rem;
  }

  &__date-and-arrow {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__media {
    width: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
