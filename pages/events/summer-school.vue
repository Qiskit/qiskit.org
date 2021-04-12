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

    <AppMosaicSection
      class="summer-school-page__section"
      :title="mosaicSectionTitle"
      :elements="mosaicElements"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title">
        {{ eventSectionTitle }}
      </h2>
      <client-only>
        <cv-tabs @tab-selected="toggleAgenda">
          <cv-tab :label="agendaSectionTitleOne" />
          <cv-tab :label="agendaSectionTitleTwo" />
        </cv-tabs>
      </client-only>
    </section>
    <AppDataTableSection
      v-if="currentTab === 0"
      class="summer-school-page__section"
      :section-title="''"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="weekOneAgendaAgendaData"
    />
    <AppDataTableSection
      v-if="currentTab === 1"
      class="summer-school-page__section"
      :section-title="''"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="weekTwoAgendaAgendaData"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title">
        Frequently asked questions
      </h2>
      <cv-accordion :align="`end`">
        <cv-accordion-item v-for="item in faqData" :key="item.index">
          <template slot="title">
            {{ item.question }}
          </template>
          <template slot="content">
            <p>
              {{ item.answer }}
            </p>
          </template>
        </cv-accordion-item>
      </cv-accordion>
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
  currentTab: number = 0
  eventSectionTitle = 'Event schedule'

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
    description: 'Card description goes here',
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

  weekOneAgenda: AgendaSlot[] = [
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
    },
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
    },
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
    },
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
    },
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

  weekTwoAgenda: AgendaSlot[] = [
    {
      day: 'Monday, July 19',
      topic: 'Quantum Kernels',
      speaker: 'Bryce Fuller',
      format: 'Lecture'
    },
    {
      day: 'Monday, July 19',
      topic: 'Support Vector Machines, Quantum Support Vector Machines',
      speaker: 'Bryce Fuller',
      format: 'Lecture'
    },
    {
      day: 'Monday, July 19',
      topic: '(Lab 3) Quantum Kernels and Support Vector Machines',
      speaker: 'Anna Phan',
      format: 'Lab'
    },
    {
      day: 'Monday, July 19',
      topic: 'Day 6 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    },
    {
      day: 'Tuesday, July 20',
      topic: 'Introduction to Quantum Neural Networks',
      speaker: 'Julien Gacon',
      format: 'Lecture'
    },
    {
      day: 'Tuesday, July 20',
      topic: 'Training Quantum Machine Learning Models',
      speaker: 'Christa Zoufal',
      format: 'Lecture'
    },
    {
      day: 'Tuesday, July 20',
      topic: '(Lab 4) Optimizing Quantum Neural Networks',
      speaker: 'Julien Gacon',
      format: 'Lab'
    },
    {
      day: 'Tuesday, July 20',
      topic: 'Day 7 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    },
    {
      day: 'Wednesday, July 21',
      topic: 'Barren Plateaus, Trainability Issues and How to Avoid Them',
      speaker: 'Francesco Tacchino',
      format: 'Lecture'
    },
    {
      day: 'Wednesday, July 21',
      topic: 'Applications of Quantum Neural Networks',
      speaker: 'Francesco Tacchino',
      format: 'Lecture'
    },
    {
      day: 'Wednesday, July 21',
      topic: 'Day 8 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    },
    {
      day: 'Thursday, July 22',
      topic: 'Introduction to Quantum Hardware',
      speaker: 'Nathan Earnest-Noble',
      format: 'Lecture'
    },
    {
      day: 'Thursday, July 22',
      topic: 'Hardware Efficient Ansatze for Quantum Machine Learning',
      speaker: 'Nathan Earnest-Noble',
      format: 'Lecture'
    },
    {
      day: 'Thursday, July 22',
      topic: '(Lab 5) Hardware Efficient Ansatze for Quantum Machine Learning',
      speaker: 'Nathan Earnest-Noble',
      format: 'Lab'
    },
    {
      day: 'Thursday, July 22',
      topic: 'Day 8 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    },
    {
      day: 'Friday, July 23',
      topic: 'Advanced Quantum Machine Learning Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks',
      speaker: 'Stefan Woerner',
      format: 'Lecture'
    },
    {
      day: 'Friday, July 23',
      topic: 'The Capacity and Power of Quantum Machine Learning Models & the Future of Quantum Machine Learning',
      speaker: 'Amira  Abbas',
      format: 'Lecture'
    },
    {
      day: 'Friday, July 23',
      topic: 'Day 9 Q&A Session',
      speaker: 'N/A',
      format: 'Live Q&A'
    },
    {
      day: 'Friday, July 23',
      topic: 'Qiskit Global Summer School 2021 Commencement & Wrap Celebration',
      speaker: 'N/A',
      format: 'Commencement'
    }
  ]

  weekOneAgendaAgendaData: TableRowElement[][] = this.weekOneAgenda.map(slot => ([
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

  weekTwoAgendaAgendaData: TableRowElement[][] = this.weekTwoAgenda.map(slot => ([
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
  helpfulResourcesSectionTitle = 'Helpful resources'
  helpfulResources: DescriptionCard[] = [
    {
      title: 'Learn About & Install Qiskit',
      description: 'TBD',
      cta: {
        url: 'https://qiskit.org/documentation/install.html',
        label: 'Install Here',
        segment: {
          action: `${this.routeName} > helpful-resources > install-qiskit`
        }
      }
    },
    {
      title: 'IBM Quantum',
      description: 'IBM offers cloud access to the most advanced quantum computers available. Learn, develop, and run programs with our quantum applications and systems.',
      cta: {
        url: 'https://quantum-computing.ibm.com/login',
        label: 'Explore IBM Quantum',
        segment: {
          action: `${this.routeName} > helpful-resources > explore-ibm-quantum`
        }
      }
    },
    {
      title: 'Qiskit Medium',
      description: 'This blog provides a nice overview of Qiskit and its direction as we explore what applications can be done on today\'s quantum devices.',
      cta: {
        url: 'https://medium.com/qiskit/qiskit-and-its-fundamental-elements-bcd7ead80492',
        label: 'Read the blog',
        segment: {
          action: `${this.routeName} > helpful-resources > qiskit-medium`
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

  faqData = [
    {
      question: 'What are the pre-requisites for enrolling in the Summer School?',
      answer: 'Minimal prerequisites are required for the Qiskit Global Summer School. If you know how to multiply two matrices, and have some programming experience in Python, you are ready for the Summer School. You can brush up on Python programming before attending the lectures by using the Qiskit Textbook. To make the most out of these lectures, you may also consider looking through the linear algebra prerequisites section of the Qiskit Textbook.'
    },
    {
      question: 'What are the application requirements for the Summer School?',
      answer: 'There is no application or pre-registration for the Qiskit Global Summer School 2021. Registration will be on a first come, first serve basis, with scheduled global availability. Once the Summer School registration reaches capacity, unfortunately we will not be able to register any additional students. Please submit an enquiry below if you have any additional questions!'
    },
    {
      question: 'What is the time requirement for the Summer School? Is the scheduled fixed or flexible? ',
      answer: 'The summer school is made up of a total of 20 lectures, 5 lab sessions & application exercises, in addition to the daily Live Q&A Sessions and final Commencement Celebration. Participation and completion of all labs and lectures are required in order to receive a certificate of completion from the Summer School, with the optional Q&A Sessions and Commencement activities to enhance your Summer School experience. The schedule is not fixed, aside from final lab submission deadlines, and all students can participate on the schedule that works best for them. Students should anticipate a minimum time commitment of 30 hours for the full Summer School, but we recommend planning on 41 hours of participation, with additional time for discussion and collaboration with other students.'
    },
    {
      question: 'I was a student at the Qiskit Global Summer School 2020 - should I enroll in the 2021 Summer School as well?',
      answer: 'The 2021 Summer School will cover briefly introduce quantum computing before diving into classical and quantum machine learning, which was not covered in the 2020 Summer School, so you should enroll if you are interested!'
    },
    {
      question: 'Will the lectures and labs be recorded? Or will they only be accessible live? ',
      answer: 'Lectures and labs sessions will all be recorded and available for live participation and post viewing, as well as the daily Q&A sessions. '
    },
    {
      question: 'Do I need to download anything in order to participate?',
      answer: 'Nope! Everything can be done in-browser.'
    },
    {
      question: 'What is the cost to enroll in the Summer School?',
      answer: 'There is no cost to participate in the summer school!'
    },
    {
      question: 'Will I need any supplies or equipment in order to participate?',
      answer: 'You will need an operating computer with a reliable internet connection and either a mobile device or webcam/microphone on your computer to communicate with mentors and other students. You will need to be able to view seminars and connect virtually. Other than that, you just need to bring yourself'
    },
    {
      question: 'Is there an age limit to participate in the Summer School?',
      answer: 'The age limit for Qiskit Global Summer School 2021 is 14. If you are under the age limit, but still want to be part of the community, please check out other ways you can get connected, and other events that may be available in your area!'
    },
    {
      question: 'I\'m interested in hosting my own summer school or implementing Qiskit into my coursework - Where can I learn more?',
      answer: 'TBD'
    },
    {
      question: 'How do I connect more with the Quantum Community?',
      answer: 'There are several different ways you can connect with the IBM Quantum Community - depending on your preference. You can follow Qiskit and IBM Research on Twitter for the latest updates on new events, activities, and features on what is going on with the community. There is also a community Github that you can explore and contribute to, and you can read regular blog posts from our team and community members on Medium. You can also subscribe to the Qiskit Youtube for the latest video content and our weekly live Seminar Series. If you want to collaborate and connect with other members of the community, and participate in some of the ongoing conversations about quantum computing, you will want to check out our ever-growing Slack Community. From there you can connect with current and past interns, IBM researchers, Qiskit advocates, and fellow community members directly.'
    },
    {
      question: 'Are there any upcoming events in my area that I can participate in?',
      answer: 'All of our announced upcoming events are listed on qiskit.org, which is continually updated as we roll out more events throughout the year. You can also follow Qiskit on Twitter for the latest announcements on new and upcoming events!'
    },
    {
      question: 'Still have more questions?',
      answer: 'For any questions about the summer school, please submit your questions using the form below. For all other enquiries, feel free to email us directly at qiskit.events@us.ibm.com.'
    }
  ]

  toggleAgenda (val: any) {
    // console.log(val, 'val')
    this.currentTab = val
  }
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

<style lang="scss">
// overrides
.summer-school-page {
  .bx--accordion__title {
    color: $white-text-01;
  }

  .bx--accordion__heading:hover,
  .bx--accordion__heading:hover::before {
    background-color: $cool-gray-10;
  }

  .bx--accordion__arrow {
    fill: $white-text-01;
  }

  & a.bx--tabs__nav-link {
    color: $cool-gray-80;
    border-bottom-color: $cool-gray-20;

    &:focus,
    &:active {
      outline: none;
    }

    &:not(.bx--tabs__nav-item--disabled) {
      color: $cool-gray-80;
    }
  }

  & .bx--tabs__nav-item {
    &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
    &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
    &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
    &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
      color: $cool-gray-80;
    }

    &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
      border-bottom-color: $purple-70;
    }
  }

  & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
      box-shadow: none;
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
    & .bx--tabs__nav-item,
    & .bx--tabs-trigger {
      background-color: white;

      svg {
        fill: $gray-100;
      }
    }

    & .bx--tabs__nav-link,
    & .bx--tabs-trigger-text {
      color: $gray-100;
  }

  .app-data-table-section {
    margin-top: 0;
  }
}

</style>
