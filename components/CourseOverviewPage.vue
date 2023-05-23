<template>
  <main class="course-overview-page">
    <LearnContentMenuSection class="course-overview-page__content-menu" />
    <UiPageHeaderWithImage
      :cta="startLearningCta"
      :back-link="backToTextbookHomeLink"
    >
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
      <template #image>
        <nuxt-img
          class="page-header-with-img__image"
          format="webp"
          sizes="sm:300px md:650px lg:500px xl:750px"
          :src="headerImg"
        />
      </template>
    </UiPageHeaderWithImage>
    <LearnPrerequisiteMaterialSection
      v-if="prerequisites.length > 0"
      class="course-overview-page__section"
      :data="prerequisites"
    />
    <LearnExternalRecommendedReadings
      v-if="links.length > 0 || references.length > 0"
      class="course-overview-page__section"
      :links="links"
      :references="references"
      :preamble="externalRecommendedReadingsPreamble"
    />
    <LearnCoursePagesSection
      class="course-overview-page__section"
      :courses="courses"
      :img-base="imageUrlBase"
    />
  </main>
</template>

<script setup lang="ts">
import type { Link } from "~/types/links";
import type { Course, Prerequisite } from "~/constants/learnContent";

interface Props {
  routeName: string; // TODO: Refactor tracking
  headerTitle: string;
  headerDescription: string[];
  headerImg: string;
  startLearningCta: Link;
  links: Link[];
  references: string[];
  externalRecommendedReadingsPreamble: string;
  courses: Course[];
  prerequisites: Prerequisite[];
  imageUrlBase: string;
}

defineProps<Props>();

const backToTextbookHomeLink: Link = {
  url: "/learn",
  label: "Home",
  segment: {
    cta: "back-to-textbook-home",
    location: "header",
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.course-overview-page {
  &__section {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
    margin-bottom: carbon.$spacing-07;
    margin-top: carbon.$spacing-10;

    :deep(.course-pages-section__main) {
      min-height: 20rem;
      height: max-content;
    }
  }

  &__content-menu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
</style>
