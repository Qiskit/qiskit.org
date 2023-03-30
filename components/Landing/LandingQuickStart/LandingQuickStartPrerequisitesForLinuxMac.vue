<template>
  <div class="prerequisites">
    <div class="prerequisites__section">
      <p>Run the following command and follow the onscreen instructions:</p>
      <pre class="code prerequisites__code">
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre
      >

      <p>
        See
        <UiLink v-bind="rustupLink">
          {{ rustupLink.label }}
        </UiLink>
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        for more information and details on
        <UiLink v-bind="rustLangInstallLink">{{
          rustLangInstallLink.label
        }}</UiLink
        >.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GeneralLink } from "~/constants/appLinks";
const rustupLink: GeneralLink = {
  url: "https://rustup.rs/",
  label: "https://rustup.rs/",
  segment: { cta: "rustup-installer", location: "quick-start" },
};
const rustLangInstallLink: GeneralLink = {
  label: "other installation methods",
  url: "https://forge.rust-lang.org/infra/other-installation-methods.html",
  segment: { cta: "rust-lang-install-methods", location: "quick-start" },
};
</script>
