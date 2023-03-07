<template>
  <div class="request-event__section">
    <h3>Start an event</h3>
    <p class="request-event__section__description">
      We can help you bring Qiskit experts to your campus for guest
      lectures, hackathons, and other events.
    </p>
    <AppCta v-bind="eventRequestLink" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { EVENT_REQUEST_LINK } from '~/constants/appLinks'

@Component
export default class RequestEvent extends Vue {
    eventRequestLink = EVENT_REQUEST_LINK
}
</script>

<style lang="scss">
.request-event{
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
