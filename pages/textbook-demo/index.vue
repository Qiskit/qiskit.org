<template>
  <main class="textbook-page">
    <section class="textbook-page__section">
      <ContentSection
        v-for="{ headline, description } in learningPaths"
        :key="headline"
        class="textbook-page__learning-paths__section"
        :title="headline"
        :description="description"
      >
        <!-- TODO: Add path cards -->
      </ContentSection>
    </section>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'

@Component({
  head () {
    return {
      title: 'Qiskit Textbook'
    }
  }
})
export default class TextbookPage extends QiskitPage {
  routeName: string = 'textbook-demo'

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
.textbook-page {
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
