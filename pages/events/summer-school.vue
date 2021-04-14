<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :description="eventData.header.description"
      :cta="eventData.header.cta"
      :card-title="eventData.header.cardSectionHeading"
    >
      <template slot="title">
        {{ eventData.header.primaryTitle }}
        <br>
        {{ eventData.header.secondaryTitle }}
      </template>
      <template slot="card">
        <EventCard v-bind="eventData.header.card" vertical-layout>
          {{ eventData.header.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard>

    <AppMosaicSection
      class="summer-school-page__section"
      :title="eventData.mosaic.title"
      :elements="eventData.mosaic.elements"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title">
        {{ eventData.agenda.title }}
      </h2>
      <client-only>
        <cv-tabs @tab-selected="toggleAgenda">
          <cv-tab :label="eventData.agenda.week1.tabName" />
          <cv-tab :label="eventData.agenda.week2.tabName" />
        </cv-tabs>
      </client-only>
    </section>
    <AppDataTableSection
      v-if="currentTab === 0"
      class="summer-school-page__section"
      :section-title="''"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="eventData.agenda.week1.tableData"
    />
    <AppDataTableSection
      v-if="currentTab === 1"
      class="summer-school-page__section"
      :section-title="''"
      :data-table-columns="agendaColumnsDataTable"
      :data-table-elements="eventData.agenda.week2.tableData"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title">
        Frequently asked questions
      </h2>
      <cv-accordion :align="`end`">
        <cv-accordion-item v-for="item in eventData.faq" :key="item.index">
          <template slot="title">
            {{ item.question }}
          </template>
          <template slot="content">
            <!-- TODO: HTML content should not be in strings but in components
            but lacking of a better solution given time constraints. -->
            <!-- eslint-disable vue/no-v-html -->
            <p v-html="item.answer" />
            <!-- eslint-enable -->
          </template>
        </cv-accordion-item>
      </cv-accordion>
    </section>

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
      :title="eventData.helpfulResources.title"
      :resources="eventData.helpfulResources.resources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'
import { IContentDocument } from '@nuxt/content/types/content'
import QiskitPage from '~/components/logic/QiskitPage.vue'

interface AgendaSlot {
  day: string,
  topic: string,
  speaker: string,
  format: string
}

@Component({
  head () {
    const title = this.$data?.eventData.metadata.title
    const description = this.$data?.eventData.metadata.description
    const image = this.$data?.eventData.metadata.image

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
  async asyncData (context: Context) {
    const eventData = await context.$content('events/summer-school-2021').fetch() as IContentDocument

    const headerRouteText = `${context.route.name} > header >`
    const helpfulResourcesRouteText = `${context.route.name} > helpful-resources >`
    eventData.header.card.segment = { action: `${headerRouteText} learn-more` }
    eventData.header.cta.segment = { action: `${headerRouteText} qgss2021-enquiry-form` }
    eventData.helpfulResources.resources[0].cta.segment = { action: `${helpfulResourcesRouteText} qgss2021-enquiry-form` }
    eventData.helpfulResources.resources[1].cta.segment = { action: `${helpfulResourcesRouteText} install-here` }
    eventData.helpfulResources.resources[2].cta.segment = { action: `${helpfulResourcesRouteText} qiskit-medium` }
    eventData.helpfulResources.resources[3].cta.segment = { action: `${helpfulResourcesRouteText} code-of-conduct` }

    eventData.mosaic.first.position = 'first'
    eventData.mosaic.second.position = 'second'
    eventData.mosaic.third.position = 'third'
    eventData.mosaic.fourth.position = 'fourth'
    eventData.mosaic.elements = [eventData.mosaic.first, eventData.mosaic.second, eventData.mosaic.third, eventData.mosaic.fourth]

    const scheduleToTableData = (slot: AgendaSlot) => ([
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
    ])

    eventData.agenda.week1.tableData = eventData.agenda.week1.schedule.map(scheduleToTableData)
    eventData.agenda.week2.tableData = eventData.agenda.week2.schedule.map(scheduleToTableData)

    return {
      eventData
    }
  }
})
export default class SummerSchoolPage extends QiskitPage {
  routeName = 'summer-school'
  currentTab: number = 0

  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']

  toggleAgenda (val: any) {
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
