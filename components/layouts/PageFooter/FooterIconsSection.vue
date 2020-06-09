<template>
  <div class="footer-icons-section">
    <h2 class="footer-icons-section__title">
      {{ title }}
    </h2>
    <AppLink
      v-for="iconLink in elements"
      :key="iconLink.label"
      :url="iconLink.url"
      class="footer-icons-section__icon-link"
    >
      <component :is="iconLink.icon" />
    </AppLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(Array) elements
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.footer-icons-section {
  &__title {
    @include type-style('expressive-heading-01');
    color: $cool-gray-60;
    padding-bottom: $spacing-07;
  }

  &__icon-link {
    fill: $cool-gray-60;
    padding-right: $spacing-05;
  }

  &__icon-link:nth-child(3) {
    margin-right: 100%;
  }
}
</style>
