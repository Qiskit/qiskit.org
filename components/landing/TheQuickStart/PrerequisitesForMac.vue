<template>
  <div class="prerequisites">
    <p class="prerequisites__copy">
      To use the Clang compiler on macOS, you need to install
      an extra library for supporting OpenMP. You can use
      <AppLink class="prerequisites__link" url="https://brew.sh/">
        brew
      </AppLink>
      to install this and other dependencies.
    </p>
    <p class="prerequisites__title">
      Install the compiler
    </p>
    <pre class="prerequisites__code">brew install libomp</pre>
    <p class="prerequisites__title">
      Install OpenBLAS development headers
    </p>
    <pre class="prerequisites__code">brew install openblas</pre>
    <p class="prerequisites__title">
      Install Xcode Command Line Tools.
    </p>
    <pre class="prerequisites__code">xcode-select --install</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import AppLink from '~/components/ui/AppLink.vue'

@Component({ components: { AppLink } })
export default class extends Vue { }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/prerequisites.scss';
</style>
