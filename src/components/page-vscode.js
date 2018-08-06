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
import { githubIcon } from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';

class PageVscode extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--qiskit-vscode-color);
          --app-section-color: #222222;
        }

        .install .row .step {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .install .row .step:nth-child(n+2) {
          margin-top: 1em;
        }

        .install .row .step .number {
          background-color: var(--qiskit-vscode-color);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-right: .8em;
        }

        .install .row .step .title {
          font-size: 1.1em;
        }

        section.install vaadin-button {
          --ibmq-button-secondary-color: #222222;
        }

        @media (min-width: 600px) {
          .install .row .step {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .install .row .step:nth-child(n+2) {
            margin-top: 0;
          }

          section.install .row {
            flex-direction: row;
          }
        }

        @media (min-width: 768px) {
          section .row .description {
            flex: 6;
          }

          section .row .illustration {
            flex: 7;
          }
        }
      </style>

      <header>
        <img src="images/qiskit-logo.png" alt="${i18next.t('pages.home.altLogo')}">
        <div>
          <h1>${i18next.t('pages.vscode.headerTitle')}</h1>
          <h2>${i18next.t('pages.vscode.headerSubTitle')}</h2>
          <div class="badges">
            <a
                href="https://github.com/Qiskit/qiskit-vscode"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${githubIcon}
                GitHub
              </vaadin-button>
            </a>
            <a
                href="https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-vscode"
                target="_blank"
                rel="noopener">
              <img
                  src="https://vsmarketplacebadge.apphb.com/version/qiskit.qiskit-vscode.svg"
                  alt="Qiskit Studio version badge"
                  width="198px"
                  height="20px">
            </a>
          </div>
        </div>
      </header>

      <section class="install">
        <div class="row limited-width">
          <div class="step">
            <p>
              <span class="number">1</span>
              <span class="title">${i18next.t('pages.vscode.stepOneTitle')}</span>
            </p>
            <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">${i18next.t('pages.vscode.stepOneButton')}</vaadin-button>
            </a>
          </div>
          <div class="step">
            <p>
              <span class="number">2</span>
              <span class="title">${i18next.t('pages.vscode.stepTwoTitle')}</span>
            </p>
            <a href="vscode:extension/qiskit.qiskit-vscode" tabindex="-1">
              <vaadin-button theme="secondary small">${i18next.t('pages.vscode.stepTwoButton')}</vaadin-button>
            </a>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.vscode.autocompleteTitle')}</h3>
            <p>${i18next.t('pages.vscode.autocompleteDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/vscode/qiskit-vscode-autocomplete.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-vscode-autocomplete.webm" type="video/webm">
              <source src="videos/qiskit-vscode-autocomplete.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.vscode.documentationTitle')}</h3>
            <p>${i18next.t('pages.vscode.documentationDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/vscode/qiskit-vscode-documentation.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-vscode-documentation.webm" type="video/webm">
              <source src="videos/qiskit-vscode-documentation.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.vscode.linterTitle')}</h3>
            <p>${i18next.t('pages.vscode.linterDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/vscode/qiskit-vscode-linter.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-vscode-linter.webm" type="video/webm">
              <source src="videos/qiskit-vscode-linter.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.vscode.snippetsTitle')}</h3>
            <p>${i18next.t('pages.vscode.snippetsDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/vscode/qiskit-vscode-snippet.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-vscode-snippet.webm" type="video/webm">
              <source src="videos/qiskit-vscode-snippet.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.vscode.integratedToolsTitle')}</h3>
            <p>${i18next.t('pages.vscode.integratedToolsDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/vscode/qiskit-vscode-integrated-tools.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-vscode-integrated-tools.webm" type="video/webm">
              <source src="videos/qiskit-vscode-integrated-tools.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>
    `;
  }

  _tooglePausedVideo(event) {
    const video = event.target;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}

window.customElements.define('page-vscode', PageVscode);
