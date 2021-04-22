<template>
  <main class="event-page seminar-series-page">
    <AppPageHeaderWithCard
      :cta="headerCTA"
      :card-title="headerCardTitle"
    >
      <template slot="title">
        {{ headerTitle }}
      </template>
      <template slot="description">
        <p
          v-for="(paragraph, index) in headerDescription"
          :key="index"
          class="copy__paragraph"
          v-text="paragraph"
        />
      </template>
      <template slot="card">
        <EventCard v-bind="cardContent" vertical-layout>
          {{ cardContent.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>
    <AppMosaicSection
      class="seminar-series-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <AppDataTableSection
      v-if="hasUpcomingEvents"
      class="seminar-series-page__section"
      :section-title="upcomingEventsSectionTitle"
      :data-table-columns="seminarSeriesDataTableColumns"
      :data-table-elements="upcomingEventsDataTable"
    />
    <AppDataTableSection
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
    <AppHelpfulResourcesSection
      class="seminar-series-page__section"
      :resources="helpfulResources"
    />
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
import {
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA
} from '~/constants/appLinks'

@Component({
  head () {
    return {
      title: 'Qiskit Seminar Series'
    }
  }
})
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'seminar-series'

  // Data for the header section
  headerTitle = 'Quantum Information Science Seminar Series'
  headerDescription = [
    `The Qiskit Quantum Information Science Seminar Series is dedicated to the
    research and academic communities as a broad and deep dive into the latest
    cutting edge quantum research.`,
    `The seminar is live and interactive, you can discuss and ask questions as
    you watch, and is streamed on YouTube.`,
    'Join us live every Friday at 12:00 PM ET.'
  ]

  headerCTA = {
    ...SEMINAR_SERIES_ALL_EPISODES_CTA,
    segment: {
      action: `${this.routeName} > header > talk-on-youtube`
    }
  }

  // When there are no upcoming events, the JSON file is filled with []
  hasUpcomingEvents = JSON.stringify(upcomingSeminarSerieEvents) !== '[]'
  randomNumber = Math.random()
  randomIndex = Math.floor(this.randomNumber * pastSeminarSeriesEvents.length)

  headerCardTitle = this.hasUpcomingEvents ? 'Up next:' : 'Featured seminar:'

  cardContent = this.hasUpcomingEvents
    ? upcomingSeminarSerieEvents[0]
    : pastSeminarSeriesEvents[this.randomIndex]

  headerCardContent = {
    ...this.cardContent,
    title: this.cardContent.speaker,
    description: this.cardContent.title
  }

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

  // Data for the helpful resources section
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
