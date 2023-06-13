<template>
  <div class="qiskit-version-info">
    <UiLink
      :label="githubRepoLink.label"
      :segment="githubRepoLink.segment"
      :url="githubRepoLink.url"
    >
      <LogoGitHub32 class="qiskit-version-info__github-icon" />
    </UiLink>
    <div class="qiskit-version-info__content">
      <div class="qiskit-version-info__version-string">
        <UiLink
          class="code"
          kind="secondary"
          :label="githubRepoLink.label"
          :segment="githubRepoLink.segment"
          :url="githubRepoLink.url"
        >
          qiskit {{ version }}
        </UiLink>
      </div>
      <div class="qiskit-version-info__release-notes">
        <UiLink
          class="code"
          label="GitHub"
          url="https://qiskit.org/documentation/release_notes.html#notable-changes"
          :segment="{ cta: 'release-notes', location: 'version-info' }"
        >
          see release notes
        </UiLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoGitHub32 from "@carbon/icons-vue/lib/logo--github/32";
import { Link } from "~/types/links";

interface Props {
  version: string;
}

defineProps<Props>();

const githubRepoLink: Link = {
  label: "GitHub",
  segment: { cta: "gitHub-repository", location: "version-info" },
  url: "https://github.com/Qiskit/qiskit",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.qiskit-version-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;

  // TODO: Force pointer events to pass through to avoid covering the trigger
  // tile to the Metal page. Remove when decomissioning the Metal page.
  pointer-events: none;

  * {
    // TODO: Force pointer events to allow the user to select text and
    // click links in the internal elements. Remove when decomissioning the
    // Metal page.
    pointer-events: auto;
  }

  &__github-icon {
    fill: qiskit.$link-color-tertiary;
    margin-right: carbon.$spacing-07;

    @include carbon.breakpoint-between(md, lg) {
      margin-right: carbon.$spacing-05;
    }

    @include carbon.breakpoint-down(md) {
      margin-right: carbon.$spacing-03;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__version-string {
    text-decoration: none;
    margin-bottom: carbon.$spacing-01;
  }
}
</style>
