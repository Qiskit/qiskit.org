<template>
  <section class="prerequisite-material-section">
    <h2>Prerequisite material</h2>
    <div class="prerequisite-material-section__cards">
      <UiDescriptionCard
        v-for="{ title, description, segment, url } in data"
        :key="title"
        :description="description"
        class="prerequisite-material-section__card"
        :cta="{ label: 'Go to page', segment, url }"
        :title="title"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Prerequisite } from "constants/learnContent";

interface Props {
  data: Prerequisite[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.prerequisite-material-section {
  &__card {
    align-items: strech;
    background: carbon.$cool-gray-10;
    color: carbon.$cool-gray-80;
    display: flex;
    padding: carbon.$spacing-05 carbon.$spacing-05 0;
  }

  &__cards {
    display: grid;
    gap: carbon.$spacing-07;
    grid-template-columns: repeat(4, 1fr);

    @include carbon.breakpoint-down(lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include carbon.breakpoint-down(md) {
      grid-template-columns: 1fr;
      row-gap: carbon.$spacing-05;
    }
  }
}
</style>
