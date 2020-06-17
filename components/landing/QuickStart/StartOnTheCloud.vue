<template>
  <section class="start-on-the-cloud">
    <h3 class="start-on-the-cloud__title">
      Start on the cloud
    </h3>
    <p class="start-on-the-cloud__description">
      Starting on the cloud will enable you to begin
      without installing anything.
    </p>
    <div class="start-on-the-cloud__content">
      <AppLink
        class="start-on-the-cloud__link"
        :url="ibmQExperienceLink.url"
      >
        <span>{{ ibmQExperienceLink.label }}</span>
        <ArrowRight16 />
      </AppLink>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { IBM_Q_EXPERIENCE } from '~/constants/appLinks'
import AppLink from '~/components/ui/AppLink.vue'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'

@Component({
  components: { AppLink, SyntaxHighlight }
})
export default class extends Vue {
  ibmQExperienceLink = IBM_Q_EXPERIENCE
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.start-on-the-cloud {
  width: 35%;
  background-color: $cool-gray-10;
  padding: $spacing-07;

  &__title {
    @include type-style('productive-heading-02');
    padding-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
  }

  &__content {
    margin-top: $spacing-07;
  }

  &__link {
    padding-top: $spacing-02 + $spacing-07; //To align with locally block
    text-decoration: none;
    color: $purple-70;;
    fill: $purple-70;;
    display: flex;

    :first-child {
      margin-right: 2 * $spacing-07;
    }
  }
}
</style>
