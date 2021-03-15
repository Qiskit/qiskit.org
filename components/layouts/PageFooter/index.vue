<template>
  <footer class="page-footer">
    <section
      class="page-footer__primary"
      :class="`page-footer__primary_theme_${theme}`"
    >
      <div
        :class="oldContainer ? 'page-footer__primary-container' : 'bx--grid'"
      >
        <div class="bx--row">
          <div class="bx--col-lg-4 bx--col-md">
            <AppLogo
              class="page-footer__logo"
              :class="`page-footer__logo_theme_${theme}`"
            />
          </div>
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            class="bx--col-lg-3 bx--col-sm"
            v-bind="sectionElements"
            :theme="theme"
          />
          <FooterSection
            class="bx--col-lg-3 bx--col-md page-footer__stay-connected"
            v-bind="stayConnectedElements"
            icons-only
            :theme="theme"
          />
        </div>
      </div>
    </section>
    <section
      class="page-footer__secondary"
      :class="`page-footer__secondary_theme_${theme}`"
    >
      <div
        class="page-footer__secondary-container"
        :class="{ 'bx--grid': !oldContainer }"
      >
        <div
          class="caption"
          :class="`page-footer__copyright_theme_${theme}`"
        >
          ©Qiskit | All Rights Reserved
        </div>
        <div class="page-footer__secondary-links">
          <BasicLink
            v-for="link in secondaryFooterLinks"
            :key="link.label"
            class="caption page-footer__secondary-link"
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
  @Prop({ type: Boolean, default: false, required: false }) oldContainer!: boolean;
  @Prop({ type: String, default: 'light' }) theme!: string
  @Prop({ type: Boolean, default: false }) wider!: boolean

  footerElements = FOOTER_ELEMENTS
  stayConnectedElements = STAY_CONNECTED_LINKS
  secondaryFooterLinks = SECONDARY_FOOTER_LINKS
}
</script>

<style lang="scss" scoped>
.page-footer {

  .page-footer__primary {
    padding: $spacing-07 0;

    &_theme_light {
      background-color: $background-color-lighter;
    }

    &_theme_dark {
      background-color: $background-color-darker;
    }
  }

  .page-footer__secondary {
    padding: $spacing-07 0;
    padding-bottom: $spacing-07 + 2.5rem; // make room for the "cookies preferences" button

    &_theme_light {
      background-color: $background-color-white;
    }

    &_theme_dark {
      background-color: $background-color-black;
    }
  }

  &__primary-container {
    @include contained();
  }

  &__logo {
    height: 32px;

    @include mq($until: medium) {
      margin-bottom: $spacing-07;
    }

    &_theme_light {
      color: $text-color-lighter;
    }

    &_theme_dark {
      color: $text-color-white;
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

    &_theme_light {
      color: $text-color-lighter;
    }

    &_theme_dark {
      color: $text-color-white;
    }
  }

  &__secondary-container {
    display: flex;
    justify-content: space-between;

    &:not(.bx--grid) {
      @include contained();
    }
  }

  &__secondary-links {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__stay-connected {
    @include mq($until: medium) {
      margin-top: $spacing-07;
    }
  }
}
</style>
