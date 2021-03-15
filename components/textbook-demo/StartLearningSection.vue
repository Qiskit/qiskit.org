<template>
  <section class="start-learning-section">
    <h2 class="copy__title">
      Start learning in the way best for you
    </h2>
    <AppIntroductoryContent
      v-for="{ title, description, paths } in learningPaths"
      :key="title"
      class="start-learning-section__learning-paths__section"
      :description="description"
    >
      <template #title>
        <h3 class="start-learning-section__subtitle">
          {{ title }}
        </h3>
      </template>
      <AppCard
        v-for="{ description: pathDescription, image, title: pathTitle, cta } in paths"
        :key="pathTitle"
        class="start-learning-section__learning-paths__path-card"
        :cta-label="cta.label"
        :to="cta.url"
        :segment="cta.segment"
        :image="image"
        image-contain
        :title="pathTitle"
      >
        {{ pathDescription }}
      </AppCard>
    </AppIntroductoryContent>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type Path = {
  image: string,
  title: string,
  description: string,
  cta: GeneralLink
}

type LearningPath = {
  title: string,
  description: string,
  paths: Path[],
}

@Component
export default class StartLearningSection extends Vue {
  learningPaths: LearningPath[] = [
    {
      title: 'Learning paths',
      description: `Quantum computing is a big topic and working out where 
      to start can be difficult. In this interactive textbook, the content
      is organised into “learning paths” with clear prerequisites and end
      goals. If you’re looking for something specific, you can browse all
      content, and if you can’t find what you’re looking for you can ask the
      community on Slack.`,
      paths: [
        {
          image: '/images/textbook-demo/introduction-course.png',
          title: 'Introduction course',
          description: `Not sure where to start? This path is for you.
          This introduction is aimed at audiences from all backgrounds.
          Whether you're keen to start your journey into quantum computing,
          or just curious as to what it's all about, this course will take
          you from zero to one, without the hand waving.`,
          cta: {
            label: 'Go to this learning path',
            url: '/textbook-demo/learning-paths/introduction-course',
            segment: { action: 'textbook-demo > learning-paths > introduction-course' }
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
            url: '/textbook-demo',
            segment: { action: 'textbook-demo > learning-paths > traditional-algorithms-and-protocols' }
          }
        },
        {
          image: '/images/textbook-demo/quantum-hardware.png',
          title: 'Quantum hardware',
          description: `This learning path is currently under construction
          and is an ongoing effort. Please check back after the beta phase
          for an update on the progress of this learning path.`,
          cta: {
            label: 'Under construction',
            url: '/textbook-demo',
            segment: { action: 'textbook-demo > learning-paths > quantum-hardware' }
          }
        },
        {
          image: '/images/textbook-demo/quantum-machine-learning.png',
          title: 'Quantum machine learning',
          description: `This learning path is currently under construction
          and is an ongoing effort. Please check back after the beta phase
          for an update on the progress of this learning path.`,
          cta: {
            label: 'Under construction',
            url: '/textbook-demo',
            segment: { action: 'textbook-demo > learning-paths > quantum-machine-learning' }
          }
        }
      ]
    },
    {
      title: 'University supplements',
      description: `Are you teaching a course on quantum computing? Qiskit
      provides freely available materials to enhance your course.`,
      paths: [
        {
          image: '/images/textbook-demo/quantum-lab.png',
          title: 'Labs',
          description: `This set of labs provides 7 different exercises
          you (or your students) can use to investigate the behaviour of
          current quantum computers and practice your Qiskit coding skills.`,
          cta: {
            label: 'View resource',
            url: 'https://qiskit.org/textbook/ch-labs/index.html',
            segment: { action: 'textbook-demo > university-supplements > labs' }
          }
        }
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
@import "~carbon-components/scss/globals/scss/typography";
@import "~/assets/scss/blocks/copy.scss";

.start-learning-section {
  &__subtitle {
    @include type-style("expressive-heading-04", true);
    margin-bottom: $layout-01;
    color: $cool-gray-80;
  }

  &__learning-paths {
    &__section {
      margin-bottom: $layout-03;
    }

    &__path-card {
      margin-bottom: $layout-03;
    }
  }
}
</style>
