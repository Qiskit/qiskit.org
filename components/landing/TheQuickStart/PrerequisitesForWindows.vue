<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>
        On Windows you need to use Anaconda3 or Miniconda3 to install all the
        dependencies.
      </p>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">Install the compiler</h3>
      <pre class="code prerequisites__code">conda install --update-deps vs2017_win-64 vs2017_win-32 msvc_runtime</pre>
    </div>
    <div class="prerequisites__section">
      <h3 class="h4">Install OpenBLAS development headers</h3>
      <pre class="code prerequisites__code">conda install --update-deps -c conda-forge -y openblas cmake</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForWindows extends Vue { }
</script>
