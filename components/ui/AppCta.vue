<template>
  <AppLink
    ref="link"
    class="app-cta copy__link"
    v-bind="$attrs"
  >
    <div><slot /></div>
    <component :is="isExternal ? 'Launch16' : 'ArrowRight16'" />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  get isExternal () {
    return AppLink.isExternal(this.$attrs.url)
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

.app-cta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  fill: currentColor;

  & :first-child {
    margin-right: $layout-02;
  }
  svg {
      overflow: visible;
  }
  &[target=_blank] {
    path:nth-child(2) {
      transform: translate(0, 0);
      transition: transform 0.3s ease-in-out;
    }
    &:hover path:nth-child(2) {
      transform: translate(2px, -2px);
    }
  }
  &:not([target=_blank]) {
    path:nth-child(1) {
      transform: translate(0, 0);
      transition: transform 0.2s ease-in-out;
    }
    &:hover path:nth-child(1) {
      transform: translate(4px, 0);
    }
  }
}
</style>
