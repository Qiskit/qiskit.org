/**
 * @license
 *
 * Copyright (c) 2019, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { localize } from '../../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../../i18next.js';
import { SharedStyles } from '../app-shared-styles.js';

class QiskitWebHeader extends localize(i18next)(LitElement) {
  static get properties() {
    return {
      drawerOpened: {
        type: Boolean,
      },
      page: {
        type: String,
      },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          --app-header-color: #21252b;
          --app-drawer-width: 256px;
        }

        header {
          display: flex;
          background-color: var(--app-header-color);
          height: 60px;
          border-bottom: 1px solid #181b20;
        }

        app-drawer {
          z-index: 1000;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-header-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: #ffffff;
          line-height: 40px;
          padding: 0 24px;
        }

        .drawer-list > span {
          color: gray;
          display: block;
          font-size: 0.9em;
          padding: 1em;
        }

        .toolbar {
          display: none;
        }

        .toolbar a {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          padding: 0 1em;
          font-weight: 300;
          color: #ffffff;
          flex: none;
        }

        .toolbar > a.home {
          font-weight: 500;
          margin-left: -1em; /* Reduce the 1em padding from the <a> */
        }

        .toolbar nav,
        .toolbar-top {
          display: flex;
        }

        .toolbar nav.first::before {
          content: '';
          width: 2px;
          background-color: rgba(255, 255, 255, 0.3);
          margin: 12px 10px;
        }

        .toolbar nav.second {
          margin-left: auto;
        }

        .toolbar nav a {
          position: relative;
        }

        .toolbar nav > a[selected]::after {
          content: '';
          height: 2px;
          background-color: #ffffff;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .toolbar-top > a.home {
          color: #ffffff;
          font-weight: 500;
        }

        .menu-btn {
          background: none;
          border: none;
          fill: #ffffff;
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        @media (min-width: 895px) {
          .toolbar {
            display: flex;
            flex-grow: 1;
            box-sizing: border-box;
            position: relative;
          }

          .toolbar-top {
            display: none;
          }
        }
      `,
    ];
  }

  render() {
    const menuIcon = html`
      <svg height="24" viewBox="0 0 24 24" width="24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    `;

    // prettier ignore
    return html`
      <header>
        <app-toolbar class="toolbar-top">
          <button
            class="menu-btn"
            title="Menu"
            @click="${this.menuButtonClicked}"
          >
            ${menuIcon}
          </button>
          <a href="/" class="home">Qiskit ™</a>
        </app-toolbar>

        <div class="toolbar limited-width">
          <a href="/" class="home">Qiskit ™</a>
          <nav class="first">
            <a href="/terra" ?selected=${this.page === 'terra'}>Terra</a>
            <a href="/aer" ?selected=${this.page === 'aer'}>Aer</a>
            <a href="/aqua" ?selected=${this.page === 'aqua'}>Aqua</a>
            <a href="/ignis" ?selected=${this.page === 'ignis'}>Ignis</a>
          </nav>
          <nav class="second">
            <a
              href="https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorial/blob/master/index.ipynb"
              rel="noopener"
              target="_blank"
            >
              ${i18next.t('tutorials')}
            </a>
            <a href="/documentation">${i18next.t('documentation')}</a>
            <a href="/vscode" ?selected=${this.page === 'vscode'}
              >${i18next.t('tools')}</a
            >
            <a href="/fun" ?selected=${this.page === 'fun'}
              >${i18next.t('fun')}</a
            >
          </nav>
        </div>
      </header>

      <app-drawer
        .opened="${this.drawerOpened}"
        @opened-changed="${this.drawerOpenedChanged}"
      >
        <nav class="drawer-list">
          <span>Elements</span>
          <a href="/terra" ?selected=${this.page === 'terra'}>Terra</a>
          <a href="/aer" ?selected=${this.page === 'aer'}>Aer</a>
          <a href="/aqua" ?selected=${this.page === 'aqua'}>Aqua</a>
          <a href="/ignis" ?selected=${this.page === 'ignis'}>Ignis</a>
          <span>Tools</span>
          <a
            href="https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorial/blob/master/index.ipynb"
            rel="noopener"
            target="_blank"
          >
            ${i18next.t('tutorials')}
          </a>
          <a href="/documentation">${i18next.t('documentation')}</a>
          <a href="/vscode" ?selected=${this.page === 'vscode'}
            >${i18next.t('tools')}</a
          >
          <a href="/fun" ?selected=${this.page === 'fun'}
            >${i18next.t('fun')}</a
          >
        </nav>
      </app-drawer>
    `;
  }

  constructor() {
    super();
    this.drawerOpened = false;
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installMediaQueryWatcher(`(min-width: 895px)`, () => {
      this.drawerOpened = false;
    });
  }

  menuButtonClicked() {
    this.drawerOpened = !this.drawerOpened;
  }

  drawerOpenedChanged(e) {
    this.drawerOpened = e.target.opened;
  }
}

window.customElements.define('qiskit-web-header', QiskitWebHeader);
