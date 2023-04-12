<template>
  <section class="mosaic-section">
    <div class="cds--row">
      <h2 class="cds--col-md-4 cds--col-lg-8" v-text="title" />
    </div>
    <div v-if="description" class="cds--row mosaic-section__introduction">
      <div class="cds--col-md-5 cds--col-lg-8 cds--col-xlg-7 cds--col-max-6">
        <p class="mosaic-section__description" v-text="description" />
      </div>
    </div>
    <UiMosaic class="mosaic-section__mosaic" :mosaic-elements="elements" />
    <slot />
  </section>
</template>

<script setup lang="ts">
import type { MosaicElement } from "~/types/uiComponents";

interface Props {
  description?: string;
  elements: MosaicElement[];
  title: string;
}

withDefaults(defineProps<Props>(), {
  description: "",
});
</script>

<style lang="scss">
@use "~/assets/scss/carbon.scss";

.mosaic-section {
  &__description {
    margin-bottom: 0;
  }

  &__mosaic {
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-between(md, lg) {
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-down(md) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__introduction {
    margin-bottom: carbon.$spacing-07;
  }
}
</style>
