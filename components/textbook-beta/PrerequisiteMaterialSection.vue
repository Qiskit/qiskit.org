<template>
  <section class="prerequisite-material-section">
    <h2>
      Prerequisite material
    </h2>
    <div class="prerequisite-material-section__cards">
      <AppDescriptionCard
        v-for="{ title, description, segment, url } in data"
        :key="title"
        :description="description"
        class="prerequisite-material-section__card"
        :cta="{ label: 'Go to page', segment, url}"
        :title="title"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface Prerequisite {
  title: string;
  description: string;
  segment: CtaClickedEventProp;
  url: string;
}

@Component
export default class PrerequisiteMaterialSection extends Vue {
  @Prop({ type: Array, required: true }) data!: Prerequisite[]
}
</script>

<style lang="scss" scoped>
.prerequisite-material-section {
  &__card {
    align-items: strech;
    background: $cool-gray-10;
    color: $cool-gray-80;
    display: flex;
    padding: $spacing-05 $spacing-05 0;
  }

  &__cards {
    display: grid;
    gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);

    @include mq($until: large) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($until: medium) {
      grid-template-columns: 1fr;
      row-gap: $spacing-05;
    }
  }
}
</style>
