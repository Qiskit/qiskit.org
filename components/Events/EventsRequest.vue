<template>
  <div class="request-event__section">
    <h3>Start an event</h3>
    <p class="request-event__section__description">
      We can help you bring Qiskit experts to your campus for guest lectures,
      hackathons, and other events.
    </p>
    <UiCta
      label="Request an event"
      url="https://airtable.com/shrRP0Td8TN4ttlFx"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.request-event {
  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-10;

    &__description {
      margin-top: carbon.$spacing-06;
      margin-bottom: carbon.$spacing-07;
      max-width: 20rem;

      @include carbon.breakpoint-up(lg) {
        max-width: 24rem;
      }
    }
  }
}
</style>
