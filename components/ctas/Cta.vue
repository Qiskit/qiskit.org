<template>
  <component
    :is="!isStatic && isInternal(to) ? 'nuxt-link' : 'a'"
    :class="[ 'cta', { 'cta--secondary': secondary } ]"
    :href="to"
    :to="!isStatic && isInternal(to) ? to : null"
    :rel="isExternal(to) ? 'noopener' : null"
    :target="isExternal(to) ? '_blank' : null"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) to
  @Prop(Boolean) secondary
  @Prop(Boolean) isStatic

  isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  isMail (url: string): boolean {
    return url.startsWith('mailto')
  }

  isInternal (url: string): boolean {
    return !(this.isExternal(url) || this.isMail(url))
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.cta {
  @include type-style('productive-heading-02');
  display: inline-block;
  padding: 0.66rem 1rem;
  background-color: $ui-01;
  border: 2px solid $interactive-01;
  color: $text-01;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;

  &--secondary {
    color: $inverse-01;
    background-color: $inverse-02;
  }
}
</style>
