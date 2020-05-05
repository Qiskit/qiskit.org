<template>
  <article class="experiment-card">
    <nuxt-link
      :to="to"
      class="card-link"
    >
      <div
        class="experiment-card__picture"
        :style="`background-image: ${decorate(image)};`"
      />
      <div class="experiment-card__copy">
        <h3>
          {{ title }}
        </h3>
        <p class="experiment-card__author">
          {{ author }}
        </p>
        <p class="experiment-card__summary">
          {{ summary }}
        </p>
      </div>
    </nuxt-link>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) title
  @Prop(String) image
  @Prop(String) author
  @Prop(String) summary
  @Prop(Boolean) horizontal
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
@import '~carbon-components/scss/globals/scss/typography';

.card-link {
  display: block;
  text-decoration: none;
  color: unset;
  height: 100%;
}

.experiment-card {
  color: $text-01;
  background-color: $ui-01;
  border: 1px solid $focus;

  &--horizontal {
    display: flex;
    flex-direction: row;
  }

  &__picture {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    background-position: top center;

    /* Keep it square */
    &::before {
      content: "";
      display: block;
      padding-bottom: 100%;
    }

    &--horizontal {
      flex: 2;

      &::before {
        padding-bottom: 50%;
      }
    }
  }

  &__copy {
    @include type-style('body-short-01');
    margin: $spacing-03 $spacing-05 $spacing-05;

    &--horizontal {
      flex: 1;
    }
  }

  h3 {
    @include type-style('productive-heading-03');
    margin-top: $layout-02;
  }

  &__author {
    @include type-style('body-short-01');
    color: $purple-50;
    margin-top: $layout-01;

    &:before {
      content: "by ";
      color: $text-02;
    }
  }
}
</style>
