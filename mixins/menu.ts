import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import {
  ORDERED_QISKIT_ELEMENTS,
  ORDERED_COMMUNITY_SUB_LINKS,
  HOME_LINK,
  COMMUNITY_LINK,
  TUTORIALS_LINK,
  DOCUMENTATION_LINK,
  NavLink
} from '~/constants/menuLinks'

@Component
export default class extends Vue {
  homeLink: NavLink = HOME_LINK
  qiskitElements: Array<NavLink> = ORDERED_QISKIT_ELEMENTS
  learnMore: Array<NavLink> = [TUTORIALS_LINK, DOCUMENTATION_LINK]
  communityLink: NavLink = COMMUNITY_LINK
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS

  isPathStartingWith (linkPath: string): boolean {
    return this.$route.path.startsWith(linkPath)
  }

  isActive (link: NavLink): boolean {
    const isCommunityLink = link.label === 'Community'

    return isCommunityLink
      ? this.communitySubLinks.some(communitySection => this.isPathStartingWith(communitySection.url))
      : this.isPathStartingWith(link.url)
  }

  isCommunityActive (): boolean {
    return this.communitySubLinks.some(link => this.isActive(link))
  }
}
