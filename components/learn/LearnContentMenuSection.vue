<template>
  <section class="content-menu-section">
    <div class="bx--grid">
      <div class="bx--row">
        <qiskit-mega-menu-dropdown :content.prop="dropdownMenuContent" class="learn-header__dropdown bx--col-md-4 bx--col-lg-4 bx--no-gutter" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import '@qiskit/web-components/components/mega-menu-dropdown'
import { LEARN_MEGA_MENU } from '~/constants/megaMenuLinks'

@Component({})
export default class LearnContentMenuSection extends Vue {
  dropdownMenuContent = LEARN_MEGA_MENU

  trackPerformedSearch (uiElement: string, field: string) {
    this.$trackPerformedSearch(uiElement, field)
  }
}
</script>

<style lang="scss" scoped>
.content-menu-section {
  background: $background-color-lighter;
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
}
</style>
