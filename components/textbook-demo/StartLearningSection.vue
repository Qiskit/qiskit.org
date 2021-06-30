<template>
  <section class="start-learning-section">
    <h2>
      Start learning in the way best for you
    </h2>
    <article
      v-for="{ title, description, courses } in learningSections"
      :key="title"
      class="bx--row"
    >
      <div class="bx--col-xlg-4 bx--col-lg-4">
        <h3 v-text="title" />
        <p>
          {{ description }}
        </p>
      </div>
      <div class="bx--col-xlg-12 bx--col-lg-12">
        <div class="bx--row">
          <div
            v-for="{ description: courseDescription, image, title: courseTitle, cta } in courses"
            :key="courseTitle"
            class="bx--col-xlg-8"
          >
            <AppCard
              :cta-label="cta.label"
              :to="cta.url"
              :segment="cta.segment"
              :image="image"
              image-contain
              :title="courseTitle"
              class="start-learning-section__card"
            >
              {{ courseDescription }}
            </AppCard>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type Course = {
  image: string,
  title: string,
  description: string,
  cta: GeneralLink
}

type LearningSection = {
  title: string,
  description: string,
  courses: Course[],
}

@Component
export default class StartLearningSection extends Vue {
  learningSections: LearningSection[] = [
    {
      title: 'Courses',
      description: `Quantum computing is a big topic and working out where
      to start can be difficult. In this interactive textbook, the content
      is organised into courses with clear prerequisites and end
      goals. If you’re looking for something specific, you can browse all
      content, and if you can’t find what you’re looking for you can ask the
      community on Slack.`,
      courses: [
        {
          image: '/images/textbook-demo/introduction-course.png',
          title: 'Introduction course',
          description: `Not sure where to start? This path is for you.
          This introduction is aimed at audiences from all backgrounds.
          Whether you're keen to start your journey into quantum computing,
          or just curious as to what it's all about, this course will take
          you from zero to one, without the hand waving.`,
          cta: {
            label: 'Go to this course',
            url: '/textbook-beta/course/introduction-course',
            segment: { cta: 'introduction-course', location: 'course' }
          }
        },
        {
          image: '/images/textbook-demo/traditional-algorithms.png',
          title: 'Traditional Algorithms & Protocols',
          description: `Know your bits from your qubits? Start learning
          about the algorithms that first caused all this excitement. This
          course will take you from basic quantum computing concepts to
          understanding quantum counting, Shor’s algorithm and more.`,
          cta: {
            label: 'Under construction',
            url: '/textbook-beta',
            segment: { cta: 'traditional-algorithms-and-protocols', location: 'course' }
          }
        },
        {
          image: '/images/textbook-demo/quantum-hardware.png',
          title: 'Quantum hardware',
          description: `This course is currently under construction
          and is an ongoing effort. Please check back after the beta phase
          for an update on the progress of this course.`,
          cta: {
            label: 'Under construction',
            url: '/textbook-beta',
            segment: { cta: 'quantum-hardware', location: 'course' }
          }
        },
        {
          image: '/images/textbook-demo/quantum-machine-learning.png',
          title: 'Quantum machine learning',
          description: `This course is currently under construction
          and is an ongoing effort. Please check back after the beta phase
          for an update on the progress of this course.`,
          cta: {
            label: 'Under construction',
            url: '/textbook-beta',
            segment: { cta: 'quantum-machine-learning', location: 'course' }
          }
        }
      ]
    },
    {
      title: 'University supplements',
      description: `Are you teaching a course on quantum computing? Qiskit
      provides freely available materials to enhance your course.`,
      courses: [
        {
          image: '/images/textbook-demo/quantum-lab.png',
          title: 'Labs',
          description: `This set of labs provides 7 different exercises
          you (or your students) can use to investigate the behaviour of
          current quantum computers and practice your Qiskit coding skills.`,
          cta: {
            label: 'View resource',
            url: 'https://qiskit.org/textbook/ch-labs/index.html',
            segment: { cta: 'labs', location: 'university-supplements' }
          }
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
.start-learning-section {
  &__subtitle {
    margin-bottom: $layout-01;
  }

  &__section {
    margin-bottom: $layout-03;
  }

  &__card {
    margin-bottom: $layout-02;

    @include mq($until: large) {
      margin-bottom: $layout-01;
    }

    @include mq($from: x-large) {
      height: calc(100% - #{$layout-02});
    }
  }
}
</style>
