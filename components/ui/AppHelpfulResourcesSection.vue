<template>
  <section class="app-helpful-resources-section">
    <h2 class="copy__title" v-text="title" />
    <div class="bx--row">
      <AppDescriptionCard
        v-for="resource in resources"
        :key="resource.title"
        class="bx--col-lg-4 bx--col-md-4 app-helpful-resources-section__card"
        v-bind="resource"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'

@Component
export default class AppHelpfulResourcesSection extends Vue {
  @Prop(Array) resources!: DescriptionCard[]
  @Prop({ type: String, default: 'Helpful Resources' }) title!: string
}
</script>

<style lang="scss" scoped>
.app-helpful-resources-section {
  &__card {
    @include mq($until: large) {
      margin-bottom: $spacing-07;
    }
  }
}
</style>
