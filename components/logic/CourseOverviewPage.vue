<template>
  <main class="course-overview-page">
    <TextbookBetaContentMenuSection
      class="course-overview-page__content-menu"
    />
    <AppOverviewPageHeader :cta="startLearningCTA" :back-link="backToTextbookHomeLink">
      <template slot="title">
        {{ headerTitle }}
      </template>
      <template slot="description">
        <p
          v-for="(paragraph, index) in headerDescription"
          :key="index"
          v-text="paragraph"
        />
      </template>
      <template slot="image">
        <img class="app-overview-page-header__image" :src="headerImg">
      </template>
    </AppOverviewPageHeader>
    <PrerequisiteMaterialSection
      v-if="prerequisites.length > 0"
      class="course-overview-page__section"
      :data="prerequisites"
    />
    <ExternalRecommendedReadings
      v-if="links.length > 0 || references.length > 0"
      class="course-overview-page__section"
      :links="links"
      :references="references"
    />
    <CoursePagesSection class="course-overview-page__section" :courses="courses" :img-base="imageUrlBase" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from './QiskitPage.vue'
import { GeneralLink } from '~/constants/appLinks'
import { Course, Prerequisite } from '~/constants/textbookBetaContent'
import AppOverviewPageHeader from '../ui/AppOverviewPageHeader.vue'

@Component({
  layout: 'default-max'
})
export default abstract class CourseOverviewPage extends QiskitPage {
  abstract routeName: string

  abstract headerTitle: string
  abstract headerDescription: string[]
  abstract headerImg: string

  abstract startLearningCTA: GeneralLink

  abstract links: GeneralLink[]

  abstract references: string[]

  abstract courses: Course[]

  abstract prerequisites: Prerequisite[]

  abstract imageUrlBase: string

  backToTextbookHomeLink: GeneralLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }
}
</script>

<style lang="scss" scoped>
.course-overview-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $spacing-07;
    margin-top: $spacing-10;

    ::v-deep .course-pages-section__main {
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
