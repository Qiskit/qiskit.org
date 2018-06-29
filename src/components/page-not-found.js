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

import { SharedStyles } from './app-shared-styles.js';

class PageNotFound extends PageViewElement {
  _render(props) {
    return html`
      ${SharedStyles}
      <section>
        <h2>Sorry, that page doesn't exist!</h2>
        <p>
          <a href="/">Return to the homepage</a>
        </p>
      </section>
    `;
  }
}

window.customElements.define('page-not-found', PageNotFound);
