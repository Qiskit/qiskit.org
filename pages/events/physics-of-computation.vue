<template>
  <main class="mit-endicott-page">
    <EventsHeader
      class="mit-endicott-page__header"
      :title="headerTitle"
      :description="headerDescription"
      :cta="headerCTA"
      :card-title="headerCardTitle"
      :card-content="headerCardContent"
    />
    <AppMosaicSection
      class="mit-endicott-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <AppDataTableSection
      class="mit-endicott-page__section"
      :section-title="agendaSectionTitle"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="agendaElementsDataTable"
    />
    <AppHelpfulResourcesSection
      class="mit-endicott-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { TableRowElement } from '~/components/ui/AppDataTable.vue'

interface AgendaSlot {
  time: string,
  event: string
}

@Component({
  head () {
    return {
      title: 'MIT Endicott Event'
    }
  }
})
export default class MITEndicottPage extends QiskitPage {
  routeName = 'physics-of-computation'

  // Data for the header section
  headerTitle = 'Physics of Computation Conference 40th Anniversary'
  headerDescription = [
    `The 2021 Physics of Computation Conference is a 1-day virtual event that
    will celebrate the 40th anniversary of the very first Physics of Computation
    Conference held by IBM and MIT at the MIT Endicott House in 1981.`,
    `With this new edition, we will take a look at the historical timeline of
    quantum computing information science: we will hear keynotes from some of the
    1981 attendees and pioneers in the field of quantum computing, and will then
    shift our focus on the latest research to highlight where quantum is today and
    where it is headed.`,
    `The event will be streamed on YouTube and also offer opportunities for live
    interactions, where you can ask questions and mingle with quantum researchers.`,
    'Join us live on May 6, 2021 at 08:30 AM EST.'
  ]

  headerCTA = {
    label: 'Register now',
    url: '#',
    segment: {
      action: `${this.routeName} > header > register`
    }
  }

  headerCardTitle = 'Event details:'

  headerCardContent = {
    date: 'May 6, 2021',
    image: '/images/events/mit-endicott/card-image-endicott-house-1981.png',
    location: 'Online',
    title: 'MIT Endicott House',
    to: '#'
  }

  // Data for the mosaic section
  mosaicSectionTitle = 'What is the Physics of Computation conference 40 Anniversary event?'
  mosaicElements = [
    {
      position: 'first',
      title: 'Hear from renown 1981 attendees ',
      description: 'Listen to the what 1981 key attendees have to say about the first-ever Physics of Computation conference, hosted at the MIT Endicott House.',
      image: '/images/events/seminar-series/mosaic-experts.png'
    },
    {
      position: 'second',
      title: 'Title Text',
      description: 'blurb here on MIT and IBM hosting the 1981 conference and collaborating blurb here on MIT and IBM hosting the 1981 conference and collaborating blurb here on MIT and IBM hosting the 1981 conference and collaborating blurb here on MIT and IBM hosting the 1981 conference and collaborating',
      image: '/images/events/mit-endicott/mosaic-mit-endicott-house-1981.png'
    },
    {
      position: 'third',
      title: 'The latest in quantum information science ',
      description: 'This event will offer a wide range of talks that will illustrate the most current research and new developments across the field of quantum computing. ',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'fourth',
      title: 'Title Text',
      description: `In the morning, follow our live panel and ask questions in real time via the comment chat box on YouTube.</br>
                    In the afternoon, participate in live Q&As after each talk and engage in real time with other researchers and quantum experts and enthusiasts.`,
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ]

  // Data for the agenda section
  agendaSectionTitle: string = 'Event schedule'

  agenda: AgendaSlot[] = [
    {
      time: '08:30 AM (EST)',
      event: 'An introduction from Olivia Lanes - an experimental researcher and education developer at IBM, Charlie Bennett - and Susannah Glickman.'
    },
    {
      time: '09:00 AM (EST)',
      event: 'A series of keynote addresses about quantum information science in the 1980s'
    },
    {
      time: '10:30 AM (EST)',
      event: 'A live panel that will bridge the Then and Now'
    },
    {
      time: '11:30 AM (EST)',
      event: 'IBM Hardware in the Future'
    },
    {
      time: '01:00 AM (EST)',
      event: 'Introduction to a series of talks on Hardware and Architecture in the 2020s '
    },
    {
      time: '01:30 AM (EST)',
      event: 'Introduction to a series of talks on Theory and Applications in the 2020s'
    }
  ]

  agendaElementsDataTable: TableRowElement[][] = this.agenda.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 3rem; display: inline-block; font-weight: bold;',
      data: slot.time
    },
    {
      component: 'span',
      styles: 'min-width: 9rem; display: inline-block;',
      data: slot.event
    }
  ]))

  agendaColumnsDataTable: string[] = ['Time', 'Event']

  // TODO: Replace with the final content
  helpfulResources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events.',
      cta: {
        url: '/',
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
        url: '/',
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
        url: '/',
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
        url: '/',
        label: 'See code of conduct',
        segment: {
          action: `${this.routeName} > helpful-resources > code-of-conduct`
        }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.mit-endicott-page {
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
