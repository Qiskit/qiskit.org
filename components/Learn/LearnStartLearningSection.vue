<template>
  <section class="start-learning-section">
    <h2>Start learning in the best way for you</h2>
    <div class="start-learning-section__tabs-wrapper">
      <bx-tabs class="start-learning-section__tabs" value="Learn">
        <bx-tab id="tab-learn" target="tab-learn-content" value="Learn">
          Learn
        </bx-tab>
        <bx-tab id="tab-teach" target="tab-teach-content" value="Teach">
          Teach
        </bx-tab>
      </bx-tabs>
    </div>
    <div
      id="tab-learn-content"
      aria-labelledby="tab-learn"
      role="tabpanel"
      hidden
    >
      <article
        v-for="{ title, description, courses } in learningSections"
        :key="title"
        class="cds--row"
      >
        <div class="cds--col-xlg-4 cds--col-lg-4">
          <h3 v-text="title" />
          <!-- eslint-disable vue/no-v-html -->
          <p v-html="description" />
          <!-- eslint-enable -->
        </div>
        <div class="cds--col-xlg-12 cds--col-lg-12">
          <div class="cds--row">
            <div
              v-for="{
                description: courseDescription,
                image,
                title: courseTitle,
                subtitle: courseSubtitle,
                cta,
              } in courses"
              :key="courseTitle"
              class="cds--col-xlg-8"
            >
              <UiCard
                :cta-label="cta.label"
                :to="cta.url"
                :segment="cta.segment"
                :image="image"
                image-contain
                :title="courseTitle"
                :subtitle="courseSubtitle"
                class="start-learning-section__card"
                :description-whole-size="true"
              >
                {{ courseDescription }}
              </UiCard>
            </div>
          </div>
        </div>
      </article>
    </div>
    <div
      id="tab-teach-content"
      aria-labelledby="tab-teach"
      role="tabpanel"
      hidden
    >
      <article
        v-for="{ title, syllabi } in teachingSections"
        :key="title"
        class="cds--row"
      >
        <div class="cds--col-lg-4">
          <h3>Community Syllabi</h3>
          <p>
            You can add any of these pre made curated syllabi to your classroom
            section to edit and share by clicking on the syllabus and choosing
            “Add to Profile”
          </p>
          <div class="start-learning-section__teach-section-cta">
            <h3>Want to create your own?</h3>
            <UiCta
              kind="ghost"
              label="Go to the syllabus tool"
              url="https://learn.qiskit.org/syllabus/create"
            />
          </div>
        </div>
        <div class="cds--col-lg-12">
          <div class="cds--row">
            <div
              v-for="{
                title: syllabusTitle,
                cta,
                instructor,
                university,
              } in syllabi"
              :key="syllabusTitle"
              class="cds--col-xlg-8"
            >
              <LearnSyllabusCard
                :url="cta.url"
                :segment="cta.segment"
                image-contain
                :title="syllabusTitle"
                class="start-learning-section__card"
                :description-whole-size="true"
              >
                <p>
                  <strong>Instructor:</strong> {{ instructor }} <br />
                  <strong>University:</strong> {{ university }} <br />
                </p>
              </LearnSyllabusCard>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import "@carbon/web-components/es/components/tabs/index.js";
import { GeneralLink } from "~/constants/appLinks";

type Course = {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  cta: GeneralLink;
};

type LearningSection = {
  title: string;
  description: string;
  courses: Course[];
};

type Syllabus = {
  title: string;
  instructor: string;
  university: string;
  cta: GeneralLink;
};

type TeachingSection = {
  title: string;
  syllabi: Syllabus[];
};

const learningSections: LearningSection[] = [
  {
    title: "Courses",
    description: `Quantum computing is a big topic and working out where
    to start can be difficult. In this interactive textbook, the content
    is organised into courses with clear prerequisites and end
    goals. If you’re looking for something specific, you can browse all
    content, and if you can’t find what you’re looking for you can ask the
    community on Slack.`,
    courses: [
      {
        image: "/images/learn/course/basics-quantum-information/atom.png",
        title: "Understanding quantum information and computation",
        subtitle: "Unit 1: Basics of quantum information",
        description:
          "This free course covers quantum information at a detailed mathematical level. Join John Watrous as you explore quantum information, quantum algorithms, and how to understand and mitigate noise.",
        cta: {
          label: "Go to this course",
          url: "/learn/course/basics-quantum-information",
          segment: { cta: "basics-quatum-information", location: "course" },
        },
      },
      {
        image: "/images/learn/introduction-course.png",
        title: "Introduction course",
        description: `Not sure where to start? This path is for you.
        This introduction is aimed at audiences from all backgrounds.
        Whether you're keen to start your journey into quantum computing,
        or just curious as to what it's all about, this course will take
        you from zero to one, without the hand waving.`,
        cta: {
          label: "Go to this course",
          url: "/learn/course/introduction-course",
          segment: { cta: "introduction-course", location: "course" },
        },
      },
      {
        image: "/images/learn/machine-learning.png",
        title: "Quantum machine learning",
        description: `Want to learn about this exciting, developing field? If
        you're familiar with quantum computing basics, this course will give
        you a primer on machine learning, walk you through key concepts, and
        bring you up to speed with recent developments.`,
        cta: {
          label: "Go to this course",
          url: "/learn/course/machine-learning-course",
          segment: { cta: "machine-learning", location: "course" },
        },
      },
    ],
  },
  {
    title: "Chapters",
    description:
      "These pages are not part of a course, but contain useful reference material.",
    courses: [
      {
        image: "/images/learn/course/prerequisites/prerequisites.png",
        title: "Prerequisites",
        description:
          "Learn about the software used to write the Qiskit textbook (Python and Jupyter Notebooks), and set up your environment to reproduce the experiments.",
        cta: {
          label: "View resource",
          url: "/learn/course/prerequisites",
          segment: { cta: "prerequisites", location: "course" },
        },
      },
      {
        image:
          "/images/learn/course/quantum-states-and-qubits/bloch-sphere.png",
        title: "Quantum States and Qubits",
        description:
          "This chapter introduces the computing concepts that we'll explore in later chapters, then introduces basic quantum concepts.",
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-states-and-qubits",
          segment: { cta: "quantum-states-and-qubits", location: "course" },
        },
      },
      {
        image:
          "/images/learn/course/multiple-qubits-and-entanglement/multiple-qubits-and-entanglement.png",
        title: "Multiple Qubits and Entanglement",
        description:
          "With the basics down, this chapter explores the consequences of these new quantum effects, and sets us up with tools to understand quantum algorithms.",
        cta: {
          label: "View resource",
          url: "/learn/course/multiple-qubits-and-entanglement",
          segment: {
            cta: "multiple-qubits-and-entanglement",
            location: "course",
          },
        },
      },
      {
        image:
          "/images/learn/course/quantum-protocols-and-quantum-algorithms/quantum-protocols-and-quantum-algorithms.png",
        title: "Quantum Protocols and Quantum Algorithms",
        description:
          "In this chapter, we use quantum effects to build powerful algorithms, starting from simple proof-of-concept algorithms, through to Shor's famous factoring algorithm (and beyond).",
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-protocols-and-quantum-algorithms",
          segment: {
            cta: "quantum-protocols-and-quantum-algorithms",
            location: "course",
          },
        },
      },
      {
        image:
          "/images/learn/course/quantum-hardware-pulses/quantum-hardware-pulses.png",
        title: "Investigating Quantum Hardware Using Microwave Pulses",
        description:
          "In this chapter, we get a level closer to the real quantum machines. Learn about the physics of these devices, and how to program them at the level of microwave pulses.",
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-hardware-pulses",
          segment: { cta: "quantum-hardware-pulses", location: "course" },
        },
      },
      {
        image:
          "/images/learn/course/quantum-algorithms-for-applications/quantum-algorithms-for-applications.png",
        title: "Quantum Algorithms for Applications",
        description:
          "If algorithms are the solution, then what is the problem? In this chapter, we look at how we can take general algorithms and apply them to more specific situations.",
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-algorithms-for-applications",
          segment: {
            cta: "quantum-algorithms-for-applications",
            location: "course",
          },
        },
      },
      {
        image:
          "/images/learn/course/quantum-hardware-circuits/quantum-hardware-circuits.png",
        title: "Investigating Quantum Hardware Using Quantum Circuits",
        description:
          "All circuit-based quantum devices share some similar characteristics and challenges. In this chapter, we explore how quantum circuits perform on modern quantum computers, and ways to improve performance.",
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-hardware-circuits",
          segment: { cta: "quantum-hardware-circuits", location: "course" },
        },
      },
      {
        image: "/images/learn/course/quantum-computing-labs/quantum-lab.png",
        title: "Quantum Computing Labs",
        description: `This set of labs provides 7 different exercises
        you (or your students) can use to investigate the behaviour of
        current quantum computers and practice your Qiskit coding skills.`,
        cta: {
          label: "View resource",
          url: "/learn/course/quantum-computing-labs",
          segment: { cta: "labs", location: "course" },
        },
      },
      {
        image: "/images/learn/course/games-and-demos/games-and-demos.png",
        title: "Games and Demos",
        description:
          "Check out games and demonstrations created in this textbook's environment; great for teaching, or just for fun!",
        cta: {
          label: "View resource",
          url: "/learn/course/games-and-demos",
          segment: { cta: "games-and-demos", location: "course" },
        },
      },
      {
        image: "/images/learn/course/legacy-content/legacy-content.png",
        title: "Legacy content",
        description:
          "Has the page you're using changed? Find it in the original version of the Qiskit Textbook.",
        cta: {
          label: "View version 1",
          url: "/learn/course/legacy-content",
          segment: { cta: "legacy-content", location: "course" },
        },
      },
    ],
  },
  {
    title: "Tutorials",
    description:
      "Already understand quantum computing? These tutorials will show you how to use qiskit to do the thing you want to do.",
    courses: [
      {
        image: "/images/learn/tutorials/quantum-circuits.png",
        title: "Quantum Circuits",
        description:
          "Comfortable with quantum computing, but new to Qiskit? Learn how to create simple quantum circuits, and visualize quantum states.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#quantum-circuits",
          segment: { cta: "quantum-circuits", location: "tutorials" },
        },
      },
      {
        image: "/images/learn/tutorials/advanced-circuits.png",
        title: "Advanced Circuits",
        description:
          "Learn about the more advanced features of Qiskit's QuantumCircuit class, including how to create custom gates and how to use the transpiler to optimize your circuits and target different devices.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#advanced-circuits",
          segment: { cta: "advanced-circuits", location: "tutorials" },
        },
      },
      {
        image: "/images/learn/tutorials/classical-simulators.png",
        title: "Classical Simulators",
        description:
          "Qiskit includes powerful quantum simulators to investigate how quantum circuits will behave on both ideal, and noisy hardware. These tutorials show you how to use advanced features of these simulators.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#classical-simulators",
          segment: { cta: "classical-simulators", location: "tutorials" },
        },
      },
      {
        image: "/images/learn/tutorials/algorithms.png",
        title: "Algorithms",
        description:
          "These tutorials show you how to use Qiskit's built-in algorithms. Qiskit supports classic algorithms such as Shor's and Grover's, as well as more recent developments such as VQE and QAOA.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#algorithms",
          segment: { cta: "algorithms", location: "tutorials" },
        },
      },
      {
        image: "/images/learn/tutorials/operators.png",
        title: "Operators",
        description:
          "Learn how Qiskit represents quantum operators, and how we can use these to build sophisticated quantum programs.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#operators",
          segment: { cta: "operators", location: "tutorials" },
        },
      },
      {
        image: "/images/learn/tutorials/sample-algorithms-in-qiskit.png",
        title: "Sample algorithms in Qiskit",
        description:
          "Learn about the Iterative Quantum Phase Estimation Algorithm and how you can program it in Qiskit.",
        cta: {
          label: "View resource",
          url: "https://qiskit.org/documentation/tutorials.html#sample-algorithms-in-qiskit",
          segment: {
            cta: "sample-algorithms-in-qiskit",
            location: "tutorials",
          },
        },
      },
    ],
  },
  {
    title: "Summer schools",
    description:
      "The Qiskit Global Summer Schools are one-of-a-kind sequences that takes students from beginner level to solving advanced quantum problems on a quantum computer. These two-week courses are designed to empower the next generation of quantum developers with the knowledge to explore quantum applications on their own.",
    courses: [
      {
        image:
          "/images/learn/summer-school/quantum-simulation-summer-school-2022/header.png",
        title: "Quantum Simulations (2022)",
        description:
          "This summer school provides a focused introduction to quantum computing and its applications to quantum simulation, with a specific focus on quantum chemistry. These lectures were first released as part of a two-week intensive summer school in July 2022.",
        cta: {
          label: "Go to this resource",
          url: "/learn/summer-school/quantum-simulation-summer-school-2022",
          segment: {
            cta: "quantum-simulation-summer-school-2022",
            location: "summer-schools",
          },
        },
      },
      {
        image:
          "/images/learn/summer-school/quantum-computing-and-quantum-learning-2021/header.png",
        title: "Quantum Computing & Quantum Machine Learning (2021)",
        description:
          'Designed to empower the next generation of quantum researchers and developers with the skills and know-how to explore quantum applications on their own. Starting with an introductory "crash course" on quantum computing, the materials continue to dive into and explore one key area: quantum machine learning.',
        cta: {
          label: "Go to this resource",
          url: "/learn/summer-school/quantum-computing-and-quantum-learning-2021",
          segment: {
            cta: "quantum-computing-and-quantum-learning-2021",
            location: "summer-schools",
          },
        },
      },
      {
        image:
          "/images/learn/summer-school/intro-quantum-computing-quantum-hardware-2020/header.png",
        title: "Introduction to Quantum Computing and Quantum Hardware (2020)",
        description:
          "This introduction to the world of quantum computing explores key quantum algorithms, as well as the quantum hardware designed to run these algorithms. These lectures were first released as part of a two-week intensive summer school in July 2020.",
        cta: {
          label: "Go to this resource",
          url: "/learn/summer-school/introduction-to-quantum-computing-and-quantum-hardware-2020",
          segment: {
            cta: "introduction-to-quantum-computing-and-quantum-hardware-2020",
            location: "summer-schools",
          },
        },
      },
    ],
  },
  {
    title: "On other platforms",
    description: "Check out Qiskit on other platforms.",
    courses: [
      {
        image: "/images/learn/other-platforms/youtube.png",
        title: "Qiskit YouTube",
        description:
          "Check out our YouTube channel for engaging lectures, tips & tricks, tutorials, community updates and access to exclusive Qiskit content!",
        cta: {
          label: "View resource",
          url: "https://www.youtube.com/qiskit",
          segment: { cta: "youtube", location: "other-platformss" },
        },
      },
      {
        image: "/images/learn/other-platforms/medium.png",
        title: "Qiskit Medium Blog",
        description:
          "Visit the Medium blog to read about Qiskit, programming quantum computers, and anything else related to quantum computing.",
        cta: {
          label: "View resource",
          url: "https://medium.com/Qiskit",
          segment: { cta: "medium", location: "other-platformss" },
        },
      },
    ],
  },
];

const teachingSections: TeachingSection[] = [
  {
    title: "Community syllabi",
    syllabi: [
      {
        title: "Quantum Computing with Superconducting Qubits",
        instructor: "Jay Gambetta",
        university: "IBM Quantum",
        cta: {
          label: "Go to this course",
          url: "https://learn.qiskit.org/syllabus/TRY-SW8",
          segment: {
            cta: "jay-gambetta-syllabus",
            location: "teach-curated-syllabi",
          },
        },
      },
      {
        title: "Introduction to Quantum Algorithms",
        instructor: "Peter Shor",
        university: "Masachussetts Institute of Technology",
        cta: {
          label: "Go to this course",
          url: "https://learn.qiskit.org/syllabus/CFH-KBT",
          segment: {
            cta: "peter-shors-syllabus",
            location: "teach-curated-syllabi",
          },
        },
      },
      {
        title: "Preparing for the Qiskit developer certification exam",
        instructor: "James L. Weaver",
        university: "IBM Quantum",
        cta: {
          label: "Go to this course",
          url: "https://learn.qiskit.org/syllabus/S9P-7GP",
          segment: {
            cta: "james-weaver-syllabus",
            location: "teach-curated-syllabi",
          },
        },
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
@use "~/assets/scss/carbon.scss";

.start-learning-section {
  &__subtitle {
    margin-bottom: carbon.$spacing-05;
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

  &__tabs {
    display: flex;
    justify-content: flex-end;

    @include carbon.breakpoint-down(md) {
      display: block;
      justify-content: flex-start;
    }
  }

  &__tabs-wrapper {
    padding-bottom: carbon.$spacing-09;
  }

  &__teach-section-cta {
    margin-top: carbon.$spacing-09;
  }
}
</style>
