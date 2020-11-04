<template>
  <section class="compact-feature">
    <img
      v-if="icon"
      class="compact-feature__icon"
      :src="`/images/icons/${icon}`"
    >
    <h3 v-if="title" class="compact-feature__title copy__subtitle">
      {{ title }}
    </h3>
    <p v-if="description" class="compact-feature__description copy__paragraph">
      {{ description }}
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CompactFeature extends Vue {
  @Prop(String) icon: string | undefined
  @Prop(String) title: string | undefined
  @Prop(String) description: string | undefined
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

$feature-icon-size: 2.25rem;

.compact-feature {
  background-color: $purple-70;
  padding: $spacing-05;

  &__icon {
    height: $feature-icon-size;
    margin-bottom: $spacing-06;
  }

  &__title {
    color: $white;
    margin-bottom: .75rem;
  }

  &__description {
    color: $white;
    margin-top: $spacing-03;
  }
}
</style>
