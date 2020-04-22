<template>
  <section class="compact-feature">
    <img
      v-if="icon"
      class="compact-feature__icon"
      :src="`/images/icons/icon${icon}White@3x.png`"
    >
    <slot />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, default: '' }) icon
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.compact-feature {
  &__icon {
    position: relative;
    width: 3.75rem;
    height: 3.75rem;
    margin-bottom: 1rem;
  }

  p {
    @include body-long-04();
    margin-top: 0.5rem;
  }

  h2 {
    @include productive-heading-04_5();
  }
}
</style>
