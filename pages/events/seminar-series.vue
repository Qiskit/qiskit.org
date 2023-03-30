<template>
  <main class="event-page seminar-series-page">
    <UiPageHeaderWithCard :cta="headerCTA" :card-title="headerCardTitle">
      <template #title>
        {{ headerTitle }}
      </template>
      <template #description>
        <p
          v-for="(paragraph, index) in headerDescription"
          :key="index"
          v-text="paragraph"
        />
      </template>
      <template #card>
        <EventsItemCard v-bind="cardContent" vertical-layout />
      </template>
    </UiPageHeaderWithCard>

    <div class="cds--grid">
      <UiMosaicSection
        class="seminar-series-page__section"
        :title="mosaicSectionTitle"
        :elements="mosaicElements"
      />

      <UiDataTableSection
        v-if="hasUpcomingEvents"
        class="seminar-series-page__section"
        :section-title="upcomingEventsSectionTitle"
        :data-table-columns="seminarSeriesDataTableColumns"
      >
        <template #data-table-elements>
          <bx-table-row
            v-for="(row, rowIndex) in upcomingEventsDataTable"
            :key="`${rowIndex}`"
          >
            <bx-table-cell
              v-for="({ component, styles, data }, elementIndex) in row"
              :key="`${elementIndex}`"
            >
              <UiCta
                v-if="
                  component &&
                  isAppCtaComponent(component) &&
                  typeof data === 'object'
                "
                kind="ghost"
                :label="data.label"
                :segment="data.segment"
                :style="styles"
                :url="data.url"
              />
              <span v-else :style="styles">{{ data }}</span>
            </bx-table-cell>
          </bx-table-row>
        </template>
      </UiDataTableSection>

      <UiDataTableSection
        class="seminar-series-page__section"
        :section-title="pastEventsSectionTitle"
        :data-table-columns="seminarSeriesDataTableColumns"
      >
        <template #data-table-elements>
          <bx-table-row
            v-for="(row, rowIndex) in pastEventsDataTable"
            :key="`${rowIndex}`"
          >
            <bx-table-cell
              v-for="({ component, styles, data }, elementIndex) in row"
              :key="`${elementIndex}`"
            >
              <UiCta
                v-if="
                  component &&
                  isAppCtaComponent(component) &&
                  typeof data === 'object'
                "
                kind="ghost"
                :label="data.label"
                :segment="data.segment"
                :style="styles"
                :url="data.url"
              />
              <span v-else :style="styles">{{ data }}</span>
            </bx-table-cell>
          </bx-table-row>
        </template>
        <UiCta
          class="seminar-series-page__past-events-cta"
          kind="ghost"
          :label="showMorePastEventsCta.label"
          :segment="showMorePastEventsCta.segment"
          :url="showMorePastEventsCta.url"
        />
      </UiDataTableSection>

      <UiHelpfulResourcesSection
        class="seminar-series-page__section"
        :resources="helpfulResources"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import type { DescriptionCard, MosaicElement } from "~/types/uiComponents";
import type { SeminarSeriesEvent } from "~/hooks/event-conversion-utils";
import type { TableRowElement } from "~/components/Ui/UiDataTable.vue";
import upcomingSeminarSerieEvents from "~/content/events/upcoming-seminar-series-events.json";
import pastSeminarSeriesEvents from "~/content/events/past-seminar-series-events.json";
import {
  SEMINAR_SERIES_ALL_EPISODES_CTA,
  SEMINAR_SERIES_FULL_ARCHIVE_CTA,
} from "~/constants/appLinks";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Seminar Series",
  routeName: "seminar-series",
});

useHead({
  title: "Qiskit Seminar Series",
});

// Data for the header section
const headerTitle = "Quantum Information Science Seminar Series";
const headerDescription = [
  `The Qiskit Quantum Information Science Seminar Series is dedicated to the
  research and academic communities as a broad and deep dive into the latest
  cutting edge quantum research.`,
  `The seminar is live and interactive, you can discuss and ask questions as
  you watch, and is streamed on YouTube.`,
  "Join us live every Friday at 12:00 PM ET.",
];

const headerCTA = {
  ...SEMINAR_SERIES_ALL_EPISODES_CTA,
  segment: {
    cta: "talk-on-youtube",
    location: "header",
  },
};

// When there are no upcoming events, the JSON file is filled with []
const hasUpcomingEvents = JSON.stringify(upcomingSeminarSerieEvents) !== "[]";
const randomNumber = Math.random();
const randomIndex = Math.floor(randomNumber * pastSeminarSeriesEvents.length);

const headerCardTitle = hasUpcomingEvents ? "Up next:" : "Featured seminar:";

const cardContent = hasUpcomingEvents
  ? upcomingSeminarSerieEvents[0]
  : pastSeminarSeriesEvents[randomIndex];

// Data for the mosaic section
const mosaicSectionTitle =
  "What is the Quantum Information Science Seminar Series?";
const mosaicElements: MosaicElement[] = [
  {
    position: "first",
    title: "Learn from experts",
    description:
      "Learn from & interact directly with world-leading experts in quantum, from across the globe.",
    image: "/images/events/seminar-series/mosaic-experts.png",
  },
  {
    position: "second",
    title: "About the hosts",
    description:
      "Dr. Zlatko K. Minev, research staff member at IBM Quantum and recipient of MIT Tech Review’s 35 under 35 Global Innovator award, is our lead host. He is joined by Dr. Olivia Lanes, an experimental researcher and education developer at IBM, working to bridge the gap between the hardware and software communities.",
    image: "/images/events/seminar-series/mosaic-hosts.png",
  },
  {
    position: "third",
    title: "The latest in quantum computing",
    description:
      "This series will discuss all the most current research and new developements across the field of quantum computing.",
    image: "/images/events/seminar-series/mosaic-team.png",
  },
  {
    position: "fourth",
    title: "Real time questions & discussion",
    description:
      "Discuss in real time with other researchers, students, and folks in quantum, while having the ability to ask questions of the speaker in real time via the comment chat box on YouTube.",
    image: "/images/events/seminar-series/mosaic-interactivity.png",
  },
];

// Data for the data table's sections
const upcomingEventsSectionTitle = "Upcoming Quantum Seminar Schedule";
const pastEventsSectionTitle = "Past Quantum Seminars";
const seminarSeriesDataTableColumns = [
  "Speaker",
  "Institution",
  "Name of talk",
  "Date of talk",
  "Link to talk",
];
const upcomingEventsDataTable = dataPerRow(
  upcomingSeminarSerieEvents,
  "upcoming-events-section"
);
const pastEventsDataTable = dataPerRow(
  pastSeminarSeriesEvents,
  "past-events-section"
);
const showMorePastEventsCta = SEMINAR_SERIES_FULL_ARCHIVE_CTA;

// Data for the helpful resources section
const helpfulResources: DescriptionCard[] = [
  {
    title: "Stay informed",
    description:
      "Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events.",
    cta: {
      url: "https://calendar.google.com/calendar/ical/c12g9fqo0mkvp9bo26dhm3u1rs%40group.calendar.google.com/public/basic.ics",
      label: "Get calendar updates",
      segment: {
        cta: "get-calendar",
        location: "helpful-resources",
      },
    },
  },
  {
    title: "Nominate",
    description:
      "If you or someone you know might be interested in speaking in a future seminar, we would love to include them. Please include your name, topic and available dates.",
    cta: {
      url: "https://airtable.com/shrB5wy8SCaMMtKop",
      label: "Contact us",
      segment: {
        cta: "contact",
        location: "helpful-resources",
      },
    },
  },
  {
    title: "Get up to speed",
    description:
      "If the content of the seminar series is too dense or technical, we have a host of content to help you get up to speed.",
    cta: {
      url: "https://qiskit.org/learn",
      label: "Start learning",
      segment: {
        cta: "qiskit-org-learn",
        location: "helpful-resources",
      },
    },
  },
  {
    title: "Code of conduct",
    description:
      "Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.",
    cta: {
      url: "https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md",
      label: "See code of conduct",
      segment: {
        cta: "code-of-conduct",
        location: "helpful-resources",
      },
    },
  },
];

function isAppCtaComponent(component: string): boolean {
  return component === "AppCta";
}

function dataPerRow(
  events: SeminarSeriesEvent[],
  eventsSection: string
): TableRowElement[][] {
  return events.map((event) => [
    {
      styles: "min-width: 9rem; display: inline-block;",
      data: event.speaker,
    },
    {
      styles: "min-width: 9rem; display: inline-block;",
      data: event.institution,
    },
    {
      styles: "min-width: 19rem; display: inline-block;",
      data: event.title,
    },
    {
      styles: "min-width: 8rem; display: inline-block;",
      data: event.date,
    },
    {
      component: "AppCta",
      styles: "min-width: 5rem;",
      data: {
        url: event.to,
        label: "Join event",
        segment: {
          cta: "talk-on-youtube",
          location: eventsSection,
        },
      },
    },
  ]);
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.seminar-series-page {
  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__past-events-cta {
    padding-bottom: 0;
  }
}
</style>
