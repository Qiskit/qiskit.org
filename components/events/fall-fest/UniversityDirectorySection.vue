<template>
  <section class="university-directory-section">
    <article class="bx--row">
      <div class="bx--col-lg-4">
        <h2>University directory</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur quam porro eligendi, accusantium ad omnis quae repudiandae necessitatibus reprehenderit nisi.</p>
      </div>
      <div class="bx--col-xlg-12 bx--col-lg-12">
        <div class="bx--row">
          <div
            v-for="{ image, title, description, cta } in universities"
            :key="title"
            class="bx--col-xlg-8"
          >
            <AppCard
              :cta-label="cta.label"
              :to="cta.url"
              :segment="cta.segment"
              :image="image"
              :title="title"
              class="university-directory-section__card"
              :description-whole-size="true"
            >
              {{ description }}
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

type University = {
  image: string,
  title: string,
  description: string,
  cta: GeneralLink
}

@Component
export default class UniversityDirectorySection extends Vue {
  universities: University[] = [
    {
      image: '/images/events/fall-fest/cairo.png',
      title: 'University 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    },
    {
      image: '/images/events/fall-fest/fall-fest-logo-sq.png',
      title: 'University 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur.',
      cta: {
        label: 'Go to this page',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-name', location: 'fall-fest-page' }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.university-directory-section {
  &__subtitle {
    margin-bottom: $spacing-05;
  }

  &__section {
    margin-bottom: $spacing-07;
  }

  &__card {
    margin-bottom: $spacing-06;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }

    @include mq($from: x-large) {
      height: calc(100% - #{$spacing-06});
    }
  }
}
</style>
