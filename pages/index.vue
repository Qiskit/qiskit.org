<template>
  <main class="element landing-page">
    <ElementPresentation
      class="element__presentation"
      title="Welcome to Quantum"
      image="/images/qiskit-logo.svg"
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
          <Cta :link="youtubeQiskitCtaLink" />
        </article>
        <article class="landing-page__section">
          <h2 class="element__header">
            Kids meet quantum!
          </h2>
          <p class="element__paragraph">
            This activity pack will entertain your kids with fun activities
            about quantum computing. Fun for all kids and parents!
          </p>
          <Cta :link="activitiesWithKidsCtaLink" is-static />
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
          <Cta :link="introQiskitNotebooksCtaLink" />
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
              class="landing-page__social-network">
              <AppLink
                class="landing-page__social-network-link"
                v-bind="socialNetworkLink"
              >
                <svg
                  class="landing-page__social-network-icon"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  :aria-labelledby="`${socialNetworkLink.name.toLowerCase().trim()}-icon`"
                  role="img"
                >
                  <title id="slack-icon">{{ socialNetworkLink.name }} icon</title>
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
import Cta from '~/components/ui/Cta.vue'
import AppLink from '~/components/ui/AppLink.vue'

import {
  SOCIAL_MEDIA_COMMUNITY,
  YOUTUBE_QISKIT_CTA,
  ACTIVITIES_WITH_KIDS_CTA,
  INTRO_QISKIT_NOTEBOOKS_CTA
} from '~/constants/appLinks'

@Component({
  components: {
    Cta,
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
  activitiesWithKidsCtaLink = ACTIVITIES_WITH_KIDS_CTA
  introQiskitNotebooksCtaLink = INTRO_QISKIT_NOTEBOOKS_CTA
}
</script>

<style lang="scss">
@import '~/assets/scss/element.scss';
@import '~carbon-components/scss/globals/scss/typography';

.landing-page {
  &__horizontal-section {
    background-color: $inverse-02;
    margin-bottom: -2rem;
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
      margin-top: 2rem;
    }

    &:first-child {
      margin-right: 2rem;

      @include mq($until: medium) {
        margin-top: -2rem;
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
    margin: -1rem;
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
    padding: 0.8rem;
  }

  &__social-network-name {
    flex: 1;
    color: $inverse-01;
    margin-left: 0.5rem;
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
