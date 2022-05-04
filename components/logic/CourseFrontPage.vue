<template>
  <main class="introduction-course-page">
    <TextbookBetaContentMenuSection
      class="introduction-course-page__content-menu"
    />
    <AppPageHeaderWithImage :cta="startLearningCTA" :back-link="backToTextbookHomeLink">
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
        <img class="app-page-header-with-img__image" :src="headerImg">
      </template>
    </AppPageHeaderWithImage>
    <PrerequisiteMaterialSection
      v-if="prerequisites.length > 0"
      class="introduction-course-page__section"
      :data="prerequisites"
    />
    <ExternalRecommendedReadings
      v-if="links.length > 0"
      class="introduction-course-page__section"
      :links="links"
    />
    <CoursePagesSection class="introduction-course-page__section" :courses="courses" :img-base="imageUrlBase" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from './QiskitPage.vue'
import { GeneralLink } from '~/constants/appLinks'
import { Course, Prerequisite } from '~/constants/textbookBetaContent'

@Component({
  layout: 'default-max'
})
export default abstract class CourseFrontPage extends QiskitPage {
  abstract routeName: string

  abstract headerTitle: string
  abstract headerDescription: string[]
  abstract headerImg: string

  abstract startLearningCTA: GeneralLink

  abstract links: GeneralLink[]

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
.introduction-course-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $spacing-07;
    margin-top: $spacing-10;
  }

  &__content-menu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
</style>
