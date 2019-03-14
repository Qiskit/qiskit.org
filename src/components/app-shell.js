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
import { connect } from 'pwa-helpers/connect-mixin.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { localize } from '../pwa-helpers/i18next-localize-mixin.js';

import { i18next } from '../i18next.js';
import { store } from '../store.js';

// These are the actions needed by this element.
import { navigate } from '../actions/app.js';

import { SharedStyles } from './app-shared-styles.js';
import './qiskit-web-components/qiskit-web-header.js';

class AppShell extends localize(i18next)(connect(store)(LitElement)) {
  static get properties() {
    return {
      page: { type: String },
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

          display: flex;
          flex-direction: column;
          flex-grow: 1;
          min-height: 100vh;
          max-width: 100vw;
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
      `,
    ];
  }

  render() {
    const currentYear = new Date().getFullYear();

    // prettier-ignore
    return html`
      <qiskit-web-header></qiskit-web-header>

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
}

window.customElements.define('app-shell', AppShell);
