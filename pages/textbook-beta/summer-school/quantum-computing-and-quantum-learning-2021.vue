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
    <RelatedMaterialSection class="summer-school-page__section" />
    <LinkListSection class="summer-school-page__section" :links="links" :title="supplementaryResourcesSectionTitle" />
    <SummerSchoolCoursePages class="summer-school-page__section" />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { GeneralLink, summerSchoolCourseStartLearningUrl } from '~/constants/appLinks'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: '2021 Qiskit Global Summer School on Quantum Machine Learning'
    }
  }
})
export default class SummerSchoolCoursePage extends QiskitPage {
  routeName: string = 'summer-school/quantum-computing-and-quantum-learning-2021'

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
    url: summerSchoolCourseStartLearningUrl,
    label: 'Start learning',
    segment: {
      cta: 'introduction', location: 'header'
    }
  }

  links: GeneralLink[] = [
    {
      url: 'http://mmrc.amss.cas.cn/tlb/201702/W020170224608149940643.pdf',
      label: 'Quantum Computation and Quantum Information by Nielsen & Chuang',
      segment: {
        cta: 'qc-qi-pdf',
        location: 'external-recommended-readings'
      }
    },
    {
      url: 'https://www.deeplearningbook.org/',
      label: 'Deep Learning by Ian Goodfellow et al',
      segment: {
        cta: 'deep-learning',
        location: 'external-recommended-readings'
      }
    }
  ]

  supplementaryResourcesSectionTitle = 'Supplementary Resources'
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
