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
            <Map20 class="event-card__icon" />
            <span class="event-card__place">{{ place }}</span>
          </div>
          <div class="event-card__date-and-arrow">
            <div class="event-card__info-detail">
              <Calendar20 class="event-card__icon" />
              <span class="event-card__date"><time>{{ date }}</time></span>
            </div>
            <ArrowRight20 class="event-card__icon event-card__icon--purple" />
          </div>
        </footer>
      </div>

      <div
        class="event-card__media"
        :style="`background-image: url(${image});`"
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
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.card-link {
  text-decoration: none;
}

.event-card {
  height: 15.88rem;
  width: 100%;
  margin-bottom: 1rem;
  background-color: var(--gray-80);
  color: var(--white);
  border-top: 1px solid var(--gray-70);
  display: flex;

  &__content {
    width: 50%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    @include type-style('productive-heading-03');
    margin-top: 0.31rem;
  }

  &__subtitle {
    @include type-style('productive-heading-02');
  }

  &__place, &__date {
    @include type-style('body-short-01');
  }

  &__place, &__date {
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
      color: var(--purple-60)
    }
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
