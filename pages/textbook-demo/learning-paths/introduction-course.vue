<template>
  <main class="introduction-course-page">
    <ExternalRecommendedReadings class="introduction-course-page__section" :links="links" />
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
export default class IntroductionCoursePage extends QiskitPage {
  routeName: string = 'introduction-course'
  links = [
    'https://math.mit.edu/~gs/linearalgebra/',
    'https://machinelearningmastery.com/gentle-introduction-linear-algebra/'
  ]
}
</script>

<style lang="scss" scoped>
.introduction-course-page {
  &__section {
    @include contained();
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
