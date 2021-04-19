<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      :description="eventData.header.description"
      :cta="eventData.header.cta"
      :card-title="eventData.header.cardSectionHeading"
      :style="`order: ${eventData.header.pageOrder}`"
    >
      <template slot="title">
        {{ eventData.header.titleLine1 }}
        <br>
        {{ eventData.header.titleLine1 }}
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
      :style="`order: ${eventData.mosaic.pageOrder}`"
    />

    <section
      class="summer-school-page__section"
      :style="`order: ${eventData.agenda.pageOrder}`"
    >
      <h2 class="copy__title" v-text="eventData.agenda.title" />
      <cv-tabs>
        <cv-tab :label="eventData.agenda.week1.tabName">
          <AppDataTable
            class="summer-school-page__section"
            :columns="agendaColumnsDataTable"
            :elements="eventData.agenda.week1.tableData"
          />
        </cv-tab>
        <cv-tab :label="eventData.agenda.week2.tabName">
          <AppDataTable
            class="summer-school-page__section"
            :columns="agendaColumnsDataTable"
            :elements="eventData.agenda.week2.tableData"
          />
        </cv-tab>
      </cv-tabs>
    </section>

    <AccordionSection
      :route="contextRoute"
      :document="faqData"
      class="summer-school-page__section"
      :style="`order: ${eventData.faq.pageOrder}`"
    />

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
      :title="eventData.helpfulResources.title"
      :resources="eventData.helpfulResources.resources"
      :style="`order: ${eventData.helpfulResources.pageOrder}`"
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
    const eventData = await context.$content('events/summer-school-2021')
      .fetch()
      .catch((_) => {
        context.error({ statusCode: 404, message: 'Event not found' })
      }) as IContentDocument
    const faqData = await context.$content('events/summer-school-2021-page/faq')
      .fetch()
      .catch((_) => {
        context.error({ statusCode: 404, message: 'Event section not found' })
      }) as IContentDocument

    let idx = 0
    for (const elem in eventData) {
      if (typeof eventData[elem] === 'object') {
        eventData[elem].pageOrder = idx
        idx++
      }
    }

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
      eventData,
      faqData,
      contextRoute: context.route.name
    }
  }
})
export default class SummerSchoolPage extends QiskitPage {
  routeName = 'summer-school'
  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  color: $white-text-01;
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

    .app-data-table {
      margin-top: $spacing-07;
      padding: 0;
    }
  }
}

</style>
