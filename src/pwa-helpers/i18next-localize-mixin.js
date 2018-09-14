/**
 * @license
 *
 * Copyright (c) 2018, IBM.
 *
 * This source code is licensed under the Apache License, Version 2.0 found in
 * the LICENSE.txt file in the root directory of this source tree.
 */

let i18nextInitialized = false;

export const localize = i18next => baseElement =>
  class extends baseElement {
    shouldUpdate(changedProperties) {
      // Also check active property used by PageViewElement
      return changedProperties.has('active')
        ? this.active && i18nextInitialized
        : i18nextInitialized;
    }

    connectedCallback() {
      if (!i18nextInitialized) {
        i18next.on('initialized', () => {
          i18nextInitialized = true;
          this.requestUpdate();
        });
      }

      i18next.on('languageChanged', () => {
        this.requestUpdate();
      });

      if (super.connectedCallback) {
        super.connectedCallback();
      }
    }
  };
