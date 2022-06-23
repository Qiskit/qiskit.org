<template>
  <section class="content-menu-section">
    <div class="content-menu-section__container">
      <qiskit-mega-menu-dropdown
        :content.prop="dropdownMenuContent"
        class="content-menu-section__dropdown bx--col-md-4 bx--col-lg-4 bx--no-gutter"
        segment-component-name="Textbook mega menu"
        :track-performed-search="trackPerformedSearch"
      />
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

  &__container {
    @include contained();

    max-width: $max-size;
  }

  qiskit-mega-menu-dropdown {
    --qiskit-color-input-background: transparent;
  }
}
</style>
