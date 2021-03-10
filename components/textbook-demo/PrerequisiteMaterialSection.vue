<template>
  <section class="prerequisite-material-section">
    <h2 class="copy__title">
      Prerequisite material
    </h2>
    <div class="prerequisite-material-section__cards">
      <div
        v-for="{ title, description, progress, url } in prerequisites"
        :key="title"
        class="prerequisite-material-section__card"
      >
        {{ title }}
        {{ description }}
        {{ progress }}
        {{ url }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

interface Prerequisite {
  title: string;
  description: string;
  progress: Number;
  url: string;
}

@Component
export default class PrerequisiteMaterialSection extends Vue {
  prerequisites: Prerequisite[] = [
    {
      title: 'Setting Up Your Environment',
      description:
        'This is a comprehensive guide for setting up your environment on your personal computer for working with Qiskit Textbook.',
      progress: 1,
      url: '#'
    },
    {
      title: 'Python and Jupyter Notebooks',
      description:
        "Python is a programming language where you don't need to compile. You can just run it line by line...",
      progress: 0.5,
      url: '#'
    },
    {
      title: 'What is quantum?',
      description:
        '‘Quantum physics’ is a term widely used but much less understood. It is a mathematical model first used to describe the...',
      progress: 0,
      url: '#'
    }
  ];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.prerequisite-material-section {
  &__card {
    background: $cool-gray-10;
  }

  &__cards {
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
