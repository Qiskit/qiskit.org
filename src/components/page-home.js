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

import { organizations, collaborators } from '../../data/supporters.js';

class PageHome extends localize(i18next)(PageViewElement) {
  _render(props) {
    // prettier-ignore
    const supportersListTemplate = html`
      <style>
        .supporters-list {
          list-style: none;
          padding: 0;
          margin: 1em 0 0;
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

        .architecture .content {
          display: flex;
          flex-direction: column;
        }

        .architecture .content .representation {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .architecture .content .representation img.qiskit-and-ibm-q {
          height: 256px;
          border-bottom: 2px dashed #999999;
          margin-bottom: 2em;
          padding: 0 2em 2em;
        }

        .architecture .content .representation img.qiskit-architecture {
          width: 256px;
          height: 256px;
          background-color: #292C35;
          padding: 1em;
          box-sizing: border-box;
          border-radius: 50%;
        }

        .community .content {
          display: flex;
          flex-direction: column;
        }

        .community .content .description {
          margin-bottom: 2em;
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

        .social-networks-list li .social-network {
          display: inline-flex;
          align-items: center;
        }

        .social-networks-list li .social-network .name {
          margin-left: .5em;
        }

        .supporting .content + .content {
          margin-top: 1em;
        }

        @media (min-width: 500px) {
          .architecture .content .representation {
            flex-direction: row;
            justify-content: center;
            margin-bottom: 2em;
          }

          .architecture .content .representation img.qiskit-and-ibm-q {
            border-bottom: 0;
            margin-bottom: 0;
            border-right: 2px dashed #999999;
            margin-right: 2em;
            padding: .5em 2em .5em 0;
          }
        }

        @media (min-width: 768px) {
          .architecture .content {
            flex-direction: row;
            justify-content: space-between;
          }

          .architecture .content .representation {
            margin-bottom: 0;
          }

          .architecture .content .description {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-grow: 1;
            margin-left: 2em;
            max-width: 450px;
          }

          .community .content {
            flex-direction: row;
          }

          .community .content .description {
            margin-bottom: 0;
            flex: 3;
            margin-right: 2em;
          }

          .community .content .social-networks {
            flex: 2;
          }
        }

        @media (min-width: 1024px) {
          .architecture .content .representation img.qiskit-and-ibm-q {
            margin-right: 4em;
            padding: .5em 4em .5em 0;
          }
        }
      </style>

      <header>
        <img src="images/qiskit-logo.gif" alt="${i18next.t('pages.home.altLogo')}">
        <div>
          <h1>${i18next.t('pages.home.headerTitle')}</h1>
          <h2>${i18next.t('pages.home.headerSubTitle')}</h2>
          <p>${i18next.t('pages.home.headerDescription')}</p>
        </div>
      </header>

      <section class="architecture colored">
        <div class="limited-width">
          <div class="content">
            <div class="representation">
              <img src="images/qiskit-and-ibm-q.png" alt="" class="qiskit-and-ibm-q">
              <img src="images/qiskit-architecture.png" alt="" class="qiskit-architecture">
            </div>
            <div class="description">
              <p>${i18next.t('pages.home.architectureDescription')}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="community">
        <div class="limited-width">
          <h3>${i18next.t('pages.home.communityTitle')}</h3>
          <div class="content">
            <div class="description">
              <p>${i18next.t('pages.home.communityDescription')}</p>
            </div>
            <div class="social-networks">
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
        </div>
      </section>

      <section class="colored">
        <div class="limited-width">
          <h3>${i18next.t('pages.home.learnTitle')}</h3>
          <div class="content">
          </div>
        </div>
      </section>

      <section class="supporting">
        <div class="limited-width">
          <h3>${i18next.t('pages.home.supportingTitle')}</h3>
          <div class="content">
            <div class="description">
              <p>${i18next.t('pages.home.supportingDescription')}</p>
            </div>
          </div>
          <div class="content">
            ${supportersListTemplate}
          </div>
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
