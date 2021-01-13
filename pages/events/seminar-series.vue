<template>
  <main class="event-page seminar-series-page">
    <ThePageHeader class="seminar-series-page__header" :cta="cta">
      Quantum Information Science Seminar Series

      <template #description>
        <p>
          The Quantum Information Science Seminar Series is a deep dive into
          various academic and research topics within the quantum community.
        </p>
        <p>Join every Friday at 12:00 PM EDT</p>
      </template>

      <template #aside>
        <div>Up next:</div>
        <EventCard
          date="January 13, 2021"
          image="/images/events/seminar-series/speakers/abraham-asfaw.jpg"
          location="YouTube"
          title="Will Oliver"
          to="https://www.youtube.com/watch?v=miK5y8BYlwQ&list=PLOFEBzvs-Vvr0uEoGFo08n4-WrM_8fft2&index=1"
          verticalLayout
        />
      </template>
    </ThePageHeader>

    <WhatIsThisEventSection class="seminar-series-page__section" />
    <UpcomingSeminarSeriesSection class="seminar-series-page__section" />
    <HelpfulResourcesSection class="seminar-series-page__section" :resources="helpfulResources" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series';

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events. This section needs copy review.',
      cta: {
        url: '',
        label: 'Get calendar updates'
      }
    },
    {
      title: 'Nominate',
      description: 'If you or someone you know might be interested in speaking in a future seminar, we would love to include them. Please include your name, topic and available dates.',
      cta: {
        url: '',
        label: 'Contact us'
      }
    },
    {
      title: 'Get up to speed',
      description: 'If the content of the seminar series is too dense or technical, we have a host of content to help you get up to speed.',
      cta: {
        url: 'https://qiskit.org/learn',
        label: 'Start learning'
      }
    },
    {
      title: 'Code of conduct',
      description: 'Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        label: 'See code of  conduct'
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.seminar-series-page {
  background-color: $white;
  color: $white-text-01;

  &__header {
    padding-bottom: $layout-05;
    padding-top: $layout-06;

    &__card {
      background-color: $cool-gray-10;
    }
  }

  &__section {
    @include contained();
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>
