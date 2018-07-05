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

        .feature .representation img,
        .feature .representation video {
          max-width: 100%;
        }

        .feature .description {
          font-size: 1.1em;
          margin-bottom: 2em;
        }

        @media (min-width: 768px) {
          .feature {
            flex-direction: row;
          }

          .feature.reverse {
            flex-direction: row-reverse;
          }

          .feature .description {
            margin-bottom: 0;
            flex: 7;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .feature .description {
            margin-right: 2em;
          }

          .feature.reverse .description {
            margin-right: 0;
            margin-left: 2em;
          }

          .feature .representation {
            flex: 8;
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
                href="https://github.com/Qiskit/qiskit-studio"
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
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${visualstudiocodeIcon}
                Visual Studio marketplace
              </vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="feature colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.autocompleteTitle')}</h3>
            <p>${i18next.t('pages.studio.autocompleteDescription')}</p>
          </div>
          <div class="representation">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-autocomplete.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-autocomplete.webm" type="video/webm">
              <source src="videos/qiskit-studio-autocomplete.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature reverse">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.documentationTitle')}</h3>
            <p>${i18next.t('pages.studio.documentationDescription')}</p>
          </div>
          <div class="representation">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-documentation.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-documentation.webm" type="video/webm">
              <source src="videos/qiskit-studio-documentation.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.linterTitle')}</h3>
            <p>${i18next.t('pages.studio.linterDescription')}</p>
          </div>
          <div class="representation">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-linter.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-linter.webm" type="video/webm">
              <source src="videos/qiskit-studio-linter.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature reverse">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.snippetsTitle')}</h3>
            <p>${i18next.t('pages.studio.snippetsDescription')}</p>
          </div>
          <div class="representation">
            <video autoplay loop muted playsinline disableRemotePlayback
                poster="images/studio/qiskit-studio-snippet.jpg"
                on-click="${event => this._tooglePausedVideo(event)}">
              <source src="videos/qiskit-studio-snippet.webm" type="video/webm">
              <source src="videos/qiskit-studio-snippet.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>

      <section class="feature colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.studio.integratedToolsTitle')}</h3>
            <p>${i18next.t('pages.studio.integratedToolsDescription')}</p>
          </div>
          <div class="representation">
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
