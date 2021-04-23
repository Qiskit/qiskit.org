<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template slot="title">
        {{ headerData.titleLine1 }}
        <br>
        {{ headerData.titleLine2 }}
      </template>
      <template slot="description">
        <p class="copy__paragraph">
          The Qiskit Global Summer School 2021 is a two-week intensive summer school designed to empower the next generation of quantum researchers and developers with the skills and know-how to explore quantum applications on their own. This second-annual course, made up of twenty lectures, five applied lab exercises, hands-on mentorship, and live Q&A sessions, focuses on developing hands-on experience and understanding of quantum machine learning.
        </p>
        <p class="copy__paragraph">
          Registration will open on May 26, 2021 at 12:00 PM EST. Please follow
          <AppLink v-bind="headerData.qiskitTwitterLink">
            Qiskit Twitter
          </AppLink>
          for more details and updates. For any questions, please check out our FAQ or submit an enquiry using the form below!
        </p>
        <p class="copy__paragraph">
          Speakers will be announced soon!
        </p>
      </template>
      <template slot="card">
        <EventCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>

    <AppMosaicSection
      class="summer-school-page__section"
      :title="mosaicData.title"
      :elements="mosaicData.tiles"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title" v-text="agendaData.title" />
      <p class="copy__paragraph" v-text="agendaData.subtitle" />
      <cv-tabs>
        <cv-tab
          v-for="week in agendaData.weeks"
          :key="week.tabName"
          :label="week.tabName">
          <AppDataTable
            class="summer-school-page__section"
            :columns="agendaColumnsDataTable"
            :elements="week.tableData"
          />
        </cv-tab>
      </cv-tabs>
    </section>

    <FaqSection class="summer-school-page__section" />

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
      :title="helpfulResourcesData.title"
      :resources="helpfulResourcesData.resources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import {
  header,
  mosaic,
  agenda,
  helpfulResources
} from '~/constants/summerSchool2021Content'

@Component({
  head () {
    const title = 'Qiskit Global Summer School 2021'
    const description = `The Qiskit Global Summer School 2021 is a two-week intensive summer school
    designed to empower the next generation of quantum researchers and developers with the skills
    and know-how to explore quantum applications on their own`
    const image = '/images/events/summer-school/summer-school-logo.png'

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
  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']
  headerData = header
  mosaicData = mosaic
  agendaData = agenda
  helpfulResourcesData = helpfulResources
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  display: flex;
  flex-direction: column;

  &__section {
    @include contained();

    width: 100%;
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
.summer-school-page {
  ::v-deep {
    .bx--accordion__title {
      color: $text-color;
    }

    .bx--accordion__heading:hover,
    .bx--accordion__heading:hover::before {
      background-color: $background-color-lighter;
    }

    .bx--accordion__arrow {
      fill: $text-color;
    }

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
