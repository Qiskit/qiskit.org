<template>
  <main class="textbook-demo-page">
    <TextbookDemoHeader />
    <StartLearningSection class="textbook-demo-page__section" />
    <AppHelpfulResourcesSection
      class="textbook-demo-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { SOCIAL_MEDIA } from '~/constants/menuLinks'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  }
})
export default class TextbookDemoPage extends QiskitPage {
  routeName: string = 'textbook-demo'

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Documentation',
      description: `The Qiskit Documentation is the right place for you if
      you are looking for the installation guide, release notes, or API
      references.`,
      cta: {
        url: 'https://qiskit.org/documentation/',
        label: 'Go to documentation',
        segment: { action: `${this.routeName} > helpful-resources > documentation` }
      }
    },
    {
      title: 'Tutorials',
      description: `The Tutorials include a range of Jupyter notebooks that
      cover a range of features and applications including circuits,
      algorithms, and applications.`,
      cta: {
        url: 'https://qiskit.org/documentation/tutorials/circuits/index.html',
        label: 'Go to tutorials',
        segment: { action: `${this.routeName} > helpful-resources > tutorials` }
      }
    },
    {
      title: SOCIAL_MEDIA.stack.label,
      description: `Have a question? Ask it on stack exchange! Qiskit
      advocates and core contributors monitor this forum and will happily
      answer your questions.`,
      cta: {
        url: SOCIAL_MEDIA.stack.url,
        label: 'Visit stack exchange',
        segment: { action: `${this.routeName} > helpful-resources > stack-exchange` }
      }
    },
    {
      title: SOCIAL_MEDIA.slack.label,
      description: `The Slack community is a great place to engage in
      discussion on research and quantum development.`,
      cta: {
        url: SOCIAL_MEDIA.slack.url,
        label: 'Visit slack',
        segment: { action: `${this.routeName} > helpful-resources > slack` }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.textbook-demo-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
