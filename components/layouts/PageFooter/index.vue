<template>
  <footer>
    <div class="main-footer">
      <div class="main-footer__logo">Qiskit</div>
      <div class="main-footer__sitemap">
        <FooterSection
          v-for="sectionElements in footerElements"
          :key="sectionElements.title"
          class="main-footer__section"
          :title="sectionElements.title"
          :elements="sectionElements.elements"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FooterSection from './FooterSection.vue'

import { FOOTER_ELEMENTS } from '~/constants/menuLinks'

@Component({
  components: {
    FooterSection
  }
})
export default class extends Vue {
  footerElements = FOOTER_ELEMENTS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.main-footer {
  background-color: $cool-gray-10;
  padding-top: $spacing-09;
  padding-bottom: $spacing-09;
  /*
  * The footer should be framed() (max-width of 1100px = 68.75rem)
  * If we framed it, the backgroud fit the framed size, not all
  * That's why we calculate the padding
  */
  padding-right: calc((100vw - 68.75rem) / 2);
  padding-left: calc((100vw - 68.75rem) / 2);
  display: flex;
  justify-content: space-between;

  &__logo {
    @include type-style('productive-heading-05');
    line-height: 2rem;
    color: $cool-gray-60;
  }

  &__sitemap {
    display: flex;
    justify-content: space-between;
  }

  &__section {
    flex: 1;
  }
}

.secondary-footer {
  &_framed {
    @include framed();
  }

}
</style>
