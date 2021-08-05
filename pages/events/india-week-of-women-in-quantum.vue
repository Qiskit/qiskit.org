<template>
  <main class="india-week-of-women-in-quantum-page">
    <AppPageHeaderWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template slot="title">
        {{ headerData.title }}
      </template>
      <template slot="description">
        <p>
          Join the Qiskit community to celebrate women in quantum and their remarkable journeys. Listen to the life stories of how these amazing women launched their careers in quantum and learn about how they overcame the challenges they faced.
        </p>
        <p>
          Learn how you can kickstart your quantum journey and discover opportunities for you to develop in quantum.
        </p>
        <p>
          Join us on August 25, 26 and 27 by registering below.
        </p>
      </template>
      <template slot="card">
        <EventCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>
    <div class="bx--grid">
      <AppMosaicSection
        class="india-week-of-women-in-quantum-page__section"
        :title="mosaicData.title"
        :elements="mosaicData.tiles"
      />

      <section class="india-week-of-women-in-quantum-page__section">
        <h2 v-text="agendaData.title" />
        <p v-text="agendaData.subtitle" />
        <cv-tabs>
          <cv-tab
            v-for="day in agendaData.days"
            :key="day.tabName"
            :label="day.tabName"
          >
            <AppDataTable
              class="india-week-of-women-in-quantum-page__section"
              :columns="agendaColumnsDataTable"
              :elements="day.tableData"
            />
          </cv-tab>
        </cv-tabs>
      </section>

      <AppHelpfulResourcesSection
        class="india-week-of-women-in-quantum-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

interface dailyAgenda {
  time: string,
  event: string,
  speaker: string,
  affiliation: string
}

@Component({
  head () {
    const title = 'India Week Of Women In Quantum 2021'
    const description = `The Qiskit Global Summer School 2021 is a three-days event
    designed to celebrate women in quantum and their remarkable journeys. Learn how you
    can kickstart your quantum journey and discover opportunities for you to develop in quantum.`
    const image = '/images/events/india-week-of-women-in-quantum/india-week-of-women-in-quantum-logo.png'

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
  },
  layout: 'default-max'
})
export default class IndiaWeekOfWomenInQuantumPage extends QiskitPage {
  routeName = 'india-week-of-women-in-quantum'
  headerData = {
    title: 'Qiskit India Week of Quantum',
    cta: {
      label: 'Register Now',
      url: '#',
      segment: {
        cta: 'register',
        location: 'header'
      }
    },
    cardSectionHeading: 'About the event:',
    card: {
      image: '/images/events/summer-school/summer-school-logo.png',
      title: 'Qiskit India Week of Quantum',
      description: 'This August, join the Qiskit community to celebrate women in quantum and their remarkable journeys.',
      location: 'Online',
      date: 'August 25 - 27, 2021'
    }
  }

  mosaicData = {
    title: 'What is Qiskit India Week of Quantum?',
    tiles: [
      {
        position: 'first',
        title: 'Listen to the stories of Experts',
        description: 'Listen & interact directly with world-leading experts in quantum, who are making an impact with their work.',
        image: '/images/events/seminar-series/mosaic-experts.png'
      },
      {
        position: 'second',
        title: 'Kickstart your Quantum Journey',
        description: 'Learn how you can program quantum computers using Qiskit and discover new and exciting opportunities.',
        image: '/images/events/summer-school/ibm-system-one-display.jpg'
      },
      {
        position: 'third',
        title: 'Network and Interact',
        description: 'Meet and network with people already in quantum and learn quantum computing together.',
        image: '/images/events/summer-school/chip.png'
      },
      {
        position: 'fourth',
        title: 'A panel of experts: From Academia to Industry ',
        description: `Watch a lively discussion between our panelists on how to bridge the gender gap in quantum computing and how we can create stronger and sustainable careers for women in quantum.<br><br>
          <strong>Our panelists include:</strong><br>
          <ul>
            <li>Dr. Aditi Sen De</li>
            <li>Dr. Kasturi Saha</li>
            <li>Dr. Kavita Dorai</li>
            <li>Dr. Sonali Mohaparta</li>
          </ul>`,
        image: '/images/events/summer-school/quantum-composer-screen.png'
      }
    ]
  }

  agendaColumnsDataTable: string[] = ['Time', 'Event', 'Speaker', 'Affiliation']

  scheduleToTableData = (slot: dailyAgenda) => ([
    {
      component: 'span',
      styles: 'min-width: 10rem; display: inline-block; font-weight: bold;',
      data: slot.time
    },
    {
      component: 'span',
      styles: 'min-width: 15rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.event
    },
    {
      component: 'span',
      styles: 'min-width: 15rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.speaker
    },
    {
      component: 'span',
      styles: 'min-width: 15rem; display: inline-block; padding-top: 8px; padding-bottom: 8px',
      data: slot.affiliation
    }
  ])

  day1Schedule: dailyAgenda[] = [
    {
      time: '5:00 pm - 5:15 pm IST',
      event: 'Kick-off event',
      speaker: 'Yuri Kobayashi',
      affiliation: 'IBM Quantum'
    },
    {
      time: '5:15 pm - 6:00 pm IST',
      event: 'Journey in Quantum- an academic perspective',
      speaker: 'Dr. Aditi Sen De',
      affiliation: 'Harish-Chandra Research Institute'
    },
    {
      time: '6:00 pm - 6:45 pm IST',
      event: 'Journey in Quantum- an industrial perspective',
      speaker: 'Dr. Sonali Mohapatra',
      affiliation: 'Craft Prospect Limited'
    }
  ]

  day2Schedule: dailyAgenda[] = [
    {
      time: '5:00 pm - 6:00 pm IST',
      event: 'Quantum Computing workshop',
      speaker: 'Dr. Anupama Ray',
      affiliation: 'IBM Research, India'
    },
    {
      time: '6:00pm - 6:45 pm IST',
      event: 'Qiskit Community talks',
      speaker: `<ul>
        <li>Dr. Manjula Gandhi</li>
        <li>Kavitha Yogaraj</li>
        <li>Sabhyata Gupta</li>
      </ul>`,
      affiliation: `<ul>
        <li>Coimbatore Institute of Technology</li>
        <li>IBM Research, India</li>
        <li>University of Barcelona</li>
      </ul>`
    }
  ]

  day3Schedule: dailyAgenda[] = [
    {
      time: '5:00 pm - 6:15 pm IST',
      event: 'Panel Discussion - equal representation of women in quantum',
      speaker: `<ul>
        <li>Dr. Aditi Sen De</li>
        <li>Dr. Kavita Dorai</li>
        <li>Dr. Kasturi Saha</li>
        <li>Sabhyata Gupta (Moderator)</li>
      </ul>`,
      affiliation: `<ul>
        <li>Harish-Chandra Research Institute</li>
        <li>IISER Mohali</li>
        <li>IIT Bombay</li>
        <li>University of Barcelona</li>
      </ul>`
    },
    {
      time: '6:15 pm - 6:45 pm IST',
      event: 'Networking + Career Booth',
      speaker: '',
      affiliation: ''
    }
  ]

  agendaData = {
    title: 'Event Schedule',
    days: [
      {
        tabName: 'Day 1',
        tableData: this.day1Schedule.map(this.scheduleToTableData)
      },
      {
        tabName: 'Day 2',
        tableData: this.day2Schedule.map(this.scheduleToTableData)
      },
      {
        tabName: 'Day 3',
        tableData: this.day3Schedule.map(this.scheduleToTableData)
      }
    ]
  }

  helpfulResourcesData = {
    title: 'Helpful Resources',
    resources: [
      {
        title: 'Let us know if you have any questions!',
        description: 'If your have any questions please use this form to submit your enquiries direct to the team.',
        cta: {
          url: 'https://qisk.it/3CbE1O4',
          label: 'Enquire now',
          segment: {
            cta: 'india-week-women-in-quantum-enquiry-form',
            location: 'helpful-resources'
          }
        }
      },
      {
        title: 'Learning Resources',
        description: 'Start your path towards learning Quantum Information Science.',
        cta: {
          url: 'https://qiskit.org/learn',
          label: 'Learning resources',
          segment: {
            cta: 'learn-page',
            location: 'helpful-resources'
          }
        }
      },
      {
        title: 'Qiskit Medium',
        description: "This blog provides a nice overview of Qiskit and its direction as we explore what applications can be done on today's quantum devices",
        cta: {
          url: 'https://medium.com/qiskit/qiskit-and-its-fundamental-elements-bcd7ead80492',
          label: 'Read the blog',
          segment: {
            cta: 'qiskit-medium',
            location: 'helpful-resources'
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
            cta: 'code-of-conduct',
            location: 'helpful-resources'
          }
        }
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
.india-week-of-women-in-quantum-page {
  display: flex;
  flex-direction: column;

  &__section {
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>

<style lang="scss" scoped>
// overrides
.india-week-of-women-in-quantum-page {
  ::v-deep {
    // TODO: Extract styles like "_checkbox" to be defined globally
    & a.bx--tabs__nav-link {
      color: $text-color-light;
      border-bottom-color: $border-color;

      &:focus,
      &:active {
        outline: none;
      }

      &:not(.bx--tabs__nav-item--disabled) {
        color: $text-color-light;
      }
    }

    // TODO: Not sure if the order is important in these selectors.
    // So, disabling. Review the reule 'no-descending-specificity' here:
    // https://stylelint.io/user-guide/ignore-code
    // stylelint-disable no-descending-specificity
    & .bx--tabs__nav-item {
      &:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) .bx--tabs__nav-link:focus,
      &:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled):not(.bx--tabs__nav-item--selected) a.bx--tabs__nav-link:active,
      &:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link, .bx--tabs__nav-item--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link:focus {
        color: $text-color-light;
      }

      &--selected:not(.bx--tabs__nav-item--disabled) .bx--tabs__nav-link {
        border-bottom-color: $border-color-secondary;
      }
    }

    & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--disabled) {
        box-shadow: none;
      }

      & .bx--tabs__nav-item:hover:not(.bx--tabs__nav-item--selected):not(.bx--tabs__nav-item--disabled),
      & .bx--tabs__nav-item,
      & .bx--tabs-trigger {
        background-color: $background-color-white;

        svg {
          fill: $gray-100;
        }
      }

      & .bx--tabs__nav-link,
      & .bx--tabs-trigger-text {
        color: $text-color;
    }
    // stylelint-enable no-descending-specificity

    .app-data-table {
      margin-top: $spacing-07;
      padding: 0;
    }
  }
}

</style>
