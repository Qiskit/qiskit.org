<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__content">
      <h3 class="start-on-the-cloud__title">
        Start on the cloud
      </h3>
      <p class="start-on-the-cloud__description">
        IBM's hosted Jupyter Notebooks let you get started without installing anything.
      </p>
      <AppLink
        class="start-on-the-cloud__link"
        :url="ibmQExperienceLink.url"
      >
        <span>{{ ibmQExperienceLink.label }}</span>
        <ArrowRight16 />
      </AppLink>
    </div>
    <img src="/images/white-grid.svg">
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { IBM_Q_EXPERIENCE } from '~/constants/appLinks'
import AppLink from '~/components/ui/AppLink.vue'

@Component({
  components: { AppLink }
})
export default class extends Vue {
  ibmQExperienceLink = IBM_Q_EXPERIENCE
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.start-on-the-cloud {
  width: 37%;
  background-color: $cool-gray-10;

  &__content {
    padding: $spacing-07;
  }

  &__title {
    @include type-style('productive-heading-02');
    color: $cool-gray-80;
    margin-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
    margin-bottom: $spacing-07;
  }

  &__link {
    padding-top: $spacing-04 + $spacing-07; //To align with locally block
    margin-bottom: $spacing-04;
    text-decoration: none;
    color: $purple-70;
    fill: $purple-70;
    display: flex;

    :first-child {
      margin-right: 2 * $spacing-07;
    }
  }
}
</style>
