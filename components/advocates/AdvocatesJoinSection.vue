<template>
  <section class="join-section">
    <div class="join-section__feature join-section__feature_intro">
      <p class="join-section__feature_intro-copy">
        The Qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.
      </p>
      <AppCtaBtn
        class="join-section__feature_intro-cta"
        v-bind="joinAction"
      />
    </div>
    <CompactFeature
      v-for="benefit in advocateBenefits"
      :key="`benefit-${benefit.icon}`"
      class="join-section__feature"
      v-bind="benefit"
    />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CompactFeature from '~/components/ui/CompactFeature.vue'
import AppCtaBtn from '~/components/metal/AppCtaBtn.vue'

type Benefit = Pick<CompactFeature, 'icon'|'title'|'description'>

@Component({ components: { CompactFeature, AppCtaBtn } })
export default class extends Vue {
  advocateBenefits: Array<Benefit> = [
    {
      icon: 'high-five.svg',
      title: 'Network with experts and enthusiasts',
      description: 'Advocates will be added to a group of quantum experts and will be a part of regular information sharing sessions.'
    },
    {
      icon: 'global-network.svg',
      title: 'Access to Qiskit core members and projects',
      description: 'Advocates will receive special access to core members of the Qiskit team for questions and brainstorming ideas.'
    },
    {
      icon: 'location.svg',
      title: 'Invitation to events',
      description: 'Active Qiskit Advocates will be invited to attend global events created for the quantum computing community.'
    }
  ]

  joinAction = {
    url: '#meet-the-advocates',
    label: 'Find an advocate'
  }
}
</script>

<style lang="scss" scoped>
  @import '~carbon-components/scss/globals/scss/typography';
  .join-section {
    @include contained();
    padding: 0 $spacing-05;
    display: flex;
    justify-content: space-between;

    @include mq($until: medium) {
      flex-wrap: initial;
      flex-direction: column;
    }

    @include mq($until: large) {
      flex-wrap: wrap;
      justify-content: initial;
      padding-left: $spacing-05;
    }

    &__feature {
      flex: 1 1 4 * $column-size-large;
      margin: 0 $spacing-05;
      padding-bottom: $spacing-09;

      @include mq($until: large) {
        flex: 1 1 45%;
        margin: $spacing-05;
      }

      @include mq($until: medium) {
        flex: 1 1 auto;
        margin-left: initial;
        margin-bottom: $spacing-05;
      }

      &_intro {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 0;

        &-copy {
          @include type-style('body-long-01');
          color: $white-text-01;

          @include mq($until: medium) {
            margin-bottom: $spacing-07;
          }
        }

        &-cta {
          min-width: 100%;
          justify-content: space-between;
        }
      }
    }
  }
</style>
