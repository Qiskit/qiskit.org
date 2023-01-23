<template>
  <main class="learn-page">
    <qiskit-banner>
      <div class="content">
        Miss the old version of the textbook? Access it
        <AppLink
          class="link"
          :segment="{ action: `${routeName} > banner > old-textbook-version` }"
          url="https://qiskit.org/textbook"
        >
          here
        </AppLink>
      </div>
    </qiskit-banner>
    <LearnHeader />
    <StartLearningSection class="learn-page__section" />
    <AppHelpfulResourcesSection
      class="learn-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import '@qiskit/web-components/components/banner'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'
import { SOCIAL_MEDIA } from '~/constants/menuLinks'

@Component({
  layout: 'account-default-max',
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  }
})
export default class LearnPage extends QiskitPage {
  routeName: string = 'learn'

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
    },
    {
      title: 'Educators Program',
      description: 'This program helps teachers in the growing quantum field connect with one another, and provides the learning resources, tools, and systems access they need to provide quality educational experiences.',
      cta: {
        url: 'https://quantum-computing.ibm.com/programs/educators',
        label: 'Visit the Educators Program',
        segment: { cta: 'educators-program', location: 'helpful-resources' }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.learn-page {
  &__section {
    @include contained();

    max-width: $max-size;
    margin-bottom: $spacing-07;
    margin-top: $spacing-10;
  }

  qiskit-banner {
    .content {
      @include contained();

      max-width: $max-size;
      padding: $spacing-04 $spacing-06;
      display: flex;
      flex: 1;

      @include mq($until: medium) {
        display: block;
      }
    }

    .link {
      color: $text-color-white;
      text-decoration: underline;
      margin-left: 4px;

      &:hover,
      &:visited {
        color: currentColor;
      }

      @include mq($until: medium) {
        margin-left: 2px;
      }
    }
  }
}
</style>
