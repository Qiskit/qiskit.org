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

<script setup lang="ts">
import '@qiskit/web-components/components/mega-menu-dropdown'
import { LEARN_MEGA_MENU } from '~/constants/megaMenuLinks'

const dropdownMenuContent = LEARN_MEGA_MENU

function trackPerformedSearch (uiElement: string, field: string) {
  // TODO: Refactor tracking
  this.$trackPerformedSearch(uiElement, field)
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
