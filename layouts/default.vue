<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root" tabindex="-1">
    <header id="navigation">
      <QiskitOrgMenu />
    </header>
    <nuxt />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import QiskitOrgMenu from '~/components/layouts/QiskitOrgMenu.vue'
import PageFooter from '~/components/footers/PageFooter.vue'

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
</style>
