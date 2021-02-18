<template>
  <main class="mit-endicott-page">
    <AppDataTableSection
      class="mit-endicott-page__section"
      :section-title="agendaSectionTitle"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="agendaElementsDataTable"
    />
    <HelpfulResourcesSection class="mit-endicott-page__section" :resources="helpfulResources" />
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
export default class SeminarSeriesPage extends QiskitPage {
  routeName = 'mit-endicott'

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
      styles: 'min-width: 3rem; display: inline-block;',
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
