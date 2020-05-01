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
        <div class="separator" />
        <nav class="navigation-group">
          <nuxt-link
            v-for="link in qiskitElements"
            :key="link.url"
            :class="{
              'navigation-group__item': true,
              'nuxt-link-active': isActive(link.url)
            }"
            :to="link.url"
          >
            {{ link.label }}
          </nuxt-link>
        </nav>
        <nav class="navigation-group navigation-group--right-aligned">
          <nuxt-link
            :class="{
              'navigation-group__item': true,
              'navigation-group__item--active': isCommunityActive()
            }"
            to="/education"
          >
            Community
          </nuxt-link>
          <a
            v-for="link in learnMore"
            :key="link.label"
            :class="{
              'navigation-group__item': true,
              'nuxt-link-active': isActive(link.url)
            }"
            :href="link.url"
            target="_blank"
            @click="link.segment && $trackClickEvent(link.segment)"
          >
            {{ link.label }}
          </a>
        </nav>
      </div>
    </div>
    <div
      v-if="isCommunityActive()"
      class="community-menu menu-container menu-container--light"
    >
      <section class="main_menu">
        <nav class="navigation-group navigation-group--right-aligned">
          <nuxt-link
            v-for="communitySubLink in communitySubLinks"
            :key="communitySubLink.label"
            :class="{
              'navigation-group__item': true,
              'nuxt-link-active': isActive(communitySubLink.url)
            }"
            :to="communitySubLink.url"
          >
            {{ communitySubLink.label }}
          </nuxt-link>
        </nav>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SidebarMenu from '~/components/layouts/SidebarMenu.vue'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  NavLink
} from '~/constants/menuLinks'

@Component({
  components: { SidebarMenu }
})
export default class extends Vue {
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS
  learnMore: Array<NavLink> = [
    {
      label: 'Tutorials',
      url: 'https://quantum-computing.ibm.com/jupyter/tutorial/1_start_here.ipynb',
      segment: {
        action: 'Tutorials'
      }
    },
    {
      label: 'Documentation',
      url: '/documentation'
    }
  ]

  isActive (path) {
    return this.$route.path.startsWith(path)
  }

  isCommunityActive () {
    return this.communitySubLinks.some(link => this.isActive(link.url))
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

  &__item {
    @include type-style('productive-heading-02');
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    color: var(--link-color);
    text-decoration: none;

    &.nuxt-link-active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid $focus;
    }

    &--active {
      padding-top: 2px;
      position: relative;
      top: 1px;
      border-bottom: 4px solid $focus;
    }
  }

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
