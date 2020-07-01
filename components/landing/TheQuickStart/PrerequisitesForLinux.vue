<template>
  <div class="prerequisites">
    <p class="landing-page__subtitle">
      Install the compiler
    </p>
    <p class="landing-page__copy">
      If you’re using Fedora or an equivalent Linux distribution,
      install using:
    </p>
    <pre class="prerequisites__code">dnf install @development-tools</pre>
    <p class="landing-page__copy">
      For Ubuntu/Debian install it using:
    </p>
    <pre class="prerequisites__code">apt-get install build-essential</pre>
    <p class="landing-page__subtitle">
      Install OpenBLAS development headers
    </p>
    <p class="landing-page__copy">
      If you’re using Fedora or an equivalent Linux distribution,
      install using:
    </p>
    <pre class="prerequisites__code">dnf install openblas-devel</pre>
    <p class="landing-page__copy">
      For Ubuntu/Debian install it using:
    </p>
    <pre class="prerequisites__code">apt-get install libopenblas-dev</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue { }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~/assets/scss/blocks/prerequisites.scss';
</style>
