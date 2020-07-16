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
}
</style>
