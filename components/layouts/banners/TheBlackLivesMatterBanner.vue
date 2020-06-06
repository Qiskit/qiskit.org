<template>
  <TheBanner class="black-lives-matter-banner">
    <p class="black-lives-matter-banner__copy">
      We stand with the Black community and against police brutality.
      <AppLink
        class="black-lives-matter-banner__link"
        url="https://www.joincampaignzero.org/"
      >
        Learn more from campaign zero.
      </AppLink>
    </p>
  </TheBanner>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TheBanner from '~/components/layouts/TheBanner.vue'
import AppLink from '~/components/ui/AppLink.vue'

@Component({ components: { AppLink, TheBanner } })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.black-lives-matter-banner {
  &__copy {
    @include type-style('body-short-02');
  }

  &__link {
    color: #8A3FFC;
  }
}
</style>
