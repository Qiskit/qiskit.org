<template>
  <article class="app-description-card">
    <div>
      <h2 class="copy__subtitle">
        {{ title }}
      </h2>
      <p class="copy__paragraph">
        {{ description }}
      </p>
    </div>
    <div class="app-description-card__footer">
      <AppCta
        v-if="cta && cta.url"
        v-bind="cta"
        kind="ghost"
        class="app-description-card__cta"
      />
      <slot name="footer-append" />
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

export type DescriptionCard = {
  title: string,
  description: string,
  cta: GeneralLink
}

@Component
export default class AppDescriptionCard extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(Object) cta!: GeneralLink
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.app-description-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__cta {
    width: 100%;
  }

  &__footer {
    display: flex;
    place-items: center;
  }
}
</style>
