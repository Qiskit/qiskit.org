<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>Run the following command and follow the onscreen instructions:</p>
      <pre class="code prerequisites__code">curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre>

      <p>
        See <AppLink v-bind="rustupLink">
          {{ rustupLink.label }}
        </AppLink>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        for more information and details on <AppLink v-bind="rustLangInstallLink">{{ rustLangInstallLink.label }}</AppLink>.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class PrerequisitesForLinuxMac extends Vue {
  rustupLink: GeneralLink = {
    url: 'https://rustup.rs/',
    label: 'https://rustup.rs/',
    segment: { cta: 'rustup-installer', location: 'quick-start' }
  }

  rustLangInstallLink: GeneralLink = {
    label: 'other installation methods',
    url: 'https://forge.rust-lang.org/infra/other-installation-methods.html',
    segment: { cta: 'rust-lang-install-methods', location: 'quick-start' }
  }
}
</script>
