<template>
  <section class="mobile-menu">
    <nav
      class="mobile-menu__navigation-links"
    >
      <AppLink
        v-for="link in mainLevelLinks"
        :key="link.url"
        class="mobile-menu__link"
        :class="{ 'mobile-menu__link_active': isActive(link) }"
        v-bind="link"
      >
        {{ link.label }}
      </AppLink>
    </nav>
    <section class="mobile-menu__stay-connected">
      <FooterSection v-bind="stayConnectedElements" icons-only />
    </section>
    <footer class="mobile-menu__footer">
      <div class="mobile-menu__footer-inner-container">
        <p class="mobile-menu__footer-text">
          ©Qiskit | All Rights Reserverd
        </p>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'
import FooterSection from '~/components/layouts/PageFooter/FooterSection.vue'
import MenuMixin from '~/mixins/menu'

import {
  STAY_CONNECTED_LINKS
} from '~/constants/menuLinks'

@Component({
  components: { AppLink, FooterSection }
})
export default class extends Mixins(MenuMixin) {
  stayConnectedElements = STAY_CONNECTED_LINKS
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: white;
  overflow-y: auto;

  &__navigation-links,
  &__stay-connected,
  &__footer-inner-container {
    @include contained();
    width: 100%;
    flex: 1 0 0;
  }

  &__navigation-links {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: $spacing-07;
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

  &__stay-connected {
    margin-bottom: $layout-01;
  }

  &__footer {
    padding-top: $spacing-05;
    padding-bottom: $spacing-05;
    background-color: $cool-gray-10;
  }

  &__footer-text {
    @include type-style('caption-01');
    color: $cool-gray-60;
  }
}
</style>
