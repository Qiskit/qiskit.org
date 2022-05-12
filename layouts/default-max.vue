<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div tabindex="-1">
    <header id="navigation">
      <TheMenu @change-visibility="isMenuShown = $event === 'shown'" />
      <QiskitBanner padding-x-none class="qiskit-runtime">
        <div class="bx--grid">
          <span class="banner-title">Start building with Qiskit runtime.</span>
          <span class="banner-message">Leverage the new programming model and execution framework to efficiently execute circuits.</span>
          <AppLink
            :segment="{ action: `banner > qiskit-runtime` }"
            url="https://qiskit.org/documentation/partners/qiskit_ibm_runtime/"
          >
            Learn more
          </AppLink>
        </div>
      </QiskitBanner>
    </header>
    <nuxt />
    <PageFooter theme="light" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitBanner from '@qiskit-community/qiskit-vue/src/components/banner/Banner.vue'

@Component({
  components: { QiskitBanner }
})
export default class MaxLayout extends Vue {
  isMenuShown: boolean = false
}
</script>

<style lang="scss">
@import "@carbon/colors/scss/colors";

.qiskit-banner.qiskit-runtime {
  background-color: $background-color-lighter !important;

  .banner-title {
    color: $cool-gray-100;
    font-weight: 600;
  }

  .banner-message {
    color: $cool-gray-100;
  }

  .app-link,
  .app-link:visited {
    color: $active-color !important;
    text-decoration: none;
    float: right;
  }
}
</style>
