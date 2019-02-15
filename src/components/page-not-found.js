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

import { SharedStyles } from './app-shared-styles.js';

class PageNotFound extends localize(i18next)(LitElement) {
  render() {
    return html`
      ${SharedStyles}
      <style>
        .limited-width {
          flex-direction: column;
          align-items: center;
          padding-top: 2em;
        }
      </style>

      <section>
        <div class="limited-width">
          <h2>${i18next.t('pages.notFound.headerTitle')}</h2>
          <p>
            <a href="/">${i18next.t('pages.notFound.headerSubTitle')}</a>
          </p>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-not-found', PageNotFound);
