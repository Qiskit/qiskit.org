<template>
  <section class="content-menu-section">
    <div class="bx--grid">
      <AppMegaDropdownMenu
        :content="dropdownMenuContent"
        segment-component-name="Textbook mega menu"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { TEXTBOOK_DEMO_MEGA_MENU } from '~/constants/megaMenuLinks'

@Component
export default class TextbookDemoContentMenuSection extends Vue {
  dropdownMenuContent = TEXTBOOK_DEMO_MEGA_MENU
}
</script>

<style lang="scss" scoped>
.content-menu-section {
  background: $background-color-lighter;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  position: sticky;
  top: 0;
  z-index: 100;
}
</style>
