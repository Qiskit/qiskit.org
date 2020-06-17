<template>
  <div class="quick-start">
    <section class="quick-start__locally">
      <h3 class="quick-start__section-title">
        Start locally
      </h3>
      <p class="quick-start__section-description">
        Although it isn’t required we recommend using Anaconda for working
        environment for Qiskit, you can find it here.
      </p>
      <div class="quick-start__section-content">
        <div
          v-for="optionsBlock in installOptions"
          :key="optionsBlock.alias"
          class="quick-start__options-block">
          <h4 class="quick-start__option-title">
            {{ optionsBlock.title }}
          </h4>
          <cv-button-set :class="`quick-start__${optionsBlock.alias}-options`">
            <cv-button
              v-for="option in optionsBlock.elements"
              :key="option.label"
              :title="option.label"
              class="quick-start__btn"
              :class="{ 'quick-start__btn_active': option.active }"
            >
              {{ option.label }}
            </cv-button>
          </cv-button-set>
        </div>
        <div class="quick-start__options-block">
          <h4 class="quick-start__option-title">Code Block</h4>
          <SyntaxHighlight
            :label="title"
            :code="codeExample"
          />
        </div>
      </div>
    </section>
    <section class="quick-start__cloud">
      <h3 class="quick-start__section-title">
        Start on the cloud
      </h3>
      <p class="quick-start__section-description">
        Starting on the cloud will enable you to begin
        without installing anything.
      </p>
      <div class="quick-start__section-content">
        <AppLink
          class="quick-start__cloud-link"
          :url="ibmQExperienceLink.url"
        >
          <span>{{ ibmQExperienceLink.label }}</span>
          <ArrowRight16 />
        </AppLink>
      </div>
    </section>
  </div>
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

.quick-start {
  display: flex;
  flex-direction: row;

  &__section-title {
    @include type-style('productive-heading-02');
    padding-bottom: $spacing-05;
  }

  &__section-description {
    @include type-style('body-long-01');
  }

  &__section-content {
    margin-top: $spacing-07;
  }

  &__locally {
    width: 65%;
    padding-top: $spacing-07;
    padding-right: $spacing-07;
  }

  &__options-block {
    margin-top: $spacing-07;
  }

  &__languages-options {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: $spacing-07;
  }

  &__qiskit-install-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: $spacing-07;
  }

  &__os-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: $spacing-07;
  }

  &__option-title {
    @include type-style('body-long-01');
  }

  &__btn {
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

  &__cloud {
    width: 35%;
    background-color: $cool-gray-10;
    padding: $spacing-07;
  }

  &__cloud-link {
    padding-top: $spacing-02 + $spacing-07; //To align with locally block
    text-decoration: none;
    color: $purple-70;;
    fill: $purple-70;;
    display: flex;

    :first-child {
      margin-right: 2 * $spacing-07;
    }
  }
}
</style>
