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
import {
  facebookIcon,
  githubIcon,
  mediumIcon,
  slackIcon,
  stackexchangeIcon,
  twitterIcon,
  youtubeIcon,
} from './app-icons.js';
import './vaadin-ibmq-styles/vaadin-button.js';

import { organizations, collaborators } from '../../data/supporters.js';

class PageHome extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    const supportersListTemplate = html`
      <ul class="supporters-list">
        ${props._organizations.map(organization => html`
          <li>
            ${organization.url
              ? html`
                <a href="${organization.url}" target="_blank" rel="noopener">
                  <span class="name">${organization.name}</span>
                </a>
              ` : html`
                ${organization.name}
              `
            }
          </li>
        `)}
        ${props._collaborators.map(collaborator => html`
          <li>
            ${collaborator.url
              ? html`
                <a href="${collaborator.url}" target="_blank" rel="noopener">
                  <span class="name">${collaborator.name}</span>
                  <span class="institution">${collaborator.institution}</span>
                </a>
              ` : html`
                <span class="name">${collaborator.name}</span>
                <span class="institution">${collaborator.institution}</span>
              `
            }
          </li>
        `)}
      </ul>
    `;

    // prettier-ignore
    return html`
      ${SharedStyles}
      ${HeaderStyles}
      ${SectionStyles}
      <style>
        :host {
          --app-section-background-color: var(--app-primary-color);
        }

        .architecture {
          background-color: #292C35;
          color: #FFFFFF;
        }

        .architecture .illustration img {
          width: 300px;
          height: 300px;
        }

        .social-networks-list {
          list-style: none;
          padding: 0;
          margin: -1em;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .social-networks-list li {
          display: inline-flex;
          margin: 1em;
        }

        .social-networks-list li a {
          display: inline-flex;
        }

        .social-networks-list li a svg {
          fill: var(--app-light-primary-color);
        }

        .social-networks-list li .social-network {
          display: inline-flex;
          align-items: center;
        }

        .social-networks-list li .social-network .name {
          margin-left: .5em;
        }

        .supporting .description {
          margin-bottom: 2em;
        }

        .supporters-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .supporters-list li {
          margin-top: 1em;
        }

        .supporters-list li:first-of-type {
          margin-top: 0;
        }

        .supporters-list li a {
          display: inline-flex;
          flex-direction: column;
        }

        .supporters-list li .name,
        .supporters-list li .institution {
          display: block;
        }

        .supporters-list li .institution {
          font-size: .9em;
          font-weight: 300;
        }

        @media (min-width: 500px) {
          .supporters-list {
            column-count: 2;
            column-gap: 1em;
          }
        }

        @media (min-width: 768px) {
          .supporters-list {
            column-count: 3;
          }
        }

        @media (min-width: 1024px) {
          .supporters-list {
            column-count: 4;
          }
        }
      </style>

      <header>
        <img src="images/qiskit-logo.gif" alt="${i18next.t('pages.home.altLogo')}">
        <div>
          <h1>${i18next.t('pages.home.headerTitle')}</h1>
          <h2>${i18next.t('pages.home.headerSubTitle')}</h2>
          <p>${i18next.t('pages.home.headerDescription')}</p>
          <div class="badges">
            <a
                href="https://github.com/Qiskit"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${githubIcon}
                GitHub
              </vaadin-button>
            </a>
            <a
                href="https://join.slack.com/t/qiskit/shared_invite/enQtMzYyMjY5Nzg2ODk4LTNkMWNmMjc3N2E0ZTdlNzg1Mzk4MDY4YjFlNWZmNTdmZTFkMDFmMjVjZTIxZThjMTlhMjA2MmQxYTViMzhiNzE"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <vaadin-button theme="secondary small">
                ${slackIcon}
                Join Slack community
              </vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="news colored">
        <div class="limited-width">
        </div>
      </section>

      <section class="architecture">
        <div class="row reverse limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.architectureTitle')}</h3>
            <p>${i18next.t('pages.home.architectureDescription')}</p>
          </div>
          <div class="illustration">
            <!-- TODO: Change image to HTML -->
            <img src="images/qiskit-architecture.png" alt="" class="qiskit-architecture">
          </div>
        </div>
      </section>

      <section>
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.communityTitle')}</h3>
            <p>${i18next.t('pages.home.communityDescription')}</p>
          </div>
          <div class="illustration">
            <ul class="social-networks-list">
              <li>
                <a
                    href="https://qiskit.slack.com"
                    title="Slack community"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${slackIcon}
                    <span class="name">Slack</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://github.com/Qiskit"
                    title="GitHub organization"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${githubIcon}
                    <span class="name">GitHub</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://quantumcomputing.stackexchange.com/search?q=qiskit"
                    title="Stack Exchange community"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${stackexchangeIcon}
                    <span class="name">Stack Exchange</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://twitter.com/Qiskit"
                    title="Twitter profile"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${twitterIcon}
                    <span class="name">Twitter</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://medium.com/@Qiskit"
                    title="Medium profile"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${mediumIcon}
                    <span class="name">Medium</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://www.youtube.com/channel/UCPng8PUDVMAukVKeFppFMzw"
                    title="YouTube channel"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${youtubeIcon}
                    <span class="name">YouTube</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                    href="https://www.facebook.com/Qiskit"
                    title="Facebook page"
                    target="_blank"
                    rel="noopener">
                  <div class="social-network">
                    ${facebookIcon}
                    <span class="name">Facebook</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.ibmQExperienceTitle')}</h3>
            <p>${i18next.t('pages.home.ibmQExperienceDescription')}</p>
            <div class="actions">
              <a
                  href="https://quantumexperience.ng.bluemix.net/qx/editor"
                  title="IBM Q Experience"
                  target="_blank"
                  rel="noopener"
                  tabindex="-1">
                <vaadin-button theme="secondary">${i18next.t('pages.home.ibmQExperienceButton')}</vaadin-button>
              </a>
            </div>
          </div>
          <div class="illustration">
            <img src="images/ibm-q-experience.png" alt="${i18next.t('pages.home.ibmQExperienceAltImage')}">
          </div>
        </div>
      </section>

      <section class="supporting">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.supportingTitle')}</h3>
            <p>${i18next.t('pages.home.supportingDescription')}</p>
          </div>
          ${supportersListTemplate}
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      _organizations: Array,
      _collaborators: Array,
    };
  }

  constructor() {
    super();

    this._organizations = organizations;
    this._collaborators = collaborators;
  }
}

window.customElements.define('page-home', PageHome);
