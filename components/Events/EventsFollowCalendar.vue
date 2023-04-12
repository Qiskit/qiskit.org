<template>
  <div class="event-page__section">
    <h3>Follow our event calendar</h3>
    <p class="event-page__section__description">
      Stay up to date with all of our scheduled events by following our
      calendar. You can view the calendar by visiting
      <UiLink v-bind="qiskitCalendarLink">{{ qiskitCalendarLink.label }}</UiLink
      >, or subscribe to it by adding to the calendar app of your choice.
    </p>
    <div class="event-page__tabs">
      <bx-tabs value="Google">
        <bx-tab
          v-for="{ name } in calendarsInstructions"
          :id="`tab-${name}`"
          :key="name"
          :target="`panel-${name}`"
          :value="name"
        >
          {{ name }}
        </bx-tab>
      </bx-tabs>
    </div>
    <div
      v-for="{ name, instructions } in calendarsInstructions"
      :id="`panel-${name}`"
      :key="name"
      role="tabpanel"
      :aria-labelledby="`tab-${name}`"
      hidden
    >
      <p class="event-page__sync">
        Start by copying the calendar subscription link
        <bx-code-snippet
          copy-button-feedback-text="Copy calendar sync url"
          type="inline"
        >
          <span>{{ qiskitCalendarSyncLink }}</span>
        </bx-code-snippet>
      </p>
      <component :is="instructions" class="event-page__instructions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EventsCalendarsAppleInstructions from "~/components/Events/Calendars/EventsCalendarsAppleInstructions.vue";
import EventsCalendarsGoogleInstructions from "~/components/Events/Calendars/EventsCalendarsGoogleInstructions.vue";
import EventsCalendarsOutlookInstructions from "~/components/Events/Calendars/EventsCalendarsOutlookInstructions.vue";
import type { GeneralLink } from "~/constants/appLinks";

const calendarsInstructions = [
  {
    name: "Google",
    instructions: EventsCalendarsGoogleInstructions,
  },
  {
    name: "Outlook",
    instructions: EventsCalendarsOutlookInstructions,
  },
  {
    name: "Apple",
    instructions: EventsCalendarsAppleInstructions,
  },
];

const qiskitCalendarSyncLink = "https://qisk.it/calendar-sync";

const qiskitCalendarLink: GeneralLink = {
  url: "https://qisk.it/calendar",
  label: "https://qisk.it/calendar",
  segment: {
    cta: "qiskit-calendar",
    location: "events-page",
  },
};
</script>
