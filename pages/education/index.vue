<template>
  <main>
    <header>
      <GatesHeader
        id="presentation"
        main-title="Qiskit for Educators"
        extra-position="start"
      >
        <p>Qiskit makes it easy to start learning quantum software to run on real quantum hardware. Teach your students with the same tools used by scientists and engineers worldwide to accelerate research towards practical applications for quantum computing.</p>
        <template #extra>
          <iframe
            class="header-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NHTDqdGfzcc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </template>
      </GatesHeader>
    </header>
    <div class="inner-navigation-scope">
      <InnerNavigation
        class="inner-navigation"
        :sections="[
          { anchor: 'video-series', label: 'Coding With Qiskit Series' },
          { anchor: 'textbook', label: 'Qiskit Textbook' },
          { anchor: 'host-an-event', label: 'Host Qiskit Events' }
        ]"
      />
      <PageSection id="video-series">
        <h2>Coding With Qiskit Video Series</h2>
        <p>
          Accompany Abraham Asfaw through a series of video tutorials
          in our YouTube Channel explaining quantum computing through
          the use of Qiskit.
        </p>
        <ul class="actions">
          <li>
            <Cta to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
              View all episodes
            </Cta>
          </li>
        </ul>
        <template #extra>
          <iframe
            class="episode"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RrUTwq5jKM4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </template>
      </PageSection>
      <PageSection id="textbook" extra-position="start">
        <h2>Qiskit Textbook</h2>
        <p>
          Leverage the power of quantum computing using Qiskit with this
          university course supplement covering introductory materials,
          advanced algorithms and hardware. Include problem sets and
          exercises for students.
        </p>
        <ul class="actions">
          <li>
            <Cta to="/textbook/" is-static>
              Discover more
            </Cta>
          </li>
        </ul>

        <template #extra>
          <TextbookPreview>
            <TextbookTOC />
          </TextbookPreview>
        </template>
      </PageSection>
      <PageSection id="host-an-event">
        <h2>Host Qiskit Events</h2>
        <p>
          Bring Qiskit experts to your campus for guest lectures, hackathons, and other events. Guest lecture topics can range from quantum basics to advanced algorithms.
        </p>
        <ul class="actions">
          <li>
            <Cta to="mailto:hello@qiskit.camp">
              Request an event
            </Cta>
          </li>
        </ul>
      </PageSection>
    </div>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import InnerNavigation from '~/components/menus/InnerNavigation.vue'
import GatesHeader from '~/components/headers/GatesHeader.vue'
import PageSection from '~/components/sections/PageSection.vue'
import TextbookPreview from '~/components/education/TextbookPreview.vue'
import MdContent from '~/components/MdContent.vue'
import Cta from '~/components/ctas/Cta.vue'
// @ts-ignore: Cannot find module
import TextbookTOC from '~/content/education/textbook-toc.md'

@Component({
  components: {
    InnerNavigation,
    GatesHeader,
    PageSection,
    TextbookPreview,
    MdContent,
    Cta,
    TextbookTOC: TextbookTOC.vue.component
  },

  head () {
    return {
      title: 'Qiskit for Educators'
    }
  }
})
export default class extends QiskitPage {
  routeName: string = 'education'
}
</script>

<style lang="scss">
main {
  background-color: var(--primary-color-darkmost);
  background-image: linear-gradient(150deg, var(--primary-color-darkmost) 15%,var(--primary-color-dark) 70%,var(--primary-color) 94%);
}

.inner-navigation {
  position: sticky;
  top: 0;
  z-index: 100;
}

.actions {
  margin-top: 1rem;
  list-style: none;
  display: flex;
  flex-direction: row;
}

#presentation {
  .header-video {
    width: 100%;
    max-width: 560px;
    height: 315px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),
                0 8px 16px -8px rgba(0,0,0,.5),
                0 -6px 16px -6px rgba(0,0,0,.025);
  }

  .intro {
    @include mq($until: desktop) {
      display: block;
    }
  }

  .copy-container {
    @include mq($until: desktop) {
      max-width: 100%;
    }
  }

  .header-video {
    @include mq($until: desktop) {
      display: none;
    }
  }
}

#video-series {
  color: var(--body-color-light);

  .page-section {
    @include framed();
  }

  .episode {
    margin-left: 2rem;
    transform: perspective(1200px) rotateY(-20deg) rotateX(5deg);
    border-radius: 10px;
    box-shadow: 25px 35px 30px 0 #000f;
  }
}

#textbook {
  color: var(--body-color-dark);
  background-color: white;
  padding-bottom: 4rem;

  .page-section {
    @include framed();
  }

  .copy-container {
    position: sticky;
    top: 120px;
    align-self: start;
    width: 50%;
    background-color: white;
    padding: 0;
    padding-left: 4rem;

    @include mq($until: desktop) {
      width: 100%;
      padding-left: 0;
    }
  }

  .extra-container {
    width: 60%;
    margin-top: -6rem;
    margin-left: -10%;
  }

  @include mq($until: desktop) {
    min-height: auto;
  }
}

#host-an-event {
  color: var(--body-color-light);
  background-image:
    linear-gradient(#000000a0 0%, #000000a0 100%),
    url('/images/education/host-an-event-bg.jpg');
  background-position: 0, top;
  background-repeat: no-repeat;
  background-size: cover;

  .page-section {
    @include framed();
  }
}

@media (max-height: 600px) {
  #textbook {
    .copy-container {
      top: 1rem;
    }
  }
}
</style>
