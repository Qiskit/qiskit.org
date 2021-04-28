<template>
  <section class="app-mosaic-section">
    <div class="bx--row">
      <h2 class="bx--col-md-4 bx--col-lg-8" v-text="title" />
    </div>
    <p
      v-if="description"
      class="compact-section"
    >
      {{ description }}
    </p>
    <AppMosaic class="app-mosaic-section__mosaic" :mosaic-elements="elements" />
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { MosaicElement } from '~/components/ui/AppMosaic.vue'

@Component
export default class AppMosaicSection extends Vue {
  @Prop({ type: String, required: true }) title!: string
  @Prop({ type: String, required: false }) description!: string
  @Prop({ type: Array, required: true }) elements!: MosaicElement[]
}
</script>

<style lang="scss">
.app-mosaic-section {
  &__mosaic {
    margin-top: $layout-01;
    margin-bottom: $layout-03;

    @include mq($from: medium, $until: large) {
      margin-bottom: $layout-01;
    }

    @include mq($until: medium) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
