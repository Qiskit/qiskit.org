<template>
  <section class="mobile-menu">
    <nav
      class="mobile-menu__navigation-links"
    >
      <template v-for="link in mainLevelLinks">
        <AppLink
          v-if="!link.sublinks"
          :key="link.url"
          class="mobile-menu__link"
          :class="{
            'mobile-menu__link_active': isActive(link),
            'mobile-menu__link_is-parent': isParent(link)
          }"
          v-bind="appLinkFromNavLink(link)"
          kind="secondary"
        >
          <p class="mobile-menu__link-label">
            {{ link.label }}
          </p>
        </AppLink>
        <cv-dropdown v-else :key="link.url" class="cv-dropdown mobile-menu__navigation__dropdown" :class="{ 'mobile-menu__link_active': isCommunityActive() }" placeholder="Community">
          <li>
            <AppLink
              v-for="sublink in getSubLinks(link)"
              :key="`sublink:${sublink.url}`"
              class="
              mobile-menu__link
              mobile-menu__link_second-level
            "
              :class="{ 'mobile-menu__link_active': isActive(sublink) }"
              v-bind="appLinkFromNavLink(sublink)"
              kind="secondary"
            >
              <p class="mobile-menu__link-label">
                {{ sublink.label }}
              </p>
            </AppLink>
          </li>
        </cv-dropdown>
      </template>
    </nav>
    <footer class="mobile-menu__footer">
      <div class="mobile-menu__footer-inner-container">
        <FooterSection class="mobile-menu__footer-contact" v-bind="stayConnectedElements" icons-only :theme="theme" />
      </div>
      <p class="mobile-menu__footer-text">
        ©Qiskit | All Rights Reserved
      </p>
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MenuMixin from '~/mixins/menu'

import {
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component
export default class MobileMenu extends Mixins(MenuMixin) {
  stayConnectedElements = STAY_CONNECTED_LINKS
  theme = 'light'
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;

  &__link-label,
  &__footer-inner-container {
    @include contained();
    width: 100%;
  }

  &__footer-inner-container {
    margin-bottom: $spacing-05;
    padding-left: $spacing-05;
  }

  &__navigation-links {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: $spacing-07;
  }

  &__link {
    @include type-style('expressive-paragraph-01');
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    color: $cool-gray-80;
    height: 4rem;
    border-bottom: 1px solid $cool-gray-10;

    &_active:not(&_is-parent),
    &_active .bx--list-box__label {
      color: $purple-70;
      background-color: $cool-gray-10;
    }

    &_second-level {
      padding-left: $spacing-05;
    }
  }

  &__footer {
    padding-top: $spacing-05;
    padding-bottom: $spacing-05 + 2.5rem; // make room for the "cookies preferences" button
    background-color: $white;
  }

  &__footer-text {
    @include type-style('caption-01');
    background-color: $cool-gray-10;
    padding: $spacing-05 $spacing-07;
    color: $mobile-footer-text-color;
  }
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

// component overrides
.mobile-menu {
  & .bx--form-item {
    display: block;
    flex: initial;
  }

  .bx--list-box__label {
    @include type-style('body-long-02');
    color: $cool-gray-80;
  }

  .bx--dropdown {
    background-color: $white;
    height: 4rem;
    max-height: initial;
    border-bottom: 1px solid $cool-gray-10;
  }

  .bx--list-box__field {
    padding: 0 $spacing-09 0 $spacing-07;
    height: 4rem;
    border-bottom: 1px solid $cool-gray-10;

    &:hover .bx--list-box__label {
      text-decoration: underline;
    }

    &:focus,
    &:active,
    &[aria-expanded="true"] {
      outline: none;
      outline-offset: initial;
      border-bottom: 1px solid $cool-gray-20;
    }

    svg {
      fill: $cool-gray-80;
    }

    @include mq($until: medium) {
      padding: 0 $spacing-09 0 $spacing-05;
    }
  }

  .bx--list-box__menu {
    &:focus {
      outline: initial;
    }
  }

  .bx--list-box--expanded {
    height: auto;
    min-height: 4rem;
    background-color: $cool-gray-10;

    .bx--list-box__menu {
      position: relative;
      max-height: unset;
      background-color: $cool-gray-10;
      box-shadow: initial;
      z-index: initial;
     }

     & .mobile-menu__link:not(:last-child) {
      border-bottom: 1px solid $cool-gray-20;
    }
  }

  &__link {
    &_active {
      & .bx--list-box__label,
      & .bx--dropdown {
        color: $purple-70;
        background-color: $cool-gray-10;
        min-height: 4rem;
        max-height: none;
        height: auto;
      }

      & .bx--list-box__menu {
        position: relative;
        max-height: unset;
        background-color: $cool-gray-10;
        box-shadow: initial;
        z-index: initial;
      }

      // if Community page is active, open dropdown
      & .bx--list-box .bx--list-box__field[aria-expanded='false'] + .bx--list-box__menu {
        max-height: unset;
      }
    }
  }

  &__footer-contact {
    & .footer-section__title.footer-section__title_theme_light {
      @include type-style('caption-01');
      font-weight: 600;
      color: $mobile-footer-text-color;
      padding-bottom: $spacing-05;
    }

    svg {
      fill: $mobile-footer-text-color;
    }
  }
}
</style>
