<template>
  <div class="prerequisites">
    <p class="copy__paragraph copy__paragraph_importance_support">
      To use the Clang compiler on macOS, you need to install
      an extra library for supporting OpenMP. You can use
      <AppLink url="https://brew.sh/">
        brew
      </AppLink>
      to install this and other dependencies.
    </p>
    <p class="copy__subtitle">
      Install the compiler
    </p>
    <pre class="prerequisites__code">brew install libomp</pre>
    <p class="copy__subtitle">
      Install OpenBLAS development headers
    </p>
    <pre class="prerequisites__code">brew install openblas</pre>
    <p class="copy__subtitle">
      Install Xcode Command Line Tools.
    </p>
    <pre class="prerequisites__code">xcode-select --install</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForMac extends Vue { }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~/assets/scss/blocks/prerequisites.scss';
</style>
