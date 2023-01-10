<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <!-- eslint-disable vue/singleline-html-element-content-newline -->
      <p><strong>Windows 64-bit:</strong> Download and run the <AppLink url="https://win.rustup.rs/x86_64">64-bit installer</AppLink>, which will provider follow up instructions.</p>
      <p><strong>Windows 32-bit:</strong> Download and run the <AppLink url="https://win.rustup.rs/i686">32-bit installer</AppLink>, which will provider follow up instructions.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class PrerequisitesForWindows extends Vue { }
</script>
