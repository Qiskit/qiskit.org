<template>
  <main>
    <LegacyPresentation
      title="Welcome to Quantum"
      image="/images/qiskit-logo.svg"
      description="Qiskit is an open-source quantum computing software development framework for leveraging today's quantum processors in research, education, and business."
      to="https://qiskit.org/documentation/install.html"
      segment-action="Get Started"
    />
    <LegacySection>
      <article>
        <h2>Qiskit on YouTube</h2>
        <p>Would you like to learn how to code a quantum computer? Take a look at the Coding with Qiskit Video Series, where Abraham Asfaw explains everything you need to know. Starting with installing Qiskit, to investigating the latest algorithms and research topics.</p>
        <Cta
          to="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY"
          terciary
          @click="$trackClickEvent({
            action: 'Coding with Qiskit Video Series'
          })"
        >
          Watch it
        </Cta>
      </article>
      <article>
        <h2>Kids meet quantum!</h2>
        <p>This activity pack will entertain your kids with fun activities about quantum computing. Fun for all kids and parents!</p>
        <Cta
          to="/activities/quantum-activity-pack-for-kids.pdf"
          terciary
          is-static
          @click="$trackClickEvent({
            action: 'Activity pack for kids'
          })"
        >
          Try it
        </Cta>
      </article>
    </LegacySection>
    <LegacySection>
      <article>
        <h2>IBM Quantum Experience</h2>
        <p>New to quantum computing? Try out the IBM Quantum Experience to get started with Qiskit in the cloud. No installation required and free hosted tutorials. Work is saved in the cloud and automatically updated with every Qiskit release.</p>
        <Cta
          to="https://quantum-computing.ibm.com/login"
          terciary
          @click="$trackClickEvent({
            action: 'Introducing Qiskit notebooks: Try out'
          })"
        >
          Try it
        </Cta>
      </article>
      <aside>
        <img src="images/qiskit-notebooks.jpg" alt="Screenshot of the IBM Quantum Experience Qiskit notebooks">
      </aside>
    </LegacySection>
    <LegacySection>
      <article>
        <h2>Where to find us</h2>
        <p>Through connecting, contributing and collaborating, our diverse community of Qiskitters propels Qiskit to new forefronts and fields. In our commitment to open this quantum computing community to people of all backgrounds, we span across several platforms. Find us today to start connecting and contributing!</p>
      </article>
      <aside>
        <ul class="social-networks-list">
          <li>
            <a
              href="https://join.slack.com/t/qiskit/shared_invite/enQtODQ2NTIyOTgwMTQ3LTI0NzM2NzkzZjJhNDgzZjY5MTQzNDY3MGNiZGQzNTNkZTE4Nzg1MjMwMmFjY2UwZTgyNDlmYWQwYmZjMjE1ZTM"
              title="Slack community"
              target="_blank"
              @click="$trackClickEvent({
                action: 'Qiskit Community: Slack'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="slack-icon" role="img"><title id="slack-icon">Slack icon</title><path d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z" /><path d="M18.824 14.055l-1.555.521.54 1.61c.218.65-.135 1.355-.786 1.574-.15.045-.285.067-.435.063-.511-.015-.976-.338-1.155-.849l-.54-1.607-3.21 1.073.539 1.608c.211.652-.135 1.358-.794 1.575-.15.048-.285.067-.435.064-.51-.015-.976-.34-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061-.511-.016-.976-.345-1.155-.855-.225-.66.135-1.364.78-1.575l1.56-.525L7.5 11.76l-1.551.525c-.141.048-.285.066-.428.064-.495-.016-.975-.338-1.141-.848-.209-.65.135-1.354.796-1.574l1.56-.52-.54-1.605c-.21-.654.136-1.359.796-1.575.659-.22 1.363.136 1.574.783l.539 1.608L12.3 7.544l-.54-1.605c-.209-.645.135-1.35.789-1.574.652-.211 1.359.135 1.575.791l.54 1.621 1.555-.51c.651-.219 1.356.135 1.575.779.218.654-.135 1.359-.784 1.575l-1.557.524 1.035 3.086 1.551-.516c.652-.211 1.358.135 1.575.795.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z" /></svg> <span class="name">Slack</span></div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Qiskit"
              title="GitHub organization"
              target="_blank"
              @click="$trackClickEvent({
                action: 'Qiskit Community: GitHub'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="github-icon" role="img"><title id="github-icon">GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg> <span class="name">GitHub</span></div>
            </a>
          </li>
          <li>
            <a
              href="https://quantumcomputing.stackexchange.com/questions/tagged/qiskit"
              title="Stack Exchange community"
              target="_blank"
              rel="noopener"
              @click="$trackClickEvent({
                action: 'Qiskit Community: StackExchange'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="stackexchange-icon" role="img"><title id="stackexchange-icon">Stack Exchange icon</title><path d="M21.728 15.577v1.036c0 1.754-1.395 3.177-3.1 3.177h-.904L13.645 24v-4.21H5.371c-1.704 0-3.099-1.423-3.099-3.181v-1.032h19.456zM2.275 10.463h19.323v3.979H2.275v-3.979zm0-5.141h19.323v3.979H2.275V5.322zM18.575 0c1.681 0 3.023 1.42 3.023 3.178v1.034H2.275V3.178C2.275 1.422 3.67 0 5.375 0h13.2z" /></svg> <span class="name">Stack Exchange</span></div>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Qiskit"
              title="Twitter profile"
              target="_blank"
              rel="noopener"
              @click="$trackClickEvent({
                action: 'Qiskit Community: Twitter'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="twitter-icon" role="img"><title id="twitter-icon">Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" /></svg> <span class="name">Twitter</span></div>
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/Qiskit"
              title="Medium profile"
              target="_blank"
              rel="noopener"
              @click="$trackClickEvent({
                action: 'Qiskit Community: Medium'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="medium-icon" role="img"><title id="medium-icon">Medium icon</title><path d="M2.846 6.36c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403H7.26l5.378 11.795 4.728-11.795H24v.403l-1.917 1.837c-.165.126-.247.333-.213.538v13.5c-.034.204.048.41.213.537l1.87 1.837v.403h-9.41v-.403l1.937-1.882c.19-.19.19-.246.19-.538V7.794l-5.39 13.688h-.727L4.278 7.794v9.174c-.052.386.076.774.347 1.053l2.52 3.06v.402H0v-.403l2.52-3.06c.27-.278.39-.67.326-1.052V6.36z" /></svg> <span class="name">Medium</span></div>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/Qiskit"
              title="YouTube channel"
              target="_blank"
              rel="noopener"
              @click="$trackClickEvent({
                action: 'Qiskit Community: YouTube'
              })"
            >
              <div class="social-network"><svg viewBox="0 0 24 24" width="24" height="24" aria-labelledby="youtube-icon" role="img"><title id="youtube-icon">YouTube icon</title><path class="a" d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" /></svg> <span class="name">YouTube</span></div>
            </a>
          </li>
        </ul>
      </aside>
    </LegacySection>
  </main>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import QiskitPage from '~/components/qiskit/QiskitPage.vue'
import LegacyPresentation from '~/components/headers/LegacyPresentation.vue'
import LegacySection from '~/components/sections/LegacySection.vue'
import Cta from '~/components/ctas/Cta.vue'

@Component({
  components: {
    Cta,
    LegacyPresentation,
    LegacySection
  },
  head () {
    return { title: 'Qiskit' }
  }
})
export default class extends QiskitPage {
  routeName = 'qiskit-landing-page'
}
</script>

<style lang="scss">
@import '~carbon-components/scss/globals/scss/typography';

.legacy-section {
  background-color: $text-01;
}

.legacy-section:nth-child(2n+1) {
  background-color: $purple-40;
}

.social-networks-list {
  list-style: none;
  padding: 0;
  margin: -1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    width: 50%;
    display: inline-flex;
    padding: 0.8rem;

    a {
      @include type-style('productive-heading-02');
      text-decoration: none;

      &:hover {
        color: $inverse-01;
        text-decoration: underline;
      }

      div {
        display: flex;
        align-items: center;
      }
    }

    .name {
      color: $inverse-01;
      margin-left: 0.5rem;
    }
  }
}

@media (max-width: 600px) {
  .social-networks-list {
    flex-direction: column;
  }
}
</style>
