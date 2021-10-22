<template>
  <main class="textbook-beta-page">
    <QiskitBanner padding-x-none>
      <div class="bx--grid">
        Miss the old version of the textbook? Access it
        <AppLink
          :segment="{ action: `${routeName} > banner > old-textbook-version` }"
          url="https://qiskit.org/textbook"
        >
          here
        </AppLink>
      </div>
    </QiskitBanner>
    <TextbookBetaHeader />
    <StartLearningSection class="textbook-beta-page__section" />
    <AppHelpfulResourcesSection
      class="textbook-beta-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitBanner from '@qiskit-community/qiskit-vue/src/components/banner/Banner.vue'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { SOCIAL_MEDIA } from '~/constants/menuLinks'

@Component({
  layout: 'default-max',
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  },
  components: { QiskitBanner }
})
export default class TextbookBetaPage extends QiskitPage {
  routeName: string = 'textbook-beta'

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Documentation',
      description: `The Qiskit Documentation is the right place for you if
      you are looking for the installation guide, release notes, or API
      references.`,
      cta: {
        url: 'https://qiskit.org/documentation/',
        label: 'Go to documentation',
        segment: { cta: 'documentation', location: 'helpful-resources' }
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
        segment: { cta: 'tutorials', location: 'helpful-resources' }
      }
    },
    {
      title: SOCIAL_MEDIA.stack.label,
      description: `Have a question? Ask it on stack exchange! Qiskit
      advocates and core contributors monitor this forum and will happily
      answer your questions.`,
      cta: {
        url: SOCIAL_MEDIA.stack.url,
        label: 'Visit Stack Exchange',
        segment: { cta: 'stack-exchange', location: 'helpful-resources' }
      }
    },
    {
      title: SOCIAL_MEDIA.slack.label,
      description: `The Slack community is a great place to engage in
      discussion on research and quantum development.`,
      cta: {
        url: SOCIAL_MEDIA.slack.url,
        label: 'Visit Slack',
        segment: { cta: 'slack', location: 'helpful-resources' }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.textbook-beta-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $spacing-07;
    margin-top: $spacing-10;
  }
}
</style>
