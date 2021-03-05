<template>
  <main class="learning-path-introduction-course-page">
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
