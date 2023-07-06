<template>
  <div class="home-lead-space-version">
    <UiLinkText :link="githubRepoLink">
      <LogoGitHub32 class="home-lead-space-version__github-icon" />
    </UiLinkText>
    <div class="home-lead-space-version__content">
      <div class="home-lead-space-version__version-string">
        <UiLinkText class="code" kind="secondary" :link="githubRepoLink">
          qiskit {{ version }}
        </UiLinkText>
      </div>
      <div class="home-lead-space-version__release-notes">
        <UiLinkText class="code" :link="releaseNotesLink">
          see release notes
        </UiLinkText>
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
  segment: { cta: "gitHub-repository", location: "version-info" },
  title: "GitHub",
  url: "https://github.com/Qiskit/qiskit",
};

const config = useRuntimeConfig();

const releaseNotesLink: Link = {
  segment: { cta: "release-notes", location: "version-info" },
  title: "GitHub",
  url: `${config.public.siteUrl}/documentation/release_notes.html#notable-changes`,
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.home-lead-space-version {
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
