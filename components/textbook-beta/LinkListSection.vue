<template>
  <section class="link-list-section">
    <h2>
      External recommended readings
    </h2>
    <AppLink
      v-for="link in links"
      :key="link.label"
      class="link-list-section__link"
      :segment="link.segment"
      :url="link.url"
    >
      {{ link.label }}
    </AppLink>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class LinkListSection extends Vue {
  @Prop({ type: Array, required: true }) links!: GeneralLink[]
}
</script>

<style lang="scss" scoped>
.link-list-section {
  &__link {
    display: block;
    margin-bottom: $spacing-01;
    width: fit-content;
  }
}
</style>
