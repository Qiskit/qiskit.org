<template>
  <AppLink
    class="cta"
    v-bind="$attrs"
  >
    <slot />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.cta {
  display: inline-block;
  text-decoration: none;
  border: 2px solid;

  @include type-style('productive-heading-02');
  padding: 0.66rem 1rem;
  border-color: $interactive-01;
  text-transform: uppercase;
  white-space: nowrap;
  color: $text-01;
  background-color: $ui-01;

  fill: currentColor;
}
</style>
