<template>
  <article class="app-description-card">
    <h2 class="copy__subtitle">
      {{ title }}
    </h2>
    <p class="copy__paragraph">
      {{ description }}
    </p>
    <AppCta
      v-if="cta && cta.url"
      v-bind="cta"
      kind="ghost"
    />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class AppDescriptionCard extends Vue {
  @Prop(String) title!: string
  @Prop(String) description!: string
  @Prop(Object) cta!: GeneralLink
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
</style>
