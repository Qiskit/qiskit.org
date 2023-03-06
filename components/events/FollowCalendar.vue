<template>
  <div class="follow-calendar__section">
    <h3>Follow our event calendar</h3>
    <p class="follow-calendar__section__description">
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      Stay up to date with all of our scheduled events by following our calendar. You can view the calendar by visiting <AppLink v-bind="qiskitCalendarLink">{{ qiskitCalendarLink.label }}</AppLink>, or subscribe to it by adding to the calendar app of your choice.
    </p>
    <div class="follow-calendar__tabs">
      <cv-tabs aria-label="Calendar applications">
        <cv-tab
          v-for="{ name, instructions } in calendarsInstructions"
          :id="`tab-${name}`"
          :key="name"
          :label="name"
          class="follow-calendar__tab"
        >
          <p class="follow-calendar__sync">
            Start by copying the calendar subscription link
            <cv-code-snippet
              kind="inline"
              feedback-aria-label="Copy calendar sync url"
            >
              <span>{{ qiskitCalendarSyncLink }}</span>
            </cv-code-snippet>
          </p>
          <component :is="instructions" class="follow-calendar__instructions" />
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
<style lang="scss">
.follow-calendar {
  &__tabs {
    margin-top: $spacing-07;
    margin-bottom: $spacing-09;

    .bx--tabs--scrollable__nav-link {
      color: $black-100;
      border-bottom-color: $border-color;
    }

    .bx--tabs--scrollable__nav-item--selected:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link {
        border-bottom-color: $border-color-secondary;
    }

    .bx--tabs--scrollable__nav-item:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link,
    .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link {
      color: $text-color;
    }

    @include mq($until: medium) {
      margin-bottom: 0;

      .bx--tabs-trigger {
        background-color: $background-color-white;
        border-bottom: 1px solid $border-color;

        &[class*="--open"] {
          background-color: $background-color-lighter;
        }
      }

      .bx--tabs-trigger svg {
        fill: $black-100;
      }

      .bx--tabs-trigger-text {
        color: $text-color;
      }

      .bx--tabs-trigger--open {
        border-bottom: 1px solid $border-color-quaternary;
      }

      .bx--tabs-trigger--open,
      .bx--tabs--scrollable__nav-item {
        background-color: $background-color-lighter;
      }

      .bx--tabs--scrollable__nav-item:last-child .bx--tabs--scrollable__nav-link {
        border-bottom: none;
      }

      .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled) {
        background-color: $background-color-light;
      }
    }
  }

  &__tab {
    padding-top: $spacing-06;
  }

  &__instructions {
    padding-left: $spacing-06;
  }

  &__section {
    margin-top: $spacing-10;
    margin-bottom: $spacing-10;

    &__description {
      margin-top: $spacing-06;
      margin-bottom: $spacing-07;
      max-width: 20rem;

      @include mq($from: large) {
        max-width: 24rem;
      }
    }
  }
}
</style>
