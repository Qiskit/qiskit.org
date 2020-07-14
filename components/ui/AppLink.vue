<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="(target === 'blank' || isExternal) && '_blank'"
    @click="segment && $trackClickEvent(segment)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SegmentData } from '~/constants/appLinks'

@Component
export default class extends Vue {
  @Prop({ type: String, default: '' }) url!: string
  @Prop({ type: Object, required: false }) segment: SegmentData | undefined
  @Prop({ type: Boolean, default: false }) isStatic!: boolean
  @Prop({ type: String, default: 'auto' }) target!: 'auto'|'blank'

  get hasLink (): boolean {
    return !!this.url
  }

  get isExternal (): boolean {
    return this.url.startsWith('http')
  }

  get isMail (): boolean {
    return this.url.startsWith('mailto')
  }

  get isIdAnchor (): boolean {
    return this.url.startsWith('#')
  }

  get isAnchor (): boolean {
    return this.isExternal || this.isMail || this.isIdAnchor || this.isStatic
  }

  get isNuxtLink (): boolean {
    return !this.isAnchor
  }
}
</script>
