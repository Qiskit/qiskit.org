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

class PageAqua extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      SectionElementStyles,
      StackListStyles,
      css`
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

        section .description .badges a {
          text-decoration: none;
        }

        section .description .badges vaadin-button {
          --ibmq-button-secondary-color: #000000;
          --ibmq-button-secondary-focus-color: #ffffff;
        }

        section .description img + img {
          margin-top: 1em;
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <header>
        <img src="images/qiskit-aqua-logo.png" .alt=${i18next.t('pages.aqua.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.aqua.headerTitle')}
          </h1>
          <h2>${i18next.t('pages.aqua.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/qiskit-aqua"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  cta: 'Qiskit Aqua GitHub Repository',
                  location: 'Header',
                  text: 'Github'
                })}>
              <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
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
                <div class="subtitle">Chemistry, AI, Optimization, Finance</div>
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
                        <div class="subtitle">QPE, IQPE, Grover, Amplitude Estimation</div>
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
                [python3] $ pip install qiskit-aqua
              </template>
            </code-sample>
            <h3>${i18next.t('pages.aqua.exampleTitle')}</h3>
            <code-sample
              type="python"
              copy-clipboard-button
              @click=${() => trackClickEvent({
                cta: 'Qiskit Aqua: Copy Code Sample',
                location: 'Aqua Example Section',
                text: 'Code'
              })}>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit import Aer
                from qiskit.aqua.components.oracles import LogicalExpressionOracle
                from qiskit.aqua.algorithms import Grover

                sat_cnf = """
                c Example DIMACS 3-sat
                p cnf 3 5
                -1 -2 -3 0
                1 -2 3 0
                1 2 -3 0
                1 -2 -3 0
                -1 2 3 0
                """

                backend = Aer.get_backend('qasm_simulator')
                oracle = LogicalExpressionOracle(sat_cnf)
                algorithm = Grover(oracle)
                result = algorithm.run(backend)

                print(result["result"])
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>
              ${i18next.t('pages.aqua.chemistryTitle')}
            </h3>
            <div class="badges">
              <a
                  href="https://github.com/Qiskit/qiskit-chemistry"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1"
                  @click=${() => trackClickEvent({
                    cta: 'Qiskit Chemistry GitHub Repository',
                    location: 'Qiskit Chemistry Section',
                    text: 'Github'
                  })}>
                <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
              </a>
              <a
                  href="https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorials/blob/master/qiskit/chemistry/index.ipynb"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1"
                  @click=${() => trackClickEvent({
                    cta: 'Qiskit Chemistry Tutorials',
                    location: 'Qiskit Chemistry Section',
                    text: 'Tutorials'
                  })}>
                <vaadin-button theme="secondary small">${i18next.t('tutorials')}</vaadin-button>
              </a>
            </div>
            <p>${i18next.t('pages.aqua.chemistryDescription')}</p>
            <img src="images/aqua/aqua-chemistry-LiHEnergy.gif" .alt=${i18next.t('pages.aqua.entanglionAltImage')}>
            <img src="images/aqua/aqua-chemistry-LiHDipole.gif" .alt=${i18next.t('pages.aqua.entanglionAltImage')}>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.aqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.aqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-chemistry
              </template>
            </code-sample>
            <h3>${i18next.t('pages.aqua.exampleTitle')}</h3>
            <p class="note">${i18next.t('pages.aqua.pyscfIsRequired')}</p>
            <code-sample
              type="python"
              copy-clipboard-button
              @click=${() => trackClickEvent({
                cta: 'Qiskit Chemistry: Copy Code Sample',
                location: 'Chemistry Example Section',
                text: 'Code'
              })}>
              <!-- htmlmin:ignore -->
              <template>
                import numpy as np
                from qiskit_chemistry import QiskitChemistry

                qiskit_chemistry_dict = {
                  "driver": { "name": "PYSCF" },
                  "PYSCF": { "atom": "", "basis": "sto3g" },
                  "operator": {
                    "name": "hamiltonian",
                    "qubit_mapping": "parity",
                    "two_qubit_reduction": True,
                    "freeze_core": True,
                    "orbital_reduction": [-3, -2]
                  },
                  "algorithm": { "name": "VQE" },
                  "optimizer": { "name": "COBYLA", "maxiter": 10000 },
                  "variational_form": { "name": "UCCSD" },
                  "initial_state": { "name": "HartreeFock" }
                }
                molecule = "H .0 .0 -{0}; Li .0 .0 {0}"

                pts  = [x * 0.1  for x in range(6, 20)]
                pts += [x * 0.25 for x in range(8, 16)]
                pts += [4.0]
                energies = np.empty(len(pts))
                distances = np.empty(len(pts))
                dipoles = np.empty(len(pts))

                for i, d in enumerate(pts):
                  qiskit_chemistry_dict["PYSCF"]["atom"] = molecule.format(d/2)
                  solver = QiskitChemistry()
                  result = solver.run(qiskit_chemistry_dict)
                  energies[i] = result["energy"]
                  dipoles[i] = result["total_dipole_moment"] / 0.393430307
                  distances[i] = d

                for j in range(len(distances)):
                  print("{:0.2f}: Energy={:0.8f}, Dipole={:0.5f}".format(distances[j], energies[j], dipoles[j]))
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.aqua.chemistryGui')}</h3>
            <code-sample type="bash">
              <template>
                [python3] $ qiskit_aqua_ui
                [python3] $ qiskit_chemistry_ui
              </template>
            </code-sample>
            <p>${i18next.t('pages.aqua.chemistryGuiDescription1')}</p>
            <p>${i18next.t('pages.aqua.chemistryGuiDescription2')}</p>
            <p>${i18next.t('pages.aqua.chemistryGuiDescription3')}</p>
          </div>
          <div class="illustration">
            <img src="images/aqua/aqua-chemistry-gui.gif" .alt=${i18next.t('pages.aqua.chemistryGuiAltImage')}>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-aqua', PageAqua);
