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
        v-for="{ description: pathDescription, image, title: pathTitle, to } in paths"
        :key="pathTitle"
        class="start-learning-section__learning-paths__path-card"
        cta-label="Go to this learning path"
        :image="image"
        image-contain
        :title="pathTitle"
        :to="to"
      >
        {{ pathDescription }}
      </AppCard>
    </AppIntroductoryContent>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

type Path = {
  image: string,
  title: string,
  description: string,
  to: string,
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
      description:
        'Quantum computing is a big topic and working out where to start can be difficult. In this interactive textbook, the content is organised into “learning paths” with clear prerequisites and end goals. If you’re looking for something specific, you can browse all content, and if you can’t find what you’re looking for you can ask the community on Slack.',
      paths: [
        {
          image: '/images/textbook-demo/introduction-course.png',
          title: 'Introduction course',
          description:
            'Not sure where to start? This path is for you. This introduction is aimed at audiences from all backgrounds. Whether you’re keen to start your journey into quantum computing, or just curious as to what it’s all about, this course will take you from zero to one, without the hand waving.',
          to: '#'
        },
        {
          image: '/images/textbook-demo/traditional-algorithms.png',
          title: 'Traditional Algorithms & Protocols',
          description:
            'Know your bits from your qubits? Start learning about the algorithms that kick-started all this excitement. This course will take you from basic quantum computing concepts to understanding quantum counting, Shor’s algorithm and more.',
          to: '#'
        },
        {
          image: '/images/textbook-demo/quantum-hardware.png',
          title: 'Quantum hardware',
          description:
            'This learning path is under construction... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet.',
          to: '#'
        },
        {
          image: '/images/textbook-demo/quantum-machine-learning.png',
          title: 'Quantum machine learning',
          description:
            'This learning path is under construction... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet.',
          to: '#'
        }
      ]
    },
    {
      title: 'University supplements',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet, dictumst ipsum. Ut tincidunt amet quis donec tempus.',
      paths: [
        {
          image: '/images/textbook-demo/labs.png',
          title: 'Labs',
          description:
            'This set of labs provides 7 different exercises you (or your students) can use to investigate the behaviour of current quantum computers and practice your Qiskit coding skills.',
          to: '#'
        },
        {
          image: '/images/textbook-demo/problem-sets.png',
          title: 'Problem sets',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet, dictumst ipsum. Ut tincidunt amet quis donec tempus.',
          to: '#'
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
    @include type-style("expressive-heading-04");
    margin-bottom: $layout-01;
    color: $cool-gray-80;

    @include mq($until: large) {
      @include type-style("expressive-heading-03");
      font-weight: 300;
    }
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
