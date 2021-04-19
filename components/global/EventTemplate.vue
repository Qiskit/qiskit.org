<template>
  <main class="summer-school-page">
    <AppPageHeaderWithCard
      card-title="About the event"
    >
      <template slot="title">
        <slot name="title"></slot>
      </template>
      <template slot="card">
        <EventCard v-bind="about" vertical-layout>
          {{ about.description }}
        </EventCard>
      </template>
      <template slot="description">
        <slot name="description"></slot>
      </template>
      <template slot="call-to-actions">
        <slot name="call-to-actions"></slot>
      </template>
    </AppPageHeaderWithCard>

    <AppMosaicSection
      class="summer-school-page__section"
      :title="'eventData.mosaic.title'"
      :elements="['eventData.mosaic.elements']"
    />

    <section class="summer-school-page__section">
      <h2 class="copy__title">
        {{ agenda.title }}
      </h2>
      <client-only>
        <cv-tabs>
          <cv-tab
            v-for="(view, index) in agenda.views"
            :key="`view-${index}`"
            :label="view.label"
          >
            <AppDataTableSection
              :key="`table-${index}`"
              class="summer-school-page__section"
              :data-table-columns="agendaColumnLabels"
              :data-table-elements="scheduleToTableData(view.schedule)"
            />
          </cv-tab>
        </cv-tabs>
      </client-only>
    </section>
    <section class="summer-school-page__section">
      <h2 class="copy__title">
        Frequently asked questions
      </h2>
      <cv-accordion align="end">
        <slot name="faq-topics" />
      </cv-accordion>
    </section>

    <AppHelpfulResourcesSection
      class="summer-school-page__section"
      :title="'eventData.helpfulResources.title'"
      :resources="[{ xxx: 'eventData.helpfulResources.resources' }]"
    />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

interface AgendaSlot {
  day: string,
  topic: string,
  speaker: string,
  format: string
}

@Component
export default class EventTemplate extends Vue {
  @Prop({ type: Object, required: true }) about: any
  @Prop({ type: Object, required: true }) agenda: any

  agendaColumnLabels: string[] = ['Day', 'Topic', 'Speaker', 'Format']

  scheduleToTableData (schedule: AgendaSlot[]) {
    return schedule.map((slot) => [
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
  }
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  color: $white-text-01;

  &__section {
    @include contained();
    margin-top: $layout-05;
    margin-bottom: $layout-03;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }
  }
}
</style>

<style lang="scss">
@import "~/assets/scss/blocks/copy.scss";
// overrides
.summer-school-page {
  .bx--accordion__title {
    color: $white-text-01;
  }

  .bx--accordion__content p {
    @extend .copy__paragraph;
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

  .app-data-table-section {
    margin-top: 0;
    padding: 0;
  }
}

</style>
