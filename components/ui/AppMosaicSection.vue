<template>
  <section class="app-mosaic-section">
    <div class="bx--row">
      <h2 class="bx--col-md-4 bx--col-lg-8" v-text="title" />
    </div>
    <div v-if="description" class="bx--row app-mosaic-section__introduction">
      <div class="bx--col-md-5 bx--col-lg-8 bx--col-xlg-7 bx--col-max-6">
        <p class="app-mosaic-section__description" v-text="description" />
      </div>
    </div>
    <AppMosaic class="app-mosaic-section__mosaic" :mosaic-elements="elements" />
    <slot />
  </section>
</template>

<script setup lang="ts">
import { MosaicElement } from '~/components/ui/AppMosaic.vue'

interface Props {
  description?: string
  elements: MosaicElement[]
  title: string
}

withDefaults(defineProps<Props>(), {
  description: ''
})
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";

.app-mosaic-section {
  &__description {
    margin-bottom: 0;
  }

  &__mosaic {
    margin-bottom: carbon.$spacing-07;

    @include mq($from: medium, $until: large) {
      margin-bottom: carbon.$spacing-05;
    }

    @include mq($until: medium) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__introduction {
    margin-bottom: carbon.$spacing-07;
  }
}
</style>
