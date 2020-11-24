<template>
  <div class="prerequisites">
    <p class="copy__paragraph copy__paragraph_importance_support">
      On Windows you need to use Anaconda3 or Miniconda3 to install all the dependencies.
    </p>
    <p class="copy__subtitle">
      Install the compiler
    </p>
    <pre class="prerequisites__code">conda install --update-deps vs2017_win-64 vs2017_win-32 msvc_runtime</pre>
    <p class="copy__subtitle">
      Install OpenBLAS development headers
    </p>
    <pre class="prerequisites__code">conda install --update-deps -c conda-forge -y openblas cmake</pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForWindows extends Vue { }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~/assets/scss/blocks/prerequisites.scss';
</style>
