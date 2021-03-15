<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="default-layout content-root_theme_light" tabindex="-1">
    <header id="navigation">
      <TheMenu wider @change-visibility="isMenuShown = $event === 'shown'" />
    </header>
    <nuxt />
    <PageFooter theme="light" wider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class DefaultTextbookLayout extends Vue {
  isMenuShown: boolean = false
}
</script>
