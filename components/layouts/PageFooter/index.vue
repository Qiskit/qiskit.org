<template>
  <footer class="page-footer">
    <section
      class="page-footer__primary"
      :class="`page-footer__primary_theme_${theme}`"
    >
      <div class="page-footer__primary-container">
        <AppLogo
          class="page-footer__logo"
          :class="`page-footer__logo_theme_${theme}`"
        />
        <div class="page-footer__primary-sections">
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            v-bind="sectionElements"
            :theme="theme"
          />
          <FooterSection v-bind="stayConnectedElements" icons-only :theme="theme" />
        </div>
      </div>
    </section>
    <section
      class="page-footer__secondary"
      :class="`page-footer__secondary_theme_${theme}`"
    >
      <div class="page-footer__secondary-container">
        <div
          class="page-footer__copyright"
          :class="`page-footer__copyright_theme_${theme}`"
        >
          ©Qiskit | All Rights Reserved
        </div>
        <div class="page-footer__secondary-links">
          <BasicLink
            v-for="link in secondaryFooterLinks"
            :key="link.label"
            class="page-footer__secondary-link"
            :class="`page-footer__secondary-link_theme_${theme}`"
            v-bind="link"
          >
            {{ link.label }}
          </BasicLink>
        </div>
      </div>
    </section>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import {
  FOOTER_ELEMENTS,
  SECONDARY_FOOTER_LINKS,
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component
export default class PageFooter extends Vue {
  @Prop({ type: String, default: 'light' }) theme!: string

  footerElements = FOOTER_ELEMENTS
  stayConnectedElements = STAY_CONNECTED_LINKS
  secondaryFooterLinks = SECONDARY_FOOTER_LINKS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.page-footer {

  .page-footer__primary {
    padding: $spacing-07 0;

    &_theme_light {
      background-color: $cool-gray-10;
    }

    &_theme_dark {
      background-color: $cool-gray-90;
    }
  }

  .page-footer__secondary {
    padding-bottom: $spacing-08;
    padding: $spacing-07 0;
    padding-bottom: $spacing-07 + 2.5rem; // make room for the "cookies preferences" button

    &_theme_light {
      background-color: $white;
    }

    &_theme_dark {
      background-color: $cool-gray-100;
    }
  }

  &__primary-container {
    @include contained();
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      display: block;
    }
  }

  &__logo {
    height: 32px;
    flex: 0 0 112px;
    margin-right: $layout-06;

    @include mq($from: medium, $until: large) {
      margin-right: $layout-05;
    }

    @include mq($until: medium) {
      height: auto;
      width: 96px;
      margin-bottom: $spacing-07;
    }

    &_theme_light {
      color: $cool-gray-60;
    }

    &_theme_dark {
      color: $white;
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

    &_theme_light {
      color: $cool-gray-60;
    }

    &_theme_dark {
      color: $white;
    }
  }

  &__secondary-container {
    @include contained();
    display: flex;
    justify-content: space-between;
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
