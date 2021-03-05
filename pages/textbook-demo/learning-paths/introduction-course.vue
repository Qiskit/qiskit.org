<template>
  <main class="learning-path-introduction-course-page">
    <LearningPathExternalRecommendedReadings class="learning-path-introduction-course-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Introduction course'
    }
  }
})
export default class LearningPathIntroductionCoursePage extends QiskitPage {
  routeName: string = 'introduction-course'
}
</script>

<style lang="scss" scoped>
.learning-path-introduction-course-page {
  &__section {
    @include contained();
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
