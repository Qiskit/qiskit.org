<template>
  <section>
    <div class="menu-container">
      <section class="mobile-menu" tabindex="-1">
        <Menu20 class="mobile-menu--menu-link" />
        <nuxt-link class="mobile-menu--home-link" to="/">
          Qiskit
        </nuxt-link>
        <div class="overlay" />
        <SidebarMenu />
      </section>
      <section class="main_menu">
        <nav class="main_menu--on-left">
          <nuxt-link class="link-to-home" to="/">
            Qiskit
          </nuxt-link>
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
            v-for="link in learnMore"
            :key="link.url"
            :is-active="isActive(link)"
            v-bind="link"
          />
        </nav>
      </section>
    </div>
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

.menu-container {
  border-bottom: 1px solid black;
}

.main_menu {
  @include framed();
  height: 3.75rem;
  display: flex;
  justify-content: space-between;

  &--on-left, &--on-right {
    display: flex;
  }

  @include mq($until: large) {
    display: none;
  }
}

.secondary-menu {
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  height: 3.75rem;
  display: flex;
  justify-content: flex-end;
  --link-color: #{$inverse-01};
  background-color: $purple-40;
  border-bottom: none;

  &--on-right {
    display: flex;
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
    margin: 1.3rem 0.7rem 0 1.3rem;
  }

  &--home-link {
    @include type-style('productive-heading-02');
    display: inline-flex;
    align-items: center;
    margin: 0 1rem 0 -0.2rem;
    color: var(--link-color);
    text-decoration: none;
  }

  @include mq($until: large) {
    display: flex;
    cursor: pointer;
    fill: white;
    height: 3.75rem;
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
