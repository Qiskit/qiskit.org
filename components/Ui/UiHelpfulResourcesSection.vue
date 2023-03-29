<template>
  <section class="helpful-resources-section">
    <h2 v-text="title" />
    <div class="cds--row">
      <UiDescriptionCard
        v-for="resource in resources"
        :key="resource.title"
        class="cds--col-lg-4 cds--col-md-4 helpful-resources-section__card"
        v-bind="resource"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DescriptionCard } from "~/types/uiComponents";

interface Props {
  resources: DescriptionCard[];
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: "Helpful Resources",
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.helpful-resources-section {
  &__card {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }
  }
}
</style>
