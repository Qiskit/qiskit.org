<template>
  <article class="summer-school-2022-page">
    <LayoutLeadSpaceWithCard :card-title="headerData.cardSectionHeading">
      <template #title>
        {{ headerData.titleLine1 }}
        <br />
        {{ headerData.titleLine2 }}
      </template>
      <template #description>
        <p>
          The Qiskit Global Summer School 2022 is a two-week intensive summer
          program designed to empower the quantum researchers and developers of
          tomorrow with the skills and know-how to explore the world of quantum
          computing and its applications. This third-annual summer school will
          provide a focused introduction to quantum computing and its
          applications to quantum simulation, with a specific focus on quantum
          chemistry.
        </p>
        <p>
          Please follow
          <UiLinkText :link="headerData.qiskitTwitterLink"
            >Qiskit Twitter</UiLinkText
          >
          for more details and updates. For any questions, please check out our
          FAQ below!
        </p>
        <p>See you next year!</p>
      </template>
      <template #card>
        <EventsCard
          :cta-label="headerData.card.ctaLabel"
          :date="headerData.card.date"
          :image="headerData.card.image"
          :location="headerData.card.location"
          :segment="headerData.card.segment"
          :time="headerData.card.time"
          :title="headerData.card.title"
          :to="headerData.card.to"
          vertical-layout
        >
          {{ headerData.card.description }}
        </EventsCard>
      </template>
    </LayoutLeadSpaceWithCard>

    <div class="cds--grid summer-school-2022-page__content">
      <UiMosaicSection
        class="summer-school-2022-page__section"
        :title="mosaicData.title"
        :elements="mosaicData.tiles"
      />

      <section class="summer-school-2022-page__section">
        <h2 v-text="agendaData.title" />
        <p v-text="agendaData.subtitle" />
        <bx-tabs trigger-content="Select an item" value="Week 1">
          <bx-tab
            v-for="week in agendaData.weeks"
            :key="week.tabName"
            :target="week.tabName"
            :value="week.tabName"
          >
            {{ week.tabName }}
          </bx-tab>
        </bx-tabs>
        <div class="summer-school-2022-page__agenda">
          <div
            v-for="week in agendaData.weeks"
            :id="week.tabName"
            :key="week.tabName"
            class="summer-school-2022-page__agenda__table"
            role="tabpanel"
            :aria-labelledby="week.tabName"
            hidden
          >
            <UiDataTable :columns="agendaColumnsDataTable">
              <bx-table-row
                v-for="(row, rowIndex) in week.tableData"
                :key="`${rowIndex}`"
              >
                <bx-table-cell
                  v-for="({ styles, data }, elementIndex) in row"
                  :key="`${elementIndex}`"
                >
                  <span :style="styles">{{ data }}</span>
                </bx-table-cell>
              </bx-table-row>
            </UiDataTable>
          </div>
        </div>
      </section>

      <EventsSummerSchoolFaq2022 class="summer-school-2022-page__section" />

      <UiHelpfulResources
        class="summer-school-2022-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import {
  header,
  mosaic,
  agenda,
  helpfulResources,
} from "~/constants/summerSchool2022Content";

definePageMeta({
  layout: "default-max",
  pageTitle: "Qiskit Global Summer School 2022",
  routeName: "summer-school-2022",
});

const config = useRuntimeConfig();

const title = "Qiskit Global Summer School 2022";
const description =
  "The Qiskit Global Summer School 2022 — an immersive two-week program empowering aspiring quantum researchers and developers to explore quantum applications independently.";
const image = `${config.public.siteUrl}/images/events/summer-school-2022/summer-school-logo.png`;
const pageUrl = `${config.public.siteUrl}/events/summer-school-2023`;

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

const agendaColumnsDataTable: string[] = ["Day", "Topic", "Speaker", "Format"];
const headerData = header;
const mosaicData = mosaic;
const agendaData = agenda;
const helpfulResourcesData = helpfulResources;

useSchemaOrg([
  createEventSchemaOrg({
    startDate: new Date("2022-07-18"),
    mode: "Online",
    location: "",
    url: `${config.public.siteUrl}/events/summer-school-2022/`,
    name: headerData.card.title,
    image: `${config.public.siteUrl}${headerData.card.image}`,
    endDate: new Date("2022-07-29"),
  }),
]);
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.summer-school-2022-page {
  display: flex;
  flex-direction: column;

  &__section {
    margin-top: carbon.$spacing-10;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }
  }

  &__agenda {
    margin-top: carbon.$spacing-07;
    margin-bottom: carbon.$spacing-07;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }

    &__table {
      max-width: 100%;
      overflow-x: scroll;
    }
  }

  &__content {
    @include carbon.breakpoint-down(lg) {
      max-width: 100%;
    }
  }
}
</style>
