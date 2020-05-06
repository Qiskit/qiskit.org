<template>
  <component
    :is="!isStatic && isInternal(url) ? 'nuxt-link' : 'a'"
    :href="url"
    :to="!isStatic && isInternal(url) ? url : null"
    :rel="isExternal(url) ? 'noopener' : null"
    :target="isExternal(url) ? '_blank' : null"
    @click="segment && $trackClickEvent(segment)"
  >
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else />
  </component>
</template>

<script lang="ts">
import { Component, Prop, Mixins } from 'vue-property-decorator'
import MenuLinkMixin from '~/mixins/menuLink'

@Component
export default class extends Mixins(MenuLinkMixin) {
  @Prop(String) url
  @Prop(String) label
  @Prop(Object) segment
  @Prop({ type: Boolean, default: false }) isStatic
}
</script>
