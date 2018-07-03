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

class PageStudio extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-studio-color);
          --app-section-color: #222222;
        }

        .feature-image .image img,
        .feature-image .image video {
          max-width: 100%;
        }

        .feature-image .description {
          font-size: 1.1em;
          margin-bottom: 2em;
        }

        @media (min-width: 768px) {
          .feature-image.right {
            flex-direction: row;
          }

          .feature-image.left {
            flex-direction: row-reverse;
          }

          .feature-image .description {
            margin-bottom: 0;
            flex: 5;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .feature-image.right .description {
            margin-right: 2em;
          }

          .feature-image.left .description {
            margin-left: 2em;
          }

          .feature-image .image {
            flex: 6;
          }
        }
      </style>

      <header>
        <img src="images/studio/qiskit-studio-logo.png" alt="${i18next.t('pages.studio.altLogo')}">
        <div>
          <h1>${i18next.t('pages.studio.headerTitle')}</h1>
          <h2>${i18next.t('pages.studio.headerSubTitle')}</h2>
          <p>${i18next.t('pages.studio.headerDescription')}</p>
          <iframe
              src="https://ghbtns.com/github-btn.html?user=Qiskit&repo=qiskit-studio&type=star&count=true"
              frameborder="0"
              scrolling="0"
              width="100px"
              height="20px">
          </iframe>
          <a
              href="https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-studio"
              target="_blank"
              rel="noopener"
              class="badge-link">
            <img
                src="https://vsmarketplacebadge.apphb.com/version/qiskit.qiskit-studio.svg"
                alt="Qiskit Studio version badge"
                width="198px"
                height="20px">
          </a>
        </div>
      </header>

      <section class="feature-image right colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.autocompleteTitle')}</h3>
            <p>${i18next.t('pages.studio.autocompleteDescription')}</p>
          </div>
          <div class="image">
            <video autoplay loop muted playsinline disableRemotePlayback>
              <source src="videos/qiskit-studio-autocomplete.webm" type="video/webm">
              <source src="videos/qiskit-studio-autocomplete.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature-image left">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.documentationTitle')}</h3>
            <p>${i18next.t('pages.studio.documentationDescription')}</p>
          </div>
          <div class="image">
            <video autoplay loop muted playsinline disableRemotePlayback>
              <source src="videos/qiskit-studio-documentation.webm" type="video/webm">
              <source src="videos/qiskit-studio-documentation.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature-image right colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.linterTitle')}</h3>
            <p>${i18next.t('pages.studio.linterDescription')}</p>
          </div>
          <div class="image">
            <video autoplay loop muted playsinline disableRemotePlayback>
              <source src="videos/qiskit-studio-linter.webm" type="video/webm">
              <source src="videos/qiskit-studio-linter.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature-image left">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.snippetsTitle')}</h3>
            <p>${i18next.t('pages.studio.snippetsDescription')}</p>
          </div>
          <div class="image">
            <video autoplay loop muted playsinline disableRemotePlayback>
              <source src="videos/qiskit-studio-snippet.webm" type="video/webm">
              <source src="videos/qiskit-studio-snippet.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature-image right colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.integratedToolsTitle')}</h3>
            <p>${i18next.t('pages.studio.integratedToolsDescription')}</p>
          </div>
          <div class="image">
            <video autoplay loop muted playsinline disableRemotePlayback>
              <source src="videos/qiskit-studio-integrated-tools.webm" type="video/webm">
              <source src="videos/qiskit-studio-integrated-tools.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-studio', PageStudio);
