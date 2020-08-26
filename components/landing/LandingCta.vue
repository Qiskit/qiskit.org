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

  @include mq($from: large) {
    width: 15rem;
  }

  @include mq($until: large) {
    justify-content: space-between;
    padding: $spacing-05;
    width: 12rem;
  }

  &_primary {
    color: $white;
    background-color: $purple-70;

    &:hover {
      background-color: $purple-90;
    }

    @include mq($from: large) {
      padding-top: $spacing-07;
      padding-bottom: $spacing-07;
    }
  }

  &_secondary {
    color: $purple-70;
    background-color: $cool-gray-10;

    &:hover {
      color: $cool-gray-10;
      background-color: $purple-70;
    }

    @include mq($from: large) {
      padding-top: $spacing-05;
      padding-bottom: $spacing-05;
    }
  }

  &__icon {
    margin-left: $spacing-06;
    fill: currentColor;
  }
}
</style>
