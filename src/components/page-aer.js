/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit-element';
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

class PageAer extends localize(i18next)(LitElement) {
  render() {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      ${SectionElementStyles}
      ${StackListStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-aer-color);
          --app-section-color: #000000;
        }

        section.colored .row .description .actions vaadin-button {
          --ibmq-button-secondary-color: #000000;
          --ibmq-button-secondary-focus-color: var(--qiskit-aer-color);
        }

        .stack-list .element.dot::before {
          width: 0.682em;
          height: 0.682em;
          border-radius: 50%;
          left: -1.4em;
        }
      </style>

      <header>
        <img src="images/qiskit-aer-logo.png" .alt=${i18next.t('pages.aer.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.aer.headerTitle')}
          </h1>
          <h2>${i18next.t('pages.aer.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/qiskit-aer"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
            </a>
            <a
                href="https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorial/blob/master/index.ipynb#1.3-Qiskit-Aer"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">${i18next.t('tutorials')}</vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.aer.aboutTitle')}</h3>
            <p>${i18next.t('pages.aer.aboutDescription')}</p>
            <h3>${i18next.t('pages.aer.stackTitle')}</h3>
            <div class="stack-list">
              <div class="element">
                <div class="title">Qobj</div>
                <div class="subtitle">OpenQASM</div>
              </div>
              <div class="element">
                <div class="title">Noise model</div>
                <div class="subtitle">NoiseModel (QasmSimulator only)</div>
                <div class="stack-list">
                  <div class="element">
                    <div class="title">Device noise model</div>
                    <div class="subtitle">Backend properties</div>
                  </div>
                  <div class="element">
                    <div class="title">Custom noise model</div>
                    <div class="subtitle">QuantumErrors, ReadoutErrors</div>
                  </div>
                </div>
              </div>
              <div class="group">
                <div class="element">
                  <div class="title">Backend</div>
                  <div class="subtitle">QasmSimulator, StatevectorSimulator, UnitarySimulator</div>
                </div>
                <span class="separator"></span>
                <div class="element">
                  <div class="title">Provider</div>
                  <div class="subtitle">Aer</div>
                </div>
              </div>
              <div class="element">
                <div class="title">Job</div>
              </div>
              <div class="element dot">
                <div class="title">Result</div>
                <div class="subtitle">Counts, Memory, Statevector, Unitary, Snapshots</div>
              </div>
            </div>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.aer.installTitle')}</h3>
            <p class="note">${i18next.t('pages.aer.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit
              </template>
            </code-sample>
            <h3>${i18next.t('pages.aer.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit import QuantumRegister, ClassicalRegister
                from qiskit import QuantumCircuit, execute, Aer, IBMQ
                from qiskit.providers.aer import noise

                # Choose a real device to simulate
                IBMQ.load_accounts()
                device = IBMQ.get_backend('ibmq_16_melbourne')
                properties = device.properties()
                coupling_map = device.configuration().coupling_map

                # Generate an Aer noise model for device
                noise_model = noise.device.basic_device_noise_model(properties)
                basis_gates = noise_model.basis_gates

                # Generate a quantum circuit
                q = QuantumRegister(2)
                c = ClassicalRegister(2)
                qc = QuantumCircuit(q, c)

                qc.h(q[0])
                qc.cx(q[0], q[1])
                qc.measure(q, c)

                # Perform noisy simulation
                backend = Aer.get_backend('qasm_simulator')
                job_sim = execute(qc, backend,
                                  coupling_map=coupling_map,
                                  noise_model=noise_model,
                                  basis_gates=basis_gates)
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

window.customElements.define('page-aer', PageAer);
