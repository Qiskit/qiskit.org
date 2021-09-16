<template>
  <article class="app-description-card">
    <div>
      <h4 v-text="title" />
      <p v-text="description" />
    </div>
    <div class="app-description-card__footer">
      <AppCta
        v-if="cta && cta.url"
        v-bind="cta"
        kind="ghost"
        class="app-description-card__cta"
      />
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
