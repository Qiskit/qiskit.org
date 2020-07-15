<template>
  <main class="element landing-page">
    <ElementPresentation
      class="element__presentation"
      title="Welcome to Quantum"
      logo="/images/qiskit-logo.svg"
      description="Qiskit is an open-source quantum computing software development framework for leveraging today's quantum processors in research, education, and business."
      to="https://qiskit.org/documentation/install.html"
      segment-action="Get Started"
    />
    <PageSection class="landing-page__horizontal-section" framed>
      <div class="landing-page__multi-column-layout">
        <article class="landing-page__section">
          <h2 class="element__header">
            Qiskit on YouTube
          </h2>
          <p class="element__paragraph">
            Would you like to learn how to code a quantum computer? Take a look
            at the Coding with Qiskit Video Series, where Abraham Asfaw explains
            everything you need to know. Starting with installing Qiskit, to
            investigating the latest algorithms and research topics.
          </p>
          <AppCta v-bind="youtubeQiskitCtaLink">
            {{ youtubeQiskitCtaLink.label }}
          </AppCta>
        </article>
        <article class="landing-page__section">
          <h2 class="element__header">
            Virtual Event Guide!
          </h2>
          <p class="element__paragraph">
            Host your own virtual event using this guide curated by the
            community! Use everything from hackathon projects to sample agendas
            to make your next event awesome.
          </p>
          <AppCta v-bind="virtualEventGuideCtaLink" is-static>
            {{ virtualEventGuideCtaLink.label }}
          </AppCta>
        </article>
      </div>
    </PageSection>
    <PageSection class="landing-page__horizontal-section" framed>
      <div class="landing-page__multi-column-layout">
        <article
          class="landing-page__section landing-page__section_flex_3"
        >
          <h2 class="element__header">
            IBM Quantum Experience
          </h2>
          <p class="element__paragraph">
            New to quantum computing? Try out the IBM Quantum Experience to get
            started with Qiskit in the cloud. No installation required and free
            hosted tutorials. Work is saved in the cloud and automatically updated
            with every Qiskit release.
          </p>
          <AppCta v-bind="introQiskitNotebooksCtaLink">
            {{ introQiskitNotebooksCtaLink.label }}
          </AppCta>
        </article>
        <aside
          class="landing-page__section landing-page__section_flex_2"
        >
          <img
            class="landing-page__quantum-experience-image"
            src="images/qiskit-notebooks.jpg"
            alt="Screenshot of the IBM Quantum Experience Qiskit notebooks"
          >
        </aside>
      </div>
    </PageSection>
    <PageSection class="landing-page__horizontal-section" framed>
      <div class="landing-page__multi-column-layout">
        <article class="landing-page__section landing-page__section_flex_3">
          <h2 class="element__header">
            Where to find us
          </h2>
          <p class="element__paragraph">
            Through connecting, contributing and collaborating, our diverse community of Qiskitters propels Qiskit to new forefronts and fields. In our commitment to open this quantum computing community to people of all backgrounds, we span across several platforms. Find us today to start connecting and contributing!
          </p>
        </article>
        <aside class="landing-page__section landing-page__section_flex_2">
          <ul class="landing-page__social-network-list">
            <li
              v-for="socialNetworkLink in socialNetworkLinks"
              :key="socialNetworkLink.name"
              class="landing-page__social-network"
            >
              <AppLink
                class="landing-page__social-network-link"
                v-bind="socialNetworkLink"
              >
                <svg
                  class="landing-page__social-network-icon"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  :aria-labelledby="`${socialNetworkLink.name.toLowerCase().replace(' ', '-')}-icon`"
                  role="img"
                >
                  <title :id="`${socialNetworkLink.name.toLowerCase().replace(' ', '-')}-icon`">{{ socialNetworkLink.name }} icon</title>
                  <path :d="socialNetworkLink.iconPath" />
                  <path v-if="socialNetworkLink.iconPathSecondPart" :d="socialNetworkLink.iconPathSecondPart" />
                </svg>
                <span class="landing-page__social-network-name">{{ socialNetworkLink.name }}</span>
              </AppLink>
            </li>
          </ul>
        </aside>
      </div>
    </PageSection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/logic/QiskitPage.vue'
import ElementPresentation from '~/components/elements/ElementPresentation.vue'
import PageSection from '~/components/ui/PageSection.vue'
import AppCta from '~/components/ui/AppCta.vue'
import AppLink from '~/components/ui/AppLink.vue'

import {
  SOCIAL_MEDIA_COMMUNITY,
  YOUTUBE_QISKIT_CTA,
  VIRTUAL_EVENT_GUIDE_CTA,
  INTRO_QISKIT_NOTEBOOKS_CTA
} from '~/constants/appLinks'

@Component({
  components: {
    AppCta,
    ElementPresentation,
    PageSection,
    AppLink
  },
  head () {
    return { title: 'Qiskit' }
  }
})
export default class extends QiskitPage {
  routeName = 'qiskit-landing-page'
  socialNetworkLinks = SOCIAL_MEDIA_COMMUNITY
  youtubeQiskitCtaLink = YOUTUBE_QISKIT_CTA
  virtualEventGuideCtaLink = VIRTUAL_EVENT_GUIDE_CTA
  introQiskitNotebooksCtaLink = INTRO_QISKIT_NOTEBOOKS_CTA
}
</script>

<style lang="scss">
@import '~/assets/scss/element.scss';
@import '~carbon-components/scss/globals/scss/typography';

.landing-page {
  &__horizontal-section {
    background-color: $inverse-02;
  }

  &__horizontal-section:nth-child(2n+1) {
    background-color: $purple-40;
  }

  &__multi-column-layout {
    display: flex;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__section {
    flex: 1;

    @include mq($until: medium) {
      margin-top: $layout-03;
    }

    &:first-child {
      margin-right: $layout-03;

      @include mq($until: medium) {
        margin-top: -$layout-03;
        margin-right: 0;
      }
    }

    &_flex_2 {
      flex: 2;
    }

    &_flex_3 {
      flex: 3;
    }
  }

  &__quantum-experience-image {
    width: 24rem;

    @include mq($until: medium) {
      width: 100%;
    }
  }

  &__social-network-list {
    list-style: none;
    padding: 0;
    margin: -$layout-01;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @include mq($until: medium) {
      flex-direction: column;
    }
  }

  &__social-network {
    width: 50%;
    display: inline-flex;
    padding: $spacing-04;
  }

  &__social-network-name {
    flex: 1;
    color: $inverse-01;
    margin-left: $spacing-03;
  }

  &__social-network-link {
    @include type-style('productive-heading-02');
    text-decoration: none;
    display: flex;
    align-items: center;

    &:hover {
      color: $inverse-01;
      text-decoration: underline;
    }
  }
}
</style>
