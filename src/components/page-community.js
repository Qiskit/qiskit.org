/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit-element';
import { localize } from '../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../i18next.js';

import {
  SharedStyles,
  HeaderStyles,
  SectionStyles,
} from './app-shared-styles.js';
import './vaadin-ibmq-styles/vaadin-button.js';

class PageFun extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      css`
        :host {
          --app-section-background-color: var(--app-primary-color);
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
     <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>Welcome to the Qiskit Community!</h3>
            <div class="actions">
              <a
                  href="https://youtu.be/cllB-q9vUUE"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary">Check out the community in action!</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/qiskitBlack.jpg" .alt="Local QiskitCamps">
          </div>
        </div>
      </section>


      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>Qiskit Camps</h3>
            <p>Experience our Qiskit Camps, where attendees will learn in an immersive environment, collaborate with peers, and enjoy meaningful experiences resulting in a more connected and impactful global quantum community.</p>
            <div class="actions">
              <a href="https://qiskit.camp" target="_blank" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary">Qiskit Camp 19</vaadin-button>
              </a>
              <a href="./community" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary" disabled>Europe (Coming Soon!)</vaadin-button>
              </a>
              <a href="./community" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary" disabled>Asia (Coming Soon!)</vaadin-button>
              </a>
              <a href="./community" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary" disabled>Africa (Coming Soon!)</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/europe.jpg" .alt=${i18next.t('pages.community.qiskitcampsImage')}>
          </div>
        </div>
      </section>

      <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>Qiskit Hackathons</h3>
            <p>Host local Qiskit Hackathons in your community and help shape the future of quantum computing!</p>
            <div class="actions">
              <a
                  href="https://madrid.qiskit.camp"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary">Madrid Recap</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/qiskitcamps2.jpg" .alt="Local QiskitCamps">
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>Qiskit Advocates Program</h3>
            <p>A global program that provides support to the individuals who actively work on assiting and growing the Qiskit community.<br>
            <br>
            • Educators can request <b>funding</b> for events and projects<br>
            • Access to a <b>network</b> of experts<br>
            • <b>Prioritized access</b> to the IBM Q hardware<br>
            • Opportunities to get your work officially <b>supported by IBM</b>
            <br>
            <br>
            Apply through our Slack bot. You should have an active GitHub account and have completed the <b>learnqiskit.org</b> course.
            </p>
            <div class="actions">
              <a
                  href="./community"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary" disabled>Apply Now (Coming Soon!)</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/advocates.jpg" .alt="Qiskit Advocates">
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>Code of Conduct</h3>
            <p>See our <a href="data/codeofconduct.pdf" target="_blank">code of conduct</a> to learn more.</p>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-community', PageFun);
