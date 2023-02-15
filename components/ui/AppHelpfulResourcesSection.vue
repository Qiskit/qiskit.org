<template>
  <section class="app-helpful-resources-section">
    <h2 v-text="title" />
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

<script setup lang="ts">
import { DescriptionCard } from "~/components/ui/AppDescriptionCard.vue";

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

.app-helpful-resources-section {
  &__card {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }
  }
}
</style>
