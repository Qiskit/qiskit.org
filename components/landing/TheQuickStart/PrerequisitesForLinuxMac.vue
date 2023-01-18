<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>Run the following command and follow the onscreen instructions:</p>
      <pre class="code prerequisites__code">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre>

      <p>
        See <AppLink v-bind="rustupLink">
          https://rustup.rs/
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        </AppLink> for more information and details on <AppLink v-bind="rustLangInstallLink">other installation methods</AppLink>.
      </p>
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
export default class PrerequisitesForLinuxMac extends Vue {
  rustupLink: TrackedLink = {
    url: 'https://rustup.rs/',
    segment: { cta: 'rustup-installer', location: 'start-locally' }
  }

  rustLangInstallLink: TrackedLink = {
    url: 'https://forge.rust-lang.org/infra/other-installation-methods.html',
    segment: { cta: 'rust-lang-install-methods', location: 'start-locally' }
  }
}
</script>
