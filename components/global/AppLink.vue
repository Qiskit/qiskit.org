<template>
  <BasicLink
    class="app-link"
    :class="`app-link_${kind}`"
    v-bind="$attrs"
  >
    <slot />
  </BasicLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class AppLink extends Vue {
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-link {
  // &_none is intentionally not resolved

  &_primary,
  &_secondary {
    @include type-style('body-long-01');
    text-decoration: none;
  }

  &_primary {
    color: $blue-50;

    &:hover,
    &:focus,
    &:active {
      color: $blue-60;
    }
    &:visited {
      color: $purple-70;
    }
  }

  &_secondary {
    color: $gray-80;

    &:hover,
    &:focus,
    &:active {
      color: $gray-80;
      text-decoration: underline;
    }
    &:visited {
      color: $gray-80;
    }
  }

}

</style>
