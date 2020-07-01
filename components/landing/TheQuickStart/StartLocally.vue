<template>
  <section class="start-locally">
    <h3 class="start-locally__title">
      Start locally
    </h3>
    <p class="start-locally__description">
      To install Qiskit locally you will need
      <AppLink
        class="start-locally__link"
        url="https://www.python.org/downloads/"
      >
        Python 3.5+
      </AppLink>.
      Although it isn't required, we recommend using
      <AppLink
        class="start-locally__link"
        url="https://www.anaconda.com/products/individual"
      >
        virtual environments with Anaconda
      </AppLink>
      to cleanly separate Qiskit from other applications and improve your experience.
    </p>
    <div class="start-locally__options">
      <div
        v-for="choicesGroup in installChoices"
        :key="choicesGroup.id"
      >
        <h4 class="start-locally__option-title">
          {{ choicesGroup.title }}
        </h4>
        <cv-button-set :class="`start-locally__options-group`">
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
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'
import AppLink from '~/components/ui/AppLink.vue'

type ChoicesGroup = {
  title: string,
  id: string,
  options: Array<string>
}

type InstallChoices = Array<ChoicesGroup>

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
  OPERATING_SYSTEMS = {
    linux: 'Linux',
    mac: 'Mac',
    windows: 'Windows'
  }

  QISKIT_INSTALL = {
    stable: 'Stable (Recommended)',
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

  codeToInstallStableOnLinux = 'pip install -U pip\npip install qiskit'
  codeToInstallStableOnMac = 'pip install qiskit'
  codeToInstallStableOnWindows = 'pip install qiskit'

  codeToInstallMasterOnLinux = `# Pre-Requisites
# Install compiler requirements. Building Aer requires a C++ compiler and development headers. If you’re using Fedora or an equivalent Linux distribution, install using: dnf install @development-tools
# For Ubuntu/Debian install it using: apt-get install build-essential
# Install OpenBLAS development headers. If you’re using Fedora or an equivalent Linux distribution, install using: dnf install openblas-devel
# For Ubuntu/Debian install it using: apt-get install libopenblas-dev

pip install
git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider`

  codeToInstallMasterOnMac = `# Install the Clang compiler by installing XCode. Check if you have XCode and Clang installed by opening a terminal window and entering the following.
clang --version

# Install XCode and Clang by using the following command:
xcode-select --install

# To use the Clang compiler on macOS, you need to install an extra library for supporting OpenMP. You can use brew to install this and other dependencies.
brew install libomp

# Then install a BLAS implementation; OpenBLAS is the default choice.
brew install openblas

pip install
git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider`

  codeToInstallMasterOnWindows = `# On Windows, it is easiest to install the Visual C++ compiler from the Build Tools for Visual Studio 2017. You can instead install Visual Studio version 2015 or 2017, making sure to select the options for installing the C++ compiler.
# On Windows you need to use Anaconda3 or Miniconda3 to install all the dependencies.

pip install
git+https://github.com/Qiskit/qiskit-terra git+https://github.com/Qiskit/qiskit-aer git+https://github.com/Qiskit/qiskit-ignis git+https://github.com/Qiskit/qiskit-aqua git+https://github.com/Qiskit/qiskit-ibmq-provider`

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

  getCodeToInstallQiskit () : string {
    const { 'qiskit-install': qiskitInstall, os } = this.selectedOptions

    return this.codeToInstall[qiskitInstall][os]
  }

  isActive (choicesGroup: ChoicesGroup, option: string) : boolean {
    return this.selectedOptions[choicesGroup.id] === option
  }

  selectOption (choicesGroup: ChoicesGroup, selectedOption: string) {
    this.selectedOptions[choicesGroup.id] = selectedOption
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
