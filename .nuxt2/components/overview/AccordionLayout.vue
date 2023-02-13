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

<script setup lang="ts">
// TODO: It is not possible to extract the interface of the component props
// so we need this redundant interface to do it. Explore if it is worth
// removing the @Prop decorator in favour of:
// https://class-component.vuejs.org/guide/props-definition.html
export interface AccordionLayoutProps {
  image: string,
  description: string,
  cta: {
    url: string,
    label: string
  }
}

defineProps<AccordionLayoutProps>()
</script>

<style lang="scss" scoped>
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
    margin-bottom: $spacing-06;
  }
}
</style>
