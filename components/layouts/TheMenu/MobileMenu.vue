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
        <cv-dropdown v-else :key="link.url" class="cv-dropdown menu__navigation__dropdown" :class="{ 'menu__link_active': isCommunityActive() }" placeholder="Community">
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
        </cv-dropdown>
      </template>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MenuMixin from '~/mixins/menu'

@Component
export default class MobileMenu extends Mixins(MenuMixin) {}
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

    &_active:not(&_is-parent) {
      color: $cool-gray-10;
      background-color: $purple-70;
    }

    &_second-level {
      padding-left: $spacing-05;
    }
  }

  &__footer {
    padding-top: $spacing-05;
    padding-bottom: $spacing-05 + 2.5rem; // make room for the "cookies preferences" button
    background-color: $cool-gray-10;
  }

  &__footer-text {
    @include type-style('caption-01');
    color: $cool-gray-60;
  }
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

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
    padding: 0 3rem 0 2rem;
    height: 4rem;
    border-bottom: 1px solid $cool-gray-10;

    &:focus {
      outline: none;
      outline-offset: initial;
    }

    svg {
      fill: $cool-gray-60;
    }
  }

  .bx--list-box__menu:focus {
    outline: initial;
  }

  .bx--list-box--expanded .bx--list-box__menu {
    position: relative;
    max-height: unset;
    background-color: $white;
    box-shadow: initial;
    z-index: initial;
  }

  .bx--dropdown.bx--list-box.bx--dropdown--open.bx--list-box--expanded.bx--dropdown--show-selected {
    height: auto;
    min-height: 4rem;
  }
}
</style>
