<template>
  <main class="event-page seminar-series-page">
    <SeminarSeriesHeader class="seminar-series-page__header" :next-event="nextEvent" :past-events="pastEvents" />
    <AppMosaicSection
      class="seminar-series-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <WhatIsThisEventSection class="seminar-series-page__section" />
    <AppDataTableSection
      v-if="hasUpcomingEvents"
      class="seminar-series-page__section"
      :section-title="upcomingEventsSectionTitle"
      :data-table-columns="seminarSeriesDataTableColumns"
      :data-table-elements="upcomingEventsDataTable"
    />
    <AppDataTableSection
      v-if="hasUpcomingEvents"
      class="seminar-series-page__section"
      :section-title="pastEventsSectionTitle"
      :data-table-columns="seminarSeriesDataTableColumns"
      :data-table-elements="pastEventsDataTable"
    >
      <AppCta
        class="seminar-series-page__past-events-cta"
        kind="ghost"
        v-bind="showMorePastEventsCta"
      />
    </AppDataTableSection>
    <HelpfulResourcesSection class="seminar-series-page__section" :resources="helpfulResources" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { MosaicElement } from '~/components/ui/AppMosaic.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { SeminarSeriesEvent } from '~/hooks/event-conversion-utils'
import { TableRowElement } from '~/components/ui/AppDataTable.vue'
import upcomingSeminarSerieEvents from '~/content/events/upcoming-seminar-series-events.json'
import pastSeminarSeriesEvents from '~/content/events/past-seminar-series-events.json'
import { SEMINAR_SERIES_FULL_ARCHIVE_CTA } from '~/constants/appLinks.ts'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series'

  // Data for the mosaic section
  mosaicSectionTitle = 'What is the Quantum Information Science Seminar Series?'
  mosaicElements: MosaicElement[] = [
    {
      position: 'first',
      title: 'Learn from experts',
      description:
        'Learn from & interact directly with world-leading experts in quantum, from across the globe.',
      image: '/images/events/seminar-series/mosaic-experts.png'
    },
    {
      position: 'second',
      title: 'About the hosts',
      description:
        'Dr. Zlatko K. Minev, research staff member at IBM Quantum and recipient of MIT Tech Review’s 35 under 35 Global Innovator award, is our lead host. He is joined by Dr. Olivia Lanes, an experimental researcher and education developer at IBM, working to bridge the gap between the hardware and software communities.',
      image: '/images/events/seminar-series/mosaic-hosts.png'
    },
    {
      position: 'third',
      title: 'The latest in quantum computing',
      description:
        'This series will discuss all the most current research and new developements across the field of quantum computing.',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'fourth',
      title: 'Real time questions & discussion',
      description:
        'Discuss in real time with other researchers, students, and folks in quantum, while having the ability to ask questions of the speaker in real time via the comment chat box on YouTube.',
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ]

  // Data for the data table's sections
  upcomingEventsSectionTitle = 'Upcoming Quantum Seminar Schedule'
  pastEventsSectionTitle = 'Past Quantum Seminars'
  seminarSeriesDataTableColumns = ['Speaker', 'Institution', 'Name of talk', 'Date of talk', 'Link to talk']
  upcomingEventsDataTable = this.dataPerRow(upcomingSeminarSerieEvents, 'upcoming-events-section')
  pastEventsDataTable = this.dataPerRow(pastSeminarSeriesEvents, 'past-events-section')
  showMorePastEventsCta = SEMINAR_SERIES_FULL_ARCHIVE_CTA

  pastEvents = pastSeminarSeriesEvents

  // When there are no upcoming events, the JSON file is filled with []
  hasUpcomingEvents = JSON.stringify(upcomingSeminarSerieEvents) !== '[]'
  nextEvent = this.hasUpcomingEvents ? upcomingSeminarSerieEvents[0] : null

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events.',
      cta: {
        url: 'https://calendar.google.com/calendar/ical/c12g9fqo0mkvp9bo26dhm3u1rs%40group.calendar.google.com/public/basic.ics',
        label: 'Get calendar updates',
        segment: {
          action: `${this.routeName} > helpful-resources > get-calendar`
        }
      }
    },
    {
      title: 'Nominate',
      description: 'If you or someone you know might be interested in speaking in a future seminar, we would love to include them. Please include your name, topic and available dates.',
      cta: {
        url: 'https://airtable.com/shrB5wy8SCaMMtKop',
        label: 'Contact us',
        segment: {
          action: `${this.routeName} > helpful-resources > contact`
        }
      }
    },
    {
      title: 'Get up to speed',
      description: 'If the content of the seminar series is too dense or technical, we have a host of content to help you get up to speed.',
      cta: {
        url: 'https://qiskit.org/learn',
        label: 'Start learning',
        segment: {
          action: `${this.routeName} > helpful-resources > qiskit-org-learn`
        }
      }
    },
    {
      title: 'Code of conduct',
      description: 'Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        label: 'See code of conduct',
        segment: {
          action: `${this.routeName} > helpful-resources > code-of-conduct`
        }
      }
    }
  ]

  dataPerRow (events: SeminarSeriesEvent[], eventsSection: string) : TableRowElement[][] {
    return events.map(event => ([
      {
        component: 'span',
        styles: 'min-width: 9rem; display: inline-block;',
        data: event.speaker
      },
      {
        component: 'span',
        styles: 'min-width: 9rem; display: inline-block;',
        data: event.institution
      },
      {
        component: 'span',
        styles: 'min-width: 19rem; display: inline-block;',
        data: event.title
      },
      {
        component: 'span',
        styles: 'min-width: 8rem; display: inline-block;',
        data: event.date
      },
      {
        component: 'AppCta',
        styles: 'min-width: 5rem;',
        data: {
          url: event.to,
          label: 'Join event',
          segment: {
            action: `seminar-series > ${eventsSection} > talk-on-youtube`
          }
        }
      }
    ]))
  }
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

  &__past-events-cta {
    padding-bottom: 0;
  }
}
</style>
