<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>Run the following command and follow the onscreen instructions:</p>
      <pre class="code prerequisites__code">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre>

      <p>
        See <AppLink url="https://rustup.rs/">
          https://rustup.rs/
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        </AppLink> for more information and details on <AppLink url="https://forge.rust-lang.org/infra/other-installation-methods.html">other installation methods</AppLink>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForMac extends Vue { }
</script>
