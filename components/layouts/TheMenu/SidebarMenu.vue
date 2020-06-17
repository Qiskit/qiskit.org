<template>
  <section class="sidebar-menu">
    <nav class="sidebar-menu__navigation-links">
      <AppLink
        v-for="link in mainLevelLinks"
        :key="link.url"
        class="sidebar-menu__link"
        :class="{ 'sidebar-menu__link_active': isActive(link) }"
        v-bind="link"
      >
        {{ link.label }}
      </AppLink>
    </nav>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'
import MenuMixin from '~/mixins/menu'

@Component({
  components: { AppLink }
})
export default class extends Mixins(MenuMixin) {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.sidebar-menu {
  background-color: white;

  &__navigation-links {
    @include contained();
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  &__link {
    @include type-style('expressive-paragraph-01');
    text-decoration: none;
    color: $cool-gray-80;
    padding: $spacing-07;
    padding-right: 0;
    border-bottom: 1px solid $cool-gray-10;

    &_active {
      color: $cool-gray-10;
      background-color: $purple-70;
    }
  }
}
</style>
