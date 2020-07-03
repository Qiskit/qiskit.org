<template>
  <AppLink
    class="app-cta landing-page__link"
    v-bind="$attrs"
  >
    <div><slot /></div>
    <ArrowRight16 />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.app-cta {
  display: flex;
  justify-content: start;
  align-items: center;
  fill: currentColor;

  & :first-child {
    margin-right: $layout-02;
  }
}
</style>
