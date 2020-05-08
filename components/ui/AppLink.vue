<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="url"
    :to="isNuxtLink ? url : null"
    :rel="isExternal(url) ? 'noopener' : null"
    :target="isExternal(url) ? '_blank' : null"
    @click="segment && $trackClickEvent(segment)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop(String) url
  @Prop(Object) segment
  @Prop({ type: Boolean, default: false }) isStatic

  isNuxtLink = !this.isStatic && this.isInternal(this.url)

  isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  isMail (url: string): boolean {
    return url.startsWith('mailto')
  }

  isIdAnchor (url: string): boolean {
    return url.startsWith('#')
  }

  isInternal (url: string): boolean {
    return !(this.isExternal(url) || this.isMail(url)) || this.isIdAnchor(url)
  }
}
</script>
