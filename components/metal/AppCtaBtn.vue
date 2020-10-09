<template>
  <AppCta
    class="app-cta-btn"
    v-bind="$attrs"
  >
    {{ $attrs.label }}
  </AppCta>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppCta from '~/components/ui/AppCta.vue'

@Component({ components: { AppCta } })
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-cta-btn {
  color: $white !important;
  background-color: $purple-70;
  padding: $spacing-05;
  width: fit-content !important;

  @include mq($until: medium) {
    width: 100% !important;
    display: flex;
    justify-content: space-between;
  }
}
</style>
