<template>
  <footer class="the-page-footer">
    <section class="the-page-footer__primary">
      <div class="the-page-footer__primary-container">
        <AppLogo class="the-page-footer__logo" />
        <div class="the-page-footer__primary-sections">
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            v-bind="sectionElements"
          />
          <FooterSection v-bind="stayConnectedElements" icons-only />
        </div>
      </div>
    </section>
    <section class="the-page-footer__secondary">
      <div class="the-page-footer__secondary-container">
        <div class="the-page-footer__copyright">
          ©Qiskit | All Rights Reserved
        </div>
        <div class="the-page-footer__secondary-links">
          <AppLink
            v-for="link in secondaryFooterLinks"
            :key="link.label"
            class="the-page-footer__secondary-link"
            v-bind="link"
          >
            {{ link.label }}
          </AppLink>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import FooterSection from './FooterSection.vue'
import AppLink from '~/components/ui/AppLink.vue'
import AppLogo from '~/components/ui/AppLogo.vue'

import {
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component({
  components: {
    FooterSection,
    AppLink,
    AppLogo
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

.the-page-footer {

  .the-page-footer__primary {
    background-color: $cool-gray-10;
    padding: $spacing-07 0;
  }

  .the-page-footer__secondary {
    background-color: $white;
    padding-bottom: $spacing-08;
    padding: $spacing-07 0;
    padding-bottom: $spacing-07 + 2.5rem; // make room for the "cookies preferences" button
  }

  .the-page-footer__primary-container,
  .the-page-footer__secondary-container {
    @include contained();
    display: flex;
    justify-content: space-between;
  }

  &__primary-container {
    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__logo {
    color: $cool-gray-60;
    height: 32px;
    width: 112px;
    margin-right: $layout-06;

    @include mq($from: medium, $until: large) {
      margin-right: $layout-05;
    }

    @include mq($until: medium) {
      margin-bottom: $spacing-07;
    }
  }

  &__primary-sections {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: $spacing-07;

    @include mq($until: medium) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__copyright,
  &__secondary-link {
    @include type-style('caption-01');
    color: $cool-gray-60;
  }

  &__secondary-links {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__secondary-link {
    margin-left: $spacing-07;
    text-decoration: none;

    @include mq($until: medium) {
      margin-bottom: $spacing-05;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
