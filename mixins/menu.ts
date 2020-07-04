import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import {
  ORDERED_COMMUNITY_SUB_LINKS,
  HOME_LINK,
  COMMUNITY_LINK,
  TUTORIALS_LINK,
  DOCUMENTATION_LINK,
  LEARN_LINK,
  NavLink
} from '~/constants/menuLinks'

@Component
export default class extends Vue {
  homeLink: NavLink = HOME_LINK
  learnMore: Array<NavLink> = [TUTORIALS_LINK, DOCUMENTATION_LINK]
  mainLevelLinks: Array<NavLink> = [LEARN_LINK, COMMUNITY_LINK, DOCUMENTATION_LINK]
  communityLink: NavLink = COMMUNITY_LINK
  communitySubLinks: Array<NavLink> = ORDERED_COMMUNITY_SUB_LINKS

  isPathStartingWith (linkPath: string): boolean {
    return this.$route.path.startsWith(linkPath)
  }

  isActive (link: NavLink): boolean {
    // TODO: Should remove after the new menu (second menu included) is
    // completely done. #573
    return this.isPathStartingWith(link.url)
  }

  isCommunityActive (): boolean {
    return this.communitySubLinks.some(link => this.isActive(link))
  }
}
