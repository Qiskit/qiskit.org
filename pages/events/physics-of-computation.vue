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
          v-text="paragraph"
        />
      </template>
      <template slot="card">
        <EventCard v-bind="headerCardContent" vertical-layout>
          {{ headerCardContent.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>
    <div class="bx--grid">
      <AppMosaicSection
        class="physics-of-computation-page__section"
        :title="mosaicSectionTitle"
        :elements="mosaicElements"
      />
      <AppDataTableSection
        class="physics-of-computation-page__section"
        :section-title="morningAgendaSectionTitle"
        :data-table-columns="agendaColumnsDataTable"
      >
        <template #data-table-elements>
          <cv-data-table-row v-for="(row, rowIndex) in morningSessionElementsDataTable" :key="`${rowIndex}`">
            <cv-data-table-cell v-for="({styles, data}, elementIndex) in row" :key="`${elementIndex}`">
              <!-- eslint-disable vue/no-v-html -->
              <span
                :style="styles"
                v-html="data"
              />
              <!-- eslint-enable -->
            </cv-data-table-cell>
          </cv-data-table-row>
        </template>
        <AppCta kind="ghost" v-bind="morningSessionAgendaCTA" is-wider />
      </AppDataTableSection>
      <AppDataTableSection
        class="physics-of-computation-page__section"
        :section-title="afternoonAgendaSectionTitle"
        :data-table-columns="agendaColumnsDataTable"
      >
        <template #data-table-elements>
          <cv-data-table-row v-for="(row, rowIndex) in afternoonSessionElementsDataTable" :key="`${rowIndex}`">
            <cv-data-table-cell v-for="({styles, data}, elementIndex) in row" :key="`${elementIndex}`">
              <span :style="styles">{{ data }}</span>
            </cv-data-table-cell>
          </cv-data-table-row>
        </template>
        <AppCta kind="ghost" v-bind="afternoonSessionAgendaCTA" is-wider />
      </AppDataTableSection>
      <section class="physics-of-computation-page__section">
        <h3 class="copy__subtitle">
          * Parallel tracks (times listed are approximate and subject to change)
        </h3>
        <AppDataTable :columns="agendaTracksColumnsDataTable">
          <cv-data-table-row v-for="(row, rowIndex) in afternoonSessionByTrackElementsDataTable" :key="`${rowIndex}`">
            <cv-data-table-cell v-for="({styles, data}, elementIndex) in row" :key="`${elementIndex}`">
              <!-- eslint-disable vue/no-v-html -->
              <span
                :style="styles"
                v-html="data"
              />
              <!-- eslint-enable -->
            </cv-data-table-cell>
          </cv-data-table-row>
        </AppDataTable>
      </section>
      <AppHelpfulResourcesSection
        class="physics-of-computation-page__section"
        :title="helpfulResourcesSectionTitle"
        :resources="helpfulResources"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { TableRowElement } from '~/components/ui/AppDataTable.vue'
import { GeneralLink } from '~/constants/appLinks'

interface AgendaSlot {
  time: string,
  event: string
}

interface AgendaSlotByTrack {
  time: string,
  track1: string,
  track2: string
}

const title = 'QC40 - Physics of Computation'
const description = `One-day virtual event to celebrate the 40th anniversary of a
defining moment in the history of quantum computation, the Physics of Computation
Conference (1981)`
const image = '/images/events/physics-of-computation/card-image-endicott-house-1981.png'

definePageMeta({
  layout: 'default-max'
})

useHead({
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
})

const morningSessionYouTubeURL = 'https://youtu.be/GR6ANm6Z0yk'
const afternoonSessionRegisterURL = 'https://event.on24.com/wcc/r/3146756/28786C95E25E106FD4C81587B8286CC4'

// Data for the header section
const headerPrimaryTitle = 'QC40: Physics of Computation Conference'
const headerSecondaryTitle = '40th Anniversary'
const headerDescription = [
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

const headerCTA = computed<GeneralLink>(() => ({
  label: 'Register',
  url: afternoonSessionRegisterURL,
  segment: { cta: 'register', location: 'header' }
}))

const headerCardTitle = 'About the event:'
const headerCardContent = {
  image: '/images/events/physics-of-computation/card-image-endicott-house-1981.png',
  title: 'Celebrate 40 years of quantum',
  description: 'Keynotes, contributed talks, and more bridging the 1981 Physics of Computation conference with current research.',
  location: 'Virtual event open to the public',
  date: 'May 6, 2021',
  time: '8:30 AM - 5:30 PM EDT',
  to: 'https://youtu.be/YGqBVnAPvSw',
  ctaLabel: 'Official trailer',
  segment: { cta: 'official-trailer', location: 'header' }
}

// Data for the mosaic section
const mosaicSectionTitle = 'What you will find at QC40'
const mosaicElements = [
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
const morningAgendaSectionTitle = 'Morning Session'
const afternoonAgendaSectionTitle = 'Afternoon Session'

const morningAgenda: AgendaSlot[] = [
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
    event: 'Break'
  },
  {
    time: '10:40 AM',
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
    time: '11:40 AM',
    event: 'The Future of Quantum Hardware (Jerry Chow - IBM)'
  },
  {
    time: '12:10 PM',
    event: 'IBM Quantum Leadership remarks'
  },
  {
    time: '12:15 PM',
    event: 'Closing remarks and lunch break'
  }
]

const afternoonAgenda: AgendaSlot[] = [
  {
    time: '01:30 PM',
    event: 'Introduction to Track 1 – Contributed Talks on Hardware and Experiment (Sarah Sheldon - IBM)'
  },
  {
    time: '01:55 PM',
    event: 'Introduction to Track 2 – Contributed Talks on Theory and Applications (Aram Harrow - MIT)'
  },
  {
    time: '02:20 PM',
    event: 'Two parallel tracks (9 contributed talks each). See details below *'
  },
  {
    time: '05:30 PM',
    event: 'Networking lounges'
  }
]

const afternoonAgendaByTracks: AgendaSlotByTrack[] = [
  {
    time: '02:20 PM',
    track1: 'Demonstration of natural iSWAP gate on fixed-frequency transmon qubits <br> (Kentaro Heya - University of Tokyo / IBM Japan)',
    track2: 'The impossibility of Landauer\'s bound for almost every quantum state <br> (Paul Riechers - Nanyang Technological University)'
  },
  {
    time: '02:40 PM',
    track1: 'Exploring multi-programming for quantum algorithms <br> (Siyuan Niu - University of Montpellier)',
    track2: 'How to learn a quantum state - a.k.a. Private learning implies quantum stability <br> (Yihui Quek - Stanford University)'
  },
  {
    time: '03:00 PM',
    track1: 'Towards a non-local Bell test with superconducting circuits <br> (Paul Magnard - ETH Zurich/QuDev lab)',
    track2: 'Compiler design for distributed quantum computing <br> (Davide Ferrari - University of Parma)'
  },
  {
    time: '03:20 PM',
    track1: 'Deterministic generation and manipulation of entangled microwave photonic qubits <br> (Jean-Claude Besse - ETH Zurich/QuDev lab)',
    track2: 'Hardware efficient search on IBM Q. Non-Abelian quantum search reduces noise. <br> (Vladimir Korepin and Kun Zhang - Stony Brook University)'
  },
  {
    time: '03:40 PM',
    track1: 'Bifluxon: Fluxon-parity-protected superconducting qubit <br> (Konstantin Kalashnikov - Rutgers University)',
    track2: 'An optimal quantum sampling regression algorithm for variational eigensolving in the low qubit number regime <br> (Pedro Rivero - Argonne National Laboratory / Illinois Institute of Technology)'
  },
  {
    time: '04:00 PM',
    track1: '5-minute break',
    track2: '5-minute break'
  },
  {
    time: '04:05 PM',
    track1: 'Millimeter-wave photons in cavity-QED systems with Rydberg atoms <br> (Aziza Suleymanzade - University of Chicago)',
    track2: 'Strongly universal Hamiltonian simulators <br> (Leo Zhou - Harvard University)'
  },
  {
    time: '04:25 PM',
    track1: 'A modular quantum computer based on 3-wave mixing <br> (Pinlei Lu - University of Pittsburgh)',
    track2: 'New properties of interacting quantum systems with algorithmic applications  <br> (Mehdi Soleimanifar - MIT)'
  },
  {
    time: '04:45 PM',
    track1: 'Efficient and low-backaction quantum measurement using a chip-scale detector <br> (Eric Rosenthal - JILA and the University of Colorado, Boulder)',
    track2: 'A unified framework for machine learning using physical systems across classical-to-quantum transition <br> (Saeed Khan - Princeton University)'
  },
  {
    time: '05:05 PM',
    track1: 'Quantum Simulation using Superconducting Quantum Processors <br> (Amir Karamlou - MIT)',
    track2: 'Fundamental physical capabilities and limitations in communication and computing <br> (Lev B. Levitin - Boston University)'
  },
  {
    time: '05:25 PM',
    track1: 'Closing remarks',
    track2: 'Closing remarks'
  }
]

const morningSessionElementsDataTable = computed(() => getDataTableElements(morningAgenda))
const afternoonSessionElementsDataTable = computed(() => getDataTableElements(afternoonAgenda))
const afternoonSessionByTrackElementsDataTable = computed(() => getDataTableElementsByTrack(afternoonAgendaByTracks))

function getDataTableElements (agenda: AgendaSlot[]) : TableRowElement[][] {
  return agenda.map(slot => ([
    {
      styles: 'min-width: 5rem; display: inline-block; font-weight: bold;',
      data: slot.time
    },
    {
      styles: 'min-width: 20rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.event
    }
  ]))
}

function getDataTableElementsByTrack (agenda: AgendaSlotByTrack[]) : TableRowElement[][] {
  return agenda.map(slot => ([
    {
      styles: 'min-width: 5rem; display: inline-block; font-weight: bold;',
      data: slot.time
    },
    {
      styles: 'width: 25rem; min-width: 20rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.track1
    },
    {
      styles: 'width: 25rem; min-width: 20rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.track2
    }
  ]))
}

const agendaColumnsDataTable: string[] = ['Time (EDT)', 'Event']
const agendaTracksColumnsDataTable: string[] = ['Time (EDT)', 'Track 1 - Quantum Hardware / Experiment', 'Track 2 - Quantum Software / Theory / Applications']

const morningSessionAgendaCTA = computed(() => {
  return {
    url: morningSessionYouTubeURL,
    label: 'Follow this session on YouTube (no registration needed)',
    segment: {
      cta: 'youtube-morning-session',
      location: 'morning-session-section'
    }
  }
})

const afternoonSessionAgendaCTA = computed(() => {
  return {
    url: afternoonSessionRegisterURL,
    label: 'Register here to attend the afternoon session',
    segment: {
      cta: 'register-afternoon-session',
      location: 'afternoon-session-section'
    }
  }
})

// Data for the helpful resources section
const helpfulResourcesSectionTitle = 'Take action now'

const helpfulResources = computed(() => {
  return [
    {
      title: 'Morning session',
      description: `Click on the link below to listen to keynotes, historical commentaries, and
      live panel discussion on the Qiskit YouTube channel, starting at 8:30 AM EDT (no
      registration needed).`,
      cta: {
        url: morningSessionYouTubeURL,
        label: 'Morning Session',
        segment: {
          cta: 'youtube-morning-session',
          location: 'helpful-resources'
        }
      }
    },
    {
      title: 'Afternoon session',
      description: `Click on the link below to join us on the ON24 platform at 01:30 PM EDT and
      listen to 2 tracks of contributed talks about hardware, experiment, theory and applications
      (registration required).`,
      cta: {
        url: afternoonSessionRegisterURL,
        label: 'Afternoon Session',
        segment: {
          cta: 'register-afternoon-session',
          location: 'helpful-resources'
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
          cta: 'qiskit-org-learn',
          location: 'helpful-resources'
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
          cta: 'code-of-conduct',
          location: 'helpful-resources'
        }
      }
    }
  ]
})

// TODO: Refactor "logic" pages
// export default class PhysicsOfComputationPage extends QiskitPage {
//   routeName = 'physics-of-computation'
// }
</script>

<style lang="scss" scoped>
.physics-of-computation-page {
  &__section {
    margin-top: $spacing-10;
    margin-bottom: $spacing-07;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }
  }
}
</style>
