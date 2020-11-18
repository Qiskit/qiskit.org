<template>
  <section class="compact-feature">
    <img
      v-if="icon"
      class="compact-feature__icon"
      :src="`/images/icons/icon${icon}White@3x.png`"
    >
    <h2 v-if="title" class="compact-feature__title">
      {{ title }}
    </h2>
    <p v-if="description" class="compact-feature__description">
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

.compact-feature {
  $feature-icon-size: 3.75rem;

  &__icon {
    position: relative;
    width: $feature-icon-size;
    height: $feature-icon-size;
    margin-bottom: $spacing-05;
  }

  &__title {
    @include productive-heading-04_5();
  }

  &__description {
    @include body-long-04();
    margin-top: $spacing-03;
  }
}
</style>
