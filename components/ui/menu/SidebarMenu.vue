<template>
  <nav class="sidebar-menu">
    <h2>Elements</h2>
    <MenuLink
      v-for="link in qiskitElements"
      :key="link.url"
      :is-active="isActive(link)"
      menu-type="sidebar"
      v-bind="link"
    />
    <h2>Learn more</h2>
    <MenuLink
      :is-active="false"
      menu-type="sidebar"
      v-bind="communityLink"
    />
    <div
      v-if="isCommunityActive()"
      class="sidebar-secondary-menu"
    >
      <MenuLink
        v-for="link in communitySubLinks"
        :key="link.url"
        :is-active="isActive(link)"
        menu-type="sidebar"
        link-type="secondary"
        v-bind="link"
      />
    </div>
    <MenuLink
      v-for="link in learnMore"
      :key="link.url"
      :is-active="isActive(link)"
      menu-type="sidebar"
      v-bind="link"
    />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import MenuLink from '~/components/ui/menu/MenuLink.vue'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  NavLink
} from '~/constants/menuLinks'

@Component({
  components: { MenuLink }
})
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
      url: 'https://qiskit.org/documentation/'
    }
  ]

  communityLink: NavLink = {
    label: 'Community',
    url: '/education'
  }

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

.sidebar-menu, .sidebar-secondary-menu {
  display: flex;
  flex-direction: column;
}

.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
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
}

.sidebar-secondary-menu {
  margin: 0 -1.3rem;
  padding: 1rem 0;
  background-color: $purple-30;
}
</style>
