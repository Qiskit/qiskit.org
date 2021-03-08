<template>
  <section class="external-recommended-readings">
    <h2 class="copy__title">
      External recommended readings
    </h2>
    <AppLink
      v-for="link in links"
      :key="link"
      class="external-recommended-readings__link"
      :url="link"
    >
      {{ link }}
    </AppLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class ExternalRecommendedReadings extends Vue {
  @Prop({ type: Array, required: true }) links!: string[]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';

.external-recommended-readings {
  &__link {
    display: block;
    margin-bottom: $spacing-01;
    width: fit-content;
  }
}
</style>
