<template>
  <AppLink
    class="landing-cta"
    :class="`landing-cta_${kind}`"
    v-bind="$attrs"
  >
    <slot />
    <ArrowRight16 class="landing-cta__icon" />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary';
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.landing-cta {
  @include type-style('body-short-01');
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 $spacing-07;

  background-size: 200% 100%;
  background-position-x: 100%;
  transition: background-position-x 0.3s ease-out, color 0.3s ease-out;

  @include mq($from: large) {
    width: 15rem;
  }

  @include mq($until: large) {
    justify-content: space-between;
    padding: $spacing-05;
    width: 12rem;
  }

  &:hover,
  &:active {
    background-position-x: 0;
  }

  &_primary {
    color: $white;
    background-image: linear-gradient(90deg, $purple-90 0%, $purple-90 50%, $purple-70 50%, $purple-70 100%);

    @include mq($from: large) {
      padding-top: $spacing-07;
      padding-bottom: $spacing-07;
    }
  }

  &_secondary {
    color: $purple-70;
    background-image: linear-gradient(90deg, $purple-70 0%, $purple-70 50%, $cool-gray-10 50%, $cool-gray-10 100%);

    &:hover,
    &:active {
      color: $cool-gray-10;
    }

    @include mq($from: large) {
      padding-top: $spacing-05;
      padding-bottom: $spacing-05;
    }
  }

  &__icon {
    margin-left: $spacing-06;
    fill: currentColor;
    overflow: visible;
  }

  $arrow-path: "path:nth-child(1)";

  #{$arrow-path} {
    transform: translate(0, 0);
    transition: transform 0.2s ease-in-out;
  }

  &:hover,
  &:active {
    #{$arrow-path} {
      transform: translate(4px, 0);
    }
  }
}
</style>
