<template>
  <AppLink
    class="landing-cta"
    :class="`landing-cta_kind_${kind}`"
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
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  &_kind_primary {
    color: $white;
    background-color: $purple-70;
    padding: $spacing-07;
    width: 15rem;

    &:hover {
      background-color: $purple-90;
    }

    @include mq($from: medium, $until: large) {
      padding: $spacing-05 $spacing-07;
      width: 13rem;
    }

    @include mq($until: medium) {
      padding: $spacing-03 $spacing-05;
      width: 11rem;
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
    margin-left: $spacing-06;
    fill: currentColor;
  }
}
</style>
