<template>
  <article class="advocate-card">
    <div
      class="advocate-card__picture"
      :style="`background-image: ${decorate(image)};`"
    />
    <div class="advocate-card__copy">
      <h3 class="advocate-card__name">
        {{ name }}
      </h3>
      <p class="advocate-card__location">
        {{ location }}
      </p>
      <h3 class="advocate-card__focus-areas-title">
        Focus areas
      </h3>
      <p class="advocate-card__focus-areas">
        {{ areas }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AdvocateCard extends Vue {
  @Prop(String) name!: string
  @Prop(String) image!: string
  @Prop(String) location!: string
  @Prop(String) areas!: string

  decorate (image: string) {
    const bgEffects = [
      'linear-gradient(170deg, #0000 0%, #0000 90%, var(--component-bg) 90.3%)',
      'linear-gradient(-170deg, #0000 0%, #0000 90%, var(--component-bg) 90.3%)',
      `url(/images/advocates/${image})`
    ]
    return bgEffects.join(', ')
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.advocate-card {
  --component-bg: #{$ui-01};

  text-align: center;
  border: 1px solid $focus;
  background-color: var(--component-bg);

  &__picture {
    height: 350px;
    background-repeat: no-repeat;
    background-size: cover, cover, cover;
    background-position: top center;
  }

  &__copy {
    margin: $spacing-05 $spacing-07 $spacing-05;
  }

  &__name, &__focus-areas-title {
    @include type-style('productive-heading-04');
  }

  &__focus-areas-title {
    margin-top: $spacing-06;
  }

  &__location, &__focus-areas {
    @include type-style('body-short-02');
  }
}
</style>
