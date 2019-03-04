/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { localize } from '../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../i18next.js';
import { store } from '../store.js';

// These are the actions needed by this element.
import { navigate, updateDrawerState } from '../actions/app.js';

import { SharedStyles } from './app-shared-styles.js';

class AppShell extends localize(i18next)(connect(store)(LitElement)) {
  static get properties() {
    return {
      page: { type: String },
      drawerOpened: { type: Boolean },
    };
  }

  static get styles() {
    return [
      SharedStyles,
      css`
        :host {
          --app-primary-color: #8a3ffc;
          --app-secondary-color: #242a2e;
          --app-header-color: #21252b;

          --qiskit-terra-color: #8c8c8c;
          --qiskit-aqua-color: #30b0ff;
          --qiskit-aer-color: #b3e6ff;
          --qiskit-ignis-color: #20d5d2;

          --qiskit-vscode-color: #f5f5f5;

          --app-drawer-width: 256px;

          display: flex;
          flex-direction: column;
          flex-grow: 1;
          min-height: 100vh;
          max-width: 100vw;
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

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        .menu-btn {
          background: none;
          border: none;
          fill: #ffffff;
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        footer {
          display: flex;
          background-color: #21252b;
          color: #ffffff;
          height: 80px;
          border-top: 1px solid #181b20;
        }

        footer .limited-width {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        footer .limited-width .language-selector span {
          padding: 0 0.2em;
          cursor: pointer;
        }

        footer .limited-width .language-selector span:hover {
          text-decoration: underline;
        }

        @media (min-width: 768px) {
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
    const currentYear = new Date().getFullYear();
    const menuIcon = html`
      <svg height="24" viewBox="0 0 24 24" width="24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    `;

    // prettier-ignore
    return html`
      <header>
        <app-toolbar class="toolbar-top">
          <button class="menu-btn" title="Menu" @click="${this.menuButtonClicked}">${menuIcon}</button>
          <a href="/" class="home">Qiskit ™</a>
        </app-toolbar>

        <!-- This gets hidden on a small screen-->
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
                target="_blank">
              ${i18next.t('tutorials')}
            </a>
            <a href="/documentation">${i18next.t('documentation')}</a>
            <a href="/vscode" ?selected=${this.page === 'vscode'}>${i18next.t('tools')}</a>
            <a href="/fun" ?selected=${this.page === 'fun'}>${i18next.t('fun')}</a>
          </nav>
        </div>
      </header>

      <app-drawer
          .opened="${this.drawerOpened}"
          @opened-changed="${this.drawerOpenedChanged}">
        <nav class="drawer-list">
          <span>Elements</span>
          <a ?selected="${this.page === 'terra'}" href="/terra">Terra</a>
          <a ?selected="${this.page === 'aer'}" href="/aer">Aer</a>
          <a ?selected="${this.page === 'aqua'}" href="/aqua">Aqua</a>

          <span>Tools</span>
          <a
              href="https://nbviewer.jupyter.org/github/Qiskit/qiskit-tutorial/blob/master/index.ipynb"
              rel="noopener"
              target="_blank">
            ${i18next.t('tutorials')}
          </a>
          <a href="/documentation">${i18next.t('documentation')}</a>
          <a href="/vscode" ?selected=${this.page === 'vscode'}>${i18next.t('tools')}</a>
          <a href="/fun" ?selected=${this.page === 'fun'}>${i18next.t('fun')}</a>
        </nav>
      </app-drawer>

      <main role="main">
        <!-- added / removed dynamically by the router -->
      </main>

      <footer>
        <div class="limited-width">
          <div class="language-selector">
            <select
                @change=${this.changeLanguage}
                aria-label="Language"
                .value=${i18next.languages[0]}>
              <option value="en" ?selected=${i18next.languages[0] === 'en'}>English</option>
              <option value="de" ?selected=${i18next.languages[0] === 'de'}>German</option>
              <!-- <option value="ja" ?selected=${i18next.languages[0] === 'ja'}>Japanese</option> -->
            </select>
          </div>
          <div class="copyright">© ${currentYear} IBM</div>
        </div>
      </footer>
    `;
  }

  constructor() {
    super();

    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    window.addEventListener('vaadin-router-location-changed', event =>
      store.dispatch(navigate(event.detail.location)),
    );

    // To have better first-load performance, defer loading all routing code
    // until after the app shell is rendered.
    import('../router.js').then(routing => {
      routing.init(this.shadowRoot.querySelector('main'));
    });

    installMediaQueryWatcher(`(min-width: 768px)`, () =>
      store.dispatch(updateDrawerState(false)),
    );
  }

  updated(changedProperties) {
    if (changedProperties.has('page')) {
      updateMetadata({
        title: i18next.t(`pages.${this.page}.metaTitle`),
        description: i18next.t(`pages.${this.page}.metaDescription`),
      });
    }
  }

  stateChanged(state) {
    this.page = state.app.page;
    this.drawerOpened = state.app.drawerOpened;
  }

  changeLanguage(event) {
    i18next.changeLanguage(event.target.value);
  }

  menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.opened));
  }
}

window.customElements.define('app-shell', AppShell);
