<template>
  <article class="cds--grid page-section qiskit-capabilities-section">
    <h2>What Can Qiskit Do</h2>
    <div class="qiskit-capabilities-section__container">
      <div class="qiskit-capabilities-section__capabilities">
        <div class="qiskit-capabilities-section__content">
          <LandingQiskitCapabilityCard
            v-for="item in capabilities"
            :id="item.title"
            :key="item.title"
            class="qiskit-capabilities-section__card scrollable"
            :title="item.title"
            :description="item.description"
            :thumbnail-resource="item.thumbnailResource"
            :link="item.link"
          />
        </div>
        <div class="qiskit-capabilities-section__scrolling-ui">
          <LandingQiskitCapabilitiesSectionCodeCell
            :active-blocks="
              capabilities.map((item, index) => isActiveSection(item, index))
            "
          />
        </div>
      </div>
    </div>
    <div class="qiskit-capabilities-section__ctas">
      <UiCta
        class="qiskit-capabilities-section__ctas__link"
        kind="ghost"
        :label="quantumLabCTA.label"
        :segment="quantumLabCTA.segment"
        :url="quantumLabCTA.url"
      />
      <bx-btn
        :title="copyCodeCTA.label"
        class="qiskit-capabilities-section__copy-button"
        @click="[copyToClipboard(), trackClickEvent(copyCodeCTA.segment)]"
      >
        <span class="qiskit-capabilities-section__copy-button__label">{{
          copyCodeCTA.label
        }}</span>
        <Copy16 class="qiskit-capabilities-section__copy-button__icon" />
      </bx-btn>
    </div>
  </article>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/button/index.js";
import Copy16 from "@carbon/icons-vue/lib/copy/16";
import { useScrollBetweenSections } from "~/composables/useScrollBetweenSections";
import type { CtaClickedEventProp } from "~/types/segment";

interface QiskitCapability {
  title: string;
  description: string;
  thumbnailResource: string;
  link?: {
    url: string;
    label: string;
    segment: CtaClickedEventProp;
  };
  segment?: CtaClickedEventProp;
}

const { trackClickEvent } = useSegment();

const { activeSection } = useScrollBetweenSections();

const capabilities: QiskitCapability[] = [
  {
    title: "Circuit Library",
    description:
      "Qiskit includes a comprehensive set of quantum gates and a variety of pre-built circuits so users at all levels can use Qiskit for research and application development.",
    thumbnailResource: "/images/landing-page/feature-circuit.png",
    link: {
      url: "https://qiskit.org/documentation/apidoc/circuit_library.html",
      label: "Learn more",
      segment: { cta: "circuit-library", location: "homepage-capabilities" },
    },
  },
  {
    title: "Transpiler",
    description:
      "The transpiler translates Qiskit code into an optimized circuit using a backend’s native gate set, allowing users to program for any quantum processor or processor architecture with minimal inputs.",
    thumbnailResource: "/images/landing-page/transpiler.png",
    link: {
      url: "https://qiskit.org/documentation/apidoc/transpiler.html",
      label: "Learn more",
      segment: { cta: "transpiler", location: "homepage-capabilities" },
    },
  },
  {
    title: "Run on real hardware",
    description:
      "Users can run and schedule jobs on real quantum processors, and employ Qiskit Runtime to orchestrate quantum programs on cloud-based CPUs, QPUs, and GPUs.",
    thumbnailResource: "/images/library/chip-01.png",
    link: {
      url: "https://qiskit.org/documentation/apidoc/ibmq_provider.html",
      label: "Learn more",
      segment: { cta: "run-on-hardware", location: "homepage-capabilities" },
    },
  },
  {
    title: "Try it yourself",
    description:
      "Ready to explore Qiskit’s capabilities for yourself? Copy the code to the right of this paragraph and try running it in your local Python environment. You can also click the link to the IBM Quantum Lab and test it there.",
    thumbnailResource: "/images/landing-page/med_02_1.png",
    segment: { cta: "try-it-yourself", location: "homepage-capabilities" },
  },
];

const quantumLabCTA = {
  url: "https://quantum-computing.ibm.com/lab/files/qiskit-textbook/getting-started/example.ipynb",
  label: "Open in Quantum Lab",
  segment: { cta: "open-in-quantum-lab", location: "homepage-capabilities" },
};

const copyCodeCTA = {
  url: "",
  label: "Copy code",
  segment: { cta: "copy-code", location: "homepage-capabilities" },
};

function isActiveSection(item: QiskitCapability, index: number): boolean {
  if (capabilities[capabilities.length - 1].title === activeSection.value) {
    return true;
  }

  return (
    item.title === activeSection.value ||
    (activeSection.value === "" && index === 0)
  );
}

function copyToClipboard(): void {
  const codeSnippet = document.querySelector(
    ".code-cell"
  ) as HTMLElement | null;

  if (codeSnippet !== null) {
    navigator.clipboard.writeText(codeSnippet.innerText);
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";
@use "~/assets/scss/helpers/index.scss" as qiskit;

$cta-max-width: 14rem;

.qiskit-capabilities-section {
  padding-bottom: carbon.$spacing-09;

  &__container {
    padding-top: carbon.$spacing-05;
    padding-bottom: carbon.$spacing-09;

    @include carbon.breakpoint-down(md) {
      padding-bottom: carbon.$spacing-05;
    }
  }

  &__capabilities {
    display: flex;
    align-items: flex-start;

    @include carbon.breakpoint-down(md) {
      flex-direction: column;
    }
  }

  &__card {
    margin-bottom: carbon.$spacing-07;

    &:last-child {
      margin-bottom: carbon.$spacing-13;

      @include carbon.breakpoint-down(md) {
        margin-bottom: carbon.$spacing-07;
      }
    }
  }

  &__scrolling-ui {
    position: sticky;
    top: carbon.$spacing-06;
    flex: 0 0 1;
    max-width: 100%;
    min-height: 20rem;

    @include carbon.breakpoint-up(xlg) {
      flex: 0 0 38rem;
    }

    @include carbon.breakpoint-between(lg, xlg) {
      flex: 0 0 34rem;
    }

    @include carbon.breakpoint-down(lg) {
      flex: 0 0 22rem;
    }

    @include carbon.breakpoint-down(md) {
      flex: initial;
      width: 100%;
      margin-bottom: carbon.$spacing-07;
    }
  }

  &__ctas {
    display: flex;
    justify-content: flex-end;

    @include carbon.breakpoint-down(md) {
      flex-direction: column-reverse;
    }

    &__link {
      width: 100%;
      max-width: $cta-max-width;
      padding: carbon.$spacing-05;
      margin-right: carbon.$spacing-05;
      justify-content: space-between;

      @include carbon.breakpoint-down(md) {
        max-width: initial;
      }
    }
  }

  &__copy-button {
    width: 100%;
    max-width: $cta-max-width;
    padding-right: carbon.$spacing-05;
    background-size: 200% 100%;
    background-position-x: 100%;
    background-image: linear-gradient(
      90deg,
      qiskit.$button-background-color-light 0%,
      qiskit.$button-background-color-light 50%,
      qiskit.$background-color-secondary 50%,
      qiskit.$background-color-secondary 100%
    );
    transition: background-position-x 0.3s ease-out;

    @include carbon.breakpoint-down(md) {
      max-width: initial;
    }

    &:hover,
    &:active {
      background-position-x: 0;
    }

    &__label {
      display: block;
      width: 100%;
    }
  }
}
</style>
