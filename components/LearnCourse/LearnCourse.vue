<template>
  <article class="learn-course">
    <OneXPBanner
      copy="🎉 Qiskit is getting a new learning experience on IBM Quantum!"
      :cta="{
        label: 'Check it out',
        segment: {
          cta: 'go-to-1xp-learning',
          location: '1xp-banner',
        },
        url: 'https://learning.quantum-computing.ibm.com',
      }"
    />
    <LearnContentMenu class="learn-course__content-menu" />
    <LayoutLeadSpaceWithImage
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
          class="layout-lead-space-with-image__image"
          format="webp"
          sizes="sm:300px md:650px lg:500px xl:750px"
          :src="headerImg"
        />
      </template>
    </LayoutLeadSpaceWithImage>
    <LearnCoursePrerequisiteMaterial
      v-if="prerequisites.length > 0"
      class="learn-course__section"
      :data="prerequisites"
    />
    <LearnCourseRecommendedReadings
      v-if="links.length > 0 || references.length > 0"
      class="learn-course__section"
      :links="links"
      :references="references"
      :preamble="externalRecommendedReadingsPreamble"
    />
    <LearnCoursePages
      class="learn-course__section"
      :courses="courses"
      :img-base="imageUrlBase"
    />
  </article>
</template>

<script setup lang="ts">
import { Course, Prerequisite } from "~/constants/learnContent";
import { TextLink } from "~/types/links";

interface Props {
  routeName: string; // TODO: Refactor tracking
  headerTitle: string;
  headerDescription: string[];
  headerImg: string;
  startLearningCta: TextLink;
  links: TextLink[];
  references: string[];
  externalRecommendedReadingsPreamble: string;
  courses: Course[];
  prerequisites: Prerequisite[];
  imageUrlBase: string;
}

defineProps<Props>();

const backToTextbookHomeLink: TextLink = {
  url: "/learn",
  label: "Home",
  title: "Back to Textbook Home",
  segment: {
    cta: "back-to-textbook-home",
    location: "header",
  },
};
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

.learn-course {
  &__section {
    @include qiskit.contained;

    max-width: qiskit.$max-size;
    margin-bottom: carbon.$spacing-07;
    margin-top: carbon.$spacing-10;

    :deep(.learn-course-pages__content) {
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
