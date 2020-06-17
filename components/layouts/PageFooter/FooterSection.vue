<template>
  <section class="footer-section">
    <h2 class="footer-section__title">
      {{ title }}
    </h2>
    <nav :class="{ 'footer-section__icons-group': iconsOnly }">
      <AppLink
        v-for="element in elements"
        :key="element.label"
        :class="iconsOnly ? 'footer-section__icon-link' : 'footer-section__link'"
        v-bind="element"
      >
        <component :is="element.icon" v-if="iconsOnly" />
        <span v-else>{{ element.label }}</span>
      </AppLink>
    </nav>
  </section>
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
  @Prop({ type: Boolean, default: false }) iconsOnly
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.footer-section {
  &__title {
    @include type-style('expressive-heading-01');
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

  &__icons-group {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0 $spacing-05;
    justify-items: start;
  }

  &__icon-link {
    fill: $cool-gray-60;
  }

}
</style>
