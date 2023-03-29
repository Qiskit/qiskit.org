<template>
  <section class="course-pages-section">
    <div>
      <h2>Pages</h2>
      <nav class="course-pages-section__nav">
        <ul class="courses">
          <li
            v-for="{ label, segment, url } in courses"
            :key="label"
            class="course"
          >
            <UiBasicLink
              class="course__entry"
              :class="{ active: label === activeCourseLabel }"
              :segment="segment"
              :url="url"
              @mouseenter="selectCourse(label)"
            >
              {{ label }}
            </UiBasicLink>
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
      <div v-if="activeCourse" class="course-pages-section__main__preview">
        <UiBasicLink :url="activeCourse.url">
          <img
            class="course-pages-section__main__preview__image"
            :src="activeCoursePreviewImage"
          />
        </UiBasicLink>
        <UiCta
          label="Go to page"
          class="course-pages-section__main__preview__cta"
          :segment="activeCourse.segment"
          :url="activeCourse.url"
        />
      </div>
    </main>
  </section>
</template>

<script setup lang="ts">
import { Course } from "constants/learnContent";

interface Props {
  courses: Course[];
  imgBase: string;
}

const props = defineProps<Props>();

const activeCourseLabel = ref("");

const activeCourse = computed(() => {
  const activeCourse = props.courses.find(
    ({ label }) => label === activeCourseLabel.value
  );
  return activeCourse || null;
});

const activeCoursePreviewImage = computed(() => {
  if (!activeCourse.value) {
    return "";
  }

  const imageUrlBase = props.imgBase;

  return `${imageUrlBase}/${activeCourse.value.image}`;
});

const selectCourse = (courseLabel: string) => {
  activeCourseLabel.value = courseLabel;
};

onMounted(() => {
  selectCourse(props.courses[0].label);
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.course-pages-section {
  display: grid;
  column-gap: carbon.$spacing-07;
  grid-template-areas: ". main main .";
  grid-template-columns: repeat(4, 1fr);

  @include carbon.breakpoint-down(lg) {
    grid-template-areas: ". main main main";
  }

  @include carbon.breakpoint-down(md) {
    grid-template-areas: ".";
    grid-template-columns: 1fr;
  }

  &__main {
    display: grid;
    grid-area: main;
    grid-template-rows: auto 1fr;
    position: sticky;
    top: -(carbon.$spacing-03);

    @include carbon.breakpoint-down(md) {
      display: none;
    }

    &__title {
      border-bottom: 4px solid carbon.$purple-60;
      display: inline;
      padding-bottom: carbon.$spacing-02;
      padding-right: carbon.$spacing-03;

      &-wrapper {
        margin: 1.25rem 0 carbon.$spacing-06 0;

        @include carbon.breakpoint-down(xlg) {
          margin: carbon.$spacing-03 0 carbon.$spacing-06 0;
        }
      }
    }

    &__preview {
      background: carbon.$cool-gray-10;
      padding: carbon.$spacing-05;
      position: relative;

      &__image {
        width: 100%;
      }

      &__cta {
        bottom: carbon.$spacing-05;
        position: absolute;
        right: carbon.$spacing-05;
      }
    }
  }

  &__nav {
    margin-right: -(carbon.$spacing-10);

    @include carbon.breakpoint-down(md) {
      margin-right: initial;
    }
  }
}

.courses {
  .course {
    margin: 0 0 0.5rem;
    position: relative;

    &__entry {
      color: carbon.$cool-gray-80;
      display: inline-block;
      max-width: calc(100% - 25px);
      padding: carbon.$spacing-02 carbon.$spacing-03;
      text-decoration: none;
      width: 100%;

      &.active {
        background: carbon.$cool-gray-10;
        font-weight: 600;

        @include carbon.breakpoint-down(md) {
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
