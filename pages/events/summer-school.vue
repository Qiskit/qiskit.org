<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :description="headerDescription"
      :cta="headerCTA"
      :card-title="headerCardTitle"
    >
      <template slot="title">
        {{ headerPrimaryTitle }}
        <br>
        {{ headerSecondaryTitle }}
      </template>
      <template slot="card">
        <EventCard v-bind="headerCardContent" vertical-layout>
          {{ headerCardContent.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>


    <cv-tabs
      class="the-learning-resources-list__filter-level"
      aria-label="navigation tab label"
      no-default-to-first
      @tab-selected="selectTopFilter"
    >
      <cv-tab
        v-for="filter in topFilters"
        :key="filter"
        :label="filter"
        :selected="filter === activeTopFilter"
      />
    </cv-tabs>

    <AppMosaicSection
      class="summer-school-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />
    <AppDataTableSection
      class="summer-school-page__section"
      :section-title="agendaSectionTitleOne"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="weekOneMondayAgendaData"
    />

    <section class="summer-school-page__section">
      <AppDataTable
        :columns="agendaColumnsDataTable"
        :elements="weekOneTuesdayAgendaData"
      />
    </section>

    <section class="summer-school-page__section">
      <AppDataTable
        :columns="agendaColumnsDataTable"
        :elements="weekOneWednesdayAgendaData"
      />
    </section>

    <section class="summer-school-page__section">
      <AppDataTable
        :columns="agendaColumnsDataTable"
        :elements="weekOneThursdayAgendaData"
      />
    </section>

    <section class="summer-school-page__section">
      <AppDataTable
        :columns="agendaColumnsDataTable"
        :elements="weekOneFridayAgendaData"
      />
    </section>

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
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
  day: string,
  topic: string,
  speaker: string,
  format: string
}

@Component({
  head () {
    const title = 'Qiskit Global Summer School 2021:'
    const description = 'The Qiskit Global Summer School 2021 is a two-week intensive summer school designed to empower the next generation of quantum researchers and developers with the skills and know-how to explore quantum applications on their own'
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
export default class SummerSchoolPage extends QiskitPage {
  routeName = 'summer-school'

  // Data for the header section
  headerPrimaryTitle = 'Qiskit Global Summer School 2021:'
  headerSecondaryTitle = 'Quantum Machine Learning'
  headerDescription = [
    'The Qiskit Global Summer School 2021 is a two-week intensive summer school designed to empower the next generation of quantum researchers and developers with the skills and know-how to explore quantum applications on their own. This second-annual course, made up of twenty lectures, five applied lab exercises, hands-on mentorship, and live Q&A sessions, focuses on developing hands-on experience and understanding of quantum machine learning.',
    'Registrations will open soon, and be available on a first-come, first-serve basis with global distribution. For any questions, please check out our FAQ or submit an enquiry using the form below!'
  ]

  headerCTA = {
    label: 'Register now',
    url: 'https://airtable.com/shr6UbEsEvinHfjct',
    segment: {
      action: `${this.routeName} > header > register-now`
    }
  }

  headerCardTitle = 'About the event:'
  headerCardContent = {
    image: '/images/events/physics-of-computation/card-image-endicott-house-1981.png',
    title: 'Card title',
    description: 'Keynotes, contributed talks, and more bridging the 1981 Physics of Computation conference with current research.',
    location: 'Online',
    date: 'July 12 - 23, 2021',
    time: 'N/A',
    to: 'https://airtable.com/shrvAA05xkYgSKajc',
    ctaLabel: 'Learn more',
    segment: {
      action: `${this.routeName} > header > learn-more`
    }
  }

  // Data for the mosaic section
  mosaicSectionTitle = 'Learn more!'
  mosaicElements = [
    {
      position: 'first',
      title: 'Let us know if you have any questions!',
      description: 'If your questions aren\'t answered by the FAQ below or our blog post, please use this form to submit your enquiries direct to the team.<br/><br/><a href="" target="_blank" style="cursor:pointer; text-decoration: none; color: #0f62fe;">Inquire now!</a>',
      image: '/images/events/seminar-series/mosaic-experts.png'
    },
    {
      position: 'second',
      title: 'IBM Quantum Tools on the Cloud',
      description: 'Learn quantum programming and how to use our tools with step-by-step tutorials and guides.<br/><br/><a href="https://quantum-computing.ibm.com/docs/" target="_blank" style="cursor:pointer; text-decoration: none; color: #0f62fe;">Explore the docs</a>',
      image: '/images/events/summer-school/summer-school.png'
    },
    {
      position: 'third',
      title: 'Introduction to Quantum Computing and Quantum Hardware',
      description: 'The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are now available online.<br/><br/><a href="https://qiskit.org/learn/intro-qc-qh" target="_blank" style="cursor:pointer; text-decoration: none; color: #0f62fe;">Start the course</a>',
      image: '/images/events/seminar-series/mosaic-team.png'
    },
    {
      position: 'fourth',
      title: 'Qiskit Textbook',
      description: 'The Qiskit Textbook is a free digital open source textbook that will teach you the concepts of quantum computing while you learn to use Qiskit.<br/><br/><a href="https://qiskit.org/textbook/preface.html" target="_blank" style="cursor:pointer; text-decoration: none; color: #0f62fe;">Watch the series</a>',
      image: '/images/events/seminar-series/mosaic-interactivity.png'
    }
  ]

  // Data for the agenda section
  agendaSectionTitleOne: string = 'Week 1'
  agendaSectionTitleTwo: string = 'Week 2'

  weekOneMonday: AgendaSlot[] = [
    {
      day: 'Monday, July 12',
      topic: 'Vector Spaces, Tensor Products and Qubits',
      speaker: 'Elisa Bäumer',
      format: 'Lecture'
    },
    {
      day: 'Monday, July 12',
      topic: 'Quantum Operators and Measurements',
      speaker: 'Elisa Bäumer',
      format: 'Lecture'
    },
    {
      day: 'Monday, July 12',
      topic: 'Day 1 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    }
  ]

  weekOneTuesday: AgendaSlot[] = [
    {
      day: 'Tuesday, July 13',
      topic: 'Simple Quantum Algorithms I',
      speaker: 'Elisa Bäumer',
      format: 'Lecture'
    },
    {
      day: 'Tuesday, July 13',
      topic: 'Simple Quantum Algorithms II',
      speaker: 'Elisa Bäumer',
      format: 'Lecture'
    },
    {
      day: 'Tuesday, July 13',
      topic: '(Lab 1) Intro to Quantum Computing Algorithms and Operations',
      speaker: 'Elisa Bäumer',
      format: 'Lab'
    },
    {
      day: 'Tuesday, July 13',
      topic: 'Day 2 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    }
  ]

  weekOneWednesday: AgendaSlot[] = [
    {
      day: 'Wednesday, July 14',
      topic: 'The Foundations of Classical Machine Learning: Cost Functions, Data Splitting, Overfitting',
      speaker: 'Amira Abbas',
      format: 'Lecture'
    },
    {
      day: 'Wednesday, July 14',
      topic: 'Advanced Classical Machine Learning: Neural Networks and Support Vector Machines',
      speaker: 'Amira Abbas',
      format: 'Lecture'
    },
    {
      day: 'Wednesday, July 14',
      topic: 'Day 3 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    }
  ]

  weekOneThursday: AgendaSlot[] = [
    {
      day: 'Thursday, July 15',
      topic: 'Introduction to Parameterized Quantum Circuits',
      speaker: 'Amira Abbas',
      format: 'Lecture'
    },
    {
      day: 'Thursday, July 15',
      topic: 'Data Encoding Schemes for Quantum Machine Learning',
      speaker: 'Amira Abbas',
      format: 'Lecture'
    },
    {
      day: 'Thursday, July 15',
      topic: 'Day 4 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    }
  ]

  weekOneFriday: AgendaSlot[] = [
    {
      day: 'Friday, July 16',
      topic: 'Building a Variational Quantum Classifier',
      speaker: 'Amira Abbas',
      format: 'Lecture'
    },
    {
      day: 'Friday, July 16',
      topic: 'An Introduction to the Quantum Approximate Optimization Algorithm and its Applications',
      speaker: 'Johannes Weidenfeller',
      format: 'Lecture'
    },
    {
      day: 'Friday, July 16',
      topic: '(Lab 2) Variational Algorithms',
      speaker: 'Johannes Weidenfeller',
      format: 'Lab'
    },
    {
      day: 'Friday, July 16',
      topic: 'Day 4 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    }
  ]

  weekOneMondayAgendaData: TableRowElement[][] = this.weekOneMonday.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.day
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.topic
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.format
    }
  ]))

  weekOneTuesdayAgendaData: TableRowElement[][] = this.weekOneTuesday.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.day
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.topic
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.format
    }
  ]))

  weekOneWednesdayAgendaData: TableRowElement[][] = this.weekOneWednesday.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.day
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.topic
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.format
    }
  ]))

  weekOneThursdayAgendaData: TableRowElement[][] = this.weekOneThursday.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.day
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.topic
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.format
    }
  ]))

  weekOneFridayAgendaData: TableRowElement[][] = this.weekOneFriday.map(slot => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.day
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.topic
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.format
    }
  ]))


  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']

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
.summer-school-page {
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
