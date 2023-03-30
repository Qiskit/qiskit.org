<template>
  <main class="fall-fest-page">
    <UiPageHeaderWithCard
      :cta="headerData.cta"
      :card-title="headerData.cardSectionHeading"
    >
      <template #title>
        {{ headerData.titleLine1 }}
      </template>
      <template #description>
        <p>
          The Qiskit Fall Fest is a collection of quantum computing events on
          college campuses around the world. Every Fall Fest event is organized
          and run by the students on each campus, with support from the entire
          IBM Quantum team. Student leaders work alongside IBM throughout the
          month of September to design and plan their event, which are then run
          in October. The events vary from technical hackathons to
          beginner-friendly challenges, all with the goal of helping to grow the
          local community’s skill set.
        </p>
      </template>
      <template #card>
        <EventsItemCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventsItemCard>
      </template>
    </UiPageHeaderWithCard>

    <div class="cds--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <EventsFallFestUniversityDirectorySection />
      </section>
    </div>

    <div class="cds--grid fall-fest-page__content">
      <section class="fall-fest-page__section">
        <h2 v-text="agendaData.title" />
        <p v-text="agendaData.subtitle" />
        <bx-tabs value="Wave 1">
          <bx-tab
            v-for="week in agendaData.weeks"
            :key="week.tabName"
            :target="week.tabName"
            :value="week.tabName"
          >
            {{ week.tabName }}
          </bx-tab>
        </bx-tabs>
        <div
          v-for="week in agendaData.weeks"
          :id="week.tabName"
          :key="week.tabName"
          :aria-labelledby="week.tabName"
          role="tabpanel"
          hidden
        >
          <UiDataTable
            class="fall-fest-page__section"
            :columns="agendaColumnsDataTable"
          >
            <bx-table-row
              v-for="(row, rowIndex) in week.tableData"
              :key="`${rowIndex}`"
            >
              <bx-table-cell
                v-for="({ styles, data, link }, elementIndex) in row"
                :key="`${elementIndex}`"
              >
                <UiLink
                  v-if="link"
                  class="fall-fest-page__table-link"
                  :style="styles"
                  :url="link"
                >
                  Link to event
                </UiLink>
                <span v-else :style="styles">{{ data }}</span>
              </bx-table-cell>
            </bx-table-row>
          </UiDataTable>
        </div>
      </section>

      <UiHelpfulResourcesSection
        class="fall-fest-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/index.js";
import {
  header,
  agenda,
  helpfulResources,
} from "~/constants/fallFest2022Content";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Fall Fest 2022",
  routeName: "fall-fest",
});

const title = "Qiskit Fall Fest 2022";
const description =
  "The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from the entire IBM Quantum team. Student leaders work alongside IBM throughout the month of September to design and plan their event, which are then run in October. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community’s skill set.";
const image = "/images/events/fall-fest/fall-fest.png";

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: image,
    },
    {
      hid: "twitter:image:alt",
      name: "twitter:image:alt",
      content: title,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: image,
    },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: image,
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: title,
    },
  ],
});

const agendaData = agenda;
const agendaColumnsDataTable: string[] = [
  "University",
  "Start Date",
  "End Date",
  "Detail",
  "Type of Event",
  "Link",
];
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
