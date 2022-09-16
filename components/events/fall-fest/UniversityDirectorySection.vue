<template>
  <section class="university-directory-section">
    <article class="bx--row">
      <div class="bx--col-lg-4">
        <h2>University directory</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eligendi! Incidunt sequi vel asperiores quibusdam culpa debitis provident consequatur quam porro eligendi, accusantium ad omnis quae repudiandae necessitatibus reprehenderit nisi.</p>
      </div>
      <div class="bx--col-xlg-12 bx--col-lg-12">
        <div class="bx--row">
          <div
            v-for="{ image, title, date, cta, detail } in universities"
            :key="title"
            class="bx--col-xlg-8"
          >
            <AppCard
              :cta-label="cta.label"
              :to="cta.url"
              :segment="cta.segment"
              :image="image"
              :title="title"
              class="university-directory-section__card"
              :description-whole-size="true"
            >
              <p>
                {{ date }}
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                {{ detail }}
              </p>
            </AppCard>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { GeneralLink } from '~/constants/appLinks'

type University = {
  image: string,
  title: string,
  detail: string,
  date: string,
  cta: GeneralLink
}

@Component
export default class UniversityDirectorySection extends Vue {
  universities: University[] = [
    {
      title: 'Uttar Pradesh',
      image: '/images/events/fall-fest/image30.png',
      date: 'October 22, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'uttar-pradesh', location: 'fall-fest-page' }
      }
    },
    {
      title: 'The Higher National School of Computer Science',
      image: '/images/events/fall-fest/image27.png',
      date: 'October 21, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'the-higher-national-school-of-computer-science', location: 'fall-fest-page' }
      }
    },
    {
      title: 'RV PU College',
      image: '/images/events/fall-fest/image18.png',
      date: 'October 30, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'rv-pu-college', location: 'fall-fest-page' }
      }
    },
    {
      title: 'University of Victoria',
      image: '/images/events/fall-fest/image29.png',
      date: 'October 22, 2022',
      detail: 'Hybrid',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-of-victoria', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Universidad Simón Bolívar',
      image: '/images/events/fall-fest/image24.png',
      date: 'October 21, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'universidad-simón-bolívar', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Coimbatore Institute of Technology, India',
      image: '/images/events/fall-fest/image41.png',
      date: 'October 6, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'coimbatore-institute-of-Technology-india', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Quantum Fall Fest QColombia',
      image: '/images/events/fall-fest/image20.png',
      date: 'October 10, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'quantum-fall-fest-qcolombia', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Yale University',
      image: '/images/events/fall-fest/image31.png',
      date: 'October 3, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'yale-university', location: 'fall-fest-page' }
      }
    },
    {
      title: 'QickStart : A Qiskit Powered Intro to Quantum Computing',
      image: '/images/events/fall-fest/image12.png',
      date: 'October 3, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'qickStart-a-qiskit-powered-intro-to-quantum-computing', location: 'fall-fest-page' }
      }
    },
    {
      title: 'The University of Hong Kong',
      image: '/images/events/fall-fest/image26.png',
      date: 'October 25, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'the-university-of-hong-kong', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Purdue University',
      image: '/images/events/fall-fest/image13.png',
      date: 'September 23, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'purdue-university', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Qiskit Fall Fest Kolkata Chapter',
      image: '/images/events/fall-fest/image11.png',
      date: 'October 17, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'qiskit-fall-fest-kolkata-chapter', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Qiskit Fall Fest Mexico-IPN',
      image: '/images/events/fall-fest/image22.png',
      date: 'October 17, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: '', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Case Western Reserve University',
      image: '/images/events/fall-fest/image40.png',
      date: 'October 10, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'qiskit-fall-fest-mexico-ipn', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Fundamentals of Quantum Computing (Thapar University)',
      image: '/images/events/fall-fest/image7.png',
      date: 'October 15, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'thapar-university', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Penn State',
      image: '/images/events/fall-fest/image14.png',
      date: 'October 22, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'penn-state', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Quest - Qiskit Fall Fest, BITS Goa Chapter',
      image: '/images/events/fall-fest/image21.png',
      date: 'November 25, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'quest-qiskit-fall-fest-bits-goa-chapter', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Indian Institute of Technology Roorkee',
      image: '/images/events/fall-fest/image16.png',
      date: 'October 21, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'indian-institute-of-technology-roorkee', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Escuela de Computación Cuántica',
      image: '/images/events/fall-fest/image8.png',
      date: 'October 17, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'escuela-de-computación-cuántica', location: 'fall-fest-page' }
      }
    },
    {
      title: 'University of Santiago de Compostela, Spain',
      image: '/images/events/fall-fest/image23.png',
      date: 'October 14, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-of-santiago-de-compostela-spain', location: 'fall-fest-page' }
      }
    },
    {
      title: 'University of Texas at Austin',
      image: '/images/events/fall-fest/image28.png',
      date: 'October 10, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'university-of-texas-at-austin', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Izmir Institute of Technology',
      image: '/images/events/fall-fest/image15.png',
      date: 'October 28, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'izmir-institute-of-technology', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Start innovation hub',
      image: '/images/events/fall-fest/image17.png',
      date: 'October 8, 2022',
      detail: 'In Person',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'start-innovation-hub', location: 'fall-fest-page' }
      }
    },
    {
      title: 'Quantastica, Fantastica',
      image: '/images/events/fall-fest/image19.png',
      date: 'October 22, 2022',
      detail: 'Online',
      cta: {
        label: 'Learn more here',
        url: 'https://coding-club.example-university.edu',
        segment: { cta: 'quantastica-fantastica', location: 'fall-fest-page' }
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.university-directory-section {
  &__subtitle {
    margin-bottom: $spacing-05;
  }

  &__section {
    margin-bottom: $spacing-07;
  }

  &__card {
    margin-bottom: $spacing-06;

    @include mq($until: large) {
      margin-bottom: $spacing-05;
    }

    @include mq($from: x-large) {
      height: calc(100% - #{$spacing-06});
    }
  }
}
</style>
