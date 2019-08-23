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
import { trackClickEvent } from '../helpers/track-events.js';

class PageHome extends localize(i18next)(LitElement) {
  static get properties() {
    return {
      organizations: { type: Array },
      collaborators: { type: Array },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      HeaderStyles,
      SectionStyles,
      css`
        :host {
          --app-section-background-color: var(--app-primary-color);
        }

        .community .row .illustration {
          align-items: flex-start;
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
          padding: 1em;
          box-sizing: border-box;
          width: 100%;
        }

        .social-networks-list li a {
          display: inline-flex;
        }

        .social-networks-list li a svg {
          fill: var(--app-primary-color);
        }

        .social-networks-list li .social-network {
          display: inline-flex;
          align-items: center;
        }

        .social-networks-list li .social-network .name {
          margin-left: 0.5em;
        }

        .supporting .description {
          margin-bottom: 2em;
          font-size: 1.1em;
        }

        .supporting .description p {
          max-width: 576px;
        }

        .supporters-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .supporters-list li .supporter {
          display: inline-flex;
          flex-direction: column;
        }

        .supporters-list li + li {
          margin-top: 1em;
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
          font-size: 0.9em;
          font-weight: 300;
        }

        .colored-link {
          color: #fff;
          text-decoration: underline;
          font-style: italic;
        }

        @media (min-width: 400px) {
          .social-networks-list li {
            width: 50%;
          }
        }

        @media (min-width: 500px) {
          .supporters-list {
            column-count: 2;
            column-gap: 1em;
          }
        }

        @media (min-width: 560px) {
          .social-networks-list li {
            width: 33.333%;
          }
        }

        @media (min-width: 768px) {
          .news .row .illustration {
            align-items: center;
          }

          .social-networks-list li {
            width: 50%;
          }

          .supporters-list {
            column-count: 3;
          }
        }

        @media (min-width: 1024px) {
          .supporters-list {
            column-count: 4;
          }
        }
      `,
    ];
  }

  render() {
    // prettier-ignore
    return html`
      <header>
        <img src="images/qiskit-logo.png" .alt=${i18next.t('pages.home.altLogo')}>
        <div>
          <h1>
            ${i18next.t('pages.home.headerTitle')}
            <a
                href="https://pypi.python.org/pypi/qiskit"
                target="_blank"
                rel="noopener">
              <img
                  src="https://img.shields.io/pypi/v/qiskit.svg"
                  alt="Qiskit version badge"
                  width="78px"
                  height="20px">
            </a>
          </h1>
          <h2>${i18next.t('pages.home.headerSubTitle')}</h2>
          <div class="badges">
            <a
              href="https://github.com/Qiskit"
              target="_blank"
              rel="noopener"
              tabindex="-1"
              @click=${() => trackClickEvent({
                action: 'Qiskit GitHub Repository',
                objectType: 'Button'
              })}
            >
              <vaadin-button theme="secondary small" >${githubIcon} GitHub</vaadin-button>
            </a>
            <a
              href="https://join.slack.com/t/qiskit/shared_invite/enQtNjQ5OTc5ODM1ODYyLTBlMWY1ZGJiYmZkNjliZTY4MTViNTQ3NzI2ZmU2MzQxZjlhZDZlYTAzZTNlMDU0ZjVmNzEyMzY3OGE1Y2UyNjk"
              target="_blank"
              rel="noopener"
              tabindex="-1"
              @click=${() => trackClickEvent({
                  action: 'Qiskit Slack Community Channel',
                  objectType: 'Button'
              })}
            >
              <vaadin-button theme="secondary small">${slackIcon} ${i18next.t('joinSlack')}</vaadin-button>
            </a>
          </div>
        </div>
      </header>

      <section class="news">
        <div class="row limited-width">
          <div class="column">
            <div class="description">
              <h3>${i18next.t('pages.home.newsBox1Title')}</h3>
              <p>${i18next.t('pages.home.newsBox1Description')}</p>
              <div class="actions">
                <a
                  href="https://qiskit.org/documentation/release_notes.html#notable-changes"
                  target="_blank"		
                  rel="noopener"
                  tabindex="-1"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit 0.12 Release Notes',
                    objectType: 'Button'
                  })}
                >
                  <vaadin-button theme="secondary">${i18next.t('pages.home.newsBox1Button')}</vaadin-button>
                </a>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="description">
              <h3>${i18next.t('pages.home.newsBox2Title')}</h3>
              <p>${i18next.t('pages.home.newsBox2Description')}</p>
              <div class="actions">
                <a
                  href="https://www.youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY"
                  tabindex="-1"
                  @click=${() => trackClickEvent({
                    action: 'Coding with Qiskit Video Series',
                    objectType: 'Button'
                  })}
                >
                  <vaadin-button theme="secondary">${i18next.t('pages.home.newsBox2Button')}</vaadin-button>
                </a>
              </div>
            </div>
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
                href="https://www.research.ibm.com/ibm-q/technology/experience/"
                title="IBM Q Experience"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  action: 'Introducing Qiskit notebooks: Learn More',
                  objectType: 'Button'
                })}>
                <vaadin-button theme="secondary">${i18next.t('pages.home.ibmQExperienceButtonLearnMore')}</vaadin-button>
              </a>
              <a
                href="https://quantum-computing.ibm.com/login"
                title="IBM Q Experience"
                target="_blank"
                rel="noopener"
                tabindex="-1"
                @click=${() => trackClickEvent({
                  action: 'Introducing Qiskit notebooks: Try out',
                  objectType: 'Button'
                })}
              >
                <vaadin-button theme="secondary">${i18next.t('pages.home.ibmQExperienceButtonTryOut')}</vaadin-button>
              </a>
              </div>
          </div>
          <div class="illustration">
            <img src="images/qiskit-notebooks.jpg" .alt=${i18next.t('pages.home.ibmQExperienceAltImage')}>
          </div>
        </div>
      </section>

      <section class="community">
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
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: Slack',
                    objectType: 'Icon Button'
                  })}>
                  <div class="social-network">${slackIcon} <span class="name">Slack</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Qiskit"
                  title="GitHub organization"
                  target="_blank"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: GitHub',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${githubIcon} <span class="name">GitHub</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://quantumcomputing.stackexchange.com/questions/tagged/qiskit"
                  title="Stack Exchange community"
                  target="_blank"
                  rel="noopener"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: StackExchange',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${stackexchangeIcon} <span class="name">Stack Exchange</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Qiskit"
                  title="Twitter profile"
                  target="_blank"
                  rel="noopener"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: Twitter',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${twitterIcon} <span class="name">Twitter</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/Qiskit"
                  title="Medium profile"
                  target="_blank"
                  rel="noopener"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: Medium',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${mediumIcon} <span class="name">Medium</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/Qiskit"
                  title="YouTube channel"
                  target="_blank"
                  rel="noopener"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: Youtube',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${youtubeIcon} <span class="name">YouTube</span></div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Qiskit"
                  title="Facebook page"
                  target="_blank"
                  rel="noopener"
                  @click=${() => trackClickEvent({
                    action: 'Qiskit Community: Facebook',
                    objectType: 'Icon Button'
                  })}
                >
                  <div class="social-network">${facebookIcon} <span class="name">Facebook</span></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="citation colored">
        <div class="row limited-width">
          <div class="description">
            <h3>${i18next.t('pages.home.citationTitle')}</h3>
            <p>
              ${i18next.t('pages.home.citationDescription')}
              <a
                class="colored-link"
                href="https://raw.githubusercontent.com/Qiskit/qiskit/master/Qiskit.bib"
                title="BibTeX"
                target="_blank"
                rel="noopener"
                @click=${() => trackClickEvent({
                  action: 'Citation: BibTex File',
                  objectType: 'Link'
                })}
              >
                  ${i18next.t('pages.home.bibtexLink')}
              </a>
            </p>
          </div>
        </div>
      </section>
    `;
  }

  constructor() {
    super();

    this.organizations = organizations;
    this.collaborators = collaborators;
  }
}

window.customElements.define('page-home', PageHome);
