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
        <div>
          <h2 class="main-footer__icon-links-title">
            {{ stayConnectedLinks.title }}
          </h2>
          <AppLink
            v-for="iconLink in stayConnectedLinks.elements"
            :key="iconLink.icon"
            :url="iconLink.url"
            class="main-footer__icon-link"
          >
            <component :is="iconLink.icon" />
          </AppLink>
        </div>
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
import AppLink from '~/components/ui/AppLink.vue'

import {
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component({
  components: {
    FooterSection,
    AppLink
  }
})
export default class extends Vue {
  footerElements = FOOTER_ELEMENTS
  stayConnectedLinks = STAY_CONNECTED_LINKS
  secondaryFooterLinks = SECONDARY_FOOTER_LINKS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.main-footer {
  background-color: $cool-gray-10;
  /*
  * The footer should be framed() (max-width of 1100px = 68.75rem)
  * If we framed it, the backgroud fit the framed size, not all
  * That's why we calculate the padding
  */
  padding: $spacing-07 calc((100vw - 68.75rem) / 2);
  display: flex;
  justify-content: space-between;

  &__logo {
    @include type-style('productive-heading-05');
    line-height: 2rem;
    color: $cool-gray-60;
    padding: 0 $spacing-07
  }

  &__sitemap {
    display: flex;
    justify-content: space-between;
    padding: 0 $spacing-07
  }

  &__section {
    flex: 1;
  }

  &__icon-links-title {
    @include type-style('productive-heading-01');
    color: $cool-gray-60;
    padding-bottom: $spacing-07;
  }

  &__icon-link {
    fill: $cool-gray-60;
    padding-right: $spacing-05;
  }

  &__icon-link:nth-child(3) {
    margin-right: 100%;
  }
}

.secondary-footer {
  background-color: $white;
  /*
  * The footer should be framed() (max-width of 1100px = 68.75rem)
  * If we framed it, the backgroud fit the framed size, not all
  * That's why we calculate the padding
  */
  padding: $spacing-07 calc((100vw - 68.75rem) / 2);
  display: flex;
  justify-content: space-between;

  &__copyright {
    @include type-style('caption-01');
    color: $cool-gray-60;
    padding: 0 $spacing-07
  }

  &__links {
    display: flex;
    justify-content: space-between;
  }

  &__link {
    @include type-style('caption-01');
    color: $cool-gray-60;
    padding-right: $spacing-07
  }

}
</style>
