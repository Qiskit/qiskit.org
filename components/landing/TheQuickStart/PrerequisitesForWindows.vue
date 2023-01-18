<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <!-- eslint-disable vue/singleline-html-element-content-newline -->
      <p><strong>Windows 64-bit:</strong> Download and run the <AppLink v-bind="rustup64Link">64-bit installer</AppLink>, which will provider follow up instructions.</p>
      <p><strong>Windows 32-bit:</strong> Download and run the <AppLink v-bind="rustup32Link">32-bit installer</AppLink>, which will provider follow up instructions.</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface TrackedLink {
  url: string,
  segment: CtaClickedEventProp
}

@Component
export default class PrerequisitesForWindows extends Vue {
  rustup64Link: TrackedLink = {
    url: 'https://win.rustup.rs/x86_64',
    segment: { cta: 'rustup-windows-64-installer', location: 'start-locally' }
  }

  rustup32Link: TrackedLink = {
    url: 'https://win.rustup.rs/i686',
    segment: { cta: 'rustup-windows-32-installer', location: 'start-locally' }
  }
}
</script>
