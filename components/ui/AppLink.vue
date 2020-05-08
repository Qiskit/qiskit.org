<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    style="cursor:pointer"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
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

  isExternal: boolean = this.url.startsWith('http')
  isMail: boolean = this.url.startsWith('mailto')
  isIdAnchor: boolean = this.url.startsWith('#')
  isAnchor: boolean = this.isExternal || this.isMail || this.isIdAnchor || this.isStatic
  isNuxtLink: boolean = !this.isAnchor
}
</script>
