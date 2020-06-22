<template>
  <section class="start-locally">
    <h3 class="start-locally__title">
      Start locally
    </h3>
    <p class="start-locally__description">
      Although it isn’t required we recommend using Anaconda for working
      environment for Qiskit, you can find it here.
    </p>
    <div class="start-locally__content">
      <div
        v-for="optionsBlock in installOptions"
        :key="optionsBlock.alias"
      >
        <h4 class="start-locally__option-title">
          {{ optionsBlock.title }}
        </h4>
        <cv-button-set :class="`start-locally__options start-locally__options_${optionsBlock.alias}`">
          <cv-button
            v-for="option in optionsBlock.elements"
            :key="option.label"
            :title="option.label"
            class="start-locally__option"
            :class="{ 'start-locally__option_active': option.active }"
          >
            {{ option.label }}
          </cv-button>
        </cv-button-set>
      </div>
      <div>
        <h4 class="start-locally__option-title">Code Block</h4>
        <SyntaxHighlight
          :label="title"
          :code="codeExample"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { IBM_Q_EXPERIENCE } from '~/constants/appLinks'
import AppLink from '~/components/ui/AppLink.vue'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'

@Component({
  components: { AppLink, SyntaxHighlight }
})
export default class extends Vue {
  ibmQExperienceLink = IBM_Q_EXPERIENCE
  installOptions = [
    {
      title: 'Languages',
      alias: 'languages',
      elements: [{
        label: 'Python 3.5+',
        active: true
      }]
    },
    {
      title: 'Qiskit Install',
      alias: 'qiskit-install',
      elements: [
        {
          label: 'Stable (Recommended)',
          active: true
        },
        {
          label: 'Master',
          active: false
        }
      ]
    },
    {
      title: 'Operating System',
      alias: 'os',
      elements: [
        {
          label: 'Linux',
          active: false
        },
        {
          label: 'Mac',
          active: true
        },
        {
          label: 'Windows',
          active: false
        }
      ]
    }
  ]

  title = 'Qiskit Install'
  codeExample = `conda install qiskit macos -m qiskit
# MacOS Binaries dont support CUDA, install from source if CUDA is needed`
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.start-locally {
  width: 65%;
  padding-top: $spacing-07;
  padding-right: $spacing-07;

  &__title {
    @include type-style('productive-heading-02');
    padding-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
    max-width: 7 * $column-size-large;
    margin-bottom: $spacing-07;
  }

  &__content {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-07;
  }

  &__options {
    display: grid;
    column-gap: $spacing-07;

    &_languages {
      grid-template-columns: 1fr;
    }

    &_qiskit-install {
      grid-template-columns: 1fr 1fr;
    }

    &_os {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  &__option-title {
    @include type-style('body-long-01');
    padding-bottom: $spacing-03;
  }

  &__option {
    @include type-style('body-long-01');
    background-color: $cool-gray-10;
    max-width: 100%;
    color: $inverse-01;
    padding-left: $spacing-07;

    &_active {
      border-color: $purple-70;;
      border-width: 2px;
      color: $purple-70;;
    }
  }
}
</style>
