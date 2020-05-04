<template>
  <component
    :is="!isStatic && isInternal(url) ? 'nuxt-link' : 'a'"
    class="footer-link"
    :href="url"
    :to="!isStatic && isInternal(url) ? url : null"
    :rel="isExternal(url) ? 'noopener' : null"
    :target="isExternal(url) ? '_blank' : null"
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
  @Prop({ type: Boolean, default: false }) isStatic
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.footer-link {
  @include type-style('productive-heading-02');
  color: inherit;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  margin-top: .5rem;

  &:hover {
    color: $text-01;
  }
}
</style>
