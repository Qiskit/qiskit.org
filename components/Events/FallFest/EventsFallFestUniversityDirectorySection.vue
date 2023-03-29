<template>
  <section class="university-directory-section">
    <article class="cds--row">
      <div class="cds--col-lg-4">
        <h2>University directory</h2>
        <p>
          See your local community listed here? Click through and join the
          Qiskit Fall Fest in your town! Don't see your area represented? Dive
          into the Qiskit Community and learn how you can host your own event
          next year. Check out the Qiskit Advocate program, or apply to an IBM
          Quantum internship!
        </p>
      </div>
      <div class="cds--col-xlg-12 cds--col-lg-12">
        <div class="cds--row">
          <div
            v-for="{ image, title, startDate, cta, detail } in universities"
            :key="title"
            class="cds--col-xlg-8"
          >
            <UiCard
              :cta-label="cta.label"
              :to="cta.url"
              :segment="cta.segment"
              :image="image"
              :title="title"
              class="university-directory-section__card"
              :description-whole-size="true"
            >
              <p>
                {{ startDate }}
                <!-- eslint-disable-next-line vue/html-self-closing -->
                <br />
                {{ detail }}
              </p>
            </UiCard>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { GeneralLink } from "~/constants/appLinks";

type University = {
  image: string;
  title: string;
  detail: string;
  startDate: string;
  cta: GeneralLink;
};

const universities: University[] = [
  {
    title: "Qiskit Fall Fest Algiers",
    image: "/images/events/fall-fest/algiers.png",
    startDate: "October 21, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://qiskit-fall-fest-algiers.wtmalgiers.org/",
      segment: {
        cta: "the-higher-national-school-of-computer-science",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "RV PU College",
    image: "/images/events/fall-fest/bengalaru.png",
    startDate: "November 6, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/Bellstate05/QiskitFallFest_RVPU",
      segment: { cta: "rv-pu-college", location: "fall-fest-page" },
    },
  },
  {
    title: "University of Victoria",
    image: "/images/events/fall-fest/british_columbia.png",
    startDate: "November 26, 2022",
    detail: "Hybrid",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "university-of-victoria", location: "fall-fest-page" },
    },
  },
  {
    title: "AUC (American University in Cairo)",
    image: "/images/events/fall-fest/cairo.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/hamzakamel1/Qiskit-FallFest-AUC-Egypt-2022",
      segment: {
        cta: "american-university-in-cairo",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "UCLA",
    image: "/images/events/fall-fest/california.png",
    startDate: "October 31, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/amandajyounes/UCLA_fallfest_2022",
      segment: {
        cta: "university-california-los-angeles",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Universidad Simón Bolívar",
    image: "/images/events/fall-fest/caracas.png",
    startDate: "October 21, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://www.cofalumniusb.org/qiskit-fall",
      segment: { cta: "universidad-simón-bolívar", location: "fall-fest-page" },
    },
  },
  {
    title: "Coimbatore Institute of Technology, India",
    image: "/images/events/fall-fest/coimbatore.png",
    startDate: "October 6, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/CIT-QUANTUM-HACKATHON/CIT-QUANTUM-HACKATHON-2022",
      segment: {
        cta: "coimbatore-institute-of-Technology-india",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Quantum Fall Fest QColombia",
    image: "/images/events/fall-fest/colombia.png",
    startDate: "October 10, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://github.com/QColombia/Quantum-Fall-Fest-2022",
      segment: {
        cta: "quantum-fall-fest-qcolombia",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Yale University",
    image: "/images/events/fall-fest/connecticut.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://yaleqc.com/categories/events/",
      segment: { cta: "yale-university", location: "fall-fest-page" },
    },
  },
  {
    title: "QickStart : A Qiskit Powered Intro to Quantum Computing",
    image: "/images/events/fall-fest/delhi.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/TheGupta2012/NSUT-Qiskit-Fall-Fest",
      segment: {
        cta: "qickstart-a-qiskit-powered-intro-to-quantum-computing",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "The University of Hong Kong",
    image: "/images/events/fall-fest/hong_kong.png",
    startDate: "October 25, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: {
        cta: "the-university-of-hong-kong",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Purdue University",
    image: "/images/events/fall-fest/indiana.png",
    startDate: "October 3, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/purduequaic/qiskit-fall-fest-22",
      segment: { cta: "purdue-university", location: "fall-fest-page" },
    },
  },
  {
    title: "Qiskit Fall Fest Kolkata Chapter",
    image: "/images/events/fall-fest/kolkata.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://ritajitmajumdar.github.io/",
      segment: {
        cta: "qiskit-fall-fest-kolkata-chapter",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Qiskit Fall Fest Mexico-IPN",
    image: "/images/events/fall-fest/mexico_city.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://proyectosrym.cic.ipn.mx/qcoloquio/",
      segment: {
        cta: "qiskit-fall-fest-mexico-ipn",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Maryland",
    image: "/images/events/fall-fest/maryland.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://umduqa.github.io/FallFest.html",
      segment: { cta: "university-of-maryland", location: "fall-fest-page" },
    },
  },
  {
    title: "Case Western Reserve University",
    image: "/images/events/fall-fest/ohio.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/Case-Quantum-Computing-Club/CQC-qiskit-fall-fest-22",
      segment: {
        cta: "case-western-reserve-university",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Chicago",
    image: "/images/events/fall-fest/illinois.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://www.facebook.com/groups/ucquantum",
      segment: { cta: "university-of-chicago", location: "fall-fest-page" },
    },
  },
  {
    title: "Fundamentals of Quantum Computing (Thapar University)",
    image: "/images/events/fall-fest/patiala.png",
    startDate: "October 15, 2022",
    detail: "Hybrid",
    cta: {
      label: "Learn more here",
      url: "https://github.com/developer-student-club-thapar/Qiskit-Fall-Fest-2022",
      segment: { cta: "thapar-university", location: "fall-fest-page" },
    },
  },
  {
    title: "Penn State",
    image: "/images/events/fall-fest/pennsylvania.png",
    startDate: "November 5, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "penn-state", location: "fall-fest-page" },
    },
  },
  {
    title: "Quest - Qiskit Fall Fest, BITS Goa Chapter",
    image: "/images/events/fall-fest/goa.png",
    startDate: "November 25, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/qBITS-github/Quest-Qiskit-Fall-Fest",
      segment: {
        cta: "quest-qiskit-fall-fest-bits-goa-chapter",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Qiskit Fall Fest Morocco",
    image: "/images/events/fall-fest/morocco.png",
    startDate: "October 27, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://sites.google.com/view/qiskit-fall-fest-morocco/home",
      segment: { cta: "qiskit-fall-fest-morocco", location: "fall-fest-page" },
    },
  },
  {
    title: "Indian Institute of Technology Roorkee",
    image: "/images/events/fall-fest/roorkee.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/qcgiitr/iitr-fall-fest-22",
      segment: {
        cta: "indian-institute-of-technology-roorkee",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Escuela de Computación Cuántica",
    image: "/images/events/fall-fest/lima.png",
    startDate: "October 17, 2022",
    detail: "Online",
    cta: {
      label: "Learn more here",
      url: "https://pythonclubforphysicists.notion.site/pythonclubforphysicists/Primera-Escuela-de-Computaci-n-Cu-ntica-af219f239f90418b900cba004e27c789",
      segment: {
        cta: "escuela-de-computación-cuántica",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Princeton University",
    image: "/images/events/fall-fest/new_jersey.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "princeton-university", location: "fall-fest-page" },
    },
  },
  {
    title: "University of Santiago de Compostela, Spain",
    image: "/images/events/fall-fest/santiago.png",
    startDate: "October 21, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/wyqian1027/Qiskit-Fall-Fest-USC-2022",
      segment: {
        cta: "university-of-santiago-de-compostela-spain",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "University of Texas at Austin",
    image: "/images/events/fall-fest/texas.png",
    startDate: "October 10, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://github.com/UT-Austin-Quantum-Collective/Qiskit-Fall-Fest-2022/blob/main/README.md",
      segment: {
        cta: "university-of-texas-at-austin",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Izmir Institute of Technology",
    image: "/images/events/fall-fest/urla.png",
    startDate: "October 28, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://qisk.it/fallfesthype",
      segment: {
        cta: "izmir-institute-of-technology",
        location: "fall-fest-page",
      },
    },
  },
  {
    title: "Start Innovation hub",
    image: "/images/events/fall-fest/uyo.png",
    startDate: "October 15, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "https://twitter.com/Q_affinity",
      segment: { cta: "start-innovation-hub", location: "fall-fest-page" },
    },
  },
  {
    title: "Quantum Fall Fest TU Wien",
    image: "/images/events/fall-fest/vienna.png",
    startDate: "November 19, 2022",
    detail: "In Person",
    cta: {
      label: "Learn more here",
      url: "",
      segment: { cta: "quantum-fall-fest-tu-wien", location: "fall-fest-page" },
    },
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.university-directory-section {
  &__subtitle {
    margin-bottom: carbon.$spacing-05;
  }

  &__section {
    margin-bottom: carbon.$spacing-07;
  }

  &__card {
    margin-bottom: carbon.$spacing-06;

    @include carbon.breakpoint-down(lg) {
      margin-bottom: carbon.$spacing-05;
    }

    @include carbon.breakpoint-up(xlg) {
      height: calc(100% - #{carbon.$spacing-06});
    }
  }
}
</style>
