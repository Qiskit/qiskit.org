/**
 * @license
 *
 * Copyright (c) 2019, IBM.
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
} from './app-shared-styles.js';
import './vaadin-ibmq-styles/vaadin-button.js';

class PageCommunity extends localize(i18next)(LitElement) {
  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      css`
        :host {
          --app-section-background-color: var(--app-primary-color);
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.community.qcampTitle')}</h3>
            <p>${i18next.t('pages.community.qcampDescription')}</p>
            <div class="actions">
              <a href="//qiskit.camp" target="_blank" rel="noopener" tabindex="-1">
                <vaadin-button theme="secondary">${i18next.t('pages.community.qcampButton')}
                </vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/community/img-qcamp.jpg" .alt=${i18next.t('pages.community.qcampAltImage')}>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.community.contributionTitle')}</h3>
            <p>${i18next.t('pages.community.contributionDescription')}</p>
            <div class="actions">
              <a href="https://helloquantum.mybluemix.net" target="_blank" rel="noopener"
                tabindex="-1">
                <vaadin-button theme="secondary">
                  ${i18next.t('pages.community.contributionButton')}
                </vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/hello-quantum.png"
              .alt=${i18next.t('pages.fun.helloQuantumAltImage')}>
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.community.roadmapTitle')}</h3>
            <p>${i18next.t('pages.community.roadmapDescription')}</p>
            <div class="actions">
              <a href="https://entanglion.github.io" target="_blank" rel="noopener"
                tabindex="-1">
                <vaadin-button theme="secondary">
                  ${i18next.t('pages.community.roadmapButton')}
                </vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/entanglion.png"
              .alt=${i18next.t('pages.fun.entanglionAltImage')}>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.community.groupsTitle')}</h3>
            <p>${i18next.t('pages.community.groupsDescription')}</p>
            <div class="actions">
              <a href="https://helloquantum.mybluemix.net" target="_blank" rel="noopener"
                tabindex="-1">
                <vaadin-button theme="secondary">
                  ${i18next.t('pages.community.groupsButton')}
                </vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/fun/hello-quantum.png"
              .alt=${i18next.t('pages.fun.helloQuantumAltImage')}>
          </div>
        </div>
      </section>
      `;
  }
}

window.customElements.define('page-community', PageCommunity);
