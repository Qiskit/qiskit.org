<template>
  <section class="join-section">
    <div class="join-section__access">
      <p class="join-section__access-description">
        The qiskit advocate program is a global program that provides support to the individuals who actively contribute to the Qiskit Community.
      </p>
      <AppCtaBtn
        class="join-section__access-cta"
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
    display: flex;
    justify-content: space-between;

    @include mq($until: large) {
      flex-wrap: wrap;
      justify-content: initial;
      padding-left: $spacing-05;
    }

    &__access {
      @include type-style('body-long-01');
      color: $white-text-01;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 4 * $column-size-large;

      @include mq($until: large) {
        width: 45%;
        margin: $spacing-05;
      }

      @include mq($until: medium) {
        width: 100%;
        margin-bottom: $spacing-05;
        margin-left: initial;
      }

      &-description {
        @include mq($until: medium) {
          margin-bottom: $spacing-07;
        }
      }

      &-cta {
        width: 100% !important;
        justify-content: space-between;
      }
    }

    &__feature {
      width: 4 * $column-size-large;
      margin-left: $spacing-05;
      padding-bottom: $spacing-09;

      @include mq($until: large) {
        width: 45%;
        margin: $spacing-05;
      }

      @include mq($until: medium) {
        width: 100%;
        margin-left: initial;
        margin-bottom: $spacing-05;
      }
    }
  }
</style>
