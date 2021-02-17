<template>
  <span class="hidden-link" @click="test">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { SegmentData } from '~/constants/appLinks'

@Component
export default class AppLink extends Vue {
  @Prop({ type: String, default: '' }) url!: string
  @Prop({ type: Object, required: false }) segment: SegmentData | undefined
  @Prop({ type: Boolean, default: false }) isStatic!: boolean

  test () {
    console.log('test')
  }

  static isExternal (url: string): boolean {
    return url.startsWith('http')
  }

  static isMail (url: string): boolean {
    return url.startsWith('mailto')
  }

  static isIdAnchor (url: string): boolean {
    return url.startsWith('#')
  }

  get hasLink (): boolean {
    return !!this.url
  }

  get isAnchor (): boolean {
    const url = this.url
    return AppLink.isExternal(url) ||
      AppLink.isMail(url) ||
      AppLink.isIdAnchor(url) ||
      this.isStatic
  }

  get isExternal (): boolean {
    return AppLink.isExternal(this.url)
  }

  get isNuxtLink (): boolean {
    return !this.isAnchor
  }
}
</script>
