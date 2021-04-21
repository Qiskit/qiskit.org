<template>
  <div class="prerequisites">
    <h3>
      Install the compiler
    </h3>
    <p class="compact">
      If you’re using Fedora or an equivalent Linux distribution,
      install using:
    </p>
    <pre class="prerequisites__code">dnf install @development-tools</pre>
    <p class="compact">
      For Ubuntu/Debian install it using:
    </p>
    <pre class="prerequisites__code">apt-get install build-essential</pre>
    <h3>
      Install OpenBLAS development headers
    </h3>
    <p class="compact">
      If you’re using Fedora or an equivalent Linux distribution,
      install using:
    </p>
    <pre class="prerequisites__code">dnf install openblas-devel</pre>
    <p class="compact">
      For Ubuntu/Debian install it using:
    </p>
    <pre class="prerequisites__code">apt-get install libopenblas-dev</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForLinux extends Vue { }
</script>
