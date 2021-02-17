<template>
  <main class="textbook-demo-page">
    <section class="textbook-demo-page__section">
      <ContentSection
        v-for="{ headline, description } in learningPaths"
        :key="headline"
        class="textbook-demo-page__learning-paths__section"
        :description="description"
        :title="headline"
      >
        <!-- TODO: Add path cards -->
      </ContentSection>
    </section>

    <HelpfulResourcesSection
      class="textbook-demo-page__section"
      :resources="helpfulResources"
    />
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import { DescriptionCard } from '~/components/ui/AppDescriptionCard.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  }
})
export default class TextbookPage extends QiskitPage {
  routeName: string = 'textbook-demo'

  helpfulResources: DescriptionCard[] = [
    {
      title: 'Other learning material',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ipsum eget id id hendrerit quis euismod eleifend urna.',
      cta: {
        url: '#',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Docs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus morbi sodales euismod faucibus ut turpis sem.',
      cta: {
        url: '#',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Slack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis turpis pulvinar morbi consequat pulvinar sit.',
      cta: {
        url: '#',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Games and Demos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo vestibulum urna sit est pellentesque tincidunt nisi, enim tincidunt.',
      cta: {
        url: '#',
        label: 'Lorem ipsum'
      }
    }
  ]

  learningPaths = [
    {
      headline: 'Learning paths',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet, dictumst ipsum. Ut tincidunt amet quis donec tempus.',
      paths: []
    },
    {
      headline: 'University supplements',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus et malesuada ipsum aenean imperdiet risus. Turpis morbi turpis fermentum tellus semper egestas amet, dictumst ipsum. Ut tincidunt amet quis donec tempus.',
      paths: []
    }
  ];
}
</script>

<style lang="scss" scoped>
.textbook-demo-page {
  &__section {
    @include contained();
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }

  &__learning-paths {
    &__section {
      margin-bottom: $layout-03;
    }
  }
}
</style>
