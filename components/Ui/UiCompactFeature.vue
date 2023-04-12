<template>
  <article class="compact-feature">
    <img class="compact-feature__icon" :src="`/images/icons/${icon}`" alt="" />
    <h3 class="h4 compact-feature__title">
      {{ title }}
    </h3>
    <div class="compact-feature__description">
      {{ description }}
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  description: string;
  icon: string;
  title: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

$feature-icon-size: 2.25rem;

.compact-feature {
  background-color: qiskit.$background-color-secondary;
  height: 100%;
  padding: carbon.$spacing-05;

  @include carbon.breakpoint-down(lg) {
    padding-bottom: carbon.$spacing-06;
  }

  &__icon {
    height: $feature-icon-size;
    margin-bottom: carbon.$spacing-06;
  }

  &__title {
    color: qiskit.$text-color-white;
    margin-bottom: carbon.$spacing-04;
    height: 2.5rem; // for consistent alignment

    @include carbon.breakpoint-down(md) {
      height: initial;
    }
  }

  &__description {
    color: qiskit.$text-color-white;
  }
}
</style>
