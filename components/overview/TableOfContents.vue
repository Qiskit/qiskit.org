<template>
  <nav class="table-of-contents">
    <AppLink
      v-for="element in elements"
      :key="element.label"
      class="table-of-contents__element"
      :class="{ 'table-of-contents__element_secondary': element.isSecondary }"
      :url="element.url"
    >
      {{ element.label }}
    </AppLink>
    <AppCta class="table-of-contents__get-started" url="">
      Get Started
    </AppCta>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import AppLink from '~/components/ui/AppLink.vue'
import AppCta from '~/components/ui/AppCta.vue'

@Component({
  components: { AppLink, AppCta }
})
export default class extends Vue {
  elements = [
    {
      url: '#applications',
      label: 'Write quantum code'
    },
    {
      url: '#applications',
      label: 'Applications',
      isSecondary: true
    },
    {
      url: '#algorithms',
      label: 'Algorithms',
      isSecondary: true
    },
    {
      url: '#benchmarking',
      label: 'Benchmarking',
      isSecondary: true
    },
    {
      url: '#circuits',
      label: 'Circuits',
      isSecondary: true
    },
    {
      url: '#simulators',
      label: 'Run Quantum Code'
    },
    {
      url: '#simulators',
      label: 'Simulators',
      isSecondary: true
    },
    {
      url: '#hardware',
      label: 'Hardware',
      isSecondary: true
    }
  ]
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.table-of-contents {
  width: 20%;
  padding-right: $spacing-07;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  @include mq($until: medium) {
    display: none;
  }

  &__element {
    @include type-style('label-01');
    color: $gray-80;
    text-decoration: none;
    margin-bottom: $layout-02;

    &:hover {
      text-decoration: underline;
    }

    &_secondary {
      &::before {
        content: "-";
        color: $purple-70;
        font-weight: bold;
        display:inline-block;
        padding-right: $layout-02;
      }
    }
  }

  &__get-started {
    @include type-style('label-01');
    margin-top: $layout-04;
  }
}
</style>
