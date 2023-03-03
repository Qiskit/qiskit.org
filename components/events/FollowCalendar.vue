<template>
  <div class="event-page__section">
    <h3>Follow our event calendar</h3>
    <p class="event-page__section__description">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      Stay up to date with all of our scheduled events by following our calendar. You can view the calendar by visiting <AppLink v-bind="qiskitCalendarLink">{{ qiskitCalendarLink.label }}</AppLink>, or subscribe to it by adding to the calendar app of your choice.
    </p>
    <div class="event-page__tabs">
      <cv-tabs aria-label="Calendar applications">
        <cv-tab
          v-for="{ name, instructions } in calendarsInstructions"
          :id="`tab-${name}`"
          :key="name"
          :label="name"
          class="event-page__tab"
        >
          <p class="event-page__sync">
            Start by copying the calendar subscription link
            <cv-code-snippet
              kind="inline"
              feedback-aria-label="Copy calendar sync url"
            >
              <span>{{ qiskitCalendarSyncLink }}</span>
            </cv-code-snippet>
          </p>
          <component :is="instructions" class="event-page__instructions" />
        </cv-tab>
      </cv-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import GoogleCalendarInstructions from '~/components/events/calendars/GoogleInstructions.vue'
import OutlookCalendarInstructions from '~/components/events/calendars/OutlookInstructions.vue'
import AppleCalendarInstructions from '~/components/events/calendars/AppleInstructions.vue'

import { GeneralLink } from '~/constants/appLinks'

@Component({
  components: {
    AppleCalendarInstructions,
    GoogleCalendarInstructions,
    OutlookCalendarInstructions
  }
})

export default class FollowCalendar extends Vue {
    calendarsInstructions = [
      {
        name: 'Google',
        instructions: GoogleCalendarInstructions
      },
      {
        name: 'Outlook',
        instructions: OutlookCalendarInstructions
      },
      {
        name: 'Apple',
        instructions: AppleCalendarInstructions
      }
    ]

    qiskitCalendarSyncLink = 'https://qisk.it/calendar-sync'
    qiskitCalendarLink: GeneralLink = {
      url: 'https://qisk.it/calendar',
      label: 'https://qisk.it/calendar',
      segment: {
        cta: 'qiskit-calendar', location: 'events-page'
      }
    }
}
</script>
