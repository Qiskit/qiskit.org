<template>
  <div class="qiskit-version-info">
    <AppLink v-bind="githubRepoLink">
      <LogoGitHub32 class="qiskit-version-info__github-icon" />
    </AppLink>
    <div class="qiskit-version-info__content">
      <div class="qiskit-version-info__version-string">
        <AppLink
          class="code"
          kind="secondary"
          v-bind="githubRepoLink"
        >
          qiskit {{ version }}
        </AppLink>
      </div>
      <div class="qiskit-version-info__release-notes">
        <AppLink
          class="code"
          v-bind="githubRepoLink"
          url="https://qiskit.org/documentation/release_notes.html#notable-changes"
          :segment="{ cta: 'release-notes', location: 'version-info' }"
        >
          see release notes
        </AppLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GITHUB_REPOSITORY } from '~/constants/menuLinks'

interface Props {
  version: string
}

defineProps<Props>()

const githubRepoLink = GITHUB_REPOSITORY
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/variables.scss" as qiskit;

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

    @include mq($from: medium, $until: large) {
      margin-right: carbon.$spacing-05;
    }

    @include mq($until: medium) {
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
