<template>
  <section class="content-menu-section">
    <div class="bx--grid">
      <QiskitMegaMenuDropdown
        :content="dropdownMenuContent"
        input-field-classes="bx--col-md-4 bx--col-lg-4"
        segment-component-name="Textbook mega menu"
        :track-performed-search="trackPerformedSearch"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitMegaMenuDropdown from '@qiskit-community/qiskit-vue/src/components/MegaMenuDropdown/index.vue'
import { TEXTBOOK_BETA_MEGA_MENU } from '~/constants/megaMenuLinks'

@Component({
  components: { QiskitMegaMenuDropdown }
})
export default class TextbookBetaContentMenuSection extends Vue {
  dropdownMenuContent = TEXTBOOK_BETA_MEGA_MENU

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
