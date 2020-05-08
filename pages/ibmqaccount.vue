<template>
  <main class="element ibmq-account-element">
    <ElementPresentation
      class="element__presentation"
      :title="title"
      image="/images/qiskit-ibmqp-logo.svg"
      :description="description"
      sources="https://github.com/Qiskit/qiskit-ibmq-provider"
      segment-action="IBM Q Account: GitHub Repository"
    />
    <PageSection class="element__body" framed>
      <article class="element__copy">
        <h2 class="element__header">
          About
        </h2>
        <p class="element__paragraph">
          Your IBM Q Account is the doorway for accessing the full suite of
          cloud-based IBM Quantum systems and simulators. From job submission
          and tracking to viewing detailed quantum device properties, the IBM Quantum
          Account connects the proven Qiskit software framework to the most
          advanced quantum computing platforms on the planet.
          <AppLink
            class="element__link"
            v-bind="linkToAccessIBMQSystems"
          >
            {{ linkToAccessIBMQSystems.label }}
          </AppLink>
          to set up your Qiskit environment to send jobs to IBM Quantum systems.
        </p>
      </article>
      <template #extra>
        <article class="element__example">
          <h2 class="element__header">
            Example
          </h2>
          <SyntaxHighlight
            :label="title"
            :code="codeExample"
          />
        </article>
      </template>
    </PageSection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitElementPage from '~/components/logic/QiskitElementPage.vue'
import ElementPresentation from '~/components/elements/ElementPresentation.vue'
import PageSection from '~/components/ui/PageSection.vue'
import SyntaxHighlight from '~/components/ui/SyntaxHighlight.vue'
import Cta from '~/components/ui/Cta.vue'
import AppLink from '~/components/ui/AppLink.vue'

import { ACCESS_IBM_Q_SYSTEMS } from '~/constants/appLinks'

@Component({
  components: {
    Cta,
    ElementPresentation,
    PageSection,
    SyntaxHighlight,
    AppLink
  },
  head (this: QiskitElementPage) {
    return {
      title: `${this.title} | ${this.description}`,
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css' }
      ]
    }
  }
})
export default class extends QiskitElementPage {
  title = 'IBM Q Account'
  description = 'Access to world-leading quantum systems and simulators.'
  routeName = 'ibm-q-account'
  linkToAccessIBMQSystems = ACCESS_IBM_Q_SYSTEMS
  codeExample = `from qiskit import IBMQ
from qiskit.providers.ibmq import least_busy

# Load local account information
provider = IBMQ.load_account()

# Get the least busy real quantum system
backend = least_busy(provider.backends(simulator=False))
print(backend, backend.status().pending_jobs)`
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/element.scss';

.ibmq-account-element {
  --community-header__background-color: rgb(201, 222, 255);
  --community-header__text-color: $inverse-01;
}
</style>
