<template>
  <main class="introduction-course-page">
    <IntroductionCourseHeader />
    <PrerequisiteMaterialSection class="introduction-course-page__section" />
    <ExternalRecommendedReadings class="introduction-course-page__section" :links="links" />
    <LearningPathPagesSection class="introduction-course-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { TEXTBOOK_DEMO_INTRODUCTION_COURSE_EXTERNAL_RECOMMENDED_READINGS } from '~/constants/appLinks'

@Component({
  layout: 'default-textbook',
  head () {
    return {
      title: 'Introduction course'
    }
  }
})
export default class IntroductionCoursePage extends QiskitPage {
  routeName: string = 'introduction-course'
  links = TEXTBOOK_DEMO_INTRODUCTION_COURSE_EXTERNAL_RECOMMENDED_READINGS
}
</script>

<style lang="scss" scoped>
.introduction-course-page {
  &__section {
    @include contained();
    max-width: $max-size;
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
