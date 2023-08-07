<template>
  <section>
    <h2>Frequently asked questions</h2>
    <bx-accordion>
      <bx-accordion-item
        title-text="What are the pre-requisites for enrolling in the Summer School?"
      >
        <p>
          Minimal prerequisites are required for the Qiskit Global Summer
          School. If you know
          <UiLinkText :link="khanAcademy"
            >how to multiply two matrices</UiLinkText
          >
          , and have some programming experience in Python, you are ready for
          the Summer School.
        </p>
        <p>
          You can
          <UiLinkText :link="pythonAndJupyter">
            brush up on Python programming
          </UiLinkText>
          before attending the lectures by using the Qiskit Textbook. To make
          the most out of these lectures, you may also consider looking through
          the
          <UiLinkText :link="linearAlgebra"
            >linear algebra prerequisites</UiLinkText
          >
          section of the Qiskit Textbook.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="What are the application requirements for the Summer School?"
      >
        <p>
          There is no application or pre-registration for the Qiskit Global
          Summer School 2022. Registration will be on a first come, first served
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
          The summer school is made up of a total of 20 lectures, 3 lab sessions
          &amp; application exercises, in addition to the daily Live Q&amp;A
          Sessions and final Commencement Celebration. Participation and
          completion of all labs and lectures are required in order to receive a
          certificate of completion from the Summer School, with the optional
          Q&A Sessions and Commencement activities to enhance your Summer School
          experience. The schedule is not fixed, aside from final lab submission
          deadlines, and all students can participate on the schedule that works
          best for them. Students should anticipate a minimum time commitment of
          30 hours for the full Summer School, but we recommend planning on 41
          hours of participation, with additional time for discussion and
          collaboration with other students.
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="I was a student at the Qiskit Global Summer School 2020/2021 - should
          I enroll in the 2022 Summer School as well?"
      >
        <p>
          The 2022 Summer School will cover briefly introduce quantum computing
          before diving into quantum simulations and chemistry, which was not
          covered in the 2020 or 2021 Summer School, so you should enroll if you
          are interested!
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Will the lectures and labs be recorded? Or will they only be
          accessible live?"
      >
        <p>
          Lectures and labs sessions will all be recorded and available for live
          participation and post viewing, as well as the daily Q&A sessions.
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
          to bring yourself
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="Is there an age limit to participate in the Summer School?"
      >
        <p>
          The age limit for Qiskit Global Summer School 2022 is 14. If you are
          under the age limit, but still want to be part of the community,
          please check out other ways you can get connected, and other events
          that may be available in your area!
        </p>
      </bx-accordion-item>

      <bx-accordion-item
        title-text="I'm interested in hosting my own summer school or implementing Qiskit
          into my coursework - Where can I learn more?"
      >
        <p>
          Explore IBM Quantums Educators Program
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
          There are several different ways you can connect with the IBM Quantum
          Community - depending on your preference. You can
          <UiLinkText :link="twitterQiskit"> follow Qiskit </UiLinkText>
          and
          <UiLinkText :link="twitterIBMResearch"> IBM Research </UiLinkText>
          on Twitter for the latest updates on new events, activities, and
          features on what is going on with the community. There is also a
          <UiLinkText :link="githubQiskit"> community Github </UiLinkText>
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

      <bx-accordion-item title-text="Still have more questions?">
        <p>
          For any questions about the summer school, please submit your
          questions using the form below. For all other enquiries, feel free to
          email us directly at
          <UiLinkText :link="mailtoQiskit">qiskit.events@us.ibm.com</UiLinkText
          >.
        </p>
      </bx-accordion-item>
    </bx-accordion>
  </section>
</template>

<script setup lang="ts">
import { Link } from "~/types/links";

const config = useRuntimeConfig();

const khanAcademy: Link = {
  title: "Khan Academy",
  url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro",
  segment: { cta: "khanacademy-matrix-multiplication-intro", location: "faq" },
};

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
  title: "Qiskit Github",
  url: "https://github.com/Qiskit",
  segment: { cta: "qiskit-github", location: "faq" },
};

const mediumQiskit: Link = {
  title: "Qiskit Medium",
  url: "https://medium.com/qiskit",
  segment: { cta: "qiskit-medium", location: "faq" },
};

const qiskitSubscribe: Link = {
  title: "Subscribe to Qiskit YouTube",
  url: "https://qisk.it/sub",
  segment: { cta: "qiskit-youtube-subscribe", location: "faq" },
};

const joinQiskitSlack: Link = {
  title: "Join Qiskit Slack",
  url: "https://qisk.it/join-slack",
  segment: { cta: "qiskit-slack-join", location: "faq" },
};

const qiskitEvents: Link = {
  title: "Qiskit Events",
  url: `${config.public.siteUrl}/events`,
  segment: { cta: "qiskit-org-events", location: "faq" },
};

const mailtoQiskit: Link = {
  title: "Email Qiskit",
  url: "mailto:qiskit.events@us.ibm.com",
  segment: { cta: "mailto-qiskit-events", location: "faq" },
};
</script>
