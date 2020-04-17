<template>
  <component
    :is="!isStatic && isInternal(to) ? 'nuxt-link' : 'a'"
    :class="[ 'cta', { 'cta--primary': primary, 'cta--secondary': secondary, 'cta--legacy': legacy } ]"
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
  @Prop(Boolean) primary
  @Prop(Boolean) secondary
  @Prop(Boolean) legacy
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
  border: 2px solid $interactive-01;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;

  &--primary {
    color: $text-01;
    background-color: $ui-01;
  }

  &--secondary {
    color: $inverse-01;
    background-color: $inverse-02;
  }

  &--legacy {
    @include type-style('productive-heading-01');
    padding: 0.5rem 0.8rem;
    border: 2px $ui-01 solid;
    color: $inverse-01;
    transition: background-color linear 200ms,
                color linear 200ms,
                fill linear 200ms;

    &:hover {
      background-color: $ui-01;
      color: $text-01;
      fill: $text-01;
    }
  }
}
</style>
