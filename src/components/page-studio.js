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
import { githubIcon, visualstudiocodeIcon } from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';

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

        header > img {
          background-color: #FFFFFF;
          padding: 1.5em;
          box-sizing: border-box;
          border-radius: 50%;
        }

        section .row .description {
          font-size: 1.1em;
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
        <img src="images/studio/qiskit-studio-logo.png" alt="${i18next.t('pages.studio.altLogo')}">
        <div>
          <h1>${i18next.t('pages.studio.headerTitle')}</h1>
          <h2>${i18next.t('pages.studio.headerSubTitle')}</h2>
          <p>${i18next.t('pages.studio.headerDescription')}</p>
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
                href="https://marketplace.visualstudio.com/items?itemName=qiskit.qiskit-studio"
                target="_blank"
                rel="noopener">
              <img
                  src="https://vsmarketplacebadge.apphb.com/version/qiskit.qiskit-studio.svg"
                  alt="Qiskit Studio version badge"
                  width="198px"
                  height="20px">
            </a>
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.autocompleteTitle')}</h3>
            <p>${i18next.t('pages.studio.autocompleteDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-autocomplete.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-autocomplete.webm" type="video/webm">
              <source src="videos/qiskit-studio-autocomplete.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.documentationTitle')}</h3>
            <p>${i18next.t('pages.studio.documentationDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-documentation.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-documentation.webm" type="video/webm">
              <source src="videos/qiskit-studio-documentation.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.linterTitle')}</h3>
            <p>${i18next.t('pages.studio.linterDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-linter.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-linter.webm" type="video/webm">
              <source src="videos/qiskit-studio-linter.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section>
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.snippetsTitle')}</h3>
            <p>${i18next.t('pages.studio.snippetsDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-snippet.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-snippet.webm" type="video/webm">
              <source src="videos/qiskit-studio-snippet.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.integratedToolsTitle')}</h3>
            <p>${i18next.t('pages.studio.integratedToolsDescription')}</p>
          </div>
          <div class="illustration">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-integrated-tools.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-integrated-tools.webm" type="video/webm">
              <source src="videos/qiskit-studio-integrated-tools.mp4" type="video/mp4">
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

window.customElements.define('page-studio', PageStudio);
