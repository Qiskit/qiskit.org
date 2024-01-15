<template>
  <div class="events-follow-our-calendar__section">
    <h3>Follow our event calendar</h3>
    <p class="events-follow-our-calendar__section__description">
      Stay up to date with all of our scheduled events by following our
      calendar. You can view the calendar by visiting
      <UiLinkText :link="qiskitCalendarLink">{{
        qiskitCalendarLink.label
      }}</UiLinkText
      >, or subscribe to it by adding to the calendar app of your choice.
    </p>
    <div class="events-follow-our-calendar__tabs">
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
      <p>
        Start by copying the calendar subscription link
        <bx-code-snippet copy-button-feedback-text="Copied!" type="inline">
          <span>{{ qiskitCalendarSyncLink }}</span>
        </bx-code-snippet>
      </p>
      <component
        :is="instructions"
        class="events-follow-our-calendar__instructions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import EventsFollowOurCalendarInstructionsApple from "~/components/Events/FollowOurCalendar/Instructions/EventsFollowOurCalendarInstructionsApple.vue";
import EventsFollowOurCalendarInstructionsGoogle from "~/components/Events/FollowOurCalendar/Instructions/EventsFollowOurCalendarInstructionsGoogle.vue";
import EventsFollowOurCalendarInstructionsOutlook from "~/components/Events/FollowOurCalendar/Instructions/EventsFollowOurCalendarInstructionsOutlook.vue";
import { type TextLink } from "~/types/links";

const calendarsInstructions = [
  {
    name: "Google",
    instructions: EventsFollowOurCalendarInstructionsGoogle,
  },
  {
    name: "Outlook",
    instructions: EventsFollowOurCalendarInstructionsOutlook,
  },
  {
    name: "Apple",
    instructions: EventsFollowOurCalendarInstructionsApple,
  },
];

const qiskitCalendarSyncLink = "https://qisk.it/calendar-sync";

const qiskitCalendarLink: TextLink = {
  url: "https://qisk.it/calendar",
  label: "https://qisk.it/calendar",
  segment: {
    cta: "qiskit-calendar",
    location: "events-page",
  },
  title: "Qiskit events calendar",
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.events-follow-our-calendar {
  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-10;
  }

  &__section__description {
    margin-top: carbon.$spacing-06;
    margin-bottom: carbon.$spacing-07;
    max-width: 20rem;

    @include carbon.breakpoint-up(lg) {
      max-width: 24rem;
    }
  }

  &__tabs {
    margin-top: carbon.$spacing-07;
    margin-bottom: carbon.$spacing-09;
    padding-top: carbon.$spacing-06;
  }

  &__instructions {
    padding-left: carbon.$spacing-06;
  }
}
</style>
