<template>
  <main class="summer-school-page">
    <TextbookBetaContentMenuSection
      class="summer-school-page__content-menu"
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
    <PrerequisiteMaterialSection class="summer-school-page__section" />
    <ExternalRecommendedReadings class="summer-school-page__section" :links="links" />
    <CoursePagesSection class="summer-school-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink, textbookBetaIntroductionCourseStartLearningUrl } from '~/constants/appLinks'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: '2021 Qiskit Global Summer School on Quantum Machine Learning'
    }
  }
})
export default class SummerSchoolCoursePage extends QiskitPage {
  routeName: string = 'summer-school'

  headerTitle = '2021 Qiskit Global Summer School on Quantum Machine Learning'
  headerDescription = ['Quantum computing experts and mentors share valuable insights through twenty lectures and five applied lab exercises that provide deep-dives exploring concepts in quantum computing, focused on the implementations of quantum machine learning algorithms in Qiskit.']

      headerImg = '/images/textbook-beta/summer-school/quantum-computing-and-quantum-learning-2021/header.png'

  backToTextbookHomeLink = {
    url: '/textbook-beta',
    label: 'Home',
    segment: {
      cta: 'back-to-textbook-home', location: 'header'
    }
  }

  startLearningCTA: GeneralLink = {
    url: textbookBetaIntroductionCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  links: GeneralLink[] = [
    {
      url: 'https://math.mit.edu/~gs/linearalgebra/',
      label: 'https://math.mit.edu/~gs/linearalgebra/',
      segment: {
        cta: 'mit-linear-algebra',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      label: 'https://machinelearningmastery.com/gentle-introduction-linear-algebra/',
      segment: {
        cta: 'mlmastery-linear-algebra',
        location: 'external-recommended-readings'
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.summer-school-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }

  &__content-menu {
    position: sticky;
    top: 0;
    z-index: 100;
  }
}
</style>
