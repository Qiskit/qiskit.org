<template>
  <article class="ui-description-card">
    <div>
      <h4 v-text="title" />
      <p v-text="description" />
    </div>
    <div class="ui-description-card__footer">
      <UiCta
        v-if="cta && cta.url"
        class="ui-description-card__cta"
        kind="ghost"
        :label="cta.label"
        :segment="cta.segment"
        :url="cta.url"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import type { TextLink } from "~/types/links";

interface Props {
  cta: TextLink;
  description: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.ui-description-card {
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
