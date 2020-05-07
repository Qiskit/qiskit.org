<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="default-layout content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu />
    </header>
    <nuxt />
    <PageFooter class="default-layout__footer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitOrgMenu from '~/components/layouts/QiskitOrgMenu.vue'
import PageFooter from '~/components/layouts/PageFooter.vue'

@Component({
  components: {
    QiskitOrgMenu,
    PageFooter
  }
})
export default class extends Vue { }
</script>

<style lang="scss">
@import '~/assets/scss/layout.scss';

.content-root {
  background-color: $ui-background;
}

main {
  color: $inverse-01;
}

.default-layout {
  &__footer {
    margin-top: $layout-05;
    margin-bottom: $layout-05;
  }
}
</style>
