<template>
  <article class="fall-fest-page">
    <LayoutLeadSpaceWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template #title>
        {{ headerData.titleLine1 }}
      </template>
      <template #description>
        <p>{{ headerData.description }}</p>
      </template>
      <template #card>
        <EventsCard
          :cta-label="headerData.card.ctaLabel"
          :image="headerData.card.image"
          :location="headerData.card.location"
          :segment="headerData.card.segment"
          :time="headerData.card.time"
          :alt-text="headerData.card.altText"
          :title="headerData.card.title"
          :to="headerData.card.to"
          vertical-layout
        >
          {{ headerData.card.description }}
        </EventsCard>
      </template>
    </LayoutLeadSpaceWithCard>

    <div class="cds--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <EventsFallFestUniversityDirectory :directory-data="partnerEvents" />
      </section>

      <section class="fall-fest-page__section">
        <UiDataTableSection
          :section-title="agenda.title"
          :data-table-columns="dataTable.headers"
        >
          <template #data-table-elements>
            <bx-table-row v-for="event in agenda.tableData" :key="event">
              <bx-table-cell v-for="{ styles, data } in event" :key="data">
                <span :style="styles"> {{ data }}</span>
              </bx-table-cell>
            </bx-table-row>
          </template>
        </UiDataTableSection>
      </section>
      <section class="fall-fest-page__section">
        <UiHelpfulResources
          class="fall-fest-page__section"
          :title="helpfulResourcesData.title"
          :resources="helpfulResourcesData.resources"
        />
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import { header, helpfulResources } from "~/constants/fallFest2023Content";
import partnerEvents from "~/content/fall-fest-events/fall-fest-partner-events.json";
import extensionEvents from "~/content/fall-fest-events/fall-fest-extension-events.json";

interface eventDetails {
  university: string;
  country: string;
}

definePageMeta({
  pageTitle: header.titleLine1,
  routeName: "fall-fest",
});

const config = useRuntimeConfig();

const title = header.titleLine1;
const description =
  "The Qiskit Fall Fest is a collection of quantum computing events from universities around the world, organized by students and supported by the IBM Quantum community.";
const image = `${config.public.siteUrl}/images/events/fall-fest/fall-fest-logo-2023.png`;
const pageUrl = `${config.public.siteUrl}/events/fall-fest`;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: image,
  ogImageAlt: title,
  ogUrl: pageUrl,
  ogType: "website",
  twitterCard: "summary_large_image",
  twitterDescription: description,
});

const dataTable = {
  headers: ["University", "Country"],
};

const scheduleToTableData = (slot: eventDetails) => [
  {
    styles:
      "max-width: 20rem; display: inline-block; padding-top: 8px; padding-bottom: 8px; font-weight: bold",
    data: slot.university,
  },
  {
    styles: "min-width: 9rem; display: inline-block;",
    data: slot.country,
  },
];

const agenda = {
  title: "Schedule of Events",
  subtitle: "*Schedule subject to change",
  headers: ["University", "Country"],
  tableData: extensionEvents.map(scheduleToTableData),
};

const headerData = header;
const helpfulResourcesData = helpfulResources;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.fall-fest-page {
  display: flex;
  flex-direction: column;

  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__content {
    @include carbon.breakpoint-down(lg) {
      max-width: 100%;
    }
  }
}
</style>
