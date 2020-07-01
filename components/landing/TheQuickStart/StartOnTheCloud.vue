<template>
  <section class="start-on-the-cloud">
    <div class="start-on-the-cloud__content">
      <h3 class="landing-page__subtitle">
        Start Online
      </h3>
      <p class="landing-page__copy">
        Starting on the cloud will enable you to begin  without installing
        anything.
      </p>
      <AppLink
        class="landing-page__link start-on-the-cloud__link"
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

@Component({
  components: { AppLink }
})
export default class extends Vue {
  ibmQExperienceLink = IBM_Q_EXPERIENCE
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/blocks/landing-page.scss';
@import '~carbon-components/scss/globals/scss/typography';

.start-on-the-cloud {
  width: 37%;
  background-color: $cool-gray-10;
  background-image: url('/images/grid/grid-inverse.svg');
  background-position: bottom right;
  background-size: 36rem auto;
  background-repeat: no-repeat;

  &__content {
    padding: $spacing-07;
  }

  &__link {
    margin-top: $layout-05;
    fill: $purple-70;
    display: flex;

    :first-child {
      margin-right: $spacing-06;
    }
  }
}
</style>
