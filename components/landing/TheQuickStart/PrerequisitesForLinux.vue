<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <h3 class="h4">Install the compiler</h3>
      <p>
        If you’re using Fedora or an equivalent Linux distribution, install
        using:
      </p>
      <pre class="code prerequisites__code">dnf install @development-tools</pre>
      <p>For Ubuntu/Debian install it using:</p>
      <pre class="code prerequisites__code">apt-get install build-essential</pre>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">Install OpenBLAS development headers</h3>
      <p>
        If you’re using Fedora or an equivalent Linux distribution, install
        using:
      </p>
      <pre class="code prerequisites__code">dnf install openblas-devel</pre>
      <p>For Ubuntu/Debian install it using:</p>
      <pre class="code prerequisites__code">apt-get install libopenblas-dev</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForLinux extends Vue { }
</script>
