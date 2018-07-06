/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement, html } from '@polymer/lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { localize } from '../pwa-helpers/localize-mixin.js';

import { i18next } from '../i18next.js';
import { store } from '../store.js';

// These are the actions needed by this element.
import { navigate } from '../actions/app.js';

import { SharedStyles } from './app-shared-styles.js';

class AppShell extends localize(i18next)(connect(store)(LitElement)) {
  _render(props) {
    // prettier-ignore
    return html`
      ${SharedStyles}
      <style>
        :host {
          --app-primary-color: #7B34A1;
          --app-light-primary-color: #913DBE;
          --app-dark-primary-color: #6D2E8E;

          --qiskit-terra-color: #59991C;
          --qiskit-acqua-color: #00CCFF;
          --qiskit-studio-color: #F5F5F5;

          display: flex;
          flex-direction: column;
          flex-grow: 1;
          min-height: 100vh;
          max-width: 100vw;
        }

        header {
          display: flex;
          background-color: #21252b;
          height: 60px;
          border-bottom: 1px solid #181B20;
        }

        .toolbar {
          display: flex;
          flex-grow: 1;
          box-sizing: border-box;
        }

        .toolbar a {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          padding: 0 1em;
          font-weight: 300;
          color: #FFFFFF;
        }

        .toolbar > a.home {
          font-weight: 500;
          margin-left: -1em; /* Reduce the 1em padding from the <a> */
        }

        .toolbar nav {
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
          background-color: #FFFFFF;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        main > * {
          display: none;
        }

        main > *[active] {
          display: flex;
          flex-direction: column;
        }

        footer {
          display: flex;
          background-color: #21252B;
          color: #FFFFFF;
          height: 80px;
          border-top: 1px solid #181B20;
        }

        footer .limited-width {
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }

        footer .limited-width .language-selector span {
          padding: 0 .2em;
          cursor: pointer;
        }

        footer .limited-width .language-selector span:hover {
          text-decoration: underline;
        }
      </style>

      <header>
        <div class="toolbar limited-width">
          <a href="/" class="home">Qiskit ™</a>
          <nav class="first">
            <a href="/terra" selected?="${props._page === 'terra'}">Terra</a>
            <a href="/acqua" selected?="${props._page === 'acqua'}">Acqua</a>
          </nav>
          <nav class="second">
            <a href="/studio" selected?="${props._page === 'studio'}">Tools</a>
          </nav>
        </div>
      </header>

      <main role="main">
        <page-home active?="${props._page === 'home'}"></page-home>
        <page-terra active?="${props._page === 'terra'}"></page-terra>
        <page-acqua active?="${props._page === 'acqua'}"></page-acqua>
        <page-studio active?="${props._page === 'studio'}"></page-studio>
        <page-not-found active?="${props._page === 'notFound'}"></page-not-found>
      </main>

      <footer>
        <div class="limited-width">
          <div class="language-selector">
            <select
                on-change="${event => i18next.changeLanguage(event.target.value)}"
                aria-label="Language"
                value="${i18next.languages[0]}">
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="ja">Japanese</option>
            </select>
          </div>
          <div class="copyright">© 2018 IBM</div>
        </div>
      </footer>
    `;
  }

  static get properties() {
    return {
      _page: String,
    };
  }

  constructor() {
    super();

    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  _firstRendered() {
    installRouter((location, event) => {
      // Only scroll to top on link clicks, not popstate events.
      if (event && event.type === 'click') {
        window.scrollTo(0, 0);
      }

      store.dispatch(navigate(window.decodeURIComponent(location.pathname)));
    });
  }

  _didRender(properties, changeList) {
    if (changeList && '_page' in changeList) {
      updateMetadata({
        title: i18next.t(`pages.${changeList._page}.metaTitle`),
        description: i18next.t(`pages.${changeList._page}.metaDescription`),
      });
    }
  }

  _stateChanged(state) {
    this._page = state.app.page;
  }
}

window.customElements.define('app-shell', AppShell);
