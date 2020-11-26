<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="default-layout content-root_theme_dark" tabindex="-1">
    <header id="navigation">
      <TheBlackLivesMatterBanner
        :style="{ display: isMenuShown ? 'none' : 'block' }"
      />
      <TheMenu @change-visibility="isMenuShown = $event === 'shown'" />
    </header>
    <nuxt />
    <PageFooter theme="light" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  isMenuShown: boolean = false
}
</script>

<style lang="scss">
@import '~/assets/scss/layout.scss';
</style>
