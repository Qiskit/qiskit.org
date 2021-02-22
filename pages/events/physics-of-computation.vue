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
  headerTitle = 'QC40: Physics of Computation Conference, 40th Anniversary'
  headerDescription = [
    `QC40 is a one-day virtual event that will celebrate the 40th anniversary
    of the original Physics of Computation Conference, held at the MIT Endicott House
    in 1981.`,
    `The 1981 event was a defining moment in the history of quantum computing and the
    physics of computation. At QC40, we will take a close look at the changes in quantum
    computing over the past 40 years, with keynote addresses by attendees from the original
    conference and pioneers in the field of quantum computing, followed by a panel
    discussion and talks focused on where quantum information science is today and
    where it is headed.`,
    `The day will also feature academic talks highlighting recent work in quantum
    information science. The top outstanding talk submissions will be recognized with up
    to $5,000 grants as a way to contribute to future research.`
  ]

  headerCTA = {
    label: 'Submit a talk',
    url: '#',
    segment: {
      action: `${this.routeName} > header > submit-a-talk`
    }
  }

  headerCardTitle = 'About the event:'

  headerCardContent = {
    date: 'May 6, 2021',
    image: '/images/events/mit-endicott/card-image-endicott-house-1981.png',
    location: 'Online',
    title: 'Hosted by IBM',
    to: '#',
    ctaLabel: 'Add to calendar'
  }

  // Data for the mosaic section
  mosaicSectionTitle = 'What is QC40?'
  mosaicElements = [
    {
      position: 'first',
      title: 'Hear from renowned 1981 attendees',
      description: 'Listen to what some of the 1981 key attendees have to say about the original Physics of Computation conference.',
      image: '/images/events/mit-endicott/mosaic-charles-bennet.png'
    },
    {
      position: 'second',
      title: 'Panel discussion',
      description: 'Take this opportunity to ask questions to a diverse panel of experts in the field of quantum information science and computation.',
      image: '/images/events/mit-endicott/mosaic-people-on-discussion.png'
    },
    {
      position: 'third',
      title: 'The latest in quantum information science',
      description: 'This event will offer a wide range of talks illustrating current research and new developments across the field of quantum information science.',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'fourth',
      title: 'Call for Submissions ',
      description: `<strong>Format:</strong> Submit a clear abstract here (each presenter will have 15 minutes plus a 5-minute Q&A)<br/>
        <strong>Review criteria:</strong> <em>(scored with equal weight)</em><br/>
        • Problem and application - Measures future influence in quantum information science<br/>
        • Technical approach and novelty - Rates innovative aspect of your approach to the problem<br/>
        • Significance of research contribution - Evaluates progress towards a solution<br/>
        • Clarity of the proposed topic<br/>
        <strong>Reviewers:</strong> Quantum experts serving on the IBM Academic Steering Committee<br/>
        <strong>Deadline for submission:</strong> March 22, 2021<br/>
        <strong>Decision date:</strong> April 15, 2021`
    }
  ]

  // Data for the agenda section
  agendaSectionTitle: string = 'Event schedule'

  agenda: AgendaSlot[] = [
    {
      time: '08:30 AM (EST)',
      event: 'An introduction from Olivia Lanes PhD, an experimental researcher and education developer at IBM and Charlie Bennett, physicist, information theorist and IBM Fellow at IBM Research.'
    },
    {
      time: '09:00 AM (EST)',
      event: 'A series of keynote addresses about quantum information science in the 1980s'
    },
    {
      time: '10:30 AM (EST)',
      event: 'A live panel that will bridge Then and Now'
    },
    {
      time: '11:30 AM (EST)',
      event: 'The future of quantum hardware'
    },
    {
      time: '01:00 AM (EST)',
      event: 'Talk Series 1: Hardware and Architecture'
    },
    {
      time: '01:00 AM (EST)',
      event: 'Talk Series 2: Theory and Applications'
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
      description: 'Click on the link below to get an email notification when registration for QC40 opens.',
      cta: {
        url: '/',
        label: 'Join mailing list',
        segment: {
          action: `${this.routeName} > helpful-resources > join-mailing-list`
        }
      }
    },
    {
      title: 'Learn more about Quantum',
      description: 'Link to IBM Quantum page',
      cta: {
        url: '/',
        label: 'Call to action here',
        segment: {
          action: `${this.routeName} > helpful-resources > contact`
        }
      }
    },
    {
      title: 'Learn more about Qiskit',
      description: 'Link to Qiskit page',
      cta: {
        url: '/',
        label: 'Call to action here',
        segment: {
          action: `${this.routeName} > helpful-resources > qiskit-org-learn`
        }
      }
    },
    {
      title: 'Code of conduct',
      description: 'We are dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
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
