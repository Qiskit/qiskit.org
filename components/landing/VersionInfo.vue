<template>
  <a
    class="qiskit-version-info"
    href="https://github.com/Qiskit/qiskit"
    target="_blank"
    rel="noopener"
  >
    <svg
      class="qiskit-version-info__github-icon"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-labelledby="github-icon"
      role="img"
    ><title id="github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-v-2769b2b6="" /></svg>
    <div class="qiskit-version-info__content">
      <p class="qiskit-version-info__version-string">
        qiskit {{ version }}
      </p>
      <p class="qiskit-version-info__release-notes">
        See
        <a
          class="qiskit-version-info__release-notes-link"
          href="https://qiskit.org/documentation/release_notes.html#notable-changes"
          target="_blank"
          rel="noopener"
        >
          release notes
        </a>
      </p>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, required: true }) version!: string
}
</script>

<style lang="scss" scoped>
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
    color: $purple-50;
  }

  &__release-notes-link {
    color: currentColor;
  }
}
</style>
