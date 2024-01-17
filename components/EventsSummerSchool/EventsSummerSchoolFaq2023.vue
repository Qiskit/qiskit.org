<template>
  <section>
    <h2>Frequently asked questions</h2>
    <bx-accordion>
      <bx-accordion-item
        title-text="What are the pre-requisites for enrolling in the Summer School?"
      >
        <p>
          Minimal prerequisites are required for the Qiskit Global Summer
          School. To follow most of the course, you will need to understand the
          basics of linear algebra, including vectors and matrices and how to
          work with them, as well as notions such as linear independence, bases,
          and dimension. You will also need to know how complex numbers work and
          be comfortable with some basic mathematical concepts, such as sets and
          functions. Visit the
          <UiLinkText :link="basicsOfQuantumInformation"
            >Basics of Quantum Information course page</UiLinkText
          >
          to find these foundational concepts explained.
        </p>
        <p>
          To make the most out of the lectures, you may also consider looking
          through the
          <UiLinkText :link="linearAlgebra"
            >linear algebra prerequisites</UiLinkText
          >
          section of the Qiskit Textbook and
          <UiLinkText :link="pythonAndJupyter"
            >brushing up on Python programming</UiLinkText
          >.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="What are the application requirements for the Summer School?"
      >
        <p>
          There is no application or pre-registration for the Qiskit Global
          Summer School 2023. Registration will be on a first come, first served
          basis, with scheduled global availability. Once the Summer School
          registration reaches capacity, unfortunately we will not be able to
          register any additional students.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="What is the time requirement for the Summer School? Is the scheduled
            fixed or flexible?"
      >
        <p>
          The summer school is made up of a total of 12 lectures, 6 lab sessions
          & application exercises, in addition to the daily Live Q&A Sessions
          and the closing panel. Participation and completion of all labs and
          lectures are required in order to receive a certificate of completion
          from the Summer School, with the optional Q&A Sessions and closing
          activities to enhance your Summer School experience. The schedule is
          not fixed, aside from final lab submission deadlines, and all students
          can participate on the schedule that works best for them. Students
          should anticipate a minimum time commitment of 30 hours for the full
          Summer School, but we recommend planning on 41 hours of participation,
          with additional time for discussion and collaboration with other
          students.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="I was a student at the Qiskit Global Summer School 2021/2022 - should
            I enroll in the 2023 Summer School as well?"
      >
        <p>
          The 2023 Summer School will focus on foundation quantum computing
          concepts with a specific look at making the
          <strong>transition</strong> from
          <strong>theory to implementation</strong>. Although the focus is
          foundational, the labs are still meant to refresh and challenge, so be
          sure to enroll and test your skills if interested.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Will the lectures and labs be recorded? Or will they only be
            accessible live?"
      >
        <p>
          Lectures, labs, and the live Q&A sessions will all be recorded and
          available for live participation and post viewing.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Do I need to download anything in order to participate?"
      >
        <p>Nope! Everything can be done in-browser.</p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="What is the cost to enroll in the Summer School?"
      >
        <p>There is no cost to participate in the summer school!</p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Will I need any supplies or equipment in order to participate?"
      >
        <p>
          You will need a computer with a reliable internet connection and
          either a mobile device or webcam/microphone on your computer to
          communicate with mentors and other students. You will need to be able
          to view seminars and connect virtually. Other than that, you just need
          to bring yourself.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Is there an age limit to participate in the Summer School?"
      >
        <p>
          The age limit for Qiskit Global Summer School 2023 is 14. If you are
          under the age limit, but still want to be part of the community,
          please check out other ways you can get connected, and other events
          that may be available in your area.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="I’m interested in hosting my own summer school or implementing Qiskit
            into my coursework - Where can I learn more?"
      >
        <p>
          Explore IBM Quantum’s Educators Program
          <UiLinkText :link="qCEducators"> online here </UiLinkText>
          , or email
          <UiLinkText :link="mailtoQCEducators">
            quantum.education@us.ibm.com
          </UiLinkText>
          to connect with the latest coursework and classroom resources for
          educators and students alike.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="How do I connect more with the Quantum Community?"
      >
        <p>
          There are several ways you can connect with the IBM Quantum Community.
          Depending on your preference, you can
          <UiLinkText :link="twitterQiskit"> follow Qiskit </UiLinkText>
          and
          <UiLinkText :link="twitterIBMResearch"> IBM Research </UiLinkText>
          on Twitter for the latest updates on new events, activities, and
          features on what is going on with the community. There is also a
          <UiLinkText :link="githubQiskit"> community GitHub </UiLinkText>
          that you can explore and contribute to, and you can read regular
          <UiLinkText :link="mediumQiskit">
            blog posts from our team and community members on Medium
          </UiLinkText>
          . You can also
          <UiLinkText :link="qiskitSubscribe">
            subscribe to the Qiskit YouTube
          </UiLinkText>
          for the latest video content and our weekly live Seminar Series.
        </p>

        <p>
          If you want to collaborate and connect with other members of the
          community, and participate in some of the ongoing conversations about
          quantum computing, you will want to
          <UiLinkText :link="joinQiskitSlack">
            check out our ever-growing Slack Community
          </UiLinkText>
          . From there you can connect with current and past interns, IBM
          researchers, Qiskit advocates, and fellow community members directly.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Are there any upcoming events in my area that I can participate in?"
      >
        <p>
          All of our announced
          <UiLinkText :link="qiskitEvents">
            upcoming events are listed on qiskit.org
          </UiLinkText>
          , which is continually updated as we roll out more events throughout
          the year. You can also
          <UiLinkText :link="twitterQiskit"
            >follow Qiskit on Twitter</UiLinkText
          >
          for the latest announcements on new and upcoming events!
        </p>
      </bx-accordion-item>
    </bx-accordion>
  </section>
</template>

<script setup lang="ts">
import type { Link } from "~/types/links";

const config = useRuntimeConfig();

const pythonAndJupyter: Link = {
  title: "Introduction to Python and Jupyter Notebooks",
  url: "https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks",
  segment: { cta: "textbook-python-and-jupyter-notebooks", location: "faq" },
};

const linearAlgebra: Link = {
  title: "Introduction to Linear Algebra for Quantum Computing",
  url: "https://learn.qiskit.org/course/ch-appendix/linear_algebra",
  segment: { cta: "qiskit-linear-algebra", location: "faq" },
};

const basicsOfQuantumInformation: Link = {
  title: "Basics of Quantum Information",
  url: `https://learning.quantum-computing.ibm.com/course/basics-of-quantum-information`,
  segment: { cta: "basics-of-quantum-information", location: "faq" },
};

const qCEducators: Link = {
  title: "IBM Quantum Educators Program",
  url: "https://quantum-computing.ibm.com/programs/educators",
  segment: { cta: "ibm-quantum-educators-program", location: "faq" },
};

const mailtoQCEducators: Link = {
  title: "Email IBM Quantum Educators Program",
  url: "mailto:quantum.education@us.ibm.com",
  segment: { cta: "mailto-quantum-educators-program", location: "faq" },
};

const twitterQiskit: Link = {
  title: "Qiskit Twitter",
  url: "https://twitter.com/qiskit",
  segment: { cta: "qiskit-twitter", location: "faq" },
};

const twitterIBMResearch: Link = {
  title: "IBM Research Twitter",
  url: "https://twitter.com/IBMResearch",
  segment: { cta: "ibmresearch-twitter", location: "faq" },
};

const githubQiskit: Link = {
  title: "Qiskit GitHub",
  url: "https://github.com/Qiskit",
  segment: { cta: "qiskit-github", location: "faq" },
};

const mediumQiskit: Link = {
  title: "Qiskit Medium",
  url: "https://medium.com/qiskit",
  segment: { cta: "qiskit-medium", location: "faq" },
};

const qiskitSubscribe: Link = {
  title: "Subscribe to the Qiskit YouTube",
  url: "https://qisk.it/sub",
  segment: { cta: "qiskit-youtube-subscribe", location: "faq" },
};

const joinQiskitSlack: Link = {
  title: "Join the Qiskit Slack",
  url: "https://qisk.it/join-slack",
  segment: { cta: "qiskit-slack-join", location: "faq" },
};

const qiskitEvents: Link = {
  title: "Qiskit Events",
  url: `${config.public.siteUrl}/events`,
  segment: { cta: "qiskit-org-events", location: "faq" },
};
</script>
