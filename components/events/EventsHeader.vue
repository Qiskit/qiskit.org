<template>
  <AppPageHeader bg-grid :cta="cta">
    <template slot="headline">
      Quantum Information Science Seminar Series
    </template>

    <template slot="description">
      <p
        v-for="(paragraph, index) in description"
        :key="index"
        class="events-header__description__item"
        v-text="paragraph"
      />
    </template>

    <template slot="aside">
      <div class="events-header__aside">
        <div class="events-header__card-up-title-wrapper">
          <div class="events-header__card-up-title copy__subtitle" v-text="cardTitle" />
        </div>
        <EventCard v-bind="cardContent" class="events-header__card" vertical-layout>
          {{ cardContent.description }}
        </EventCard>
      </div>
    </template>
  </AppPageHeader>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

@Component
export default class EventsHeader extends Vue {
  @Prop({ type: Array, required: true }) description!: string[]
  @Prop({ type: Object, required: true }) cta!: GeneralLink
  @Prop({ type: String, required: true }) cardTitle!: string
  @Prop({ type: Object, required: true }) cardContent!: Object
}
</script>

<style lang="scss" scoped>
.events-header {
  &__description__item:not(:last-child) {
    margin-bottom: $spacing-03;
  }

  &__aside {
    max-width: 288px;
    width: 100%;

    @include mq($until: large) {
      max-width: initial;
    }
  }

  &__card-up-title {
    border-bottom: 4px solid $purple-60;
    display: inline;
    padding-bottom: $spacing-02;
    padding-right: $spacing-03;

    &-wrapper {
      margin-bottom: $spacing-06;
    }
  }

  &__card {
    margin-bottom: 0 !important;
  }
}
</style>
