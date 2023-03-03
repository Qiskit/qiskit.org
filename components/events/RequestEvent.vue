<template>
  <div class="event-page__section">
    <h3>Start an event</h3>
    <p class="event-page__section__description">
      We can help you bring Qiskit experts to your campus for guest
      lectures, hackathons, and other events.
    </p>
    <AppCta v-bind="eventRequestLink" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { EVENT_REQUEST_LINK } from '~/constants/appLinks'
export default class RequestEvent extends Vue {
    eventRequestLink = EVENT_REQUEST_LINK
}
</script>
