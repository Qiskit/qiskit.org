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
      <div class="menu__inner-container">
        <nav class="menu__nav-section">
          <AppLink
            class="
              menu__link
              menu__link_img-only
            "
            v-bind="homeLink"
          >
            <img
              class="menu__logo"
              src="/images/qiskit-new-logo.svg"
              alt="Qiskit logo"
            >
          </AppLink>
        </nav>
        <nav class="menu__nav-section">
          <AppLink
            v-for="link in [communityLink, ...learnMore]"
            :key="link.url"
            class="menu__link"
            :class="{ 'menu__link_active': isActive(link) }"
            v-bind="link"
          >
            {{ link.label }}
          </AppLink>
        </nav>
      </div>
    </section>
    <section
      v-if="isCommunityActive()"
      class="menu__second-level"
    >
      <nav class="menu__nav-section">
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

.menu__inner-container, .menu__second-level {
  @include contained();
  padding-top: $spacing-05;
  padding-bottom: $spacing-05;
  display: flex;

  @include mq($until: large) {
    display: none;
  }
}

.menu {
  &__inner-container {
    justify-content: space-between;
  }

  &__main-level {
    --link-color: #{$gray-80};
    background-color: white;
  }

  &__second-level {
    justify-content: flex-end;
    --link-color: #{$inverse-01};
    background-color: $purple-40;
    /* The menu should be framed() (max-width of 1100px = 68.75rem)
    *  If we framed this menu, the purple backgroud fit the framed size, not all
    *  That's why we calculate the padding, to align the secondary menu with the main one
    */
    padding-right: calc((100vw - 68.75rem) / 2);
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

  &__nav-section {
    display: flex;
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

    &:last-child {
      margin-right: 0;
    }

    &_img-only {
      font-size: 0;
      line-height: 0;
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
