<template>
  <component
    :is="!isStatic && isInternal(to) ? 'nuxt-link' : 'a'"
    :class="[ 'button', { 'button--secondary': secondary } ]"
    :href="to"
    :to="!isStatic && isInternal(to) ? to : null"
    :rel="isExternal(to) ? 'noopener' : null"
    :target="isExternal(to) ? '_blank' : null"
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
.button {
  padding: 0.66rem 1rem;
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  font-size: 0.75em;
  font-weight: 100;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
  white-space: nowrap;
  line-height: 4rem;

  &--secondary {
    color: black;
    background-color: white;
  }
}
</style>
