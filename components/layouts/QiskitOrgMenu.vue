<template>
  <section>
    <div class="menu-container">
      <div class="main_menu">
        <section class="drawer" tabindex="-1">
          <Menu20 />
          <div class="overlay" />
          <SidebarMenu />
        </section>
        <nuxt-link class="link-to-home" to="/">
          Qiskit
        </nuxt-link>
        <nav class="navigation-group">
          <div class="separator" />
          <MenuLink
            v-for="link in qiskitElements"
            :key="link.url"
            :is-active="isActive(link)"
            v-bind="link"
          />
        </nav>
        <nav class="navigation-group navigation-group--right-aligned">
          <MenuLink
            v-for="link in learnMore"
            :key="link.url"
            :is-active="isActive(link)"
            v-bind="link"
          />
        </nav>
      </div>
    </div>
    <div
      v-if="isCommunityActive()"
      class="community-menu menu-container menu-container--light"
    >
      <section class="main_menu">
        <nav class="navigation-group navigation-group--right-aligned">
          <MenuLink
            v-for="link in communitySubLinks"
            :key="link.url"
            :is-active="isActive(link)"
            v-bind="link"
          />
        </nav>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SidebarMenu from '~/components/ui/menu/SidebarMenu.vue'
import MenuLink from '~/components/ui/menu/MenuLink.vue'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  NavLink
} from '~/constants/menuLinks'

@Component({
  components: { SidebarMenu, MenuLink }
})
export default class extends Vue {
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS
  learnMore: Array<NavLink> = [
    {
      label: 'Community',
      url: '/education'
    },
    {
      label: 'Tutorials',
      url: 'https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb',
      segment: {
        action: 'Tutorials'
      }
    },
    {
      label: 'Documentation',
      url: 'https://qiskit.org/documentation/'
    }
  ]

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

@mixin sidebar-menu-item() {
  @include type-style('productive-heading-02');
  text-decoration: none;
  color: white;
  padding: 0.5rem 1.5em;
}

.menu-container {
  border-bottom: 1px solid black;
  &--light {
    --link-color: #{$inverse-01};
    background-color: $purple-40;
    border-bottom: none;
  }
}

.main_menu {
  @include framed();
  height: 3.75rem;
  display: flex;
}

.navigation-group {
  display: flex;

  &--right-aligned {
    margin-left: auto;
    margin-right: -0.4rem;
  }

  @include mq($until: large) {
    display: none;
  }
}

.link-to-home {
  @include type-style('productive-heading-02');
  display: inline-flex;
  align-items: center;
  margin: 0 1rem 0 -0.2rem;
  color: var(--link-color);
  text-decoration: none;

  @include mq($until: large) {
    margin-left: -0.5rem;
  }
}

.separator{
  background-color: $ui-03;
  width: 0.125rem;
  margin: 0.75rem 0.625rem;
}

.community-menu {
  @include mq($until: large) {
    display: none;
  }
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

.drawer {
  display: none;

  @include mq($until: large) {
    display: unset;
    cursor: pointer;
    fill: white;
    height: 100%;
    margin: 1.25rem 1rem 0 -0.5rem;
  }
}

.drawer:focus {
  .overlay {
    opacity: 0.5;
  }

  .sidebar-menu {
    transform: translateX(0);
  }
}
</style>
