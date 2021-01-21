<template>
  <section class="helpful-resources-section">
    <h2 class="copy__title" v-text="title" />
    <div class="helpful-resources-section__resources">
      <AppDescriptionCard
        v-for="resource in resources"
        :key="resource.title"
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
export default class HelpfulResourcesSection extends Vue {
  @Prop(Array) resources!: DescriptionCard[]

  title = 'Helpful Resources';
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.helpful-resources-section {
  &__resources {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;

    @include mq($from: medium, $until: large) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($until: medium) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
