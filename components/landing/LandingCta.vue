<template>
  <a
    class="landing-cta"
    :class="`landing-cta_kind_${kind}`"
    target="_blank"
    rel="noopener"
  >
    <slot />
    <ArrowRight20 class="landing-cta__icon" />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary';
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.landing-cta {
  @include type-style('body-short-01');
  position: relative;
  width: 18rem;
  max-width: 100%;
  // From the Carbon component <cv-button>
  padding: calc(.875rem - 3px) 3.75rem calc(.875rem - 3px) 0.75rem;
  text-decoration: none;
  align-self: flex-start;
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  &_kind_primary {
    color: $white;
    background-color: $purple-70;
    min-height: 5rem;

    &:hover {
      background-color: $purple-90;
    }

    @include mq($from: medium, $until: large) {
      min-height: 3rem;
    }

    @include mq($until: medium) {
      min-height: 2rem;
    }
  }

  &_kind_secondary {
    color: $purple-70;
    background-color: $cool-gray-10;
    min-height: 3rem;

    &:hover {
      color: $cool-gray-10;
      background-color: $purple-70;
    }

    @include mq($until: medium) {
      min-height: 2rem;
    }
  }

  &__icon {
    position: absolute;
    right: 1rem;
    fill: currentColor;
  }
}
</style>
