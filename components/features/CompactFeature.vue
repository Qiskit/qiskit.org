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
.compact-feature {
  &__icon {
    position: relative;
    width: 3rem;
    height: 3rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  h2 {
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }
}
</style>
