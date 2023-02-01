<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <!-- eslint-disable vue/singleline-html-element-content-newline -->
      <p><strong>Windows 64-bit:</strong> Download and run the <AppLink v-bind="rustup64Link">{{ rustup64Link.label }}</AppLink>, which will provider follow up instructions.</p>
      <p><strong>Windows 32-bit:</strong> Download and run the <AppLink v-bind="rustup32Link">{{ rustup32Link.label }}</AppLink>, which will provider follow up instructions.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GeneralLink } from '~/constants/appLinks'

const rustup64Link: GeneralLink = {
  url: 'https://win.rustup.rs/x86_64',
  label: '64-bit installer',
  segment: { cta: 'rustup-windows-64-installer', location: 'quick-start' }
}

const rustup32Link: GeneralLink = {
  url: 'https://win.rustup.rs/i686',
  label: '32-bit installer',
  segment: { cta: 'rustup-windows-32-installer', location: 'quick-start' }
}
</script>
