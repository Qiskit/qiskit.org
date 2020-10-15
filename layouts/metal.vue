<template>
  <!-- tabindex is needed to allow hiding the menu in iOS Safari -->
  <div class="content-root content-root_theme_dark" tabindex="-1">
    <nuxt />
    <PageFooter theme="dark" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import TheBlackLivesMatterBanner from '~/components/layouts/banners/TheBlackLivesMatterBanner.vue'
import PageFooter from '~/components/layouts/PageFooter/index.vue'

@Component({
  components: {
    TheBlackLivesMatterBanner,
    PageFooter
  }
})
export default class extends Vue {
  isMenuShown: boolean = false
}
</script>

<style lang="scss">
@import '~/assets/scss/layout.scss';
</style>
