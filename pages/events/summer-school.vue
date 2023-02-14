<template>
  <main class="summer-school-page">
    <!-- TODO: Integrate components -->
    <!-- <AppPageHeaderWithCard
      :cta="null"
      :card-title="headerData.cardSectionHeading"
    >
      <template slot="title">
        {{ headerData.titleLine1 }}
        <br />
        {{ headerData.titleLine2 }}
      </template>
      <template slot="description">
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
          <UiAppLink v-bind="headerData.qiskitTwitterLink">
            Qiskit Twitter
          </UiAppLink>
          for more details and updates. For any questions, please check out our
          FAQ below!
        </p>
        <p>See you next year!</p>
      </template>
      <template slot="card">
        <EventCard v-bind="headerData.card" vertical-layout>
          {{ headerData.card.description }}
        </EventCard>
      </template>
    </AppPageHeaderWithCard> -->

    <div class="bx--grid summer-school-page__content">
      <!-- <AppMosaicSection
        class="summer-school-page__section"
        :title="mosaicData.title"
        :elements="mosaicData.tiles"
      /> -->

      <section class="summer-school-page__section">
        <!-- <h2 v-text="agendaData.title" /> -->
        <!-- <p v-text="agendaData.subtitle" /> -->
        <!-- <cv-tabs>
          <cv-tab
            v-for="week in agendaData.weeks"
            :key="week.tabName"
            :label="week.tabName"
          >
            <AppDataTable
              class="summer-school-page__section"
              :columns="agendaColumnsDataTable"
            >
              <cv-data-table-row
                v-for="(row, rowIndex) in week.tableData"
                :key="`${rowIndex}`"
              >
                <cv-data-table-cell
                  v-for="({ styles, data }, elementIndex) in row"
                  :key="`${elementIndex}`"
                >
                  <span :style="styles">{{ data }}</span>
                </cv-data-table-cell>
              </cv-data-table-row>
            </AppDataTable>
          </cv-tab>
        </cv-tabs> -->
      </section>

      <!-- <FaqSection class="summer-school-page__section" /> -->

      <!-- <AppHelpfulResourcesSection
        class="summer-school-page__section"
        :title="helpfulResourcesData.title"
        :resources="helpfulResourcesData.resources"
      /> -->
    </div>
  </main>
</template>

<script setup lang="ts">
// TODO: Integrate old code
// import QiskitPage from "~/components/logic/QiskitPage.vue";
// import {
//   header,
//   mosaic,
//   agenda,
//   helpfulResources,
// } from "~/constants/summerSchool2022Content";

definePageMeta({
  // TODO: Integrate layout
  // layout: "default-max",
});

const title = "Qiskit Global Summer School 2022";
const description = `The Qiskit Global Summer School 2022 is a two-week intensive summer school
designed to empower the next generation of quantum researchers and developers with the skills
and know-how to explore quantum applications on their own`;
const image = "/images/events/summer-school/summer-school-logo.png";

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

// TODO: Integrate old code
// const agendaColumnsDataTable: string[] = ["Day", "Topic", "Speaker", "Format"];
// const headerData = header;
// const mosaicData = mosaic;
// const agendaData = agenda;
// const helpfulResourcesData = helpfulResources;

// TODO: Refactor "logic" pages
// export default class SummerSchoolPage extends QiskitPage {
//   routeName = 'summer-school'
// }
</script>

<style lang="scss" scoped>
// TODO: Review old CSS
// .summer-school-page {
//   display: flex;
//   flex-direction: column;

//   &__section {
//     margin-top: carbon.$spacing-10;
//     margin-bottom: carbon.$spacing-07;

//     @include carbon.breakpoint-down(lg) {
//       margin-bottom: carbon.$spacing-05;
//     }
//   }

//   &__content {
//     @include carbon.breakpoint-down(lg) {
//       max-width: 100%;
//     }
//   }
// }
</style>

<style lang="scss" scoped>
// TODO: Review old CSS
// // overrides
// .summer-school-page {
//   ::v-deep {
//     // TODO: Extract styles like "_checkbox" to be defined globally
//     & a.bx--tabs--scrollable__nav-link {
//       color: qiskit.$text-color-light;
//       border-bottom-color: qiskit.$border-color;

//       &:focus,
//       &:active {
//         outline: none;
//       }

//       &:not(.bx--tabs--scrollable__nav-item--disabled) {
//         color: qiskit.$text-color-light;
//       }
//     }

//     // TODO: Not sure if the order is important in these selectors.
//     // So, disabling. Review the reule 'no-descending-specificity' here:
//     // https://stylelint.io/user-guide/ignore-code
//     // stylelint-disable no-descending-specificity
//     & .bx--tabs--scrollable__nav-item {
//       &:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link,
//       &:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled):not(.bx--tabs--scrollable__nav-item--selected) .bx--tabs--scrollable__nav-link:focus,
//       &:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled):not(.bx--tabs--scrollable__nav-item--selected) a.bx--tabs--scrollable__nav-link:active,
//       &:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link, .bx--tabs--scrollable__nav-item--selected:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link:focus {
//         color: qiskit.$text-color-light;
//       }

//       &--selected:not(.bx--tabs--scrollable__nav-item--disabled) .bx--tabs--scrollable__nav-link {
//         border-bottom-color: qiskit.$border-color-secondary;
//       }
//     }

//     & .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--disabled) {
//         box-shadow: none;
//       }

//       & .bx--tabs--scrollable__nav-item:hover:not(.bx--tabs--scrollable__nav-item--selected):not(.bx--tabs--scrollable__nav-item--disabled),
//       & .bx--tabs--scrollable__nav-item,
//       & .bx--tabs-trigger {
//         background-color: qiskit.$background-color-white;

//         svg {
//           fill: $gray-100;
//         }
//       }

//       & .bx--tabs--scrollable__nav-link,
//       & .bx--tabs-trigger-text {
//         color: qiskit.$text-color;
//     }
//     // stylelint-enable no-descending-specificity

//     .app-data-table {
//       margin-top: carbon.$spacing-07;
//       padding: 0;
//     }
//   }
// }
</style>
