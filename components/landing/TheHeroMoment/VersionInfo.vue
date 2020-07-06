<template>
  <div class="qiskit-version-info">
    <AppLink v-bind="githubRepoLink">
      <LogoGitHub32 class="qiskit-version-info__github-icon" />
    </AppLink>
    <div class="qiskit-version-info__content">
      <p class="qiskit-version-info__version-string">
        <AppLink
          class="copy__link qiskit-version-info__link"
          v-bind="githubRepoLink"
        >
          qiskit {{ version }}
        </AppLink>
      </p>
      <p class="qiskit-version-info__release-notes">
        <AppLink
          class="copy__link"
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
import AppLink from '~/components/ui/AppLink.vue'
import { GITHUB_REPOSITORY } from '~/constants/menuLinks'

@Component({
  components: { AppLink }
})
export default class extends Vue {
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

  &__link {
    color: $gray-100;
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
