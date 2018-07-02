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
          display: flex;
          flex-direction: column;
        }

        .architecture .representation {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2em;
        }

        .architecture .representation img.qiskit-and-ibm-q {
          height: 256px;
          border-bottom: 2px dashed #999999;
          margin-bottom: 2em;
          padding: 0 2em 2em;
        }

        .architecture .representation img.qiskit-architecture {
          width: 256px;
          height: 256px;
          background-color: #292C35;
          padding: 1em;
          box-sizing: border-box;
          border-radius: 50%;
        }

        .community {
          display: flex;
          flex-direction: column;
        }

        .community .description {
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

        .imb-q-experience .description {
          margin-bottom: 2em;
        }

        .imb-q-experience .image img {
          max-width: 100%;
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
          .architecture .representation {
            flex-direction: row;
            justify-content: center;
          }

          .architecture .representation img.qiskit-and-ibm-q {
            border-bottom: 0;
            margin-bottom: 0;
            border-right: 2px dashed #999999;
            margin-right: 2em;
            padding: .5em 2em .5em 0;
          }

          .supporters-list {
            column-count: 2;
            column-gap: 1em;
          }
        }

        @media (min-width: 768px) {
          .architecture {
            flex-direction: row;
          }

          .architecture .representation {
            margin-bottom: 0;
          }

          .architecture .description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 1;
            margin-left: 2em;
          }

          .community {
            flex-direction: row;
          }

          .community .description {
            margin-bottom: 0;
            flex: 3;
            margin-right: 2em;
          }

          .community .social-networks {
            flex: 2;
          }

          .social-networks-list {
            margin: 0;
          }

          .imb-q-experience {
            flex-direction: row;
          }

          .imb-q-experience .description {
            margin-bottom: 0;
            flex: 3;
            margin-right: 2em;
          }

          .imb-q-experience .image {
            flex: 2;
          }

          .supporters-list {
            column-count: 3;
          }
        }

        @media (min-width: 1024px) {
          .architecture .representation img.qiskit-and-ibm-q {
            margin-right: 4em;
            padding: .5em 4em .5em 0;
          }

          .architecture .description {
            margin-left: 4em;
          }

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
        </div>
      </header>

      <section class="architecture colored">
        <div class="limited-width">
          <div class="representation">
            <img src="images/qiskit-and-ibm-q.png" alt="" class="qiskit-and-ibm-q">
            <!-- TODO: Change image to HTML -->
            <img src="images/qiskit-architecture.png" alt="" class="qiskit-architecture">
          </div>
          <div class="description">
            <h3>${i18next.t('pages.home.architectureTitle')}</h3>
            <p>${i18next.t('pages.home.architectureDescription')}</p>
          </div>
        </div>
      </section>

      <section class="community">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.communityTitle')}</h3>
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
      </section>

      <section class="imb-q-experience colored">
        <div class="limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.ibmQExperienceTitle')}</h3>
            <p>${i18next.t('pages.home.ibmQExperienceDescription')}</p>
            <a
                href="https://quantumexperience.ng.bluemix.net/qx/editor"
                title="IBM Q Experience"
                target="_blank"
                rel="noopener"
                tabindex="-1">
              <!-- TODO: Update button -->
              <button>${i18next.t('pages.home.ibmQExperienceButton')}</button>
            </a>
          </div>
          <div class="image">
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
