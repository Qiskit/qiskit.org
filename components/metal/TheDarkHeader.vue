<template>
  <header class="the-dark-header">
    <div class="the-dark-header__container">
      <h1 class="the-dark-header__title">
        Metal
      </h1>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

import { Prop, Component } from 'vue-property-decorator'
import VersionInfo from '~/components/landing/TheHeroMoment/VersionInfo.vue'
import LandingCta from '~/components/landing/LandingCta.vue'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { VersionInfo, LandingCta, AppLink }
})
export default class extends Vue {
  @Prop({ type: String, required: true }) version!: string

  data () {
    return { qiskitPronuntiation: Math.random() < 0.5 ? '[kiss-kit]' : '[quiss-kit]' }
  }
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.the-dark-header {
  @include responsive-grid-bg-strip('/images/grid/grid-hero-dark.svg', auto, 56rem);

  position: relative;
  overflow: hidden;
  padding-top: $layout-05;
  margin-bottom: $layout-05;
  // In Figma, the height is not enforced but the background is always
  // visible completely so we do it in the CSS. A small correction is needed
  // to be able of displaying the bottom lines of the grid.
  height: calc(56rem + 2px);

  @include mq($from: medium, $until: large) {
    margin-bottom: $layout-06;
    // To adjust to the size of the smaller grid.
    height: calc(#{56rem * 40 / 64} + 2px);
  }

  @include mq($until: medium) {
    margin-bottom: 0;
    // To adjust to the size of the smaller grid.
    height: calc(#{56rem * 40 / 64} + 2px);
  }

  &__container {
    @include contained();

    position: relative;
    background-image: url("/images/landing-page/hero-illustration.png");
    background-position: right center;
    background-repeat: no-repeat;
    background-size: 70% auto;

    @include mq($from: medium, $until: large) {
      background-size: contain;
    }

    @include mq($until: medium) {
      background-image: none;
    }
  }

  &__title {
    @include type-style('display-04');
    color: $white;
    font-weight: 600;
    margin: 0 0 $layout-05;
    max-width: 6 * $column-size-large;
  }
}
</style>
