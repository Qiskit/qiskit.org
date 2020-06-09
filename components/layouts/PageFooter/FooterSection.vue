<template>
  <div class="footer-section">
    <h2 class="footer-section__title">
      {{ title }}
    </h2>
    <AppLink
      v-for="element in elements"
      :key="element.label"
      class="footer-section__link"
      v-bind="element"
    >
      {{ element.label }}
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

.footer-section {
  &__title {
    @include type-style('productive-heading-01');
    color: $cool-gray-60;
    padding-bottom: $spacing-07;
  }

  &__link {
    @include type-style('caption-01');
    color: $cool-gray-60;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding-bottom: $spacing-03;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
