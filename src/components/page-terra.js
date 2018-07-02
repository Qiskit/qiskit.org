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
          <iframe
              src="https://ghbtns.com/github-btn.html?user=Qiskit&repo=qiskit-core&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="100px"
              height="20px">
          </iframe>
          <a
              href="https://pypi.python.org/pypi/qiskit"
              target="_blank"
              rel="noopener"
              class="badge-link">
            <img
                src="https://img.shields.io/pypi/v/qiskit.svg"
                alt="Qiskit version badge"
                width="78px"
                height="20px">
          </a>
        </div>
      </header>

      <section class="colored">
        <div class="limited-width">
          <h3>${i18next.t('pages.terra.howToUseitTitle')}</h3>
          <div class="content">
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-terra', PageTerra);
