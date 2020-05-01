<template>
  <component
    :is="isInternal(url) ? 'nuxt-link' : 'a'"
    class="sidebar-menu-link"
    :class="{
      [`sidebar-menu-link--${type}`]: true,
      [`sidebar-menu-link--${type}_active`]: isActive
    }"
    :href="url"
    :to="isInternal(url) ? url : null"
    :rel="isExternal(url) ? 'noopener' : null"
    :target="isExternal(url) ? '_blank' : null"
    @click="segment && $trackClickEvent(segment)"
  >
    {{ label }}
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) url
  @Prop(String) label
  @Prop(String) segment
  @Prop(Boolean) isActive
  @Prop({ type: String, default: 'primary' }) type

  isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  isInternal (url: string): boolean {
    return !this.isExternal(url)
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.sidebar-menu-link {
  @include type-style('productive-heading-02');
  text-decoration: none;

  &--primary {
    color: white;
    padding: 0.5rem 1.5em;
  }

  &--secondary {
    color: $inverse-01;
    padding: 0.5rem 3rem;

    &_active {
      border-left: 4px solid $focus;
      padding-left: calc(3rem - 4px);
    }
  }
}
</style>
