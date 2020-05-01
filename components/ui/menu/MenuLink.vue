<template>
  <component
    :is="isInternal(url) ? 'nuxt-link' : 'a'"
    class="menu-link"
    :class="isActive && 'menu-link_active'"
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
  @Prop(String) isActive

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

.menu-link {
  @include type-style('productive-heading-02');
  display: inline-flex;
  align-items: center;
  padding: 0 1em;
  color: var(--link-color);
  text-decoration: none;

  &_active {
    padding-top: 2px;
    position: relative;
    top: 1px;
    border-bottom: 4px solid $focus;
  }
}
</style>
