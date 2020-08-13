<template>
  <article class="accordion-layout">
    <img :src="image" class="accordion-layout__image">
    <p class="accordion-layout__description">
      {{ description }}
    </p>
    <AppCta :url="cta.url" class="accordion-layout__link">
      {{ cta.label }}
    </AppCta>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppCta }
})
export default class extends Vue {
  @Prop(String) image
  @Prop(String) description
  @Prop(Object) cta
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.accordion-layout {
  display: flex;
  flex-direction: column;

  &__image {
    align-self: center;
    max-height: 17.5rem;
    max-width: 26rem;
    padding-right: $spacing-06;
    margin-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
    margin-bottom: $spacing-06;
  }

  &__link {
    @include type-style('body-long-01');
  }
}
</style>
