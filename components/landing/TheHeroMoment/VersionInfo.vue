<template>
  <div class="qiskit-version-info">
    <AppLink v-bind="githubRepoLink">
      <LogoGitHub32 class="qiskit-version-info__github-icon" />
    </AppLink>
    <div class="qiskit-version-info__content">
      <p class="qiskit-version-info__version-string">
        <AppLink
          kind="secondary"
          v-bind="githubRepoLink"
        >
          qiskit {{ version }}
        </AppLink>
      </p>
      <p class="qiskit-version-info__release-notes">
        <AppLink
          v-bind="githubRepoLink"
          url="https://qiskit.org/documentation/release_notes.html#notable-changes"
          :segment="{ action: 'Release notes' }"
        >
          see release notes
        </AppLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GITHUB_REPOSITORY } from '~/constants/menuLinks'

@Component
export default class VersionInfo extends Vue {
  githubRepoLink = GITHUB_REPOSITORY

  @Prop({ type: String, required: true }) version!: string
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/copy.scss';
@import '~carbon-components/scss/globals/scss/typography';

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
    fill: $purple-70;
    margin-right: $spacing-07;

    @include mq($from: medium, $until: large) {
      margin-right: $spacing-05;
    }

    @include mq($until: medium) {
      margin-right: $spacing-03;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__version-string {
    @include type-style('code-01');
    color: $white-text-01;
    text-decoration: none;
    margin-bottom: $spacing-01;
  }

  &__release-notes {
    @include type-style('code-01');
  }
}
</style>
