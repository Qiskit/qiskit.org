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
export default class PrerequisiteMaterialSection extends Vue {
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
      title: 'Matrix Multiplication',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas aenean arcu, vitae nunc aenean amet felis.',
      segment: {
        cta: 'matrix-multiplication', location: 'related-material'
      },
      url:
        'https://replace-this-url'
    },
    {
      title: 'Python Programming',
      description:
        'Python is a programming language where you don\'t need to compile. You can just run it line by line...',
      segment: {
        cta: 'python-programming', location: 'related-material'
      },
      url:
        'https://replace-this-url'
    },
    {
      title: 'Linear Algebra',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas aenean arcu, vitae nunc aenean amet felis.',
      segment: {
        cta: 'linear-algebra', location: 'related-material'
      },
      url:
        'https://replace-this-url'
    },
    {
      title: 'Probability Theory — Random Variables and Distributions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas aenean arcu, vitae nunc aenean amet felis.',
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
    column-gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);
    row-gap: $spacing-07;

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
