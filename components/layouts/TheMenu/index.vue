<template>
  <div class="menu">
    <section class="menu__mobile" tabindex="-1">
      <Menu20 class="menu__hamburguer-link" />
      <AppLink class="menu__link" v-bind="homeLink">
        {{ homeLink.label }}
      </AppLink>
      <div class="menu__overlay" />
      <SidebarMenu class="menu__side-menu" />
    </section>
    <section class="menu__main-level">
      <nav class="menu__navigation-level">
        <AppLink
          class="
            menu__link
            menu__home-link
          "
          v-bind="homeLink"
        >
          <img
            class="menu__logo"
            src="/images/qiskit-new-logo-purple.svg"
            alt="Qiskit logo"
          >
        </AppLink>
        <AppLink
          v-for="link in mainLevelLinks"
          :key="link.url"
          class="menu__link"
          :class="{ 'menu__link_active': isActive(link) }"
          v-bind="link"
        >
          {{ link.label }}
        </AppLink>
      </nav>
    </section>
    <section
      v-if="isCommunityActive()"
      class="menu__second-level"
    >
      <nav class="menu__navigation-level">
        <AppLink
          v-for="link in communitySubLinks"
          :key="link.url"
          class="menu__link"
          :class="{ 'menu__link_active': isActive(link) }"
          v-bind="link"
        >
          {{ link.label }}
        </AppLink>
      </nav>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import SidebarMenu from '~/components/layouts/TheMenu/SidebarMenu.vue'
import AppLink from '~/components/ui/AppLink.vue'
import MenuMixin from '~/mixins/menu'

@Component({
  components: { SidebarMenu, AppLink }
})
export default class extends Mixins(MenuMixin) {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.menu {
  &__main-level {
    --link-color: #{$gray-80};
    background-color: white;
  }

  &__second-level {
    --link-color: #{$inverse-01};
    background-color: $purple-40;
  }

  &__mobile {
    display: none;

    @include mq($until: large) {
      display: flex;
      height: 3.75rem;
      cursor: pointer;
      fill: white;
    }

    &:focus {
      .menu__overlay {
        opacity: 0.5;
      }

      .menu__side-menu {
        transform: translateX(0);
      }
    }
  }

  &__navigation-level {
    @include contained();
    padding-top: $spacing-05;
    padding-bottom: $spacing-05;
    display: flex;
    justify-content: flex-end;

    @include mq($until: large) {
      display: none;
    }
  }

  &__logo {
    height: 1.5rem;
    width: auto;
  }

  &__link {
    @include type-style('label-01');
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    color: var(--link-color);
    text-decoration: none;
    margin-right: $spacing-09;

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__home-link {
    margin-left: 0;
    margin-right: auto;

    &:hover {
      text-decoration: none;
    }
  }

  &__hamburguer-link {
    margin: 1.3rem -0.2rem 0 1.3rem;
  }

  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background-color: $ui-background;
    opacity: 0;
    transition: opacity 200ms;
    pointer-events: none;
  }
}
</style>
