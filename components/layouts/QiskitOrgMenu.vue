<template>
  <div>
    <section class="mobile-menu" tabindex="-1">
      <Menu20 class="mobile-menu--menu-link" />
      <MenuLink v-bind="homeLink" />
      <div class="overlay" />
      <SidebarMenu />
    </section>
    <section class="main_menu">
      <nav class="main_menu--on-left">
        <MenuLink v-bind="homeLink" />
        <div class="separator" />
        <MenuLink
          v-for="link in qiskitElements"
          :key="link.url"
          :is-active="isActive(link)"
          v-bind="link"
        />
      </nav>
      <nav class="main_menu--on-right">
        <MenuLink
          v-for="link in [communityLink, ...learnMore]"
          :key="link.url"
          :is-active="isActive(link)"
          v-bind="link"
        />
      </nav>
    </section>
    <section
      v-if="isCommunityActive()"
      class="secondary-menu"
    >
      <nav class="secondary-menu--on-right">
        <MenuLink
          v-for="link in communitySubLinks"
          :key="link.url"
          :is-active="isActive(link)"
          v-bind="link"
        />
      </nav>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SidebarMenu from '~/components/ui/menu/SidebarMenu.vue'
import MenuLink from '~/components/ui/menu/MenuLink.vue'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  HOME_LINK,
  COMMUNITY_LINK,
  TUTORIALS_LINK,
  DOCUMENTATION_LINK,
  NavLink
} from '~/constants/menuLinks'

@Component({
  components: { SidebarMenu, MenuLink }
})
export default class extends Vue {
  homeLink: NavLink = HOME_LINK
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  learnMore: Array<NavLink> = [TUTORIALS_LINK, DOCUMENTATION_LINK]
  communityLink: NavLink = COMMUNITY_LINK
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS

  isPathStartingWith (linkPath: string) {
    return this.$route.path.startsWith(linkPath)
  }

  isActive (link: NavLink) {
    const isCommunityLink = link.label === 'Community'

    return isCommunityLink
      ? this.communitySubLinks.some(communitySection => this.isPathStartingWith(communitySection.url))
      : this.isPathStartingWith(link.url)
  }

  isCommunityActive () {
    return this.communitySubLinks.some(link => this.isActive(link))
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.main_menu, .secondary-menu {
  height: 3.75rem;
  display: flex;

  @include mq($until: large) {
    display: none;
  }
}

.main_menu {
  @include framed();
  padding-left: 0;
  padding-right: 0;
  border-bottom: 1px solid black;
  justify-content: space-between;

  &--on-left, &--on-right {
    display: flex;
  }
}

.secondary-menu {
  justify-content: flex-end;
  --link-color: #{$inverse-01};
  background-color: $purple-40;
  /* The menu should be framed() (max-width of 1100px = 68.75rem)
  *  If we framed this menu, the purple backgroud fit the framed size, not all
  *  That's why we calculate the padding, to align the secondary menu with the main one
  */
  padding-right: calc((100vw - 68.75rem) / 2);

  &--on-right {
    display: flex;
  }
}

.separator{
  background-color: $ui-03;
  width: 0.125rem;
  margin: 0.75rem 0.625rem;
}

.overlay {
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

.mobile-menu {
  display: none;

  &--menu-link {
    margin: 1.3rem -0.2rem 0 1.3rem;
  }

  @include mq($until: large) {
    display: flex;
    height: 3.75rem;
    cursor: pointer;
    fill: white;
  }
}

.mobile-menu:focus {
  .overlay {
    opacity: 0.5;
  }

  .sidebar-menu {
    transform: translateX(0);
  }
}
</style>
