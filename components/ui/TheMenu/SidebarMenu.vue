<template>
  <nav class="sidebar-menu">
    <h2 class="sidebar-menu__title">
      Elements
    </h2>
    <MenuLink
      v-for="link in qiskitElements"
      :key="link.url"
      class="sidebar-menu__link"
      :class="{ 'sidebar-menu__link_active': isActive(link) }"
      v-bind="link"
    />
    <h2 class="sidebar-menu__title">
      Learn more
    </h2>
    <MenuLink
      class="sidebar-menu__link"
      v-bind="communityLink"
    />
    <div
      v-if="isCommunityActive()"
      class="sidebar-menu__second-level"
    >
      <MenuLink
        v-for="link in communitySubLinks"
        :key="link.url"
        class="sidebar-menu__link sidebar-menu__link_secondary"
        :class="{ 'sidebar-menu__link_active': isActive(link) }"
        v-bind="link"
      />
    </div>
    <MenuLink
      v-for="link in learnMore"
      :key="link.url"
      class="sidebar-menu__link"
      :class="{ 'sidebar-menu__link_active': isActive(link) }"
      v-bind="link"
    />
  </nav>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import MenuLink from '~/components/ui/TheMenu/MenuLink.vue'
import MenuMixin from '~/mixins/menu'

@Component({
  components: { MenuLink }
})
export default class extends Mixins(MenuMixin) {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.sidebar-menu, .sidebar-menu__second-level {
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

  &__title {
    @include type-style('productive-heading-03');
    padding: 1em;
  }

  &__second-level {
    margin: 0 -1.3rem;
    padding: 1rem 0;
    background-color: $purple-30;
  }

  &__link {
    @include type-style('productive-heading-02');
    text-decoration: none;
    color: white;
    padding: 0.5rem 1.5em;

    &_secondary {
      color: $inverse-01;
      padding-right: 3rem;
      padding-left: 3rem;
    }

    &_active {
      border-left: 4px solid $focus;
      padding-left: calc(3rem - 4px);
    }
  }
}
</style>
