<template>
  <section class="related-material-section">
    <h2>
      Related Materials
    </h2>
    <div class="related-material-section__cards">
      <AppDescriptionCard
        v-for="{ title, description, segment, url } in prerequisites"
        :key="title"
        :description="description"
        class="related-material-section__card"
        :cta="{ label: 'Go to page', segment, url}"
        :title="title"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface Prerequisite {
  title: string;
  description: string;
  segment: CtaClickedEventProp;
  url: string;
}

@Component
export default class RelatedMaterialSection extends Vue {
  prerequisites: Prerequisite[] = [
    {
      title: 'Introduction to Quantum Computing and Quantum Hardware',
      description:
        'The Qiskit Global Summer School 2020 coursework, lab, and lecture materials are available online.',
      segment: {
        cta: 'intro-qc-qh-21', location: 'related-material'
      },
      url:
        'https://qiskit.org/learn/intro-qc-qh'
    },
    {
      title: 'Python Programming',
      description:
        'Python is a programming language where you don\'t need to compile. You can just run it line by line...',
      segment: {
        cta: 'python-programming', location: 'related-material'
      },
      url:
        'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks'
    },
    {
      title: 'Linear Algebra',
      description:
        'Linear algebra is the language of quantum computing. Develop a good understanding of the basic mathematical concepts that linear algebra is built upon.',
      segment: {
        cta: 'linear-algebra', location: 'related-material'
      },
      url:
        'https://qiskit.org/textbook/ch-appendix/linear_algebra.html'
    },
    {
      title: 'Probability Theory — Random Variables and Distributions',
      description:
        'Probabilities help us deal with unknowns. Quantum mechanics is an extension of probability theory, so being comfortable with probabilities will make your quantum computing journey easier.',
      segment: {
        cta: 'probability-theory', location: 'related-material'
      },
      url:
        'https://www.khanacademy.org/math/statistics-probability/random-variables-stats-library'
    }
  ]
}
</script>

<style lang="scss" scoped>
.related-material-section {
  &__card {
    align-items: strech;
    background: $cool-gray-10;
    color: $cool-gray-80;
    display: flex;
    padding: $spacing-05 $spacing-05 0;
  }

  &__cards {
    display: grid;
    gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);

    @include mq($until: medium) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($until: small) {
      grid-template-columns: 1fr;
      row-gap: $spacing-05;
    }
  }
}
</style>
