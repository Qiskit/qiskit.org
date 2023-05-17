<template>
  <main class="summer-school-page">
    <UiPageHeaderWithCard :card-title="headerData.cardSectionHeading">
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
          <UiLink v-bind="headerData.qiskitTwitterLink">
            Qiskit Twitter
          </UiLink>
          for more details and updates. For any questions, please check out our
          FAQ below!
        </p>
        <p>See you next year!</p>
      </template>
      <template #card>
        <EventsItemCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventsItemCard>
      </template>
    </UiPageHeaderWithCard>

    <div class="cds--grid summer-school-page__content">
      <UiMosaicSection
        class="summer-school-page__section"
        :title="mosaicData.title"
        :elements="mosaicData.tiles"
      />

      <section class="summer-school-page__section">
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
        <div class="summer-school-page__agenda">
          <div
            v-for="week in agendaData.weeks"
            :id="week.tabName"
            :key="week.tabName"
            class="summer-school-page__agenda__table"
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

      <EventsSummerSchoolFaq2022 class="summer-school-page__section" />

      <UiHelpfulResourcesSection
        class="summer-school-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      />
    </div>
  </main>
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

const title = "Qiskit Global Summer School 2022";
const description = `The Qiskit Global Summer School 2022 is a two-week intensive summer school
designed to empower the next generation of quantum researchers and developers with the skills
and know-how to explore quantum applications on their own`;
const image = "/images/events/summer-school-2022/summer-school-logo.png";

useHead({
  title,
  meta: [
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

const agendaColumnsDataTable: string[] = ["Day", "Topic", "Speaker", "Format"];
const headerData = header;
const mosaicData = mosaic;
const agendaData = agenda;
const helpfulResourcesData = helpfulResources;
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.summer-school-page {
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
