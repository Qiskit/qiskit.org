<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div tabindex="-1">
    <header id="navigation">
      <TheMenu
        old-container
        @change-visibility="isMenuShown = $event === 'shown'"
      />
    </header>
    <nuxt />
    <PageFooter old-container theme="light" />
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
