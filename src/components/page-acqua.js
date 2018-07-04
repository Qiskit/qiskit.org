/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';
import { localize } from '../pwa-helpers/localize-mixin.js';

import { i18next } from '../i18next.js';

import {
  SharedStyles,
  HeaderStyles,
  SectionStyles,
} from './app-shared-styles.js';
import { githubIcon, pythonIcon } from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';

class PageAcqua extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-acqua-color);
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
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.acqua.howToUseitTitle')}</h3>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-acqua', PageAcqua);
