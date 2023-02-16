<template>
  <article class="app-description-card">
    <div>
      <h4 v-text="title" />
      <p v-text="description" />
    </div>
    <div class="app-description-card__footer">
      <UiAppCta
        v-if="cta && cta.url"
        class="app-description-card__cta"
        kind="ghost"
        :label="cta.label"
        :segment="cta.segment"
        :url="cta.url"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { GeneralLink } from "~/constants/appLinks";

export type DescriptionCard = {
  title: string;
  description: string;
  cta: GeneralLink;
};

interface Props {
  cta: GeneralLink;
  description: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.app-description-card {
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
