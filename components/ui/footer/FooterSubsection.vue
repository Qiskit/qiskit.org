<template>
  <div class="footer-subsection">
    <h2 class="footer-subsection__title">
      {{ title }}
    </h2>
    <AppLink
      v-for="element in elements"
      :key="element.label"
      class="footer-subsection__link"
      v-bind="element"
    />
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

.footer-subsection {
  &__title {
    @include type-style('productive-heading-03');
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid $ui-03;
  }

  &__link {
    @include type-style('productive-heading-02');
    color: inherit;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    margin-top: .5rem;

    &:hover {
      color: $text-01;
    }
  }
}
</style>
