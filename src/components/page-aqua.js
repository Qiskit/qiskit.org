/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { PageViewElement } from './page-view-element.js';
import { localize } from '../pwa-helpers/localize-mixin.js';

import { i18next } from '../i18next.js';
import { store } from '../store.js';

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

class PageAqua extends localize(i18next)(connect(store)(PageViewElement)) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      ${SectionElementStyles}
      ${StackListStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-aqua-color);
          --app-section-color: #000000;
        }

        section.colored .row .description .actions vaadin-button {
          --ibmq-button-secondary-color: #000000;
          --ibmq-button-secondary-focus-color: var(--qiskit-aqua-color);
        }

        .stack-list.aqua-applications-domains::before {
          height: 50px;
        }
      </style>

      <header>
        <img src="images/qiskit-aqua-logo.png" alt="${i18next.t('pages.aqua.altLogo')}">
        <div>
          <h1>
            ${i18next.t('pages.aqua.headerTitle')}
            <a
                href="https://pypi.python.org/pypi/qiskit-aqua"
                target="_blank"
                rel="noopener">
              <img
                  src="https://img.shields.io/pypi/v/qiskit-aqua.svg"
                  alt="Qiskit Aqua version badge"
                  width="78px"
                  height="20px">
            </a>
          </h1>
          <h2>${i18next.t('pages.aqua.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/aqua"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${githubIcon}
                GitHub
              </vaadin-button>
            </a>
            <a
                href="/documentation/aqua/"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${i18next.t('documentation')}
              </vaadin-button>
            </a>
            <a
                href="https://nbviewer.jupyter.org/github/QISKit/qiskit-tutorial/blob/master/index.ipynb#2.4-Working-with-QISKit-ACQUA-on-near-term-devices"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${i18next.t('tutorials')}
              </vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.aqua.aboutTitle')}</h3>
            <p>${i18next.t('pages.aqua.aboutDescription')}</p>
            <h3>${i18next.t('pages.aqua.stackTitle')}</h3>
            <div class="stack-list">
              <div class="element">
                <div class="title">Aqua applications domains</div>
                <div class="subtitle">Chemistry, AI, Optimization</div>
                <div class="stack-list aqua-applications-domains">
                  <div class="element">
                    <div class="title">Translators</div>
                  </div>
                  <div class="element">
                    <div class="title">Quantum algorithms</div>
                    <div class="stack-list quantum-algorithms">
                      <div class="element">
                        <div class="title">Adaptive</div>
                        <div class="subtitle">VQE, QAOA.Variational, QSVM.Variational, VQE2QPE</div>
                      </div>
                      <div class="element">
                        <div class="title">Many-sample</div>
                        <div class="subtitle">EOH, QSVM.Kernel</div>
                      </div>
                      <div class="element">
                        <div class="title">Single-sample</div>
                        <div class="subtitle">QPE, IQPE, Grover</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="element">
                <div class="title">Qiskit Terra</div>
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
            </div>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.aqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.aqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-aqua qiskit-aqua-chemistry
              </template>
            </code-sample>
            <h3>${i18next.t('pages.aqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit_aqua.input import get_input_instance
                from qiskit_aqua import run_algorithm

                sat_cnf = """
                c Example DIMACS 3-sat
                p cnf 3 5
                -1 -2 -3 0
                1 -2 3 0
                1 2 -3 0
                1 -2 -3 0
                -1 2 3 0
                """

                params = {
                  "problem": { "name": "search" },
                  "algorithm": { "name": "Grover" },
                  "oracle": { "name": "SAT", "cnf": sat_cnf },
                  "backend": { "name": "local_qasm_simulator" }
                }

                result = run_algorithm(params)

                print(result["result"])
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      _subPage: String,
    };
  }

  _stateChanged(state) {
    this._subPage = state.app.subPage;
  }
}

window.customElements.define('page-aqua', PageAqua);
