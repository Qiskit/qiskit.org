<template>
  <section class="start-locally">
    <h3 class="copy__subtitle">
      Start locally
    </h3>
    <p class="copy__paragraph copy__paragraph_importance_support">
      To install Qiskit locally, you will need
      <AppLink
        url="https://www.python.org/downloads/"
      >
        Python 3.6+.
      </AppLink>
      Although it isn't required, we recommend using a
      <AppLink
        url="https://www.anaconda.com/products/individual"
      >
        virtual environment with Anaconda.
      </AppLink>
    </p>
    <div class="start-locally__options">
      <div
        v-for="choicesGroup in installChoices"
        :key="choicesGroup.id"
      >
        <h4 class="start-locally__option-title">
          {{ choicesGroup.title }}
        </h4>
        <cv-button-set class="start-locally__options-group">
          <cv-button
            v-for="option in choicesGroup.options"
            :key="option"
            :title="option"
            class="start-locally__option"
            :class="{ 'start-locally__option_active': isActive (choicesGroup, option) }"
            @click="selectOption(choicesGroup, option)"
          >
            {{ option }}
          </cv-button>
        </cv-button-set>
      </div>
      <div>
        <cv-accordion
          v-if="getPrerequisitesToInstallQiskit ()"
          class="start-locally__prerequisites-section"
        >
          <cv-accordion-item>
            <template #title>
              Building Qiskit requires a C++ compiler and development headers
            </template>
            <template #content>
              <lazy-prerequisites-for-linux v-if="selectedOs === OPERATING_SYSTEMS.linux" />
              <lazy-prerequisites-for-mac v-else-if="selectedOs === OPERATING_SYSTEMS.mac" />
              <lazy-prerequisites-for-windows v-else-if="selectedOs === OPERATING_SYSTEMS.windows" />
            </template>
          </cv-accordion-item>
        </cv-accordion>
        <h4 class="start-locally__option-title">
          Terminal
        </h4>
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

type ChoicesGroup = {
  title: string,
  id: string,
  options: Array<string>
}

type InstallChoices = Array<ChoicesGroup>

@Component
export default class StartLocally extends Vue {
  OPERATING_SYSTEMS = {
    linux: 'Linux',
    mac: 'Mac',
    windows: 'Windows'
  }

  QISKIT_INSTALL = {
    stable: 'Stable (recommended)',
    master: 'Unstable'
  }

  installChoices: InstallChoices = [
    {
      title: 'Qiskit Install',
      id: 'qiskit-install',
      options: Object.values(this.QISKIT_INSTALL)
    },
    {
      title: 'Operating System',
      id: 'os',
      options: Object.values(this.OPERATING_SYSTEMS)
    }
  ]

  selectedOptions = {
    'qiskit-install': this.QISKIT_INSTALL.stable,
    os: this.OPERATING_SYSTEMS.mac
  }

  segmentLabel = 'Qiskit Install'

  codeToInstallStableOnLinux = 'pip install -U pip && pip install qiskit'
  codeToInstallStableOnMac = 'pip install qiskit'
  codeToInstallStableOnWindows = 'pip install qiskit'

  codeToInstallMasterOnLinux = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'
  codeToInstallMasterOnMac = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'
  codeToInstallMasterOnWindows = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'

  prerequisites = {
    [this.QISKIT_INSTALL.stable]: {
      [this.OPERATING_SYSTEMS.linux]: null,
      [this.OPERATING_SYSTEMS.mac]: null,
      [this.OPERATING_SYSTEMS.windows]: null
    },
    [this.QISKIT_INSTALL.master]: {
      [this.OPERATING_SYSTEMS.linux]: 'PrerequisitesForLinux',
      [this.OPERATING_SYSTEMS.mac]: 'PrerequisitesForMac',
      [this.OPERATING_SYSTEMS.windows]: 'PrerequisitesForWindows'
    }
  }

  codeToInstall = {
    [this.QISKIT_INSTALL.stable]: {
      [this.OPERATING_SYSTEMS.linux]: this.codeToInstallStableOnLinux,
      [this.OPERATING_SYSTEMS.mac]: this.codeToInstallStableOnMac,
      [this.OPERATING_SYSTEMS.windows]: this.codeToInstallStableOnWindows
    },
    [this.QISKIT_INSTALL.master]: {
      [this.OPERATING_SYSTEMS.linux]: this.codeToInstallMasterOnLinux,
      [this.OPERATING_SYSTEMS.mac]: this.codeToInstallMasterOnMac,
      [this.OPERATING_SYSTEMS.windows]: this.codeToInstallMasterOnWindows
    }
  }

  get selectedOs () : string {
    return this.selectedOptions.os
  }

  getPrerequisitesToInstallQiskit () : string | null {
    const { 'qiskit-install': qiskitInstall, os } = this.selectedOptions

    return this.prerequisites[qiskitInstall][os]
  }

  getCodeToInstallQiskit () : string {
    const { 'qiskit-install': qiskitInstall, os } = this.selectedOptions

    return this.codeToInstall[qiskitInstall][os]
  }

  isActive (choicesGroup: ChoicesGroup, option: string) : boolean {
    return (this.selectedOptions as any)[choicesGroup.id] === option
  }

  selectOption (choicesGroup: ChoicesGroup, selectedOption: string) {
    (this.selectedOptions as any)[choicesGroup.id] = selectedOption
  }
}
</script>

<style lang="scss" scoped>
@import '~carbon-components/scss/globals/scss/typography';

.bx--btn-set .bx--btn:not(:focus) {
  box-shadow: none;
}

.start-locally {
  @include mq($until: medium) {
    margin-bottom: $layout-01;
  }

  &__options {
    display: flex;
    flex-direction: column;
  }

  &__options-group {
    display: grid;
    column-gap: $spacing-07;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));

    @include mq($until: large) {
      column-gap: $spacing-05;
    }
  }

  &__option-title {
    @include type-style('body-long-01');
    color: $text-color-light;
    margin-bottom: $spacing-03;
  }

  &__option {
    @include type-style('body-long-01');
    background-color: $background-color-lighter;
    max-width: 100%;
    color: $text-color-light;
    padding-left: $spacing-07;
    margin-bottom: $spacing-07;

    @include mq($until: large) {
      padding-left: $spacing-05;
      margin-bottom: $spacing-05;
    }

    &_active {
      border-color: $border-active-color;
      border-width: 2px;
      color: $text-active-color;
    }
  }
}
</style>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.start-locally {
  /**
   * TODO: Review if there is some mechanism, inside the Carbon Themes
   * framework, for applying a different theme to an specific component (#703).
   *
   * If there is not, we need some alternative way of overriding component
   * internal CSS. The following approach takes advantage of BEM methodology
   * and CSS specificity to override the internal CSS.
   */
  &__prerequisites-section {
    margin-bottom: $spacing-05;

    & .bx--accordion__item {
      border-bottom: none;
      border-top-color: $gray-20;
    }

    & .bx--accordion__heading {
      &:hover::before {
        // To match default light theme UI hover, which is not among the Carbon
        // palette. 🤦
        background-color: #e5e5e5;
      }
    }

    & .bx--accordion__arrow {
      fill: currentColor;
    }
  }
}
</style>
