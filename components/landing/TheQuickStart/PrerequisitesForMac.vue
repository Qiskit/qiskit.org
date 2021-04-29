<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>
        To use the Clang compiler on macOS, you need to install an extra library
        for supporting OpenMP. You can use
        <AppLink url="https://brew.sh/">
          brew
        </AppLink>
        to install this and other dependencies.
      </p>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">
        Install the compiler
      </h3>
      <pre class="code prerequisites__code">brew install libomp</pre>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">
        Install OpenBLAS development headers
      </h3>
      <pre class="code prerequisites__code">brew install openblas</pre>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">
        Install Xcode Command Line Tools.
      </h3>
      <pre class="code prerequisites__code">xcode-select --install</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForMac extends Vue { }
</script>
