<template>
  <component
    :is="isInternal(url) ? 'nuxt-link' : 'a'"
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
import menuLinkMixin from '~/mixins/menuLink'

@Component({
  mixins: [menuLinkMixin]
})
export default class extends Vue {
  @Prop(String) url
  @Prop(String) label
  @Prop(Object) segment
}
</script>
