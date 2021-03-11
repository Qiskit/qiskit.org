<template>
  <h1 class="app-page-header-title" :class="`app-page-header-title_${kind}`">
    <slot />
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppPageHeaderTitle extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-page-header-title {
  &_primary,
  &_secondary {
    @include type-style('expressive-heading-05', true);
    max-width: 10 * $column-size-large;

    @include mq($from: medium, $until: large) {
      max-width: 6 * $column-size-medium;
    }

    @include mq($until: medium) {
      max-width: 5 * $column-size-medium;
    }
  }

  &_primary {
    color: $white-text-01;
  }

  &_secondary {
    color: $white;
  }
}
</style>
