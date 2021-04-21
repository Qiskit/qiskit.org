<template>
  <div class="prerequisites">
    <p class="compact">
      On Windows you need to use Anaconda3 or Miniconda3 to install all the dependencies.
    </p>
    <h3>
      Install the compiler
    </h3>
    <pre class="prerequisites__code">conda install --update-deps vs2017_win-64 vs2017_win-32 msvc_runtime</pre>
    <h3>
      Install OpenBLAS development headers
    </h3>
    <pre class="prerequisites__code">conda install --update-deps -c conda-forge -y openblas cmake</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForWindows extends Vue { }
</script>
