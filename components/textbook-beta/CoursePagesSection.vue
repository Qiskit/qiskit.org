<template>
  <section class="course-pages-section">
    <div>
      <h2>
        Course pages
      </h2>
      <nav class="course-pages-section__nav">
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
    <main class="course-pages-section__main">
      <div class="course-pages-section__main__title-wrapper">
        <div class="course-pages-section__main__title copy__subtitle">
          Page preview
        </div>
      </div>
      <div class="course-pages-section__main__preview">
        <BasicLink :url="activeCourse.url">
          <img
            class="course-pages-section__main__preview__image"
            :src="activeCoursePreviewImage"
          >
        </BasicLink>
        <AppCta
          v-bind="activeCourse"
          label="Go to page"
          class="course-pages-section__main__preview__cta"
        />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import { Course } from 'constants/textbookBetaContent'
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class CoursePagesSection extends Vue {
  @Prop({ type: Array, required: true }) courses!: Course[]
  @Prop({ type: String, required: true }) imgBase!: string

  activeCourseLabel = '';

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

    const imageUrlBase = this.imgBase

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
.course-pages-section {
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
    position: sticky;
    top: -.5rem;

    @include mq($until: medium) {
      display: none;
    }

    &__title {
      border-bottom: 4px solid $purple-60;
      display: inline;
      padding-bottom: $spacing-02;
      padding-right: $spacing-03;

      &-wrapper {
        margin: 1.25rem 0 $spacing-06 0;

        @include mq($until: x-large) {
          margin: $spacing-03 0 $spacing-06 0;
        }
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
    margin: 0 0 0.5rem;
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
