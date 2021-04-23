<template>
  <AppLink v-bind="$attrs">
    <slot />
  </AppLink>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class MdLink extends Vue {}
</script>
