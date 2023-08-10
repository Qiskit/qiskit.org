<template>
  <div class="one-xp-banner">
    <div class="cds--grid">
      <div class="one-xp-banner__container">
        <span class="one-xp-banner__copy" v-text="copy" />
        <UiCta
          class="one-xp-banner__cta"
          kind="ghost"
          :label="cta.label"
          :segment="cta.segment"
          :url="cta.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  copy: string;
  cta: {
    label: string;
    segment: CtaClickedEventProp;
    url: string;
  };
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.one-xp-banner {
  background-image: linear-gradient(to right, carbon.$purple-10, carbon.$white);
  padding: carbon.$spacing-04 0;

  &__container {
    display: inline-flex;
    flex-direction: column;
    gap: carbon.$spacing-03;

    @include carbon.breakpoint-up(lg) {
      flex-direction: row;
    }
  }

  &__copy {
    font-weight: bold;
  }

  &__cta {
    padding: 0;
  }
}
</style>
