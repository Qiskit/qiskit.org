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

class PageTerra extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-terra-color);
        }
      </style>

      <header>
        <img src="images/qiskit-terra-logo.png" alt="${i18next.t('pages.terra.altLogo')}">
        <div>
          <h1>${i18next.t('pages.terra.headerTitle')}</h1>
          <h2>${i18next.t('pages.terra.headerSubTitle')}</h2>
          <p>${i18next.t('pages.terra.headerDescription')}</p>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/qiskit-terra"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${githubIcon}
                GitHub
              </vaadin-button>
            </a>
            <a
                href="https://pypi.python.org/pypi/qiskit"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${pythonIcon}
                PyPI
              </vaadin-button>
            </a>
            <a
                href="/documentation/"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${i18next.t('documentation')}
              </vaadin-button>
            </a>
            <a
                href="https://nbviewer.jupyter.org/github/QISKit/qiskit-tutorial/blob/master/index.ipynb"
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
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.terra.howToUseitTitle')}</h3>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-terra', PageTerra);
