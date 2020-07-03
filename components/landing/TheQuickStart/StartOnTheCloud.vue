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
  @include responsive-grid-bg('/images/grid/grid-white.svg', 36rem);

  width: 37%;
  background-color: $cool-gray-10;
  background-position: bottom left;
  background-repeat: no-repeat;

  @include mq($until: medium) {
    width: auto;
    height: 17rem;
    background-position: bottom right;
  }

  &__content {
    padding: $spacing-07;

    @include mq($until: large) {
      padding: $spacing-05;
    }
  }

  &__link {
    fill: $purple-70;
    display: flex;

    :first-child {
      margin-right: $spacing-06;
    }
  }
}
</style>
