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
} from './app-shared-styles.js';
import { githubIcon, pythonIcon } from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';
import '@kuscamara/code-sample/code-sample.js';

class PageAcqua extends localize(i18next)(connect(store)(PageViewElement)) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      ${SectionElementStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-acqua-color);
          --app-section-color: #000000;
        }

        section .menu {
          padding-bottom: 0;
        }

        section .menu nav > a {
          display: inline-flex;
          text-decoration: none;
        }

        section .menu nav vaadin-button {
          --ibmq-button-secondary-color: #2a2c36;
          --ibmq-button-secondary-focus-color: var(--qiskit-acqua-color);
        }

        section .menu nav vaadin-button[selected] {
          background-color: #2a2c36;
          color: var(--qiskit-acqua-color);
        }

        .acqua-section {
          display: none;
        }

        .acqua-section[active] {
          display: flex;
        }
      </style>

      <header>
        <img src="images/qiskit-acqua-logo.png" alt="${i18next.t('pages.acqua.altLogo')}">
        <div>
          <h1>${i18next.t('pages.acqua.headerTitle')}</h1>
          <h2>${i18next.t('pages.acqua.headerSubTitle')}</h2>
          <p>${i18next.t('pages.acqua.headerDescription')}</p>
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
                href="https://pypi.python.org/pypi/qiskit-acqua"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${pythonIcon}
                PyPI
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
                href="https://nbviewer.jupyter.org/github/QISKit/qiskit-acqua-tutorials/blob/master/index.ipynb"
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
        <div class="menu limited-width">
          <nav>
            <a href="/acqua" tabindex="-1">
              <vaadin-button
                  theme="secondary"
                  selected?="${props._subPage === undefined}">
                Acqua
              </vaadin-button>
            </a>
            <span class="separator">></span>
            <a href="/acqua/chemistry" tabindex="-1">
              <vaadin-button
                  theme="secondary small"
                  selected?="${props._subPage === 'chemistry'}">
                Chemistry
              </vaadin-button>
            </a>
            <a href="/acqua/artificial-intelligence" tabindex="-1">
              <vaadin-button
                  theme="secondary small"
                  selected?="${props._subPage === 'artificial-intelligence'}">
                Artificial intelligence
              </vaadin-button>
            </a>
            <a href="/acqua/optimization" tabindex="-1">
              <vaadin-button
                  theme="secondary small"
                  selected?="${props._subPage === 'optimization'}">
                Optimization
              </vaadin-button>
            </a>
          </nav>
        </div>

        <div class="row acqua-section limited-width" active?="${props._subPage === undefined}">
          <div class="description">
            <h3>${i18next.t('pages.acqua.aboutTitle')}</h3>
            <p>${i18next.t('pages.acqua.aboutDescription')}</p>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.acqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.acqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-acqua
              </template>
            </code-sample>
            <h3>${i18next.t('pages.acqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit_acqua import Operator, run_algorithm
                from qiskit_acqua.input import get_input_instance

                pauli_dict = {
                  'paulis': [
                    { coeff: { imag: 0.0, real: -1.052373245772859 }, label: "II" },
                    { coeff: { imag: 0.0, real: 0.39793742484318045 }, label: "ZI" },
                    { coeff: { imag: 0.0, real: -0.39793742484318045 }, label: "ZZ" },
                    { coeff: { imag: 0.0, real: 0.18093119978423156 }, label: "XX" }
                  ]
                }
                algo_input = get_input_instance('EnergyInput')
                algo_input.qubit_op = Operator.load_from_dict(pauli_dict)
                params = {
                  'algorithm': { 'name': 'VQE' },
                  'optimizer': { 'name': 'SPSA' },
                  'variational_form': { 'name': 'RY', 'depth': 5 },
                  'backend': { 'name': 'local_qasm_simulator' }
                }

                result = run_algorithm(params, algo_input)

                print(result['energy'])
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>

        <div class="row acqua-section limited-width" active?="${props._subPage === 'chemistry'}">
          <div class="description">
            <h3>${i18next.t('pages.acqua.aboutTitle')}</h3>
            <p>${i18next.t('pages.acqua.aboutChemistryDescription')}</p>
            <dl>
              <dt>${i18next.t('pages.acqua.aboutInputGeneration')}:</dt>
              <dd>PSI4, PySCF, PyQuante, Gaussian, HDF5</dd>
              <dt>${i18next.t('pages.acqua.aboutTranslation')}:</dt>
              <dd>Fermionic Hamiltonian, Qubit Hamiltonian</dd>
              <dt>${i18next.t('pages.acqua.aboutLibrary')}:</dt>
              <dd>VQE, QPE, IQPE</dd>
            </dl>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.acqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.acqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-acqua-chemistry
              </template>
            </code-sample>
            <h3>${i18next.t('pages.acqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit_acqua_chemistry import ACQUAChemistry

                # Input dictionary to configure QISKit ACQUA Chemistry for LiH
                acqua_chemistry_dict = {
                  'driver': { 'name': 'PYSCF' },
                  'PYSCF': {
                    'atom': 'Li .0 .0 -0.8; H .0 .0 0.8',
                    'basis': 'sto3g'
                  },
                  'operator': {
                    'name': 'hamiltonian',
                    'qubit_mapping': 'parity',
                    'two_qubit_reduction': True,
                    'freeze_core': True,
                    'orbital_reduction': [-3, -2]
                  },
                  'algorithm': { 'name': 'VQE' },
                  'optimizer': {
                    'name': 'COBYLA',
                    'maxiter': 10000
                  },
                  'variational_form': { 'name': 'UCCSD' },
                  'initial_state': { 'name': 'HartreeFock' },
                  'backend': { 'name': 'local_qasm_simulator' }
                }

                solver = ACQUAChemistry()

                result = solver.run(acqua_chemistry_dict)

                print(result['energy'])
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>

        <div class="row acqua-section limited-width" active?="${props._subPage === 'artificial-intelligence'}">
          <div class="description">
            <h3>${i18next.t('pages.acqua.aboutTitle')}</h3>
            <p>${i18next.t('pages.acqua.aboutAiDescription')}</p>
            <dl>
              <dt>${i18next.t('pages.acqua.aboutInputGeneration')}:</dt>
              <dd>Domain-specific</dd>
              <dt>${i18next.t('pages.acqua.aboutTranslation')}:</dt>
              <dd>Problem-specific</dd>
              <dt>${i18next.t('pages.acqua.aboutLibrary')}:</dt>
              <dd>SVM Q Kernel, SVM Variational</dd>
            </dl>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.acqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.acqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-acqua
              </template>
            </code-sample>
            <h3>${i18next.t('pages.acqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from datasets import *
                from qiskit_acqua.svm.data_preprocess import *
                from qiskit_acqua.input import get_input_instance
                from qiskit_acqua import run_algorithm

                num_of_qubits = 2
                sample_Total, training_input, test_input, class_labels = \\
                    ad_hoc_data(training_size=20, test_size=10, n=num_of_qubits,
                                gap=0.3, PLOT_DATA=False)
                total_array, label_to_labelclass = get_points(test_input, class_labels)

                params = {
                  'problem': {'name': 'svm_classification'},
                  'backend': {'name': 'local_qasm_simulator', 'shots': 1000},
                  'algorithm': {'name': 'SVM_QKernel', 'print_info': True}
                }

                algo_input = get_input_instance('SVMInput')
                algo_input.training_dataset = training_input
                algo_input.test_dataset = test_input
                algo_input.datapoints = total_array

                result = run_algorithm(params, algo_input)

                print(result)
              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>

        <div class="row acqua-section limited-width" active?="${props._subPage === 'optimization'}">
          <div class="description">
            <h3>${i18next.t('pages.acqua.aboutTitle')}</h3>
            <p>${i18next.t('pages.acqua.aboutOptimizationDescription')}</p>
            <dl>
              <dt>${i18next.t('pages.acqua.aboutInputGeneration')}:</dt>
              <dd>Domain-specific</dd>
              <dt>${i18next.t('pages.acqua.aboutTranslation')}:</dt>
              <dd>Reduction to Grover oracle, Ising Hamiltonian</dd>
              <dt>${i18next.t('pages.acqua.aboutLibrary')}:</dt>
              <dd>VQE, Grover</dd>
            </dl>
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.acqua.installTitle')}</h3>
            <p class="note">${i18next.t('pages.acqua.pythonIsRequired')}</p>
            <code-sample type="bash">
              <template>
                [python3] $ pip install qiskit-acqua
              </template>
            </code-sample>
            <h3>${i18next.t('pages.acqua.exampleTitle')}</h3>
            <code-sample type="python" copy-clipboard-button>
              <!-- htmlmin:ignore -->
              <template>
                from qiskit_acqua.input import get_input_instance
                from qiskit_acqua import run_algorithm

                sat_cnf = """
                c Example DIMACS 3-sat, with 3 solutions: 1 -2 3 0, -1 -2 -3 0, 1 2 -3 0
                p cnf 3 5
                -1 -2 -3 0
                1 -2 3 0
                1 2 -3 0
                1 -2 -3 0
                -1 2 3 0
                """

                params = {
                  'problem': { 'name': 'search' },
                  'algorithm': { 'name': 'Grover' },
                  'oracle': { 'name': 'SAT', 'cnf': sat_cnf },
                  'backend': { 'name': 'local_qasm_simulator' }
                }

                result = run_algorithm(params)

                print(result['result'])
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

window.customElements.define('page-acqua', PageAcqua);
