<template>
  <section class="start-locally">
    <h3>Start locally</h3>
    <p class="start-locally__introduction">
      To install Qiskit locally, you will need
      <AppLink
        url="https://www.python.org/downloads/"
      >
        Python 3.7+.
      </AppLink>
      Although it is not required, we recommend using a
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
        <h4>
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
          v-if="prerequisitesToInstallQiskit ()"
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
        <h4>
          Terminal
        </h4>
        <SyntaxHighlight
          :label="segmentLabel"
          :code="codeToInstallQiskit()"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ChoicesGroup = {
  title: string,
  id: string,
  options: Array<string>
}

type InstallChoices = Array<ChoicesGroup>

const OPERATING_SYSTEMS = {
  linux: 'Linux',
  mac: 'Mac',
  windows: 'Windows'
}

const QISKIT_INSTALL = {
  stable: 'Stable (recommended)',
  master: 'Unstable'
}

const installChoices: InstallChoices = [
  {
    title: 'Qiskit Install',
    id: 'qiskit-install',
    options: Object.values(QISKIT_INSTALL)
  },
  {
    title: 'Operating System',
    id: 'os',
    options: Object.values(OPERATING_SYSTEMS)
  }
]

const selectedOptions = reactive({
  'qiskit-install': QISKIT_INSTALL.stable,
  os: OPERATING_SYSTEMS.mac
})

const segmentLabel = 'Qiskit Install'

const codeToInstallStableOnLinux = 'pip install -U pip && pip install qiskit'
const codeToInstallStableOnMac = 'pip install qiskit'
const codeToInstallStableOnWindows = 'pip install qiskit'

const codeToInstallMasterOnLinux = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'
const codeToInstallMasterOnMac = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'
const codeToInstallMasterOnWindows = 'pip install git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider'

const prerequisites = {
  [QISKIT_INSTALL.stable]: {
    [OPERATING_SYSTEMS.linux]: null,
    [OPERATING_SYSTEMS.mac]: null,
    [OPERATING_SYSTEMS.windows]: null
  },
  [QISKIT_INSTALL.master]: {
    [OPERATING_SYSTEMS.linux]: 'PrerequisitesForLinux',
    [OPERATING_SYSTEMS.mac]: 'PrerequisitesForMac',
    [OPERATING_SYSTEMS.windows]: 'PrerequisitesForWindows'
  }
}

const codeToInstall = {
  [QISKIT_INSTALL.stable]: {
    [OPERATING_SYSTEMS.linux]: codeToInstallStableOnLinux,
    [OPERATING_SYSTEMS.mac]: codeToInstallStableOnMac,
    [OPERATING_SYSTEMS.windows]: codeToInstallStableOnWindows
  },
  [QISKIT_INSTALL.master]: {
    [OPERATING_SYSTEMS.linux]: codeToInstallMasterOnLinux,
    [OPERATING_SYSTEMS.mac]: codeToInstallMasterOnMac,
    [OPERATING_SYSTEMS.windows]: codeToInstallMasterOnWindows
  }
}

const selectedOs = computed<string>(() => selectedOptions.os)

const prerequisitesToInstallQiskit = computed<string | null>(() => {
  const { 'qiskit-install': qiskitInstall, os } = selectedOptions

  return prerequisites[qiskitInstall][os]
})

const codeToInstallQiskit = computed<string>(() => {
  const { 'qiskit-install': qiskitInstall, os } = selectedOptions

  return codeToInstall[qiskitInstall][os]
})

const isActive = computed<boolean>((choicesGroup: ChoicesGroup, option: string) => {
  return (selectedOptions as any)[choicesGroup.id] === option
})

function selectOption (choicesGroup: ChoicesGroup, selectedOption: string) {
  (selectedOptions as any)[choicesGroup.id] = selectedOption
}
</script>

<style lang="scss" scoped>
.bx--btn-set .bx--btn:not(:focus) {
  box-shadow: none;
}

.start-locally {
  @include mq($until: medium) {
    margin-bottom: $spacing-09;
  }

  &__introduction {
    margin-bottom: $spacing-08;

    @include mq($from: large) {
      $grid-columns: math.div(9, 10); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
      padding-right: $spacing-05;
    }

    @include mq($from: x-large) {
      $grid-columns: math.div(7, 11); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }

    @include mq($from: max-size) {
      $grid-columns: math.div(6, 12); // Number of columns that the element will use at this breakpoint.

      max-width: 100% * $grid-columns;
    }
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

  &__option {
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
      border-top-color: $border-color;
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
