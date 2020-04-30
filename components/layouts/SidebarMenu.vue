<template>
  <nav class="sidebar-menu">
    <h2>Elements</h2>
    <nuxt-link
      v-for="qiskitElement in qiskitElements"
      :key="qiskitElement.label"
      :class="{
        'sidebar-menu__item': true,
        'nuxt-link-active': isActive(qiskitElement.url)
      }"
      :to="qiskitElement.url"
    >
      {{ qiskitElement.label }}
    </nuxt-link>
    <h2>Learn more</h2>
    <nuxt-link
      :class="{
        'sidebar-menu__item': true,
        'sidebar-menu__item--active': isCommunityActive()
      }"
      to="/education"
    >
      Community
    </nuxt-link>
    <div
      v-if="isCommunityActive()"
      class="sidebar-secondary-menu"
    >
      <nuxt-link
        v-for="communitySubLink in communitySubLinks"
        :key="communitySubLink.label"
        :class="{
          'sidebar-secondary-menu__item': true,
          'nuxt-link-active': isActive(communitySubLink.url)
        }"
        :to="communitySubLink.url"
      >
        {{ communitySubLink.label }}
      </nuxt-link>
    </div>
    <a
      v-for="link in learnMore"
      :key="link.label"
      :class="{
        'sidebar-menu__item': true,
        'nuxt-link-active': isActive(link.url)
      }"
      :href="link.url"
      target="_blank"
      @click="link.segment && $trackClickEvent(link.segment)"
    >
      {{ link.label }}
    </a>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  NavLink
} from '~/constants/menuLinks'

@Component
export default class extends Vue {
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS
  learnMore: Array<NavLink> = [
    {
      label: 'Tutorials',
      url: 'https://qiskit.org/documentation/tutorials/fundamentals/1_getting_started_with_qiskit.html',
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

.sidebar-menu, .sidebar-secondary-menu {
  display: flex;
  flex-direction: column;
}

.sidebar-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 150;
  width: 256px;
  padding: 1.3rem;
  background-color: $ui-background;
  transform: translateX(-100%);
  transition: transform 200ms;
  overflow-y: auto;

  h2 {
    @include type-style('productive-heading-03');
    padding: 1em;
  }

  &__item {
    @include sidebar-menu-item();
  }
}

.sidebar-secondary-menu {
  margin: 0 -1.3rem;
  padding: 1rem 0;
  background-color: $purple-30;

  &__item {
    @include sidebar-menu-item();
    padding: 0.5rem 3rem;
    color: $inverse-01;

    &.nuxt-link-active {
      border-left: 4px solid $focus;
      padding-left: calc(3rem - 4px);
    }
  }
}

.drawer:focus {
  .sidebar-menu {
    transform: translateX(0);
  }
}
</style>
