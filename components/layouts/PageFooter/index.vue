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
        <FooterIconsSection
          class="main-footer__section"
          v-bind="stayConnectedElements"
        />
      </div>
    </div>
    <div class="secondary-footer">
      <div class="secondary-footer__copyright">©Qiskit | All Rights Reserved</div>
      <div class="secondary-footer__links">
        <AppLink
          v-for="link in secondaryFooterLinks"
          :key="link.label"
          class="secondary-footer__link"
          v-bind="link"
        >
          {{ link.label }}
        </AppLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FooterSection from './FooterSection.vue'
import FooterIconsSection from './FooterIconsSection.vue'
import AppLink from '~/components/ui/AppLink.vue'

import {
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component({
  components: {
    FooterSection,
    FooterIconsSection,
    AppLink
  }
})
export default class extends Vue {
  footerElements = FOOTER_ELEMENTS
  stayConnectedElements = STAY_CONNECTED_LINKS
  secondaryFooterLinks = SECONDARY_FOOTER_LINKS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.main-footer, .secondary-footer {
  /*
  * The footer should be framed() (max-width of 1100px = 68.75rem)
  * If we framed it, the backgroud fit the framed size, not all
  * That's why we calculate the padding
  */
  padding: $spacing-07 calc((100vw - 68.75rem) / 2);
  display: flex;
  justify-content: space-between;
}

.main-footer {
  background-color: $cool-gray-10;

  &__logo {
    @include type-style('productive-heading-05');
    line-height: 2rem;
    color: $cool-gray-60;
    padding: 0 $spacing-07;
  }

  &__sitemap {
    display: grid;
    grid-template-columns: repeat(6, 0.5fr);
    row-gap: $spacing-07;

    @include mq($until: medium) {
      grid-template-columns: repeat(3, 0.5fr);
      grid-template-rows: repeat(2, 0.5fr);
    }

    @include mq($from:medium, $until: large) {
      grid-template-columns: repeat(5, 0.5fr);
      grid-template-rows: repeat(2, 0.5fr);

      :nth-child(6) {
        grid-column: 5 / 6;
        grid-row: 2 / 3;
      }
    }
  }
}

.secondary-footer {
  background-color: $white;

  &__copyright, &__link {
    @include type-style('caption-01');
    color: $cool-gray-60;
    padding: 0 $spacing-07
  }

  &__links {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__link {
    text-decoration: none;

    @include mq($until: medium) {
      padding-bottom: $spacing-05;
    }
  }
}
</style>
