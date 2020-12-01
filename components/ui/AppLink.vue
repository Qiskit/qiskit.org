<template>
  <component
    :is="isNuxtLink ? 'nuxt-link' : 'a'"
    :href="isAnchor && url"
    :to="isNuxtLink && url"
    :style="hasLink && 'cursor:pointer'"
    :rel="isExternal && 'noopener'"
    :target="isExternal && '_blank'"
    class="app-link"
    :class="`app-link_${kind}`"
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
export default class AppLink extends Vue {
  @Prop({ type: String, default: '' }) url!: string
  @Prop({ type: Object, required: false }) segment: SegmentData | undefined
  @Prop({ type: Boolean, default: false }) isStatic!: boolean
  @Prop({ type: String, default: 'primary' }) kind!: 'primary'|'secondary'|'none'

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

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.app-link {
  // &_none is intentionally not resolved

  &_primary,
  &_secondary {
    @include type-style('body-long-01');
    text-decoration: none;
  }

  &_primary {
    color: $blue-50;

    &:hover,
    &:active {
      color: $blue-60;
    }
    &:visited {
      color: $purple-70;
    }
  }

  &_secondary {
    color: $gray-80;

    &:hover,
    &:active {
      color: $gray-80;
      text-decoration: underline;
    }
    &:visited {
      color: $gray-80;
    }
  }

}

</style>
