<template>
  <section class="summer-school-course-pages-section">
    <div>
      <h2>
        Course pages
      </h2>
      <nav class="summer-school-course-pages-section__nav">
        <ul class="courses">
          <li
            v-for="{ label, segment, url } in courses"
            :key="label"
            class="course"
          >
            <BasicLink
              class="course__entry"
              :class="{ active: label === activeCourseLabel }"
              :segment="segment"
              :url="url"
              @mouseenter="selectCourse(label)"
            >
              {{ label }}
            </BasicLink>
          </li>
        </ul>
      </nav>
    </div>
    <main class="summer-school-course-pages-section__main">
      <div class="summer-school-course-pages-section__main__title-wrapper">
        <div class="summer-school-course-pages-section__main__title copy__subtitle">
          Page preview
        </div>
      </div>
      <div class="summer-school-course-pages-section__main__preview">
        <BasicLink :url="activeCourse.url">
          <img
            class="summer-school-course-pages-section__main__preview__image"
            :src="activeCoursePreviewImage"
          >
        </BasicLink>
        <AppCta
          v-bind="activeCourse"
          label="Go to page"
          class="summer-school-course-pages-section__main__preview__cta"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface Course {
  image: string;
  label: string;
  segment: CtaClickedEventProp;
  url: string;
}

@Component
export default class SummerSchoolCoursePagesSection extends Vue {
  activeCourseLabel = '';

  courses: Course[] = [
    {
      image: 'why-quantum-computing-preview.png',
      label: 'Vector Spaces, Tensor Products, and Qubits',
      segment: { cta: 'why-quantum-computing', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-1'
    },
    {
      image: 'the-atoms-of-computation-preview.png',
      label: 'Introduction to Quantum Circuits',
      segment: { cta: 'the-atoms-of-computation', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-2'
    },
    {
      image: 'what-is-quantum-preview.png',
      label: 'Simple Quantum Algorithms I',
      segment: { cta: 'what-is-quantum', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec2-1'
    },
    {
      image: 'describing-quantum-computers-preview.png',
      label: 'Simple Quantum Algorithms II',
      segment: { cta: 'describing-quantum-computers', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec2-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Noise in Quantum Computers pt 1',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec3-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Noise in Quantum Computers pt. 2',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec3-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Quantum Computing Algorithms and Operations',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Bonus Content: Noise in Quantum Computers',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec4-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Classical Machine Learning',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec4-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Advanced Classical Machine Learning',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec5-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Building a Quantum Classifier',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec5-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to the Quantum Approximate Optimization Algorithm and Applications',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Variational Algorithms',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec6-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'From Variational Classifiers to Linear Classifiers',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec6-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Quantum Feature Spaces and Kernels',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec7-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Quantum Kernels in Practice',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab3'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Quantum Kernels and Support Vector Machines',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec8-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction and Applications of Quantum Models',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec8-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Barren Plateaus, Trainability Issues, and How to Avoid Them',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-18'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Training Quantum Circuits',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab4'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Quantum Hardware',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec9-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Hardware Efficient Ansatze for Quantum Machine Learning',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec9-2'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Introduction to Hardware Efficient Ansatze for Quantum Machine Learning',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lab5'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Advanced QML Algorithms: Quantum Boltzmann Machines and Quantum Generative Adversarial Networks',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec10-1'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'The Capacity and Power of Quantum Machine Learning Models & the Future of Quantum Machine Learning',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec10-2'
    }
  ]

  get activeCourse () {
    const activeCourse = this.courses.find(
      ({ label }) => label === this.activeCourseLabel
    )
    return activeCourse || null
  }

  get activeCoursePreviewImage () {
    if (!this.activeCourse) {
      return ''
    }

    const imageUrlBase =
      '/images/textbook-beta/course/introduction-course'

    return `${imageUrlBase}/${this.activeCourse.image}`
  }

  selectCourse (courseLabel: string) {
    this.activeCourseLabel = courseLabel
  }

  created () {
    this.selectCourse(this.courses[0].label)
  }
}
</script>

<style lang="scss" scoped>
.summer-school-course-pages-section {
  display: grid;
  column-gap: $spacing-07;
  grid-template-areas: ". main main .";
  grid-template-columns: repeat(4, 1fr);

  @include mq($until: large) {
    grid-template-areas: ". main main main";
  }

  @include mq($until: medium) {
    grid-template-areas: ".";
    grid-template-columns: 1fr;
  }

  &__main {
    display: grid;
    grid-area: main;
    grid-template-rows: auto 1fr;

    @include mq($until: medium) {
      display: none;
    }

    &__title {
      border-bottom: 4px solid $purple-60;
      display: inline;
      padding-bottom: $spacing-02;
      padding-right: $spacing-03;

      &-wrapper {
        margin: $spacing-06 0;
      }
    }

    &__preview {
      background: $cool-gray-10;
      padding: $spacing-05;
      position: relative;

      &__image {
        width: 100%;
      }

      &__cta {
        bottom: $spacing-05;
        position: absolute;
        right: $spacing-05;
      }
    }
  }

  &__nav {
    margin-right: -$spacing-10;

    @include mq($until: medium) {
      margin-right: initial;
    }
  }
}

.courses {
  .course {
    margin: 0 0 0.5em;
    position: relative;

    &__entry {
      color: $cool-gray-80;
      display: inline-block;
      max-width: calc(100% - 25px);
      padding: $spacing-02 $spacing-03;
      text-decoration: none;
      width: 100%;

      &.active {
        background: $cool-gray-10;
        font-weight: 600;

        @include mq($until: medium) {
          background: initial;
        }
      }
    }

    &:last-of-type {
      .course__connection {
        display: none;
      }
    }
  }
}
</style>
