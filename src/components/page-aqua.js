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
          height: 75px;
        }
      </style>

      <header>
        <img src="images/qiskit-aqua-logo.png" alt="${i18next.t('pages.aqua.altLogo')}">
        <div>
          <h1>
            ${i18next.t('pages.aqua.headerTitle')}
            <a
                href="https://pypi.python.org/pypi/qiskit-acqua"
                target="_blank"
                rel="noopener">
              <img
                  src="https://img.shields.io/pypi/v/qiskit-acqua.svg"
                  alt="Qiskit Aqua version badge"
                  width="78px"
                  height="20px">
            </a>
          </h1>
          <h2>${i18next.t('pages.aqua.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/qiskit-acqua"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${githubIcon}
                GitHub
              </vaadin-button>
            </a>
            <a
                href="/documentation/acqua/"
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
                    <div class="subtitle">Jordan-Wigner, Bravyi-Kitaev, Parity mapping</div>
                  </div>
                  <div class="element">
                    <div class="title">Quantum algorithms</div>
                    <div class="stack-list quantum-algorithms">
                      <div class="element">
                        <div class="title">Variational</div>
                        <div class="subtitle">VQE, QAOA, QSVM.Variational</div>
                      </div>
                      <div class="element">
                        <div class="title">Sampling</div>
                        <div class="subtitle">Dynamics, QSVM.Sampling</div>
                      </div>
                      <div class="element">
                        <div class="title">Phase estimation</div>
                        <div class="subtitle">QPE, IQPE</div>
                      </div>
                      <div class="element">
                        <div class="title">Amplitude amplification</div>
                        <div class="subtitle">Grover</div>
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
                [python3] $ pip install qiskit-acqua qiskit-acqua-chemistry
              </template>
            </code-sample>
            <h3>${i18next.t('pages.aqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit_acqua import Operator, run_algorithm
                from qiskit_acqua.input import get_input_instance

                pauli_dict = {
                  "paulis": [
                    { "coeff": { "imag": 0.0, "real": -1.052373245772859 }, "label": "II" },
                    { "coeff": { "imag": 0.0, "real": 0.39793742484318045 }, "label": "ZI" },
                    { "coeff": { "imag": 0.0, "real": -0.39793742484318045 }, "label": "ZZ" },
                    { "coeff": { "imag": 0.0, "real": 0.18093119978423156 }, "label": "XX" }
                  ]
                }
                algo_input = get_input_instance("EnergyInput")
                algo_input.qubit_op = Operator.load_from_dict(pauli_dict)
                params = {
                  "algorithm": { "name": "VQE" },
                  "optimizer": { "name": "SPSA" },
                  "variational_form": { "name": "RY", "depth": 5 },
                  "backend": { "name": "local_qasm_simulator" }
                }

                result = run_algorithm(params, algo_input)

                print(result["energy"])
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
