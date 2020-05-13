<template>
  <div>
    <h2 class="footer-title">
      {{ title }}
    </h2>
    <FooterLink
      v-for="element in elements"
      :key="element.label"
      v-bind="element"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import FooterLink from '~/components/ui/footer/FooterLink.vue'

@Component({
  components: { FooterLink }
})
export default class extends Vue {
  @Prop(String) title
  @Prop(Array) elements
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.footer-title {
  @include type-style('productive-heading-03');
  margin-top: $spacing-07;
  margin-bottom: $spacing-06;
  padding-bottom: $spacing-03;
  border-bottom: 1px solid $ui-03;
}
</style>
