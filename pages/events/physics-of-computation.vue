<template>
  <main class="physics-of-computation-page">
    <EventsHeader
      :description="headerDescription"
      :cta="headerCTA"
      :card-title="headerCardTitle"
      :card-content="headerCardContent"
    >
      {{ headerPrimaryTitle }}
      <br>
      {{ headerSecondaryTitle }}
    </EventsHeader>
    <AppMosaicSection
      class="physics-of-computation-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <AppDataTableSection
      class="physics-of-computation-page__section"
      :section-title="agendaSectionTitle"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="agendaElementsDataTable"
    />
    <AppHelpfulResourcesSection
      class="physics-of-computation-page__section"
      :title="helpfulResourcesSectionTitle"
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
    const title = 'QC40 - Physics of Computation'
    const description = `One-day virtual event to celebrate the 40th anniversary of a
    defining moment in the history of quantum computation, the Physics of Computation
    Conference (1981)`
    const image = '/images/events/physics-of-computation/card-image-endicott-house-1981.png'

    return {
      title,
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: title
        }
      ]
    }
  }
})
export default class PhysicsOfComputationPage extends QiskitPage {
  routeName = 'physics-of-computation'

  // Data for the header section
  headerPrimaryTitle = 'QC40: Physics of Computation Conference'
  headerSecondaryTitle = '40th Anniversary'
  headerDescription = [
    `QC40 is a one-day virtual event that will celebrate the 40th anniversary of the
    Physics of Computation Conference which was jointly organized by MIT and IBM, and
    held at the MIT campus (Endicott House) in 1981.`,
    `The conference was a defining moment in the history of quantum computation. At
    QC40, we will take a close look at the changes in quantum computing over the past
    40 years, with a panel discussion and keynote addresses by attendees from the original
    conference and pioneers in the field of quantum computing.`,
    `The day will also feature academic talks highlighting recent work in quantum
    information science (more details under “What is QC40?”). The top outstanding talk
    submissions will be recognized with up to $5,000 grants as a way to contribute to
    future research.`
  ]

  headerCTA = {
    label: 'Submit a talk',
    url: 'https://airtable.com/shr6UbEsEvinHfjct',
    segment: {
      action: `${this.routeName} > header > submit-a-talk`
    }
  }

  headerCardTitle = 'About the event:'
  headerCardContent = {
    image: '/images/events/physics-of-computation/card-image-endicott-house-1981.png',
    title: 'Celebrate 40 years of quantum',
    description: 'Keynotes, contributed talks, and more bridging the 1981 Physics of Computation conference with current research.',
    location: 'Virtual event open to the public',
    date: 'May 6, 2021',
    time: '8:30am - 5:00pm EDT',
    to: 'https://airtable.com/shrvAA05xkYgSKajc',
    ctaLabel: 'Stay informed',
    segment: {
      action: `${this.routeName} > header > stay-informed`
    }
  }

  // Data for the mosaic section
  mosaicSectionTitle = 'What is QC40?'
  mosaicElements = [
    {
      position: 'first',
      title: 'Keynotes from renowned 1981 attendees ',
      description: `Listen to what some of the 1981 key attendees have to say about
      the original conference and what the state of the field was like 40 years ago.`,
      image: '/images/events/physics-of-computation/mosaic-charles-bennet.png'
    },
    {
      position: 'second',
      title: 'A panel of experts: Then and Now',
      description: `Watch a lively discussion between recognized scientists who will
      bridge the gap between the past and the future of quantum information science and
      computation.`,
      image: '/images/events/physics-of-computation/mosaic-people-on-discussion.png'
    },
    {
      position: 'third',
      title: 'Contributed talks: The latest in quantum information science ',
      description: `The afternoon will be packed with a wide range of talks illustrating
      current research and new developments across the field of quantum information
      science.<br/><br/>
      <ul>
        <li style="list-style-type: disc; margin-left: 1.2rem">Aram Harrow from MIT will chair the track dedicated to Theory and Applications.</li>
        <li style="list-style-type: disc; margin-left: 1.2rem">Sarah Sheldon from IBM will chair the track dedicated to Hardware and Experiment.</li>
      </ul>`,
      image: '/images/events/physics-of-computation/mosaic-ibm-quantum-chip.png'
    },
    {
      position: 'fourth',
      title: 'Call for Submissions',
      description: `<strong>Format:</strong> Submit a clear abstract
        <a href="https://airtable.com/shr6UbEsEvinHfjct" target="_blank"
        style="cursor:pointer; text-decoration: none; color: #0f62fe;">here</a>
        (talks will be 15 minutes plus a 5-minute Q&A)<br/>
        <strong>Review criteria:</strong> <em>(scored with equal weight)</em><br/>
        <ul>
          <li style="list-style-type: disc; margin-left: 1.2rem">Problem and potential influence on quantum information science</li>
          <li style="list-style-type: disc; margin-left: 1.2rem">Technical approach and novelty</li>
          <li style="list-style-type: disc; margin-left: 1.2rem">Clarity of abstract</li>
        </ul>
        <strong>Reviewers:</strong> Quantum researchers from IBM and MIT<br/>
        <strong>Deadline for submission:</strong> March 31, 2021<br/>
        <strong>Decision date:</strong> April 20, 2021`
    }
  ]

  // Data for the agenda section
  agendaSectionTitle: string = 'Event schedule'

  agenda: AgendaSlot[] = [
    {
      time: '08:30 AM',
      event: `An introduction from Olivia Lanes PhD, experimental researcher and
      education developer at IBM and Charlie Bennett, physicist, information theorist
      and IBM Fellow at IBM Research.`
    },
    {
      time: '09:00 AM',
      event: 'A series of keynote addresses about quantum information science in the 1980s'
    },
    {
      time: '10:30 AM',
      event: 'A live panel that will bridge Then and Now'
    },
    {
      time: '11:30 AM',
      event: 'The future of quantum hardware'
    },
    {
      time: '01:00 PM',
      event: 'Conference Track 1: Series of contributed talks focusing on Hardware and Experiment'
    },
    {
      time: '01:00 PM',
      event: 'Conference Track 2: Series of contributed talks focusing on Theory and Applications'
    }
  ]

  agendaElementsDataTable: TableRowElement[][] = this.agenda.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 5rem; display: inline-block; font-weight: bold;',
      data: slot.time
    },
    {
      component: 'span',
      styles: 'min-width: 20rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.event
    }
  ]))

  agendaColumnsDataTable: string[] = ['Time (EDT)', 'Event']

  // Data for the helpful resources section
  helpfulResourcesSectionTitle = 'Take action now'
  helpfulResources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Click on the link below to stay informed about and attend QC40.',
      cta: {
        url: 'https://airtable.com/shrvAA05xkYgSKajc',
        label: 'Stay informed',
        segment: {
          action: `${this.routeName} > helpful-resources > stay-informed`
        }
      }
    },
    {
      title: 'Submit a talk',
      description: `Abstract submissions for contributed talks will be accepted through
      March 31. Click below for an opportunity to share your research project at QC40.`,
      cta: {
        url: 'https://airtable.com/shr6UbEsEvinHfjct',
        label: 'Submit a talk',
        segment: {
          action: `${this.routeName} > helpful-resources > submit-a-talk`
        }
      }
    },
    {
      title: 'Learning resources',
      description: 'Start your path towards learning Quantum Information Science',
      cta: {
        url: 'https://qiskit.org/learn',
        label: 'Learn Qiskit and more',
        segment: {
          action: `${this.routeName} > helpful-resources > qiskit-org-learn`
        }
      }
    },
    {
      title: 'Code of conduct',
      description: `We are dedicated to providing an enjoyable and safe experience for
      all participants. We have a code of conduct that all events adhere to.`,
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
.physics-of-computation-page {
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
