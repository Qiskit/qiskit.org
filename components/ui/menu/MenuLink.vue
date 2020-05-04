<template>
  <component
    :is="isInternal(url) ? 'nuxt-link' : 'a'"
    class="menu-link"
    :class="{
      [`menu-link__${menuType}`]: true,
      [`menu-link__${menuType}_${linkType}`]: true,
      [`menu-link__${menuType}_active`]: isActive
    }"
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
  @Prop(Boolean) isActive
  @Prop({ type: String, default: 'main' }) menuType
  @Prop({ type: String, default: 'primary' }) linkType
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.menu-link {
  @include type-style('productive-heading-02');
  text-decoration: none;

  &__main {
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    color: var(--link-color);
    text-decoration: none;

    &_active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid $focus;
    }
  }

  &__sidebar {
    &_primary {
      color: white;
      padding: 0.5rem 1.5em;
    }

    &_secondary {
      color: $inverse-01;
      padding: 0.5rem 3rem;
    }

    &_active {
      border-left: 4px solid $focus;
      padding-left: calc(3rem - 4px);
    }
  }
}
</style>
