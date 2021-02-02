<template>
  <main class="event-page seminar-series-page">
    <SeminarSeriesHeader class="seminar-series-page__header" :next-event="nextEvent" />
    <WhatIsThisEventSection class="seminar-series-page__section" />
    <UpcomingSeminarSeriesSection v-if="hasUpcomingEvents" :events="upcomingEvents" class="seminar-series-page__section" />
    <PastSeminarSeriesSection class="seminar-series-page__section" />
    <HelpfulResourcesSection class="seminar-series-page__section" :resources="helpfulResources" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import upcomingSeminarSerieEvents from '~/content/events/upcoming-seminar-series-events.json'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series'
  upcomingEvents = upcomingSeminarSerieEvents
  hasUpcomingEvents = JSON.stringify(this.upcomingEvents) !== '[]'
  nextEvent = upcomingSeminarSerieEvents[0] || null

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
  color: $white-text-01;

  &__header {
    padding-top: $layout-06;

    @include mq($until: medium) {
      padding-top: $layout-04;
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
