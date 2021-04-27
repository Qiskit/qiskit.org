<template>
  <main class="physics-of-computation-page">
    <AppPageHeaderWithCard
      :cta="headerCTA"
      :card-title="headerCardTitle"
    >
      <template slot="title">
        {{ headerPrimaryTitle }}
        <br>
        {{ headerSecondaryTitle }}
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
        <EventCard v-bind="headerCardContent" vertical-layout>
          {{ headerCardContent.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>
    <AppMosaicSection
      class="physics-of-computation-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <AppDataTableSection
      class="physics-of-computation-page__section"
      :section-title="morningAgendaSectionTitle"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="morningSessionElementsDataTable"
    >
      <AppCta kind="ghost" v-bind="morningSessionAgendaCTA" is-wider />
    </AppDataTableSection>
    <section class="physics-of-computation-page__section">
      <h2 class="copy__title" v-text="afternoonAgendaSectionTitle" />
      <p class="copy__paragraph">
        <AppCta kind="ghost" v-bind="afternoonSessionAgendaCTA" is-wider />
      </p>
      <AppDataTable :columns="agendaColumnsDataTable" :elements="afternoonSessionElementsDataTable" />
    </section>
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
import { GeneralLink } from '~/constants/appLinks'

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

  morningSessionYouTubeURL = 'https://youtu.be/GR6ANm6Z0yk'
  afternoonSessionRegisterURL = 'https://event.on24.com/wcc/r/3146756/28786C95E25E106FD4C81587B8286CC4'

  // Data for the header section
  headerPrimaryTitle = 'QC40: Physics of Computation Conference'
  headerSecondaryTitle = '40th Anniversary'
  headerDescription = [
    `QC40 is a one-day virtual event that will celebrate the 40th anniversary of the
    Physics of Computation Conference which was jointly organized by MIT and IBM, and
    held at the MIT Endicott House in 1981.`,
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
    label: 'Register',
    url: this.afternoonSessionRegisterURL,
    segment: {
      action: `${this.routeName} > header > register`
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
    to: 'https://youtu.be/YGqBVnAPvSw',
    ctaLabel: 'Official trailer',
    segment: {
      action: `${this.routeName} > header > official-trailer`
    }
  }

  // Data for the mosaic section
  mosaicSectionTitle = 'What you will find at QC40'
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
      title: 'Contributed talks: The latest in quantum information science ',
      description: `The afternoon will be packed with a wide range of talks illustrating
      current research and new developments across the field of quantum information
      science.<br/><br/>
      <ul>
        <li>Aram Harrow from MIT will chair the track dedicated to Theory and Applications.</li>
        <li>Sarah Sheldon from IBM will chair the track dedicated to Hardware and Experiment.</li>
      </ul>`,
      image: '/images/events/physics-of-computation/mosaic-people-on-discussion.png'
    },
    {
      position: 'third',
      title: 'The Future of Quantum Hardware',
      description: `Jerry Chow, Director of Quantum Hardware System Development at IBM Quantum,
      will discuss the engineering challenges that the quantum computing field must tackle across
      the stack, what it takes to make quantum computing a practical reality, and IBM’s roadmap to
      accomplish these goals in the next decade.`,
      image: '/images/events/physics-of-computation/mosaic-ibm-quantum-chip.png'
    },
    {
      position: 'fourth',
      title: 'A panel of experts: Then and Now',
      description: `Watch a lively discussion between recognized scientists who will bridge the gap
      between the past and the future of quantum information science and computation.<br><br>
      <strong>Panelists include:</strong><br>
      <ul>
        <li>Dorit Aharonov (Hebrew University of Jerusalem)</li>
        <li>Isaac Chuang (MIT)</li>
        <li>Umesh Vazirani (University of California, Berkeley)</li>
        <li>Will Oliver (MIT)</li>
        <li>Zaira Nazario (IBM)</li>
      </ul>
      `
    }
  ]

  // Data for the agenda section
  morningAgendaSectionTitle: string = 'Morning Session'
  afternoonAgendaSectionTitle: string = 'Afternoon Session'

  morningAgenda: AgendaSlot[] = [
    {
      time: '08:30 AM',
      event: `An introduction from Olivia Lanes PhD, experimental researcher and
      education developer at IBM and Charlie Bennett, physicist, information theorist
      and IBM Fellow at IBM Research.`
    },
    {
      time: '08:45 AM',
      event: `A series of keynote addresses about quantum information science in the 1980s<br>
      <ul>
        <li>1981 and The Beginnings of Quantum Information (Charlie Bennett - IBM)</li>
        <li>The Development of Quantum Algorithms and Error Correction (Peter Shor - MIT)</li>
        <li>A Brief History of Superconducting Qubits (Steve Girvin - Yale University)</li>
      </ul>`
    },
    {
      time: '10:30 AM',
      event: `A live panel that will bridge Then and Now. Featuring:<br>
      <ul>
        <li>Dorit Aharonov (Hebrew University of Jerusalem)</li>
        <li>Isaac Chuang (MIT)</li>
        <li>Umesh Vazirani (University of California, Berkeley)</li>
        <li>Will Oliver (MIT)</li>
        <li>Zaira Nazario (IBM)</li>
      </ul>`
    },
    {
      time: '11:30 AM',
      event: 'The Future of Quantum Hardware (Jerry Chow - IBM)'
    },
    {
      time: '12:10 PM',
      event: `Announcement – <a href="https://www.ibmquantumawards.com/#/event" target="_blank"
      style="cursor:pointer; text-decoration: none; color: #0f62fe;">IBM Quantum Awards</a>: Open
      Science Prize winners`
    },
    {
      time: '12:20 PM',
      event: 'IBM Research Leadership remarks'
    },
    {
      time: '12:30 PM',
      event: 'Lunch break'
    }
  ]

  afternoonAgenda: AgendaSlot[] = [
    {
      time: '01:30 PM',
      event: 'Introduction to Track 1 – Contributed Talks on Hardware and Experiment (Sarah Sheldon - IBM)'
    },
    {
      time: '01:55 PM',
      event: 'Introduction to Track 2 – Contributed Talks on Theory/Applications (Aram Harrow - MIT)'
    },
    {
      time: '02:20 PM',
      event: 'Two parallel tracks (8 to 10 contributed talks each)'
    },
    {
      time: '05:30 PM',
      event: 'Closing Remarks'
    }
  ]

  morningSessionElementsDataTable = this.getDataTableElements(this.morningAgenda)
  afternoonSessionElementsDataTable = this.getDataTableElements(this.afternoonAgenda)

  getDataTableElements (agenda: AgendaSlot[]) : TableRowElement[][] {
    return agenda.map(slot => ([
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
  }

  agendaColumnsDataTable: string[] = ['Time (EDT)', 'Event']

  morningSessionAgendaCTA: GeneralLink = {
    url: this.morningSessionYouTubeURL,
    label: 'Follow this session on YouTube (no registration needed)',
    segment: {
      action: `${this.routeName} > morning-session-section > youtube-morning-session`
    }
  }

  afternoonSessionAgendaCTA: GeneralLink = {
    url: this.afternoonSessionRegisterURL,
    label: 'Register to follow the afternoon session!',
    segment: {
      action: `${this.routeName} > afternoon-session-section > register-afternoon-session`
    }
  }

  // Data for the helpful resources section
  helpfulResourcesSectionTitle = 'Take action now'
  helpfulResources: DescriptionCard[] = [
    {
      title: 'Morning session',
      description: 'Click on the link below to join us on the Qiskit YouTube channel at 8:30 AM.',
      cta: {
        url: this.morningSessionYouTubeURL,
        label: 'Morning Session',
        segment: {
          action: `${this.routeName} > helpful-resources > youtube-morning-session`
        }
      }
    },
    {
      title: 'Afternoon session',
      description: 'Click on the link below to join us on the ON24 platform at 01:30 PM.',
      cta: {
        url: this.afternoonSessionRegisterURL,
        label: 'Afternoon Session',
        segment: {
          action: `${this.routeName} > helpful-resources > register-afternoon-session`
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
