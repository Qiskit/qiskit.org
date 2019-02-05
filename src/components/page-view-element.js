/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

import { LitElement } from 'lit-element';

import { i18next } from '../i18next.js';

export class PageViewElement extends LitElement {
  // Only render this page if it's actually visible.
  shouldUpdate() {
    return this.active;
  }

  static get properties() {
    return {
      active: { type: Boolean },
    };
  }

  getDocumentationLink() {
    const documentationLink = '/documentation';
    const language = i18next.languages[0];

    if (language && language !== 'en') {
      return `${documentationLink}/${language}`;
    }

    return documentationLink;
  }
}
