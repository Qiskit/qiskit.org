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
import { textbookBetaIntroductionCourseStartLearningUrl } from '~/constants/appLinks'
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
      label: 'Label 3',
      segment: { cta: 'what-is-quantum', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-3'
    },
    {
      image: 'describing-quantum-computers-preview.png',
      label: 'Label 4',
      segment: { cta: 'describing-quantum-computers', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-4'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 5',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-5'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 6',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-6'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 7',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-7'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 8',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-8'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 9',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-9'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 10',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-10'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 11',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-11'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 12',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-12'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 13',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-13'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 14',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-14'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 15',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-15'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 16',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-16'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 17',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-17'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 18',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-18'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 19',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-19'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 20',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-20'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 21',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-21'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 22',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-22'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 23',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-23'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 24',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-24'
    },
    {
      image: 'entangled-states-preview.png',
      label: 'Label 25',
      segment: { cta: 'entangled-states', location: 'summer-school' },
      url: 'https://learn.qiskit.org/course/qgss2021/lec1-25'
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
