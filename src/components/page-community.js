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
            <h3>Welcome to the community</h3>
            <p>Welcome to Qiskit's global community, where you can connect with other users and contributors. Take a look to our next <b>Qiskit Camps</b>, physical events where we invite our community of researchers, developers and students to create new concepts and ideas by using Qiskit.<br>Also here you will be able to apply to our <b>Qiskit Advocates program</b>.<br>See our <a href="data/codeofconduct.pdf" target="_blank">code of conduct</a> to learn more.</p>
            
          </div>
          <div class="illustration">
            <img src="images/community/qiskitBlack.jpg" .alt="Local QiskitCamps">
          </div>
        </div>
      </section>


      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>Qiskit Camp</h3>
            <p>Come to our global quantum computing hackathons, build, learn and collaborate with researchers, advocates and developers, to create the next big thing in quantum computing.</p>
            <div class="actions">
              <a href="https://qiskit.camp" target="_blank" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary">Yorktown Recap</vaadin-button>
              </a>
              <a href="./community" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary" disabled>South Africa (Soon)</vaadin-button>
                </a>
                <a href="./community" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary" disabled>Europe (Soon)</vaadin-button>
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
            <h3>Qiskit Camp x Local</h3>
            <p>Our Qiskit advocates can organize local Qiskit Camps in their cities or regions to encourage local communities of students, developers and researchers to be part of the quantum computing revolution.</p>
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
                <vaadin-button theme="secondary" disabled>Soon</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/advocates.jpg" .alt="Qiskit Advocates">
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-community', PageFun);
