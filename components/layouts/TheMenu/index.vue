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
    <div class="menu__main-level-wrapper">
      <section class="menu__main-level">
        <nav class="menu__nav-section">
          <AppLink class="menu__link" v-bind="homeLink">
            {{ homeLink.label }}
          </AppLink>
          <div class="menu__separator" />
          <AppLink
            v-for="link in qiskitElements"
            :key="link.url"
            class="menu__link"
            :class="{ 'menu__link_active': isActive(link) }"
            v-bind="link"
          >
            {{ link.label }}
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
      </section>
    </div>
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
import SidebarMenu from '~/components/layouts/TheMenu/SidebarMenu'
import AppLink from '~/components/ui/AppLink.vue'
import MenuMixin from '~/mixins/menu'

@Component({
  components: { SidebarMenu, AppLink }
})
export default class extends Mixins(MenuMixin) {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.menu__main-level, .menu__second-level {
  height: 3.75rem;
  display: flex;

  @include mq($until: large) {
    display: none;
  }
}

.menu {
  &__main-level-wrapper {
    border-bottom: 1px solid black;
  }

  &__main-level {
    @include framed();
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
  }

  &__main-level-wrapper {
    border-bottom: 1px solid black;
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

  &__link {
    @include type-style('productive-heading-02');
    display: inline-flex;
    align-items: center;
    padding: 0 1rem;
    color: var(--link-color);
    text-decoration: none;

    &_active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid $focus;
    }
  }

  &__hamburguer-link {
    margin: 1.3rem -0.2rem 0 1.3rem;
  }

  &__separator{
    background-color: $ui-03;
    width: 0.125rem;
    margin: 0.75rem 0.625rem;
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
