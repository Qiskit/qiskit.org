<template>
  <article class="description-card">
    <div>
      <h4 v-text="title" />
      <p v-text="description" />
    </div>
    <div class="description-card__footer">
      <UiCta
        v-if="cta && cta.url"
        class="description-card__cta"
        kind="ghost"
        :label="cta.label"
        :segment="cta.segment"
        :url="cta.url"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

interface Props {
  cta: Link;
  description: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.description-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__cta {
    width: 100%;
  }

  &__footer {
    display: flex;
    place-items: center;
  }
}
</style>
