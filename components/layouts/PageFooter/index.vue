<template>
  <footer>
    <section class="main-footer-container">
      <div class="main-footer">
        <img
          class="main-footer__logo"
          src="/images/qiskit-new-logo.svg"
          alt="Qiskit logo"
        >
        <div class="main-footer__sections">
          <FooterSection
            v-for="sectionElements in footerElements"
            :key="sectionElements.title"
            v-bind="sectionElements"
          />
          <FooterSection v-bind="stayConnectedElements" icons-only />
        </div>
      </div>
    </section>
    <section class="secondary-footer-container">
      <div class="secondary-footer">
        <div class="secondary-footer__copyright">
          ©Qiskit | All Rights Reserved
        </div>
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
    </section>
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
  stayConnectedElements = STAY_CONNECTED_LINKS
  secondaryFooterLinks = SECONDARY_FOOTER_LINKS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.main-footer-container {
  background-color: $cool-gray-10;
  padding: $spacing-07 0;
}

.secondary-footer-container {
  background-color: $white;
  padding-bottom: $spacing-08;
  padding: $spacing-07 0;
  padding-bottom: $spacing-07 * 1.5; // make room for the "cookies preferences" button
}

.main-footer, .secondary-footer {
  @include contained();
  display: flex;
  justify-content: space-between;
}

.main-footer {
  @include mq($until: medium) {
    flex-direction: column;
  }

  &__logo {
    height: 32px;
    width: 112px;

    @include mq($until: medium) {
      margin-bottom: $spacing-07;
    }
  }

  &__sections {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: $spacing-07;
    max-width: 12 * $column-size-large;

    @include mq($from:medium, $until: large) {
      grid-template-columns: repeat(5, 1fr);
      max-width: 6 * $column-size-medium;

      & > :last-child {
        grid-column: 5 / 6;
        grid-row: 2 / 3;
      }
    }

    @include mq($until: medium) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

.secondary-footer {
  &__copyright, &__link {
    @include type-style('caption-01');
    color: $cool-gray-60;
  }

  &__links {
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__link {
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
