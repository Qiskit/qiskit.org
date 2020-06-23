<template>
  <section class="start-locally">
    <h3 class="start-locally__title">
      Start locally
    </h3>
    <p class="start-locally__description">
      Although it isn’t required we recommend using
      <AppLink
        class="start-locally__link"
        :url="downloadAnacondaLink.url"
      >
        {{ downloadAnacondaLink.label }}
      </AppLink>
      to cleanly separate Qiskit from other applications and improve your experience.
    </p>
    <div class="start-locally__options">
      <div
        v-for="optionsBlock in installOptions"
        :key="optionsBlock.alias"
      >
        <h4 class="start-locally__option-title">
          {{ optionsBlock.title }}
        </h4>
        <cv-button-set :class="`start-locally__options-group`">
          <cv-button
            v-for="option in optionsBlock.elements"
            :key="option"
            :title="option"
            class="start-locally__option"
            :class="{ 'start-locally__option_active': isActive (optionsBlock.alias, option) }"
            @click="selectOption(optionsBlock.alias, option)"
          >
            {{ option }}
          </cv-button>
        </cv-button-set>
      </div>
      <div>
        <h4 class="start-locally__option-title">Terminal</h4>
        <SyntaxHighlight
          :label="segmentLabel"
          :code="getCodeToInstallQiskit()"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'
import AppLink from '~/components/ui/AppLink.vue'
import { DOWNLOAD_ANACONDA_LINK } from '~/constants/appLinks'

@Component({
  components: { SyntaxHighlight, AppLink },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css' }
      ]
    }
  }
})
export default class extends Vue {
  downloadAnacondaLink = DOWNLOAD_ANACONDA_LINK
  installOptions = [
    {
      title: 'Languages',
      alias: 'languages',
      elements: ['Python 3.5+']
    },
    {
      title: 'Qiskit Install',
      alias: 'qiskit-install',
      elements: ['Stable (Recommended)', 'Source']
    },
    {
      title: 'Operating System',
      alias: 'os',
      elements: ['Linux', 'Mac', 'Windows']
    }
  ]

  activeOptions = {
    languages: 'Python 3.5+',
    'qiskit-install': 'Stable (Recommended)',
    os: 'Mac'
  }

  segmentLabel = 'Qiskit Install'

  getCodeToInstallQiskit () : string {
    return 'pip install qiskit'
  }

  isActive (optionsBlock: string, option: string) : boolean {
    return this.activeOptions[optionsBlock] === option
  }

  selectOption (optionsBlock: string, selectedOption: string) {
    this.activeOptions[optionsBlock] = selectedOption
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.start-locally {
  width: 63%;
  padding-top: $spacing-07;
  padding-right: $spacing-07;

  &__title {
    @include type-style('productive-heading-02');
    color: $cool-gray-80;
    margin-bottom: $spacing-05;
  }

  &__description {
    @include type-style('body-long-01');
    max-width: 7 * $column-size-large;
    margin-bottom: $spacing-07;
  }

  &__link {
    text-decoration: none;
    color: $purple-70;;
  }

  &__options {
    display: flex;
    flex-direction: column;
    row-gap: $spacing-07;
  }

  &__options-group {
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  &__option-title {
    @include type-style('body-long-01');
    color: $cool-gray-80;
    margin-bottom: $spacing-03;
  }

  &__option {
    @include type-style('body-long-01');
    background-color: $cool-gray-10;
    max-width: 100%;
    color: $gray-60;
    padding-left: $spacing-07;

    &_active {
      border-color: $purple-70;
      border-width: 2px;
      color: $purple-70;
    }
  }
}
</style>
