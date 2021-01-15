<template>
  <section class="helpful-resources-section">
    <h2 class="copy__title" v-text="title" />
    <div class="helpful-resources-section__resources">
      <AppDescriptionCard
        v-for="resource in resources"
        :key="resource.title"
        v-bind="resource"
        class=""
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'

@Component
export default class HelpfulResourcesSection extends Vue {
  title = 'Helpful Resources';

  resources: DescriptionCard[] = [
    {
      title: 'Stay informed',
      description: 'Want to keep up to date with upcoming seminars? Click here to subscribe to our calendar for all upcoming events. This section needs copy review.',
      cta: {
        url: '',
        label: 'Get calendar updates'
      }
    },
    {
      title: 'Nominate',
      description: 'If you or someone you know might be interested in speaking in a future seminar, we would love to include them. Please include your name, topic and available dates.',
      cta: {
        url: '',
        label: 'Contact us'
      }
    },
    {
      title: 'Get up to speed',
      description: 'If the content of the seminar series is too dense or technical, we have a host of content to help you get up to speed.',
      cta: {
        url: 'https://qiskit.org/learn',
        label: 'Start learning'
      }
    },
    {
      title: 'Code of conduct',
      description: 'Qiskit is dedicated to providing an enjoyable and safe experience for all participants. We have a code of conduct that all events adhere to.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        label: 'See code of  conduct'
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/blocks/copy.scss";

.helpful-resources-section {
  &__resources {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;

    @include mq($from: medium, $until: large) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include mq($until: medium) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
