<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="default-layout content-root" tabindex="-1">
    <header id="navigation">
      <TheBlackLivesMatterBanner
        :style="{ display: isMenuShown ? 'none' : 'block' }"
      />
      <TheMenu @changeVisibility="isMenuShown = $event === 'shown'" />
    </header>
    <nuxt />
    <ThePageFooter class="default-layout__footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TheMenu from '~/components/layouts/TheMenu/index.vue'
import TheBlackLivesMatterBanner from '~/components/layouts/banners/TheBlackLivesMatterBanner.vue'
import ThePageFooter from '~/components/layouts/ThePageFooter/index.vue'

@Component({
  components: {
    TheMenu,
    TheBlackLivesMatterBanner,
    ThePageFooter
  }
})
export default class extends Vue {
  isMenuShown: boolean = false
}
</script>

<style lang="scss">
@import '~/assets/scss/layout.scss';

.content-root {
  background-color: $ui-background;
}

main {
  color: $inverse-01;
}
</style>
