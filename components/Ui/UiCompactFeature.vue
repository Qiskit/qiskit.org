<template>
  <article class="ui-compact-feature">
    <nuxt-img class="ui-compact-feature__icon" :src="`/images/icons/${icon}`" />
    <h3 class="h4 ui-compact-feature__title">
      {{ title }}
    </h3>
    <div class="ui-compact-feature__description">
      {{ description }}
    </div>
    <div v-if="detail" class="ui-compact-feature__detail">
      {{ detail }}
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  description: string;
  icon: string;
  title: string;
  detail?: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

$feature-icon-size: 2.25rem;

.ui-compact-feature {
  background-color: qiskit.$background-color-secondary;
  height: 100%;
  padding: carbon.$spacing-05;
  position: relative;

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

  &__detail {
    color: qiskit.$text-color-white;
    position: absolute;
    bottom: carbon.$spacing-05;
  }
}
</style>
