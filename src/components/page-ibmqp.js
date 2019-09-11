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

class PageIBMQP extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      SectionElementStyles,
      StackListStyles,
      css`
        :host {
          --app-section-background-color: var(--qiskit-common-background-color);
          --app-section-color: #000000;
        }

        header {
          background-color: var(--qiskit-ibmqp-color);
        }

        section.colored .row .description .actions vaadin-button {
          --ibmq-button-secondary-color: #000000;
          --ibmq-button-secondary-focus-color: var(--qiskit-ibmqp-color);
        }

        .colored-link {
          color: #000;
          text-decoration: underline;
          font-style: italic;
        }

        .stack-list .element.dot::before {
          width: 0.682em;
          height: 0.682em;
          border-radius: 50%;
          left: -1.4em;
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <header>
        <img src="images/qiskit-ibmqp-logo.svg" .alt=${i18next.t('pages.ibmqp.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.ibmqp.headerTitle')}
          </h1>
          <h2>${i18next.t('pages.ibmqp.headerSubTitle')}</h2>
          <div class="badges">
            <a
              href="https://github.com/Qiskit/qiskit-ibmq-provider"
              target="_blank"
              rel="noopener"
              @click=${() => trackClickEvent({
                action: 'IBM Q Account: GitHub Repository',
                objectType: 'Button'
              })}
            >
              <vaadin-button theme="secondary small">${githubIcon} GitHub</vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.ibmqp.aboutTitle')}</h3>
            <p>
              ${i18next.t('pages.ibmqp.aboutDescription')}
              <a
                class="colored-link"
                href="https://qiskit.org/documentation/install.html#access-ibm-q-systems"
                title="Link"
                rel="noopener"
                target="_blank"
                @click=${() => trackClickEvent({
                  action: 'Link to Access IBMQ Systems',
                  objectType: 'Link'
                })}
              >
                ${i18next.t('pages.ibmqp.addLink')}
              </a>
              ${i18next.t('pages.ibmqp.textAfterLink')}
            </p>
            <!-- Insert stack h3 here -->
            <!-- <div class="stack-list">
              <div class="element">
                <div class="title">Qiskit Ingis Experiments</div>
                <div class="subtitle">List of Quantum Circuits or Pulse Schedules</div>
              </div>
              <div class="element">
                <div class="title">Qiskit Terra</div>
                <div class="subtitle">Compile Circuits or Schedules</div>
              </div>
              <div class="element">
                <div class="title">Providers</div>
                <div class="subtitle">Qiskit Aer, IBM Q, Third Party</div>
              </div>
              <div class="element dot">
                <div class="title">Fitter/Filter</div>
                <div class="subtitle">Fit to a Model/Plot Results</div>
              </div>
            </div> -->
          </div>
          <div class="illustration">
            <h3>${i18next.t('pages.ibmqp.exampleTitle')}</h3>
            <code-sample
              type="python"
              copy-clipboard-button
              @click=${() => trackClickEvent({
                action: 'IBM Q Account: Copy Code Sample',
                objectType: 'Button'
              })}
            >
              <!-- htmlmin:ignore -->
              <template>
              from qiskit import IBMQ
              from qiskit.providers.ibmq import least_busy

              # Load local account information
              provider = IBMQ.load_account()

              # Get the least busy real quantum system
              backend = least_busy(provider.backends(simulator=False))
              print(backend, backend.status().pending_jobs)

              </template>
              <!-- htmlmin:ignore -->
            </code-sample>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('page-ibmqp', PageIBMQP);
