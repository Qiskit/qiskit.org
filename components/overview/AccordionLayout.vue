<template>
  <article class="accordion-layout">
    <img :src="image" class="accordion-layout__image">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <AppCta
      kind="ghost"
      v-bind="cta"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

// TODO: It is not possible to extract the interface of the component props
// so we need this redundant interface to do it. Explore if it is worth
// removing the @Prop decorator in favour of:
// https://class-component.vuejs.org/guide/props-definition.html
interface AccordionLayoutProps {
  image: string,
  description: string,
  cta: {
    url: string,
    label: string
  }
}

export { AccordionLayoutProps }

@Component
export default class AccordionLayout extends Vue implements AccordionLayoutProps {
  @Prop(String) image!: string
  @Prop(String) description!: string
  @Prop(Object) cta!: {
    url: string,
    label: string
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.accordion-layout {
  display: flex;
  flex-direction: column;

  &__image {
    align-self: center;
    height: auto;
    width: 100%;
    max-width: 26rem;
    margin-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
    margin-bottom: $spacing-06;
  }
}
</style>
