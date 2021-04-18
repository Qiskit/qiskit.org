<template>
  <nuxt-content :document="eventData" />
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

    const helpfulResourcesRouteText = `${context.route.name} > helpful-resources >`
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
  agendaColumnsDataTable: string[] = ['Day', 'Topic', 'Speaker', 'Format']
}
</script>
