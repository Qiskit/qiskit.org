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
  SectionElementStyles,
  StackListStyles,
} from './app-shared-styles.js';
import { githubIcon } from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';
import '@kuscamara/code-sample/code-sample.js';

import { trackClickEvent } from '../helpers/track-events.js';

class PageTerra extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      SectionElementStyles,
      StackListStyles,
      css`
        :host {
          --app-section-background-color: var(--qiskit-terra-color);
          --app-section-color: #000000;
        }

        section.colored .row .description .actions vaadin-button {
          --ibmq-button-secondary-color: #000000;
          --ibmq-button-secondary-focus-color: var(--qiskit-terra-color);
        }

        .stack-list .element.dot::before {
          width: 0.682em;
          height: 0.682em;
          border-radius: 50%;
          left: -1.4em;
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <header>
        <img src="images/qiskit-terra-logo.png" .alt=${i18next.t('pages.terra.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.terra.headerTitle')}
          </h1>
          <h2>${i18next.t('pages.terra.headerSubTitle')}</h2>
          <div class="badges">
            <a
              href="https://github.com/Qiskit/qiskit-terra"
              target="_blank"
              rel="noopener"
              tabindex="-1"
              @click=${() => trackClickEvent({
                action: 'Qiskit Terra: GitHub Repository',
                objectType: 'Button'
              })}
            >
              <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.terra.aboutTitle')}</h3>
            <p>${i18next.t('pages.terra.aboutDescription')}</p>
            <h3>${i18next.t('pages.terra.stackTitle')}</h3>
            <div class="stack-list">
              <div class="element">
                <div class="title">Terra inputs</div>
                <div class="subtitle">Quantum circuit, pulse scheduler</div>
              </div>
              <div class="element">
                <div class="title">Transpiler</div>
                <div class="subtitle">Optimization passes, pass manager</div>
              </div>
              <div class="element">
                <div class="title">QObj</div>
                <div class="subtitle">OpenQASM, OpenPulse</div>
              </div>
              <div class="group">
                <div class="element">
                  <div class="title">Backend</div>
                  <div class="subtitle">Device, simulator</div>
                </div>
                <span class="separator"></span>
                <div class="element">
                  <div class="title">Provider</div>
                  <div class="subtitle">Local, IBM Q, third party</div>
                </div>
              </div>
              <div class="element">
                <div class="title">Job</div>
              </div>
              <div class="element dot">
                <div class="title">Result</div>
                <div class="subtitle">Counts, Statevector, Unitary</div>
              </div>
            </div>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.terra.installTitle')}</h3>
            <p class="note">${i18next.t('pages.terra.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit
              </template>
            </code-sample>
            <h3>${i18next.t('pages.terra.exampleTitle')}</h3>
            <code-sample
              type="python"
              copy-clipboard-button
              @click=${() => trackClickEvent({
                action: 'Qiskit Terra: Copy Code Sample',
                objectType: 'Button'
              })}
            >
              <!-- htmlmin:ignore -->
              <template>
                from qiskit import QuantumRegister, ClassicalRegister
                from qiskit import QuantumCircuit, Aer, execute

                q = QuantumRegister(2)
                c = ClassicalRegister(2)
                qc = QuantumCircuit(q, c)

                qc.h(q[0])
                qc.cx(q[0], q[1])
                qc.measure(q, c)

                backend = Aer.get_backend('qasm_simulator')
                job_sim = execute(qc, backend)
                sim_result = job_sim.result()

                print(sim_result.get_counts(qc))
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-terra', PageTerra);
