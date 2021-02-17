<template>
  <main class="textbook-page">
    <HelpfulResourcesSection
      class="textbook-page__section"
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
        url:
          'https://calendar.google.com/calendar/ical/c12g9fqo0mkvp9bo26dhm3u1rs%40group.calendar.google.com/public/basic.ics',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Docs',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus morbi sodales euismod faucibus ut turpis sem.',
      cta: {
        url: 'https://airtable.com/shrB5wy8SCaMMtKop',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Slack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mollis turpis pulvinar morbi consequat pulvinar sit.',
      cta: {
        url: 'https://qiskit.org/learn',
        label: 'Lorem ipsum'
      }
    },
    {
      title: 'Games and Demos',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo vestibulum urna sit est pellentesque tincidunt nisi, enim tincidunt.',
      cta: {
        url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        label: 'Lorem ipsum'
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.textbook-page {
  &__section {
    @include contained();
    margin-bottom: $layout-03;
    margin-top: $layout-05;
  }
}
</style>
