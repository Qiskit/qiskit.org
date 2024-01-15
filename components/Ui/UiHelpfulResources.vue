<template>
  <section class="ui-helpful-resources">
    <h2 v-text="title" />
    <div class="cds--row">
      <UiDescriptionCard
        v-for="resource in resources"
        :key="resource.title"
        class="cds--col-lg-4 cds--col-md-4 ui-helpful-resources__card"
        :cta="resource.cta"
        :description="resource.description"
        :title="resource.title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { type DescriptionCard } from "~/types/uiComponents";

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

.ui-helpful-resources {
  &__card {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }
  }
}
</style>
