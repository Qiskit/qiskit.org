<template>
  <main class="event-page seminar-series-page">
    <SeminarSeriesHeader class="seminar-series-page__header" :next-event="nextEvent" :past-events="pastEvents" />
    <WhatIsThisEventSection class="seminar-series-page__section" />
    <UpcomingSeminarSeriesSection v-if="hasUpcomingEvents" :events="upcomingEvents" class="seminar-series-page__section" />
    <PastSeminarSeriesSection class="seminar-series-page__section" :events="pastEvents" />
    <HelpfulResourcesSection class="seminar-series-page__section" :resources="helpfulResources" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import pastSeminarSeriesEvents from '~/content/events/past-seminar-series-events.json'
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
  // Assign the imported variable to a local one to be able to use it on the template
  upcomingEvents = upcomingSeminarSerieEvents
  pastEvents = pastSeminarSeriesEvents
  // When there are no upcoming events, the JSON file is filled with []
  hasUpcomingEvents = JSON.stringify(this.upcomingEvents) !== '[]'
  nextEvent = this.hasUpcomingEvents ? this.upcomingEvents[0] : null

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events.',
      cta: {
        url: 'https://calendar.google.com/calendar/ical/c12g9fqo0mkvp9bo26dhm3u1rs%40group.calendar.google.com/public/basic.ics',
        label: 'Get calendar updates'
      }
    },
    {
      title: 'Nominate',
      description: 'If you or someone you know might be interested in speaking in a future seminar, we would love to include them. Please include your name, topic and available dates.',
      cta: {
        url: 'https://airtable.com/shrB5wy8SCaMMtKop',
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
