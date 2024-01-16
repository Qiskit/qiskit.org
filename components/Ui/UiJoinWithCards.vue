<template>
  <section class="cds--grid">
    <div class="cds--row">
      <article
        class="cds--col-lg-4 cds--col-md-4 join-with-cards__feature join-with-cards__intro"
      >
        <slot name="description" />
        <UiCta
          is-wider
          :label="cta.label"
          :segment="cta.segment"
          :url="cta.url"
        />
      </article>
      <div
        v-for="card in cards"
        :key="card.name"
        class="cds--col-lg-4 cds--col-md-4 join-with-cards__feature"
      >
        <UiCompactFeature
          :description="card.description"
          :icon="card.icon"
          :title="card.name"
          :detail="card.detail"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { TextLink } from "~/types/links";

interface Card {
  name: string;
  description: string;
  icon: string;
  detail?: string;
}

interface Props {
  cta: TextLink;
  cards: Card[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.join-with-cards {
  &__feature {
    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-07;
    }

    @include carbon.breakpoint-up(md) {
      min-height: 14rem;
    }

    @include carbon.breakpoint-up(lg) {
      min-height: 16.5rem;
    }

    @include carbon.breakpoint-up(xlg) {
      min-height: 14rem;
    }
  }

  &__intro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
